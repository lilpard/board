package com.example.board.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.board.domain.Reply;
import com.example.board.repository.ReplyRepository;
import com.example.board.util.PageUtils;

@Service
public class ReplyServiceImpl implements ReplyService {
	
	@Autowired
	ReplyRepository repository;
	
	// 댓글 작성
	@Override
	public Map<String, Object> addReply(Reply reply) {
		int result = repository.addReply(reply);
		
		Map<String, Object> map = new HashMap<>();
		map.put("result", result > 0);
		
		return map;
	}
	
	// 댓글 목록
	@Override
	public Map<String, Object> selectReplyByBno(Map<String, Object> map) {
		int page = (int) map.get("page");
		Long bno = (Long) map.get("bno");
		
		int totalRecord = repository.replyTotalCnt(bno);
		PageUtils pageUtils = new PageUtils();
		pageUtils.setPageEntity(totalRecord, page);
		
		Map<String, Object> m = new HashMap<>();
		m.put("beginRecord", pageUtils.getBeginRecord());
		m.put("endRecord", pageUtils.getEndRecord());
		m.put("bno", bno);
		
		List<Reply> list = repository.selectReplyByBno(m);
		
		Map<String, Object>	m2 = new HashMap<>();
		m2.put("result", list != null);
		m2.put("list", list);
		m2.put("pageUtils", pageUtils);
		
		return m2;
	}
	
	// 댓글 삭제
	@Override
	public Map<String, Object> deleteReply(Long rno) {
		int result = repository.deleteReply(rno);
		
		Map<String, Object> map = new HashMap<>();
		map.put("result", result > 0);
		
		return map;
	}
	
	// 대댓글 조회
	@Override
	public Map<String, Object> selectCommentByRno(Long rno) {
		
		int commentTotalCnt = repository.commentTotalCnt(rno);
		
		List<Reply> list = repository.selectCommentByRno(rno);
		
		Map<String, Object> map = new HashMap<>();
		map.put("result", list != null);
		map.put("list", list);
		map.put("commentTotalCnt", commentTotalCnt);
		
		return map;
	}
	
	// 대댓글 추가
	@Override
	public Map<String, Object> addComment(Reply reply) {
		
		repository.updatePreviousCommentGroupOrd(reply);
		
		int result = repository.insertComment(reply);
		
		Map<String, Object> map = new HashMap<>();
		map.put("result", result > 0);
		
		return map;
	}
	
}
