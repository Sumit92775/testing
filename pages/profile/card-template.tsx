import React from 'react';
import styles from '../../styles/components/Card-Template.module.scss'
import EditIcon from '@material-ui/icons/Edit';
import {Form, Select, Input, Slider, Divider, Button, Checkbox} from 'antd';


const CardTemplate = (props : any) =>{

    const openModal = (type : any) =>{
        props.modal(type);
    }

    return(
        <div className="card card2 p-0 mt-40" style={{height : "fit-content", position : "relative", boxShadow : "none"}}>
            <div className={styles['card-header-container']}>
                <h5 className="mt-10 mb-10 pl-20 pr-27 fz-18">{props.title}</h5>
                <Divider className="mt-5 mb-0"></Divider>
            </div>
        
        <main>
            <div className="pt-10 pl-27 pr-37">
                <div className={styles['anpa-container-content']}>
                    {props.children}
                </div>
            </div>

        </main>

        <Divider className="mt-12 mb-12"></Divider>
        <div className={styles['bottom-btn-container']}>
        <div>
            <Button className="primary small mr-33" type="link" onClick={()=>{openModal(props.title);
            props.modalTitle("General details");
            }}><span className="icon-wrap"><EditIcon /></span>Edit Details</Button>
        </div>
    </div>
    </div>
    
    )

}
export default CardTemplate;


