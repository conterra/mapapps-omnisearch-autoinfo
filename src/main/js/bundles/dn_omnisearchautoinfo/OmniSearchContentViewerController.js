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
define([
    "dojo/_base/declare"
], function (declare) {
    return declare([], {
        activate: function () {
            var properties = this._properties || {};
            this.id = properties.id || this.id;
            this.type = properties.type || this.type;
            this.ignoreStores = properties.ignoreStores || this.ignoreStores;
        },
        deactivate: function () {

        },
        handle: function (item, opts) {
            opts = opts || {};
            var store = opts.store;
            var context = {
                storeId: store && store.id
            };
            if (this.ignoreStores.indexOf(context.storeId) >= 0){
                return;
            }
            console.debug("OmniSearchContentViewerController.handle: Show contentviewer:", item);
            this._contentViewer.showContentInfo(item, context);
        }
    });
});
