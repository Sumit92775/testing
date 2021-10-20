import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './ServiceCard.module.scss';
import { Checkbox, Button, Select, Image } from 'antd';
import { newId } from '../../services/auth';

const ServiceCard = ({item}) => {
    const sponsored = item.sponsored ? <span className={ cx(styles['item-sponsored']) }><span className="material-icons">star</span> Sponsored</span> : null,
    [ selectedSize, changeSize ] = useState(item.size),
    [ selectedStaff, changeStaff ] = useState(item?.availableStaffs[0].value),
    [ selectedType, changeType ] = useState(item?.availableTypes[0].value);

    return (
        <div className={ styles['item'] }>
            { sponsored }
            <div className={ cx(styles['item-image'], 'cover') }>
                <Image className="cover" src={ item.image } alt="" />
            </div>
            <div className={ cx(styles['item-info']) }>
                <div>
                    <h5>{ item.title }
                        <span className="ml-5 fz-14 txt weight400">{ item.subTitle }</span>
                    </h5>
                </div>
                <p className="txt dark1 weight500 mt-10 mb-10">{ item.description }</p>
                <div>
                    <strong className="pull left mb-10">{ process.env.currency }{ item.price }</strong>
                </div>
                <div className={ cx('grid-view colgap-20', styles['item-options'])}>
                    <div>
                        <span className="pull left mr-10">Size: </span>
                        <span>
                            {
                                item.availableSizes.map((a, i) => (
                                    <label key={i} className="custom-radio">
                                        <input type="radio" name={newId('size')} value={a.value} checked={ a.value === selectedSize} onClick={ () => changeSize(a.value)}/>
                                        <span>{ a.label }</span>
                                    </label>
                                ))
                            }
                        </span>
                    </div>
                    <div>
                        <Select className="medium" defaultValue={selectedStaff}>
                            {item.availableStaffs.map(option => (
                                <Select.Option key={option} value={option.value}>{option.label}</Select.Option>
                            ))}
                        </Select>
                    </div>
                    <div>
                        <Select className="medium" defaultValue={selectedType}>
                            {item.availableTypes.map(option => (
                                <Select.Option key={option} value={option.value}>{option.label}</Select.Option>
                            ))}
                        </Select>
                    </div>
                    <div></div>
                    <div>                    
                        <Button className="medium full-width primary rounded">Add</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard