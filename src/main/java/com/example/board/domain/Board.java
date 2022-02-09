package com.example.board.domain;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class Board {
	
	private Long bno;
	private String title;
	private String content;
	private Long hit;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date created;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date lastmodified;
	private Long mno;
	
	private Member member;
	
	public Board() {
		// TODO Auto-generated constructor stub
	}

	public Board(Long bno, String title, String content, Long hit, Date created, Date lastmodified, Long mno,
			Member member) {
		super();
		this.bno = bno;
		this.title = title;
		this.content = content;
		this.hit = hit;
		this.created = created;
		this.lastmodified = lastmodified;
		this.mno = mno;
		this.member = member;
	}

	public Long getBno() {
		return bno;
	}

	public void setBno(Long bno) {
		this.bno = bno;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Long getHit() {
		return hit;
	}

	public void setHit(Long hit) {
		this.hit = hit;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public Date getLastmodified() {
		return lastmodified;
	}

	public void setLastmodified(Date lastmodified) {
		this.lastmodified = lastmodified;
	}

	public Long getMno() {
		return mno;
	}

	public void setMno(Long mno) {
		this.mno = mno;
	}

	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

	@Override
	public String toString() {
		return "Board [bno=" + bno + ", title=" + title + ", content=" + content + ", hit=" + hit + ", created="
				+ created + ", lastmodified=" + lastmodified + ", mno=" + mno + ", member=" + member + "]";
	}
	
}
