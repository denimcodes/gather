import React, { useState } from "react";
import { useOrbis } from "../context/OrbisContext";
import { Button } from "./Button";
import { Input, Label, TextArea } from "./Input";
import { Modal } from "./Modal";
import { Heading } from "./Text";

const CreateTopicModal = ({ isShow, hide }) => {
	const orbis = useOrbis();
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	const createTopic = async (e) => {
		e.preventDefault();

		await orbis.isConnected();

		let res = await orbis.createPost({
			title,
			body: description,
			context: "forumtest01",
		});
		console.log(res);
	};
	return (
		<Modal isShow={isShow} hide={hide}>
			<>
				<Heading
					as={"h2"}
					css={{
						padding: "$4 0",
						fontSize: "2rem",
					}}
				>
					Create new topic
				</Heading>
				<form onSubmit={createTopic}>
					<div>
						<Label htmlFor="title">Title</Label>
						<Input
							name="title"
							id="title"
							placeholder="Enter title here"
							autoComplete=""
							onChange={handleTitleChange}
						/>
					</div>
					<div>
						<Label htmlFor="description">Description</Label>
						<TextArea
							name="description"
							id="description"
							css={{
								height: "16rem",
							}}
							placeholder="Enter as much details as you can"
							onChange={handleDescriptionChange}
						/>
					</div>
					<Button
						css={{
							marginTop: "$2",
						}}
						type="submit"
					>
						Create
					</Button>
				</form>
			</>
		</Modal>
	);
};

export default CreateTopicModal;
