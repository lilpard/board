package com.example.board.service;

import java.util.Map;

import com.example.board.domain.Reply;

public interface ReplyService {
	public Map<String, Object> addReply(Reply reply);
	public Map<String, Object> selectReplyByBno(Map<String, Object> map);
	public Map<String, Object> deleteReply(Long rno);
	public Map<String, Object> selectCommentByRno(Long rno);
	public Map<String, Object> addComment(Reply reply);
}
