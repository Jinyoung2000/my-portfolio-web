import Section from '@components/Section'
import { Spacing } from '@components/base'
import { posts } from 'pages/HomePage/data/mock'
import { Post } from 'remotes/models/Post'

import styled from '@emotion/styled'

const PostPage = () => {
	return (
		<div className="px-[20%]">
			<Spacing size={80} />
			<Section>
				<Section.Title>게시글</Section.Title>
				<Section.Content>
					<PostList posts={posts} />
				</Section.Content>
			</Section>
		</div>
	)
}

export default PostPage

const PostList = ({ posts }: { posts: Post[] }) => {
	return (
		<Table className="table-fixed w-full">
			<thead>
				<tr>
					<th className="w-[20%]">제목</th>
					<th className="w-[60%]">요약</th>
					<th className="w-[20%]">작성일</th>
				</tr>
			</thead>
			<tbody>
				{posts.map((post) => (
					<tr key={post.id}>
						<td>{post.title}</td>
						<td className="text-ellipsis overflow-hidden whitespace-nowrap">{post.content}</td>
						<td>{post.createdAt}</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

const Table = styled.table`
	th {
		text-align: left;
	}
	th,
	td {
		padding: 10px;
	}
`