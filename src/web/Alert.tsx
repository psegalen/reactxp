/**
* Alert.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web Alert dialog boxes.
*/

import React = require('react');

import RX = require('../common/Interfaces');
import Types = require('../common/Types');
import { AlertModalContent } from './AlertModalContent';
import { default as Modal } from './Modal';

// Web/HTML implementation for alert dialog boxes
export class Alert extends RX.Alert {
    private _ModalId: string = 'RX.Alert_WebModal';
    public show(title: string, message?: string, buttons?: Types.AlertButtonSpec[], icon?: string, theme?: Types.AlertModalTheme): void {
        Modal.show(
            <AlertModalContent modalId={this._ModalId} buttons={buttons} title={title} message={message} theme={theme} />
            , this._ModalId
        );
    }
}

export default new Alert();
