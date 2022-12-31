import { useEffect, useState } from "react";
import upArrow from "../assets/arrow-up.svg";
import { useOrbis } from "../context/OrbisContext";
import { Avatar } from "./Avatar";
import { Box } from "./Box";
import { Button } from "./Button";
import Categories from "./Categories";
import { Icon } from "./Icon";
import { Heading, Text } from "./Text";

const Feed = ({ showFeed, post }) => {
	const orbis = useOrbis();
	const [likes, setLikes] = useState(0);

	useEffect(() => {
		setLikes(post.likes);
	}, [post]);

	const reactLike = async (e) => {
		e.stopPropagation();
		let res = await orbis.isConnected();
		if (res.status === 200) {
			setLikes(likes + 1);
			res = await orbis.react(post.streamId, "like");
			if (res.status !== 200) {
				setLikes(likes - 1);
			}
		}
	};
	return (
		<Box
			onClick={showFeed}
			css={{
				padding: "$5 $4",
				backgroundColor: "$gray50",
				borderRadius: "$md",
				border: "1px solid $gray300",
				marginTop: "$2",
				display: "flex",
				gap: "$3",
				"&:hover": {
					boxShadow: "$sm",
				},
			}}
		>
			{post.pfp ? (
				<Avatar src={pfp} />
			) : (
				<Avatar src="https://avatars.dicebear.com/api/croodles/andereas.svg" />
			)}
			<Box
				css={{
					width: "$max-w-4xl",
					overflow: "hidden",
					whiteSpace: "nowrap",
					textOverflow: "ellipsis",
				}}
			>
				<Text
					css={{
						fontWeight: "bold",
						fontSize: "$base",
						marginTop: "$1",
						color: "$gray800",
					}}
				>
					{post.username ??
						`${post.did.slice(15, 22)}...${post.did.slice(-8, -1)}`}
				</Text>
				<Heading
					as={"h3"}
					css={{
						fontSize: "$base",
						marginTop: "$2",
					}}
				>
					{post.title}
				</Heading>
				<Text
					css={{
						color: "$gray800",
						marginTop: "$2",
						fontSize: "$sm",
					}}
				>
					{post.body}
				</Text>
			</Box>
			<Button
				css={{
					alignSelf: "center",
				}}
				icon
				onClick={reactLike}
			>
				<Icon src={upArrow} />
				{likes}
			</Button>
		</Box>
	);
};

const FeedList = ({ showFeed }) => {
	const orbis = useOrbis();
	const [posts, setPosts] = useState();

	useEffect(() => {
		async function fetchPosts() {
			return await orbis.getPosts({
				context: "forumtest01",
			});
		}

		fetchPosts().then((data) => {
			if (data.status !== 200) {
				console.log(data.error);
				return;
			}

			let posts = [];
			for (const post of data.data) {
				posts.push({
					streamId: post.stream_id,
					username: post.creator_details.profile?.username,
					pfp: post.creator_details.profile?.pfp,
					did: post.creator_details.did,
					title: post.content.title,
					body: post.content.body,
					likes: post.count_likes,
				});
			}
			console.table(posts);
			setPosts(posts);
		});
	}, [orbis]);

	return (
		<Box
			css={{
				marginTop: "$4",
			}}
		>
			<Box
				css={{
					padding: "$6 0",
				}}
			>
				<Heading
					as={"h2"}
					css={{
						fontSize: "$3xl",
						fontWeight: "$semibold",
					}}
				>
					Join a conversation
				</Heading>
				<Text
					css={{
						marginTop: "$3",
					}}
				>
					Browse through the categories, community's recent feed or become an
					expert by answering a question.
				</Text>
			</Box>
			<Categories />
			<Heading
				as={"h3"}
				css={{
					fontWeight: "$semibold",
					fontSize: "$lg",
					color: "$gray800",
					marginTop: "$6",
				}}
			>
				Recent feed
			</Heading>
			{posts &&
				posts.map((post) => {
					return <Feed key={post.streamId} showFeed={showFeed} post={post} />;
				})}
		</Box>
	);
};

export default FeedList;
