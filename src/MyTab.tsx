import { Tabs } from "@mantine/core";

export function MyTab(props: { value: string; activeTab: string | null; children: string }) {
    return (
        <Tabs.Tab value={props.value} bg={props.activeTab === props.value ? "white" : undefined}>
            {props.children}
        </Tabs.Tab>
    );
}
