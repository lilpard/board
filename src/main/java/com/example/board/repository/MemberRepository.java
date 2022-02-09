package com.example.board.repository;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.board.domain.Member;

@Repository
@Mapper
public interface MemberRepository {
	public int idcheck(String id);
	public int addMember(Member member);
	public Member loginMember(Member member);
	public int modifyMember(Member member);
	public int deleteMember(Long mno);
}
