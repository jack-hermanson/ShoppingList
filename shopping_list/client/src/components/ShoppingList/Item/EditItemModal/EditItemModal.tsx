import React, {ChangeEvent, Component} from "react";
import ItemModel from "../../../../models/ItemModel";
import {Modal, ModalHeader, ModalBody, ModalFooter, Form, Button} from "reactstrap";
import EditItemForm from "./EditItemForm";
import {editItem} from "../../../../api/items";

interface Props {
    showEditModal: boolean;
    closeEditModal: () => void;
    item: ItemModel;
    submitEditItem: (itemId: number) => void;
}

export default class EditItemModal extends Component<Props, ItemModel> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: this.props.item.id,
            name: this.props.item.name,
            notes: this.props.item.notes,
            recurring: this.props.item.recurring,
            groups: this.props.item.groups,
            checked: this.props.item.checked
        };

        this.handleNameTextChange = this.handleNameTextChange.bind(this);
        this.handleNotesTextChange = this.handleNotesTextChange.bind(this);
        this.handleRecurringCheckChange = this.handleRecurringCheckChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }


    render() {
        return (
            <Form>
                <Modal centered toggle={this.props.closeEditModal} isOpen={this.props.showEditModal}>
                    <ModalHeader toggle={this.props.closeEditModal} className="d-flex">
                        {this.props.item.name}
                    </ModalHeader>
                    <ModalBody>
                        {this.renderEditItemForm()}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.props.closeEditModal} color="secondary">Cancel</Button>
                        <Button onClick={async () => await this.submitForm()} type="submit" color="info">Submit</Button>
                    </ModalFooter>
                </Modal>
            </Form>
        );
    }

    renderEditItemForm() {
        return (
            <EditItemForm
                name={this.state.name}
                notes={this.state.notes}
                recurring={this.state.recurring}
                handleNameTextChange={this.handleNameTextChange}
                handleNotesTextChange={this.handleNotesTextChange}
                handleRecurringCheckChange={this.handleRecurringCheckChange}
            />
        )
    }

    handleNameTextChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            name: event.target.value
        });
    }

    handleNotesTextChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            notes: event.target.value
        });
    }

    handleRecurringCheckChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            recurring: event.target.checked
        });
        console.log(event.target.checked);
    }

    async submitForm() {
        console.log("form submitted from modal", this.state.id);
        await editItem(this.state);
        this.props.submitEditItem(this.state.id as number);
    }

}
