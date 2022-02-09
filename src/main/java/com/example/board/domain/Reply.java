package com.example.board.domain;

public class Reply {
	private Long rno;
	private String rcontent;
	private Long mno;
	private Long bno;
	private int depth;
	private int state;
	private Long groupNo;
	private int groupOrd;
	
	private Member member;
	private Board board;
	
	
	public Reply() {
		// TODO Auto-generated constructor stub
	}


	public Reply(Long rno, String rcontent, Long mno, Long bno, int depth, int state, Long groupNo, int groupOrd,
			Member member, Board board) {
		super();
		this.rno = rno;
		this.rcontent = rcontent;
		this.mno = mno;
		this.bno = bno;
		this.depth = depth;
		this.state = state;
		this.groupNo = groupNo;
		this.groupOrd = groupOrd;
		this.member = member;
		this.board = board;
	}


	public Long getRno() {
		return rno;
	}


	public void setRno(Long rno) {
		this.rno = rno;
	}


	public String getRcontent() {
		return rcontent;
	}


	public void setRcontent(String rcontent) {
		this.rcontent = rcontent;
	}


	public Long getMno() {
		return mno;
	}


	public void setMno(Long mno) {
		this.mno = mno;
	}


	public Long getBno() {
		return bno;
	}


	public void setBno(Long bno) {
		this.bno = bno;
	}


	public int getDepth() {
		return depth;
	}


	public void setDepth(int depth) {
		this.depth = depth;
	}


	public int getState() {
		return state;
	}


	public void setState(int state) {
		this.state = state;
	}


	public Long getGroupNo() {
		return groupNo;
	}


	public void setGroupNo(Long groupNo) {
		this.groupNo = groupNo;
	}


	public int getGroupOrd() {
		return groupOrd;
	}


	public void setGroupOrd(int groupOrd) {
		this.groupOrd = groupOrd;
	}


	public Member getMember() {
		return member;
	}


	public void setMember(Member member) {
		this.member = member;
	}


	public Board getBoard() {
		return board;
	}


	public void setBoard(Board board) {
		this.board = board;
	}


	@Override
	public String toString() {
		return "Reply [rno=" + rno + ", rcontent=" + rcontent + ", mno=" + mno + ", bno=" + bno + ", depth=" + depth
				+ ", state=" + state + ", groupNo=" + groupNo + ", groupOrd=" + groupOrd + ", member=" + member
				+ ", board=" + board + "]";
	}

}
