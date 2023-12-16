import { useNavigate } from 'react-router-dom'

import Section from '@components/Section'
import { Button, Spacing } from '@components/base'
import { Flex } from '@components/utils'
import { withSuspense } from '@components/withSuspense'
import { Post } from 'remotes/models/Post'
import { usePosts } from 'remotes/query/usePosts'

import styled from '@emotion/styled'

const PostPage = () => {
	const posts = usePosts()
	const navigate = useNavigate()
	return (
		<Section>
			<Section.Title>게시글</Section.Title>
			<Section.Content>
				<PostList posts={posts} />
				<Spacing size={40} />
				<Flex justify="flex-end">
					<Button
						onClick={() => {
							navigate('/posts/new')
						}}>
						게시글 작성하기
					</Button>
				</Flex>
			</Section.Content>
		</Section>
	)
}

export default withSuspense(PostPage, {
	fallback: null,
})

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
