/*
 * Copyright (C) 2015 con terra GmbH (info@conterra.de)
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
define([
    "dojo/_base/declare",
    "dojo/_base/array",
    "ct/Stateful",
    "ct/array"
], function (declare, d_array, Stateful, ct_array) {
    return declare([Stateful], {
        activate: function () {
            var properties = this._properties || {};
            this.id = properties.id || this.id;
            this.type = properties.type || this.type;
        },
        deactivate: function () {

        },
        handle: function (item, opts) {
            opts = opts || {};
            var store = opts.store;
            var context = {
                storeId: store && store.id
            };
            var geometry = item.geometry;
            console.debug("OmniSearchContentViewerController.handle: Show contentviewer:", item);
            this._contentViewer.showContentInfo(item, context);
        }
    });
});