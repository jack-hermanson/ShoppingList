import React, {ChangeEvent, Component} from "react";
import ItemModel from "../../../models/ItemModel";
import {Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label} from "reactstrap";

interface Props {
    showEditModal: boolean;
    closeEditModal: () => void;
    item: ItemModel;
}

interface State extends ItemModel {

}

export default class EditItemModal extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: this.props.item.name,
            notes: this.props.item.notes,
            recurring: this.props.item.recurring,
            groups: this.props.item.groups
        };

        this.handleNameTextChange = this.handleNameTextChange.bind(this);
        this.handleNotesTextChange = this.handleNotesTextChange.bind(this);
        this.handleRecurringCheckChange = this.handleRecurringCheckChange.bind(this);
    }


    render() {
        return (
            <Form>
                <Modal toggle={this.props.closeEditModal} isOpen={this.props.showEditModal}>
                    <ModalHeader toggle={this.props.closeEditModal} className="d-flex">
                        {this.props.item.name}
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label htmlFor="name-input">Name</Label>
                            <Input
                                id="name-input"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleNameTextChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="notes-input">Notes</Label>
                            <Input
                                id="notes-input"
                                type="textarea"
                                value={this.state.notes}
                                onChange={this.handleNotesTextChange}
                            />
                        </FormGroup>

                        <Label className="mb-0">Recurring</Label>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    checked={this.state.recurring}
                                    onChange={this.handleRecurringCheckChange}
                                    type="checkbox"
                                />
                                Item Repeats
                            </Label>
                        </FormGroup>
                    </ModalBody>
                </Modal>
            </Form>
        );
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

}
