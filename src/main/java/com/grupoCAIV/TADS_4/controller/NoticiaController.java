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

	@GetMapping("/noticias")
	public String listarNoticias(Model model) {
		List<NoticiaModel> noticias = noticiaRepository.findAll();
		System.out.println(noticias);
		model.addAttribute("noticias", noticias);
		return "noticias"; // nome do arquivo Thymeleaf: noticias.html
	}
}
