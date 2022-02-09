package com.example.board.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.board.domain.Reply;
import com.example.board.service.ReplyService;

@RestController
public class ReplyController {
	@Autowired
	ReplyService service;
	
	@PostMapping(value = "api/reply", produces = "application/json; charset=UTF-8")
	public Map<String, Object> addReply(@RequestBody Reply reply){
		return service.addReply(reply);
	}
	
	@GetMapping(value = "api/reply/{bno}/page/{page}")
	public Map<String, Object> replyListByBno(@PathVariable (value = "bno") Long bno, @PathVariable(value = "page", required = false) Optional<Integer> opt){
		int page = opt.orElse(1);
		Map<String, Object> map = new HashMap<>();
		map.put("page", page);
		map.put("bno", bno);
		
		return service.selectReplyByBno(map);
	}
	
	@DeleteMapping(value = "api/reply/{rno}")
	public Map<String, Object> deleteReply(@PathVariable (value = "rno") Long rno){
		return service.deleteReply(rno);
	}
	
	@GetMapping(value = "api/comment/{groupNo}")
	public Map<String, Object> commentListByRno(@PathVariable(value="groupNo") Long groupNo){
		return service.selectCommentByRno(groupNo);
	}
	
	@PostMapping(value = "api/comment", produces = "application/json; charset=UTF-8")
	public Map<String, Object> addComment(@RequestBody Reply reply){
		return service.addComment(reply);
	}
	
}
