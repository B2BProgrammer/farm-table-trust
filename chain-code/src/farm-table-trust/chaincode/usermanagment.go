package main

type User struct {
	userid             string      `json:"userid"`
	doctype            string      `json:"doctype"`
	firstname          string      `json:"firstname"`
	lastname           string      `json:"lastname"`
	email              string      `json:"email"`
	org                string      `json:"org"`
	role               string      `json:"role"`
	usercreationtime   string      `json:usercreationtime`
	userexpirationtime string      `json:userexpirationtime`
	approval           []ApprovalT `json:approval`
	userstatus         string      `json:userstatus`
}

type ApprovalT struct {
	approvedby            string `json:approvedby`
	userapprovaltimestamp int64  `json:userapprovaltimestamp`
}
