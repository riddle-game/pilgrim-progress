package kr.co.yermi.game;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Controller
@RequestMapping("game/*")
@AllArgsConstructor
@Log4j
public class gameController {
	
	@GetMapping("chap01") // 추후 mapping 이름만 변경
	public String chap01() {
		return "/game/chap01"; // jsp 명은 chapXX 로 통일
	}
}
