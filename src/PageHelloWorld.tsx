import { Alert, Button, Group, Modal, Paper, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import PageHelloWorldReactFlow from "./PageHelloWorldReactFlow";

export function PageHelloWorld() {
    const [opened, { open, close }] = useDisclosure(false);
    return <>
        <PageHelloWorldReactFlow />

        <Modal opened={opened} onClose={close} title="Button pressed">
            <Alert variant="light" color="cyan">
                You pushed the button!
            </Alert>
        </Modal>
        <Paper p="xs" mt="xs" shadow='sm'>
            <Group gap="md">
                <Text>Hello world</Text>
                <Button color='cyan' onClick={open}>Push me!</Button>
                <Button color='pink'>Push me!</Button>
            </Group>
        </Paper>
    </>
}