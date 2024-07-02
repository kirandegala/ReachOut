export type FeedDetails = {
    profileImage: string,
    profileName: string,
    postContent: string,
    likeCount: number,
    commentCount: number,
    timePosted: number,
    comments: Array<{
        name: string;
        commentText: string;
        timeCommented: number;
    }>;
}