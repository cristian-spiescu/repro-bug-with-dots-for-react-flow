import { Container, MantineProvider, Tabs } from "@mantine/core";
import { PageHelloWorld } from "./PageHelloWorld";
import PageHelloWorldReactFlow from "./PageHelloWorldReactFlow";
import { MyTab } from "./MyTab";
import { useState } from "react";

export function App() {
    const [activeTab, setActiveTab] = useState<string | null>('hwReactFlow');
    return <MantineProvider>
        <Container>
            <Tabs variant="outline" value={activeTab} onChange={setActiveTab}            >
                <Tabs.List>
                    <MyTab value="hw" activeTab={activeTab}>Hello world</MyTab>
                    <MyTab value="hwReactFlow" activeTab={activeTab}>Hello world React Flow</MyTab>
                </Tabs.List>
                <Tabs.Panel value="hw" keepMounted={false}><PageHelloWorld /></Tabs.Panel>
                <Tabs.Panel value="hwReactFlow" keepMounted={false}><PageHelloWorldReactFlow /></Tabs.Panel>
            </Tabs>
        </Container>
    </MantineProvider>
}