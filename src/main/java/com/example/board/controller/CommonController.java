package com.example.board.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.board.service.BoardService;

@Controller
public class CommonController {

	@Autowired
	BoardService boardService;
	
	@GetMapping("/")
	public String index() {
		return "index";
	}
	
	@GetMapping("member/login")
	public String login() {
		return "member/login";
	}
	
	@GetMapping("member/join")
	public String join() {
		return "member/join";
	}

	@GetMapping("member/mypage")
	public String mypage() {
		return "member/mypage";
	}
	
	@GetMapping("member/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "index";
	}
	
	@GetMapping("board/listPage")
	public String board() {
		return "board/list";
	}
	
	@GetMapping("board/insertPage")
	public String insertPage() {
		return "board/insert";
	}
	
	// 조회수 증가를 위한 boardService 접근
	@GetMapping("board/detailPage/{bno}")
	public String detailPage(@PathVariable (value = "bno") Long bno) {
		boardService.boardHitUp(bno);
		return "board/detail";
	}
}
