package com.example.board.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.example.board.domain.Reply;

@Mapper
public interface ReplyRepository {
	public int addReply(Reply reply);
	public int replyTotalCnt(Long bno);
	public List<Reply> selectReplyByBno(Map<String, Object> map);
	public int commentTotalCnt(Long bno);
	public int deleteReply(Long bno);
	public List<Reply> selectCommentByRno(Long rno);
	public int insertComment(Reply reply);
	public void updatePreviousCommentGroupOrd(Reply reply);
}
