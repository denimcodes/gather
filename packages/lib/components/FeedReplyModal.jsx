import { Avatar } from "./Avatar";
import { Box } from "./Box";
import { Button } from "./Button";
import { Label, TextArea } from "./Input";
import { Modal } from "./Modal";
import { Heading, Text } from "./Text";

const Feed = () => {
	return (
		<Box
			css={{
				padding: "$3",
				backgroundColor: "$gray50",
				borderRadius: "$md",
				border: "1px solid $gray300",
				marginTop: "$2",
				display: "flex",
				gap: "$3",
			}}
		>
			<Avatar src="https://avatars.dicebear.com/api/croodles/andereas.svg" />
			<Box>
				<Text
					css={{
						fontWeight: "bold",
						fontSize: "$base",
						marginTop: "$1",
					}}
				>
					daniboy_yoga
				</Text>
				<Heading
					as={"h3"}
					css={{
						fontSize: "$base",
						marginTop: "$2",
					}}
				>
					Ticket customization between freshchat and freshdesk
				</Heading>
				<Text
					css={{
						color: "$gray800",
						marginTop: "$2",
						fontSize: "$sm",
					}}
				>
					Being able to customize ticket creation in freshchat in a more
					intuitive way, starting from the point that there are operations that
					do not launch tickets in the conventional way.
				</Text>
				<Box
					css={{
						marginTop: "$4",
						display: "flex",
						gap: "$2",
					}}
				>
				</Box>
			</Box>
		</Box>
	);
};

const Reply = () => {
	return (
		<Box
			css={{
				padding: "$3",
				backgroundColor: "$gray50",
				borderRadius: "$md",
				border: "1px solid $gray300",
				marginTop: "$2",
				gap: "$3",
			}}
		>
			<Label htmlFor="reply">Reply</Label>
			<TextArea
				css={{
					display: "block",
					height: "12rem",
				}}
				name="reply"
				id="reply"
				placeholder="Add as many details as you can"
			/>
			<Button
				type="submit"
				css={{
					marginTop: "$3",
				}}
			>
				Send
			</Button>
		</Box>
	);
};

const FeedReplyModal = ({ isShow, hide }) => {
	return (
		<Modal isShow={isShow} hide={hide}>
			<Heading
				as={"h2"}
				css={{
					padding: "$4 0",
					fontSize: "2rem",
				}}
			>
				Replies
			</Heading>
			<Feed />
			<Reply />
		</Modal>
	);
};

export default FeedReplyModal;