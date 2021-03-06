import React, {Component} from "react";
import ItemModel from "../../../models/ItemModel";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

interface Props {
    showEditModal: boolean;
    closeEditModal: () => void;
    item: ItemModel;
}

export default class EditItemModal extends Component<Props, any> {
    render() {
        return (
            <Modal toggle={this.props.closeEditModal} isOpen={this.props.showEditModal}>
                <ModalHeader>{this.props.item.name}</ModalHeader>
                <ModalBody>Body</ModalBody>
            </Modal>
        );
    }
}
