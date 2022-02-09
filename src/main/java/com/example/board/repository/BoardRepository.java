package com.example.board.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.example.board.domain.Board;

@Mapper
public interface BoardRepository {
	public int insertBoard(Board board);
	public int boardTotalCount();
	public List<Board> selectBoardList(Map<String, Object> map);
	public int boardHitUpdate(Long bno);
	public Board selectBoardByBno(Long bno);
	public int updateBoard(Board board);
	public int deleteBoard(Long bno);
}
