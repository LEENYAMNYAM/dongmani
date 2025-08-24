package com.dmni.dongmani.entity;

import jakarta.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 아이디
    @Column
    private String username;

    //비밀번호
    @Column
    private String password;


}
