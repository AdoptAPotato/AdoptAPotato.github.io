import { Component, OnInit } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild, TemplateRef } from '@angular/core';

import { ELEMENTS, MBTI_TYPES, MONTHS, SIZES } from '../../data/constants';
import { Potato } from '../../models/potato';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-potato-details',
  imports: [CommonModule],
  templateUrl: './potato-details.component.html',
  styleUrl: './potato-details.component.css'
})
export class PotatoDetailsComponent implements OnInit {

  potato?: Potato;

  mbtiType: any;
  birth_monthElement: any;
  size: any;

  signed = false;

  @ViewChild('adoptionModal')
  adoptionModal!: TemplateRef<any>;

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private api: ApiService
  ) {}

  ngOnInit() {
    const national_id = this.route.snapshot.paramMap.get('id');

    if (!national_id) return;

    this.potato = this.api.getPotatoById(national_id);

    this.birth_monthElement = ELEMENTS[MONTHS.find(t => t.name === this.potato!.birth_month)!.element];
    this.mbtiType = MBTI_TYPES.find(t => t.code === this.potato!.mbti);
    this.size = SIZES.find(t => t.code === this.potato!.size);
  }

  sign() {

    if (this.signed)
      return;

    this.signed = true;

    setTimeout(() => {
      this.modalService.open(
        this.adoptionModal,
        {
          centered: true,
          size: 'lg'
        }
      );
    }, 2000);

  }

}
