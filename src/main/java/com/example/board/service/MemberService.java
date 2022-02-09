package com.example.board.service;

import java.util.Map;

import org.springframework.ui.Model;

import com.example.board.domain.Member;

public interface MemberService {
	public Map<String, Object> idCheck(String id);
	public Map<String, Object> addMember(Member member);
	public Map<String, Object> loginMember(Model model);
	public Map<String, Object> modifyMember(Model model);
	public Map<String, Object> deleteMember(Model model);
}
