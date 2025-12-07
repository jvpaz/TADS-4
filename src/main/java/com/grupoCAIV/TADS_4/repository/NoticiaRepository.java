package com.grupoCAIV.TADS_4.repository;

import org.springframework.stereotype.Repository;
import com.grupoCAIV.TADS_4.model.NoticiaModel;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface NoticiaRepository extends JpaRepository<NoticiaModel, Long>{
	
}
