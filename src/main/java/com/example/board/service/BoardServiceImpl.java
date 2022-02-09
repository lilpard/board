package com.example.board.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.board.domain.Board;
import com.example.board.repository.BoardRepository;
import com.example.board.util.PageUtils;

@Service
public class BoardServiceImpl implements BoardService {
	@Autowired
	BoardRepository repository;
	
	// 게시물 등록
	@Override
	public Map<String, Object> addBoard(Board board) {
		int result = repository.insertBoard(board);
		
		Map<String, Object> map = new HashMap<>();
		map.put("result", result > 0);
		
		return map;
	}
	
	// 게시물 목록
	@Override
	public Map<String, Object> boardList(int page) {

		int totalRecord = repository.boardTotalCount();
		
		PageUtils pageUtils = new PageUtils();
		pageUtils.setPageEntity(totalRecord, page);
		
		Map<String, Object> m = new HashMap<>();
		m.put("beginRecord", pageUtils.getBeginRecord());
		m.put("endRecord", pageUtils.getEndRecord());
		
		List<Board> list = repository.selectBoardList(m);
		
		Map<String, Object> map = new HashMap<>();
		map.put("list", list);
		map.put("pageUtils", pageUtils);
		map.put("startNum", totalRecord - (page - 1) * pageUtils.getRecordPerPage());
		
		
		return map;
	}
	
	// 조회수 증가
	@Override
	public void boardHitUp(Long bno) {
		repository.boardHitUpdate(bno);
	}
	
	// 게시물 상세보기
	@Override
	public Map<String, Object> selectBoardByBno(Long bno) {
		Board board = repository.selectBoardByBno(bno);
		
		Map<String, Object> map = new HashMap<>();
		map.put("result", board != null);
		map.put("board", board);
		
		return map;
	}
	
	// 게시물 수정하기
	@Override
	public Map<String, Object> updateBoard(Board board) {
		int result = repository.updateBoard(board);
		
		Map<String, Object> map = new HashMap<>();
		map.put("result", result > 0);
		
		return map;
	}
	
	// 게시물 삭제하기
	@Override
	public Map<String, Object> deleteBoard(Long bno) {
		int result = repository.deleteBoard(bno);
		
		Map<String, Object> map = new HashMap<>();
		map.put("result", result > 0);
		
		return map;
	}
}
