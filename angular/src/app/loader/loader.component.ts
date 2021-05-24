import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div
      class="lds-ellipsis"
      [ngStyle]="{
        height: loaderFitHeight + 'px',
        width: loaderFitWidth + 'px'
      }"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `,
  styles: [
    `
      .lds-ellipsis {
        display: inline-block;
        position: relative;
      }
      .lds-ellipsis div {
        position: absolute;
        top: 40% !important;
        left: 44% !important;
        transform: translate(-50%, -50%);
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #fcf;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
      }
      .lds-ellipsis div:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 0.6s infinite;
      }
      .lds-ellipsis div:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 0.6s infinite;
      }
      .lds-ellipsis div:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 0.6s infinite;
      }
      .lds-ellipsis div:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 0.6s infinite;
      }
      @keyframes lds-ellipsis1 {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
      @keyframes lds-ellipsis3 {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(0);
        }
      }
      @keyframes lds-ellipsis2 {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(24px, 0);
        }
      }
    `,
  ],
})
export class LoaderComponent {
  @Input() loaderFitHeight: number;
  @Input() loaderFitWidth: number;
}
