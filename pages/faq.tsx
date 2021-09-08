import React from 'react'
import PublicLayout from '../components/Public/Layout';
import Image from 'next/image';
import { Collapse, Card } from 'antd';
import styles from '../styles/components/Terms-And-Conditions.module.scss';

const Faq = () => {
    const faqs = [
        {
            ques: 'Question one?',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Question two?',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Question three?',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Question four?',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Question five?',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        },
        {
            ques: 'Question six?',
            ans: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`
        }
    ]
    return (
        <PublicLayout>
                <section className="banner home">
                    <Image layout="fill" src="/slider 1.jpg" alt="" />
                    <div className={styles['about-us-text-container']}>
                    <h1 className={styles['about-us-text']}>FAQ&apos;s</h1>
                    </div>
                </section>
    
                <section className="p-35" style={{backgroundColor : 'var(--page-bg)'}}>
                    <Card className={styles['terms-and-conditions-container']}>
                        <h4 className="pl-15 mb-40">Frequently Asked Questions</h4>
                        <Collapse className="faqs" defaultActiveKey={['0']} ghost>
                            { faqs.map((faq, i) => (
                                <Collapse.Panel header={ <h6>{ faq.ques }</h6> } key={ i }>
                                <p>{ faq.ans }</p>
                                </Collapse.Panel>
                            )) }
                        </Collapse>
                    </Card>
                </section>
                
                
            </PublicLayout>
    )
}

export default Faq
