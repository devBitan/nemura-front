import{_ as E,u as B,k as C,r as N,o as y,c as k,b as e,t as v,l as J,n as x,d as m,w as j,v as P,f as S,m as O,F as U,p as L,g as H,q as G,s as K,i as M,x as z,y as Q,z as R}from"./index-ByhVBaDz.js";import{N as W}from"./Navbar-4z6ofDJj.js";const q=i=>(L("data-v-e1ad0442"),i=i(),H(),i),X={class:"task-container-title"},Y={class:"task-container-items"},Z={class:"task-container-items-id"},ee=q(()=>e("span",null,"id: ",-1)),te={key:0,class:"modal"},se={class:"modal-container"},ne={class:"modal-container-title"},ae={class:"modal-container-priority"},oe=q(()=>e("p",null,"Priority",-1)),ie={class:"modal-container-btns"},re={__name:"Task",props:{item:{type:Object,required:!0},boardId:{type:Number,required:!0}},emits:["delete-task","update-task"],setup(i,{emit:b}){const g=B();C(()=>g.idProject);let f=N(!1),w=N(0);const I={0:"Low",1:"Medium",2:"High"},u=i;let a=N({name:"",description:"",status:"",priority:""});const d=()=>(f.value=!f.value,f.value),$=b,p=()=>{$("delete-task",u.item.id),d()};async function V(c){a.value.name=c.name,a.value.description=c.description,a.value.status=c.status,a.value.priority=c.priority,w.value=c.id,console.log(a.value),d()}const T=()=>{$("update-task",w.value,a.value),d()};function _(c){a.value.priority=c}return(c,s)=>{var h;return y(),k(U,null,[e("div",{class:"task-container",onClick:s[0]||(s[0]=l=>V(i.item))},[e("p",X,v(i.item.name),1),e("div",Y,[e("div",Z,[ee,J(" "+v(i.item.id),1)]),e("div",{class:x(["task-container-items-priority",{"priority-low":i.item.priority===0,"priority-medium":i.item.priority===1,"priority-high":i.item.priority===2}])},v(I[(h=i.item)==null?void 0:h.priority]),3)])]),m(f)?(y(),k("div",te,[e("form",{onSubmit:s[9]||(s[9]=S(()=>{},["prevent"]))},[e("div",se,[e("div",ne,[j(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=l=>m(a).name=l)},null,512),[[P,m(a).name]]),e("p",null,"id: "+v(m(w)),1)]),e("div",ae,[oe,e("button",{onClick:s[2]||(s[2]=l=>_(0)),class:x({"selected-priority-low":m(a).priority===0})},v(I[0]),3),e("button",{onClick:s[3]||(s[3]=l=>_(1)),class:x({"selected-priority-medium":m(a).priority===1})},v(I[1]),3),e("button",{onClick:s[4]||(s[4]=l=>_(2)),class:x({"selected-priority-high":m(a).priority===2})},v(I[2]),3)])]),j(e("textarea",{placeholder:"escribe ",class:"modal-container-textarea","onUpdate:modelValue":s[5]||(s[5]=l=>m(a).description=l)},null,512),[[P,m(a).description]]),e("div",ie,[e("button",{onClick:s[6]||(s[6]=l=>d()),class:"close"},"Close"),e("button",{onClick:s[7]||(s[7]=l=>T()),class:"save"},"Save"),e("button",{onClick:s[8]||(s[8]=l=>p(i.item.id)),class:"delete"},"Delete")])],32)])):O("",!0)],64)}}},le=E(re,[["__scopeId","data-v-e1ad0442"]]),de={__name:"InputNew",emits:["onNewItem"],setup(i,{emit:b}){const g=N(""),f=b;function w(){g!=""&&(f("onNewItem",g),g.value="")}return(I,u)=>(y(),k("form",{action:"",onSubmit:S(w,["prevent"])},[j(e("input",{class:"input inputTask",type:"text","onUpdate:modelValue":u[0]||(u[0]=a=>g.value=a),placeholder:"New task"},null,512),[[P,g.value]])],32))}},ue=E(de,[["__scopeId","data-v-423c24da"]]),ce={class:"dashboard"},me={class:"dashboard-table"},pe={class:"title"},ve={class:"board-container"},ye=["onDrop"],ge=["onDragstart"],fe={__name:"Project",setup(i){const b=B(),{getAssignment:g,postAssignment:f,putAssignment:w,deleteAssignment:I,getAssignmentByProjectId:u,patchAssignment:a}=R(),d=C(()=>b.idProject),$=C(()=>b.nameProject);let p=N([]),V=G([{id:1,name:"To Do",enumValue:0,items:[]},{id:2,name:"In progres",enumValue:1,items:[]},{id:3,name:"Complete",enumValue:2,items:[]}]);K(async()=>{let r=await u(d.value);p.value=r});async function T(r){let t={name:r.value,description:"",status:0,priority:0,projectId:d.value};try{let n=await f(t),o=await u(d.value);p.value=o}catch(n){console.error("Error creando la nueva tarea:",n)}}function _(r,t,n){r.dataTransfer.setData("text/plain",JSON.stringify({boardId:t.id,itemId:n.id}))}async function c(r,t){const{boardId:n,itemId:o}=JSON.parse(r.dataTransfer.getData("text/plain")),A=p.value.find(D=>D.id==o);A.status=t.enumValue;let F={status:t.enumValue};try{await a(A.id,F);let D=await u(d.value);p.value=D}catch(D){console.error("Error actualizando el estado de la tarea:",D)}}function s(r){return p.value.filter(t=>t.status===r.enumValue)}async function h(r){console.log(r);try{let t=await I(r);if(console.log(t),t){let n=await u(d.value);p.value=n}}catch(t){console.error("Error eliminando la tarea:",t)}}async function l(r,t){console.log(t);try{let n=await w(r,t);console.log(n);let o=await u(d.value);p.value=o}catch(n){console.log("Error actualizando tarea",n)}}return(r,t)=>(y(),k("main",ce,[M(W),e("div",me,[e("h3",pe,v($.value),1),e("div",ve,[(y(!0),k(U,null,z(m(V),n=>(y(),k("div",{class:"board",onDrop:o=>c(o,n),onDragover:t[1]||(t[1]=S(()=>{},["prevent"])),onDragenter:t[2]||(t[2]=S(()=>{},["prevent"])),key:n.id},[e("div",null,v(n.name),1),n.enumValue===0?(y(),Q(ue,{key:0,onOnNewItem:t[0]||(t[0]=o=>T(o))})):O("",!0),(y(!0),k(U,null,z(s(n),o=>(y(),k("div",{class:"item",draggable:"true",onDragstart:A=>_(A,n,o),key:o==null?void 0:o.id},[M(le,{item:o,boardId:n.id,onDeleteTask:A=>h(o.id),onUpdateTask:l},null,8,["item","boardId","onDeleteTask"])],40,ge))),128))],40,ye))),128))])])]))}},Ie=E(fe,[["__scopeId","data-v-9f17ff6a"]]);export{Ie as default};
