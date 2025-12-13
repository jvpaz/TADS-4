package com.grupoCAIV.TADS_4.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.grupoCAIV.TADS_4.model.NoticiaModel;
import com.grupoCAIV.TADS_4.repository.NoticiaRepository;

@Controller
public class NoticiaController {

	@Autowired
	private NoticiaRepository noticiaRepository;

	@GetMapping("/pagInicial")
	public String listarNoticias(Model model) {
		List<NoticiaModel> noticias = noticiaRepository.findTop3ByOrderByDataPublicacaoDesc();
		System.out.println(noticias);

		model.addAttribute("noticias", noticias);
		return "pagInicial"; // nome do arquivo Thymeleaf: noticias.html
	}

	@GetMapping("/pagLocal")
	public String pagLocal() {
		return "pagLocal"; // templates/pagLocal.html
	}

	@GetMapping("/corpoDocente")
	public String corpoDocente() {
		return "corpoDocente"; // templates/corpoDocente.html
	}

	@GetMapping("/sobreNos")
	public String sobreNos() {
		return "sobreNos"; // templates/sobreNos.html
	}
}
