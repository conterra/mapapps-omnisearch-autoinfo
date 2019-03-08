/*
 * Copyright (C) 2018 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Graphic from "esri/Graphic";

class OmniSearchContentViewerController {

    activate() {
        let properties = this._properties || {};
        this.id = properties.id || this.id;
        this.type = properties.type || this.type;
        this.mapWidgetModel = this._mapWidgetModel;
    }

    deactivate() {

    }

    handle(item, opts) {
        opts = opts || {};
        let store = opts.store;
        let layers = this.mapWidgetModel.get("map").get("layers");
        let allLayersAndSublayers = layers.flatten((item) => {
            return item.layers || item.sublayers;
        });
        let layer = allLayersAndSublayers.find((layer) => {
            return layer.id === store.layerId;
        });
        if(!layer||!layer.popupTemplate){
            return;
        }
        console.debug("OmniSearchContentViewerController.handle: Show contentviewer:", item);
        let attributes = Object.assign({}, item);
        let geom = attributes.geometry;
        delete attributes.geometry;
        let graphic = new Graphic({
            geometry: geom,
            attributes:attributes,
            popupTemplate: layer.popupTemplate
        });

        graphic.layer = layer;

        this.mapWidgetModel.view.popup.open({
            features: [graphic],
            updateLocationEnabled: true
        });
    }
}

module.exports = OmniSearchContentViewerController;
