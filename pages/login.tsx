import Header from "../components/Public/Header"
import FooterMenus from "../components/FooterMenus"
import Footer from "../components/Footer";
import { Form, Input, Button, Checkbox, Divider } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { authenticate } from '../actions/user';

export default function Search(props:any) {
    const userid = 'customer@saloonplus.com',
    pass = '12345678';

    const [form] = Form.useForm(),
    dispatch = useDispatch(),
    router = useRouter();

    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
        },
        string: {
            min: '${label} must be at least ${min} characters',
        }
    },
    onFinish = (values: any) => {
        if(values.userName == userid && values.password == pass) {
            dispatch(authenticate(true));
            router.push(`${ process.env.base_url }home`);
        }
        router.push(`${ process.env.base_url }bookings`);
    }

    return (
        <div className="layout three-rows signup">
            <header>
                <Header></Header>
            </header>
            <main>
            <div className="content-wrapper table mb-56">
                    <h4 className="center-text mt-67 mb-67">Sign In To Sell Via Saloon Plus</h4>
                    <Form
                        className="grid-view grid-1 rowgap-24"
                        form={form}
                        onFinish={onFinish}
                        layout="vertical"
                        validateMessages={validateMessages}>

                        <Form.Item name={['userName']} label="Email/Mobile/Username" rules={[{ required: true }]}>
                            <Input placeholder="ex:mystore@gmail.com" />
                        </Form.Item>
                        <Form.Item name={['password']} label="Password" rules={[{ required: true, min: 6 }]}>
                            <Input type="password" placeholder="Password" />
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox className="mt-10"><span className="primary-txt">Remember Me</span></Checkbox>
                            </Form.Item>
                            <Button className="primary pull-right" htmlType="submit">Sign In</Button>
                        </Form.Item>


                        <div className="center">
                            <Divider>
                                <Link href="/login" passHref={true}>
                                    <Button className="ant-btn ant-btn-link">Forgot password</Button>
                                </Link>
                            </Divider>
                        </div>
                    </Form>
                </div>
            </main>
            <footer>
                <FooterMenus />
                <Footer />
            </footer>
        </div>
    )

}