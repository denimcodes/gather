import OrbisProvider from "../context/OrbisContext";
import { useModal } from "../hooks/useHook";
import { Box } from "./Box";
import { Container } from "./Container";
import FeedList from "./FeedList";
import FeedReplyModal from "./FeedReplyModal";

const MainLayout = () => {
	const { isShow: isShowReplyModal, toggle: toggleReplyModal } = useModal();

	return (
		<OrbisProvider>
			<Box>
				<Box
					css={{
						padding: "$3 $2",
					}}
				>
					<Container css={{
						maxWidth: "48rem"
					}}>
						<FeedList showFeed={toggleReplyModal} />
					</Container>
				</Box>
				<FeedReplyModal isShow={isShowReplyModal} hide={toggleReplyModal} />
			</Box>
		</OrbisProvider>
	);
};

export default MainLayout;