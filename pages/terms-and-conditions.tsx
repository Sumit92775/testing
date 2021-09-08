import Image from 'next/image';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button, Card } from 'antd';
import PublicLayout from '../components/Public/Layout';
import styles from '../styles/components/Terms-And-Conditions.module.scss';

const TermsAndConditions = () =>{

    return(

        <div style={{overflowX :"hidden", overflowY : "hidden"}}>
            <PublicLayout>
                <section className="banner home">
                    <Image layout="fill" src="/slider 1.jpg" alt="" />
                    <div className={styles['about-us-text-container']}>
                    <h1 className={styles['about-us-text']}>Terms and Conditions</h1>
                    </div>
                </section>
    
                <section>
                    <div className="p-35" style={{backgroundColor : "#ebebeb"}}>
                        <Card className={styles['terms-and-conditions-container']}>
                            <p>[Individual or Company Name] built the [App Name] app as a [open source | free | freemium | ad-supported | commercial] app. This SERVICE is provided by [Individual or company name] [at no cost] and is intended for use as is.
    
                                This page is used to inform website visitors regarding [my|our] policies with the collection, use, and disclosure of Personal Information if anyone decided to use [my|our] Service.
    
                                If you choose to use [my|our] Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that [I|we] collect are used for providing and improving the Service. [I|We] will not use or share your information with anyone except as described in this Privacy Policy.
    
                                The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at [App Name], unless otherwise defined in this Privacy Policy.</p>
                            <strong>Information Collection and Use</strong>
    
                            <p>For a better experience while using our Service, [I|we] may require you to provide us with certain personally identifiable information, including but not limited to [add whatever else you collect here, e.g. users name | address | location | pictures]. The information that [I|we] request is [retained on your device and is not collected by [me|us] in any way]|[will be retained by us and used as described in this privacy policy.
    
                                The app does use third party services that may collect information used to identify you. [You can mention Google services here and link to Googles privacy policy if you want].</p>
                            
                            <strong>Log Data</strong>
                            <p>[I|We] want to inform you that whenever you use [my|our] Service, in case of an error in the app [I|we] collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your devices’s Internet Protocol (“IP”) address, device name, operating system version, configuration of the app when utilising [my|our] Service, the time and date of your use of the Service, and other statistics.</p>
                            
                            <strong>Cookies</strong>
                            <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your devices’s internal memory.
                                -- Check if this is true for your app, if unsure, just assume that you do use cookies and modify this next line This Services does not uses these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collection information and to improve their services. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                            </p>
                            
                            <strong>Service Providers</strong>
                            <p>[I|We] may employ third-party companies and individuals due to the following reasons:
                            To facilitate our Service;
                            To provide the Service on our behalf;
                            To perform Service-related services; or
                            To assist us in analyzing how our Service is used.
                            [I|We] want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
                    
                            <strong>Security</strong>
                            <p>[I|We] value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and [I|we] cannot guarantee its absolute security.</p>
                    
                    
                            <strong>Links to Other Sites</strong>
                            <p>This Service may contain links to other sites. If you click on a third-party link, you will be
                                directed to that site. Note that these external sites are not operated by [me|us]. Therefore, I
                                strongly advise you to review the Privacy Policy of these websites. I have no control over, and
                                assume no responsibility for the content, privacy policies, or practices of any third-party
                                sites or services.</p>
    
                            <strong>Children’s Privacy</strong>
                            <p>This Services do not address anyone under the age of 13. [I|We] do not knowingly collect personal
                                identifiable information from children under 13. In the case [I|we] discover that a child under 13
                                has provided [me|us] with personal information, [I|we] immediately delete this from our servers. If you
                                are a parent or guardian and you are aware that your child has provided us with personal
                                information, please contact [me|us] so that [I|we] will be able to do necessary actions.</p>
    
                            <strong>Changes to This Privacy Policy</strong>
                            <p>[I|We] may update our Privacy Policy from time to time. Thus, you are advised to review this page
                                periodically for any changes. [I|We] will notify you of any changes by posting the new Privacy Policy
                                on this page. These changes are effective immediately, after they are posted on this page.</p>
    
                            <strong>Contact Us</strong>
                            <p>If you have any questions or suggestions about [my|our] Privacy Policy, do not hesitate to contact
                                [me|us]. This Privacy Policy page was created at <a href="https://privacypolicytemplate.net" target="_blank">privacypolicytemplate.net</a>
                            </p>
                        
                        </Card>
                    </div>
                </section>
                
                <section className="p-35" style={{backgroundColor: "#ebebeb", paddingBlockStart : "0px !important"}}>
    
    
                    <div className={styles['have-a-product']}>
                        <div className={styles['hap-text-container']}>
                            <h1>Have a product or service to sell?</h1>
                            <span className="mb-24">Reach to 1000’s of buyers at once</span>
                            <Button>Get Started Now</Button>
                        </div>
                        <div>
                            <img src="/have-a-product.png" alt="" />
                        </div>
                    </div>
                
    
                    
                    {/* <div className={styles['have-a-product']}>
                        <div className={styles['hap-text-container']}>
                            <h1>Have a product or service to sell?</h1>
                            <span className="mb-24">Reach to 1000’s of buyers at once</span>
                            <Button>Get Started Now</Button>
                        </div>
                        <img src="/have-a-product.png" alt="" />
                    </div>
                */}
                </section>
                
            </PublicLayout>
        </div>
  )

}

export default TermsAndConditions;