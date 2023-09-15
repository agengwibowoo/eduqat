import GlobalStyles from "../styles/Global";
import Theme from "../styles/Theme";
import Text from "../components/text/Text";
import Title from "../components/title/Title";
import Button from "../components/button/Button";
import Flex from "../components/flex/Flex";
import Divider from "../components/divider/Divider";
import Navbar from "../components/navbar/Navbar";
import Tabs from "../components/tabs/Tabs";
import Tab from "../components/tabs/Tab";
import Card from "../components/card/Card";
import {
    AiOutlineEye,
    AiOutlineEdit,
    AiOutlinePlus,
    AiOutlineClockCircle,
    AiOutlineDownload,
} from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";
import {
    PiDotsThreeVerticalBold,
    PiDotsThreeBold,
    PiDotsSixVerticalBold,
} from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Theme>
            <GlobalStyles />
            <Navbar>
                testing 123
                <nav>
                    <ul>
                        <li>
                            <Link to="/event">Event</Link>
                        </li>
                    </ul>
                </nav>
            </Navbar>
            <Flex>
                <div>test</div>
                <Divider type="bullet" />
                <div>test1</div>
            </Flex>
            <Flex flexDirection="column">
                <Title level={1}>H1</Title>
                <Title level={2}>H2</Title>
                <Title level={3}>H3</Title>
                <Title level={4}>H4</Title>
                <Title level={5}>H5</Title>
                <Text>default</Text>
                <Text type="primary">primary</Text>
                <Text type="primary1">primary1</Text>
                <Text type="secondary">secondary</Text>
                <Text underline>underline</Text>
                <Text strong>strong</Text>
                <Text italic>italic</Text>
                <Button size="small">test</Button>
                <Button type="secondary" size="large">
                    test23
                </Button>
            </Flex>
            <Tabs activeTab={0}>
                <Tab key={0} title="Curricullum">
                    test
                </Tab>
            </Tabs>
            <Card>
                <Text strong>strong</Text>
                <Text italic>italic</Text>
                <Button size="small">test</Button>
                <Button icon={<AiOutlinePlus />} type="secondary" size="large">
                    test23
                </Button>
                <Button
                    icon={<AiOutlinePlus />}
                    type="secondary"
                    size="large"
                />
            </Card>
            <BsArrowLeft />
            <AiOutlineEye />
            <AiOutlineEdit />
            <AiOutlinePlus />
            <FiVideo />
            <SlLocationPin />
            <AiOutlineClockCircle />
            <AiOutlineDownload />
            <PiDotsThreeVerticalBold />
            <PiDotsThreeBold />
            <PiDotsSixVerticalBold />
        </Theme>
    );
}

export default Home;
