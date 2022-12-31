import { useModal } from "../hooks/useHook";
import { Box } from "./Box";
import { Button } from "./Button";
import { ConnectButton } from "./ConnectButton";
import { Container } from "./Container";
import CreateTopicModal from "./CreateTopicModal";
import { Flex } from "./Flex";
import { Heading } from "./Text";

const Navbar = () => {
	const { isShow: isShowCreateTopic, toggle: toggleCreateTopic } = useModal();
	return (
		<Box
			css={{
				padding: "$space$3 0",
				boxShadow: "$base",
			}}
		>
			<Container>
				<Flex justify="between" align="center">
					<Heading
						css={{
							fontSize: "$3xl",
						}}
					>
						Gather
					</Heading>
					<div>
						<Button
							css={{
								marginRight: "$4",
							}}
							onClick={toggleCreateTopic}
							outlined
						>
							Create a topic
						</Button>
						<ConnectButton />
					</div>
				</Flex>
			</Container>
			<CreateTopicModal isShow={isShowCreateTopic} hide={toggleCreateTopic} />
		</Box>
	);
};

export default Navbar;
