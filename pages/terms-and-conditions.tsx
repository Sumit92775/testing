import React from 'react'
import PublicLayout from '../components/Public/Layout';
import Image from 'next/image';
import { Collapse, Card } from 'antd';
import styles from '../styles/components/Terms-And-Conditions.module.scss';

const TermsAnsConditions = () => {
    const terms = [
        {
            ques: 'Terms and Condition one',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Terms and Condition two',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Terms and Condition three',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Terms and Condition four',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Terms and Condition five',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Terms and Condition six',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        }
    ]
    return (
        <PublicLayout>
                <section className="banner home">
                    <Image layout="fill" src="/slider 1.jpg" alt="" />
                    <div className={styles['about-us-text-container']}>
                    <h1 className={styles['about-us-text']}>Terms And Conditions</h1>
                    </div>
                </section>
    
                <section className="p-35" style={{backgroundColor : 'var(--page-bg)'}}>
                    <Card className={styles['terms-and-conditions-container']}>
                        <h4 className="pl-15 mb-40">Terms and Conditions</h4>
                        <Collapse className="faqs" defaultActiveKey={['0']} ghost>
                            { terms.map((terms, i) => (
                                <Collapse.Panel header={ <h6>{ terms.ques }</h6> } key={ i }>
                                <p>{ terms.ans }</p>
                                </Collapse.Panel>
                            )) }
                        </Collapse>
                    </Card>
                </section>
                
                
            </PublicLayout>
    )
}

export default TermsAnsConditions;