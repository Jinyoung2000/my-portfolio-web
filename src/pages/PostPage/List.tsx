import { useNavigate } from 'react-router-dom'

import Section from '@components/Section'
import { Button, Spacing } from '@components/base'
import { Flex } from '@components/utils'
import { withSuspense } from '@components/withSuspense'
import { Post } from 'remotes/models/Post'

import { usePosts } from '@/remotes/query/post/usePosts'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { format } from 'date-fns'

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
						}}
					>
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
	const navigate = useNavigate()
	return (
		<Table className="table-fixed w-full">
			<thead>
				<tr>
					<th className="w-[20%]">제목</th>
					<th className="w-[50%]">요약</th>
					<th className="w-fix">작성일</th>
				</tr>
			</thead>
			<tbody>
				{posts.map((post) => (
					<tr
						css={css`
							cursor: pointer;
							:hover {
								opacity: 0.7;
							}
						`}
						key={post.id}
						onClick={() => {
							navigate(`/posts/${post.id}`)
						}}
					>
						<td>{post.title}</td>
						<td className="text-ellipsis overflow-hidden whitespace-nowrap">{post.content}</td>
						<td>{format(new Date(post.createdAt), 'yyyy년 MM월 dd일')}</td>
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
