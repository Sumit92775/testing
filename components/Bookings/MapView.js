import React, {useState} from 'react';
import { Table, Button, Select, Menu, Input, Form, Modal, Tooltip } from 'antd';
import Image from 'next/image';
import styles from './Style.module.scss';

const MapView = () => {
    const [isVisible, toggleVisibility] = useState(false);
    const mapDetails = [
        { 
            title: 'Building Number',
            value: '8228'
        },
        { 
            title: 'Unit Number/Address',
            value: 'King abdul aziz south road'
        },
        { 
            title: 'Street',
            value: 'Street Name'
        },
        { 
            title: 'Square/City',
            value: 'Riyadh'
        },
        { 
            title: 'Zip Code/Postal Code',
            value: '2121'
        },
        { 
            title: 'State/Region',
            value: 'Najd'
        },
        { 
            title: 'Country',
            value: 'Saudi Arabia'
        },
    ]

    return (
        <>
            <a><span className="material-icons txt dark4" onClick={ () => toggleVisibility(true) }>location_on</span></a>
            
            <Modal style={{ borderRadius: "15px", overflow: "hidden", width: "fit-content" }} 
                title={null} footer={null} 
                visible={isVisible} 
                onCancel={() => toggleVisibility(false) }>
                    <div className={ styles["map-container"] }>
                        <Image layout="fill" src="/dummy-map.png" alt="" />
                    </div>
                    <div className={ styles["map-details"] }>
                        { mapDetails.map(detail => (
                            <span key={ detail.title }>
                                <span>{ detail.title }</span><br/>
                                <strong>{ detail.value }</strong>
                            </span>
                        )) }
                    </div>
            </Modal>
        </>
    )
}

export default MapView
