package com.grupoCAIV.TADS_4.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupoCAIV.TADS_4.model.NoticiaModel;

@Repository
public interface NoticiaRepository extends JpaRepository<NoticiaModel, Long> {
	List<NoticiaModel> findTop3ByOrderByDataPublicacaoDesc(); // Repositório JPA já é capaz de pegar as 3 primeiras por
																// data de publicação somente escrevendo o nome da
																// função
}
