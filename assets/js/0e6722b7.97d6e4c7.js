"use strict";(self.webpackChunkjustin_csd=self.webpackChunkjustin_csd||[]).push([[9530],{8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>c});var i=n(6540);const r={},a=i.createContext(r);function s(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),i.createElement(a.Provider,{value:e},t.children)}},8965:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Code Project/Our Code init","title":"\u4ee3\u7801\u7247\u6bb5","description":"\u7531\u4e8e\u7279\u522b\u7684\u957f\uff0c\u6211\u4eec\u53ea\u5c55\u793a\u4e00\u90e8\u4efd\u3002","source":"@site/docs/Code Project/Our Code init.md","sourceDirName":"Code Project","slug":"/Code Project/Our Code init","permalink":"/docs/Code Project/Our Code init","draft":false,"unlisted":false,"editUrl":"https://github.com/Justin-csd/csd.github.io/docs/Code Project/Our Code init.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u5173\u4e8e\u6211\u4eec About Us","permalink":"/docs/About"},"next":{"title":"Tutorial - Basics","permalink":"/docs/category/tutorial---basics"}}');var r=n(4848),a=n(8453);const s={},c="\u4ee3\u7801\u7247\u6bb5",o={},l=[{value:"\u7528\u6cd5\u8bf4\u660e",id:"\u7528\u6cd5\u8bf4\u660e",level:2},{value:"\u5982\u679c\u4f60\u9700\u8981\u66f4\u591a\u6216\u8005\u5168\u90e8\uff0c\u70b9\u51fb\u8fd9\u4e2a\u94fe\u63a5\u3002",id:"\u5982\u679c\u4f60\u9700\u8981\u66f4\u591a\u6216\u8005\u5168\u90e8\u70b9\u51fb\u8fd9\u4e2a\u94fe\u63a5",level:2}];function u(t){const e={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u4ee3\u7801\u7247\u6bb5",children:"\u4ee3\u7801\u7247\u6bb5"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u7531\u4e8e\u7279\u522b\u7684\u957f\uff0c\u6211\u4eec\u53ea\u5c55\u793a\u4e00\u90e8\u4efd\u3002"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u8fd9\u4e9b\u5185\u5bb9\u7279\u522b\u7684\u91cd\u8981\uff0c"}),(0,r.jsx)(e.del,{children:(0,r.jsx)(e.strong,{children:"\u5bf9\u4e8eOIER\u6765\u8bf4\u3002"})})]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"\u7528\u6cd5\u8bf4\u660e",children:"\u7528\u6cd5\u8bf4\u660e"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u4f60\u60f3\u5feb\u901f\u8bfb\u5165\uff0c\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u51fd\u6570\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"inline int read(){\n    int x=0,f=1;char ch=getchar();\n    while(ch<'0'||ch>'9'){if(ch=='-')f=-1;ch=getchar();}\n    while(ch>='0'&&ch<='9'){x=x*10+ch-'0';ch=getchar();}\n    return x*f;\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u6cd5\u662f\u8fd9\u6837\u7684\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"int n=read();\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6216\u8005\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u51fd\u6570\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"namespace AK_IOI {\n    template<class T> void to_read(T &x) {\n        char ch=getchar();\n        while(ch<'0'||ch>'9') ch=getchar();\n        while(ch>='0'&&ch<='9') x=x*10+ch-'0',ch=getchar();\n    }\n    template<class T> void to_write(T x) {\n        if(x<0) putchar('-'),x=-x;\n        if(x>9) to_write(x/10);\n        putchar(x%10+'0');\n    }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u6cd5\u5982\u6b64\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"int n;\nto_read(n);//\u5047\u8bbe\u8f93\u5165\u4e865\nto_write(n);//\u8f93\u51fa\u7684\u5c31\u662f5\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"\u4e0b\u9762\u662f\u5176\u4ed6\u7684\u5b9e\u7528\u529f\u80fd\uff0c\u81ea\u884c\u9605\u89c8\uff0c\u4e0d\u591a\u8bf4\u660e\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"struct tree_Node{ int l,r; int sum; };\nstruct map_Node{ int x,y; bool operator < (const map_Node &a) const{ return x<a.x; } };\nstruct cmp{ bool operator ()(const int &a,const int &b){ return a>b; } };\nstruct cmp2{ bool operator ()(const int &a,const int &b){ return a<b; } };\nstruct Segment_binary_Tree{ int l,r; int sum; Segment_binary_Tree *lc,*rc; };\nstruct AVL_Node{ int l,r; int sum; AVL_Node *lc,*rc; int height; };\nstruct Union_Find_Set{ int fa[1000005]; };\nstruct Edge_Node{ int u,v,w; int next,to; bool operator < (const Edge_Node &a) const{ return w<a.w; } };\nstruct Point{ int x,y; };\nstruct Student{ int id,ch,ma,en; string name; }; //If you want to sort the students by their id, you can use the following code: sort(stu+1,stu+n+1,cmp);\nstruct BST_Node{ int key; BST_Node *lc,*rc; };//\u4e8c\u53c9\u641c\u7d22\u6811;\n\nstruct Trie_Node{ Trie_Node *next[26]; bool is_end; };//\u5b57\u5178\u6811;\nstruct AC_Automation{ AC_Automation *next[26]; AC_Automation *fail; bool is_end; };//AC\u81ea\u52a8\u673a;\nstruct KMP{ int next[1000005]; };//KMP;\nstruct Manacher{ int p[1000005]; };//Manacher;\nstruct Suffix_Automation{ int next[26]; int len; int link; };//\u540e\u7f00\u81ea\u52a8\u673a;\nstruct Suffix_Array{ int sa[1000005],rk[1000005],height[1000005]; };//\u540e\u7f00\u6570\u7ec4;\nstruct Z_Algorithm{ int z[1000005]; };//Z\u51fd\u6570;\nstruct Palindrome_Tree{ int next[26]; int len; int fail; int cnt; };//\u56de\u6587\u6811;\nstruct Splay_Tree{ int key; Splay_Tree *lc,*rc; };//\u4f38\u5c55\u6811;\nstruct Treap{ int key,priority,size; Treap *lc,*rc; };//\u5e73\u8861\u6811;\nstruct KD_Tree{ int x,y; KD_Tree *lc,*rc; };//KD\u6811;\nstruct LCT_Node{ int key; LCT_Node *lc,*rc,*fa; };//Link-Cut\u6811;\nstruct Segment_Tree{ int l,r; int sum; Segment_Tree *lc,*rc; };//\u7ebf\u6bb5\u6811;\nstruct Heavy_Light_Decomposition{ int l,r; int sum; Heavy_Light_Decomposition *lc,*rc; };//\u91cd\u94fe\u5256\u5206;\n\ntemplate<class T> T POW (T b, T p) { T res=1; while(p>0) { if (p&1) res*=b; p >>= (1ll), b*=b; } return res; }\ntemplate<class T> T bMOD (T a, T p, T m) { if (p==0) return (T) 1; if (!(p&1)) { T temp=bMOD(a, p/2, m); return ((temp%m)*(temp%m))%m; } return ((a%m)*(bMOD(a, p-1, m)%m))%m; }\ntemplate<class T> T inMOD (T a, T m) { return bMOD (a, m-2, m); }\ntemplate<class T> bool isPrime (T n) { for (T i=2; i*i<=n; i++) { if (n%i==0) return false; } return true; }\ntemplate<class T> T sq (T n) { return (n*n); }\ntemplate<class T> T gcd (T a, T b) { return (b==0) ? a : gcd (b, a%b); }\ntemplate<class T> T lcm (T a, T b) { return (a/gcd (a, b))*b; }\nbool iseq (double a, double b) { return fabs(a-b)<EPS; }\ntemplate<class T> T toDeg (T x) { return (180.0*x)/((T)PI); }\ntemplate<class T> T toReg (T x) { return (x*(T)PI)/(180.0); }\ntemplate<class T> T Inclusion_Exclusion_Principle (T n, T m, T *a) { T res=0; for (T i=1; i<(1<<n); i++) { T cnt=0, temp=1; for (T j=0; j<n; j++) { if (i&(1<<j)) { cnt++; temp*=a[j]; } } if (cnt&1) res+=m/temp; else res-=m/temp; } return res; }\ntemplate<class T> double _distance (T x1, T y1, T x2, T y2) { return 1.0*sqrt(sq(x1-x2)+sq(y1-y2)); }\ntemplate<class T> void heapify (T *a, int n, int i) { int largest=i; int l=2*i+1; int r=2*i+2; if (l<n && a[l]>a[largest]) largest=l; if (r<n && a[r]>a[largest]) largest=r; if (largest!=i) { swap(a[i], a[largest]); heapify(a, n, largest); } }\ntemplate<class T> void heapSort (T *a, int n) { for (int i=n/2-1; i>=0; i--) heapify(a, n, i); for (int i=n-1; i>0; i--) { swap(a[0], a[i]); heapify(a, i, 0); } }//Time Complexity: O(nlogn);\ntemplate<class T> void merge (T *a, int l, int m, int r) { int n1=m-l+1; int n2=r-m; T L[n1], R[n2]; for (int i=0; i<n1; i++) L[i]=a[l+i]; for (int i=0; i<n2; i++) R[i]=a[m+1+i]; int i=0, j=0, k=l; while (i<n1 && j<n2) { if (L[i]<=R[j]) a[k++]=L[i++]; else a[k++]=R[j++]; } while (i<n1) a[k++]=L[i++]; while (j<n2) a[k++]=R[j++]; }\ntemplate<class T> void mergeSort (T *a, int l, int r) { if (l<r) { int m=l+(r-l)/2; mergeSort(a, l, m); mergeSort(a, m+1, r); merge(a, l, m, r); } }//Time Complexity: O(nlogn);\ntemplate<class T> int partition (T *a, int low, int high) { T pivot=a[high]; int i=low-1; for (int j=low; j<high; j++) { if (a[j]<pivot) swap(a[++i], a[j]); } swap(a[i+1], a[high]); return i+1; }\ntemplate<class T> void quickSort (T *a, int low, int high) { if (low<high) { int pi=partition(a, low, high); quickSort(a, low, pi-1); quickSort(a, pi+1, high); } }//Time Complexity: O(nlogn);\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.h2,{id:"\u5982\u679c\u4f60\u9700\u8981\u66f4\u591a\u6216\u8005\u5168\u90e8\u70b9\u51fb\u8fd9\u4e2a\u94fe\u63a5",children:["\u5982\u679c\u4f60\u9700\u8981\u66f4\u591a\u6216\u8005\u5168\u90e8\uff0c",(0,r.jsx)(e.a,{href:"https://wwm.lanzouq.com/ijUgV2ou6cxi",title:"PressMe",children:"\u70b9\u51fb\u8fd9\u4e2a\u94fe\u63a5\u3002"})]})]})}function d(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}}}]);