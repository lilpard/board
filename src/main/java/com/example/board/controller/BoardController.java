package com.example.board.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.board.domain.Board;
import com.example.board.service.BoardService;

@RestController
public class BoardController {
	@Autowired
	BoardService service;
	
	// 게시물 추가
	@PostMapping(value = "api/board", produces = "application/json; charset=UTF-8")
	public Map<String, Object> addBoard(@RequestBody Board board){
		return service.addBoard(board);
	}
	
	// 게시물 목록 페이징
	@GetMapping(value = "api/board/{page}")
	public Map<String, Object> boardList(@PathVariable (value = "page", required = false) Optional<Integer> opt){
		int page = opt.orElse(1);
		return service.boardList(page);
	}
	
	// 게시물 상세 보기
	@GetMapping(value = "api/board/detail/{bno}")
	public Map<String, Object> selectBoardByBno(@PathVariable (value = "bno") Long bno){
		return service.selectBoardByBno(bno);
	}
	
	// 게시물 수정하기
	@PutMapping(value = "api/board")
	public Map<String, Object> updateBoard(@RequestBody Board board){
		return service.updateBoard(board);
	}
	
	// 게시물 삭제하기
	@DeleteMapping(value = "api/board/{bno}")
	public Map<String, Object> deleteBoard(@PathVariable (value = "bno") Long bno){
		return service.deleteBoard(bno);
	}
}
