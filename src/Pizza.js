import React, {useState} from "react";
import { Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Label, Button } from "reactstrap"
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

const Pizza = () => {

    const [dropdownOpen, setDropDownOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        size: "Mini",
        pepperoni: false,
        sausage: false,
        bananapeppers: false,
        chicken: false,
        special: ''
    });

    const schema = yup.object().shape({
        name: yup.string().required().min(2),
        special: yup.string()
        // toppings: yup.string().required(),
        // sausage: yup.boolean(),
        // cheese: yup.boolean(),
        // chicken: yup.boolean(),
        // bananapeppers: yup.boolean()
    });

    const submit = () => {
        schema.validate(formData).then( () => {
            axios.post("https://reqres.in/api/users", formData).then((res) => {
                console.log(res.data, "This is your data and you need it now")
            })
        })
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };
    const handleToppings = (e) => {
        setFormData({...formData, [e.target.name]: e.target.checked})
    };

    const toggle = () => setDropDownOpen((prevState) => !prevState);

    return (
        <div>
        <Card color = "info">
            <h2 style = {{color: "gold", margin: "0 auto"}}>
                Get Your Slices Here
            </h2>
            <CardImg style = {{width: "80%", margin: "0 auto"}}/>
        </Card>
        <Form data-cy="submit" onSubmit = {(e) => {
            e.preventDefault()
            submit()
            }}    style = {{ margin: "4%"}}>

        <FormGroup>
            <legend>Name</legend>
            <Input type = "name" name = "name" data-cy="name" value = {formData.name} onChange = {handleChange} />
        </FormGroup>

        <FormGroup>
            <Dropdown isOpen = {dropdownOpen} toggle = {toggle}>
                <legend>Pizza Size:</legend>
            <DropdownToggle caret>{formData.size === "Mini" ? "Mini" : formData.size}
            </DropdownToggle>
                <DropdownMenu>
                    <div onClick = {() => {
                        toggle();
                        setFormData({...formData, size: "Mini"})
                    }}>Mini</div>
                    <div onClick = {() => {
                        toggle();
                        setFormData({...formData, size: "Medium"})
                    }}>Medium</div>
                    <div onClick = {() => {
                        toggle();
                        setFormData({...formData, size: "Large"})
                    }}>Large</div>
                    <div onClick = {() => {
                        toggle();
                        setFormData({...formData, size: "JUMBO"})
                    }}>JUMBO</div>
                </DropdownMenu>
            </Dropdown>
        </FormGroup>

        <FormGroup tag = "fieldset">
            <legend>Toppings:</legend>
            <FormGroup check>
                <Label check>
                    <Input type = "checkbox" name = "pepperoni" data-cy = "checkbox1" checked = {formData.pepperoni} onChange = {handleToppings} />
                    Pepperoni
                </Label>
            </FormGroup>

            <FormGroup check>
                <Label check>
                    <Input type = "checkbox" name = "sausage" data-cy = "checkbox2" checked = {formData.sausage} onChange = {handleToppings} />
                    Sausage
                </Label>
            </FormGroup>

            <FormGroup check>
                <Label check>
                    <Input type = "checkbox" name = "bananapeppers" data-cy = "checkbox3" checked = {formData.bananapeppers} onChange = {handleToppings} />
                    Banana Peppers
                </Label>
            </FormGroup>

            <FormGroup check>
                <Label check>
                    <Input type = "checkbox" name = "chicken" data-cy = "checkbox4" checked = {formData.chicken} onChange = {handleToppings} />
                    Chicken
                </Label>
            </FormGroup>

            <FormGroup>
                <legend>Anything else we can do for you?</legend>
                <Input type = "textarea" name = "special" value = {formData.special} onChange = {handleChange} />
            </FormGroup>
            <Button>Submit</Button>

        </FormGroup>
        </Form>
        </div>
    );
};

export default Pizza;