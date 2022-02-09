package com.example.board.service;

import java.util.Map;

import com.example.board.domain.Board;

public interface BoardService {
	public Map<String, Object> addBoard(Board board);
	public Map<String, Object> boardList(int page);
	public void boardHitUp(Long bno);
	public Map<String, Object> selectBoardByBno(Long bno);
	public Map<String, Object> updateBoard(Board board);
	public Map<String, Object> deleteBoard(Long bno);
}
