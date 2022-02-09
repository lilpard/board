package com.example.board.service;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.example.board.domain.Member;
import com.example.board.repository.MemberRepository;
import com.example.board.util.SecurityUtils;

@Service
public class MemberServiceImpl implements MemberService{
	@Autowired
	MemberRepository repository;
	
	// 아이디 중복체크
	@Override
	public Map<String, Object> idCheck(String id) {
		int result = repository.idcheck(id);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("result", result == 0);
			
		return map;
	}
	
	// 회원가입하기
	@Override
	public Map<String, Object> addMember(Member member) {
		// name, email, id 크로스 사이트 스크립트	, pw sha-256처리
		member.setId(SecurityUtils.xxs(member.getId()));
		member.setPw(SecurityUtils.sha256(member.getPw()));
		member.setName(SecurityUtils.xxs(member.getName()));
		member.setEmail(SecurityUtils.xxs(member.getEmail()));
		
		int result = repository.addMember(member);
		
		Map<String, Object> map = new HashMap<>();
		if(result > 0) {
			map.put("result", true);
			map.put("status", 200);
		} else {
			map.put("result", false);
			map.put("status", 400);
		}
		return map;
	}
	
	// 로그인
	@Override
	public Map<String, Object> loginMember(Model model) {
		// model에 저장된 member , session 가져오기
		Map<String, Object> map = model.asMap();
		Member member = (Member) map.get("member");
		HttpServletRequest request = (HttpServletRequest) map.get("request");
		HttpSession session = (HttpSession) request.getSession();
		
		member.setId(SecurityUtils.xxs(member.getId()));
		member.setPw(SecurityUtils.sha256(member.getPw()));
		
		Member loginUser = repository.loginMember(member);
		
		Map<String, Object> m = new HashMap<>();
		if(loginUser != null) {
			session.setAttribute("loginUser", loginUser);
		}
		m.put("result", loginUser != null); // true가 반환되면 로그인 성
		
		return m;
	}
	
	// 회원정보 수정
	@Override
	public Map<String, Object> modifyMember(Model model) {
		Map<String, Object> map = model.asMap();
		Member member = (Member) map.get("member");
		HttpServletRequest request = (HttpServletRequest) map.get("request");
		HttpSession session = (HttpSession) request.getSession();
		
		member.setPw(SecurityUtils.sha256(member.getPw()));
		member.setName(SecurityUtils.xxs(member.getName()));
		member.setEmail(SecurityUtils.xxs(member.getEmail()));
		
		int result = repository.modifyMember(member);
		
		if(result > 0) {
			member.setPw(null);
			session.setAttribute("loginUser", member);				
		}
		
		Map<String, Object> m = new HashMap<>();
	
		m.put("result", result > 0); // true가 반환되면 수정 성공
		
		return m;
	}
	
	// 회원삭제
	@Override
	public Map<String, Object> deleteMember(Model model) {
		Map<String, Object> map = model.asMap();
		Long mno = (Long) map.get("mno");
		HttpServletRequest request = (HttpServletRequest) map.get("request");
		HttpSession session = (HttpSession) request.getSession();
		
		int result = repository.deleteMember(mno);
		
		if(result > 0) {
			session.invalidate();
		}
		
		Map<String, Object> m = new HashMap<>();
		m.put("result", result > 0); // 삭제가 이루어졌으면 true를 반환
		
		return m;
	}
}
