/* File generated Mon Dec 29 2014 16:54:00 GMT-0500 (EST) */
/*
Copyright 2014 ChartIQ LLC
*/

(function(){
	var version=["Version 2014-12-02"];
	if(version.length>0 && window.STXChart && STXChart.version.length>0){
		if(version[0]!=STXChart.version[0])
		console.log("Mismatched kernel version stxChart:" + STXChart.version[0] + " stxKernel:" + version[0]);
	}

	var domains=[/*<domains>*/];
	if(domains.length){
		var href=document.location.href;
		var foundOne=false;
		for(var i=0;i<domains.length;i++){
			var domain=domains[i];
			if(href.indexOf(domain)!=-1){
				foundOne=true;
			}
		}
		if(!foundOne){
			console.log("!!!! Not licensed for domain " + document.location.href);
		}
	}
})();
var x8A={'B4A':function(D4A,o4A){return D4A-o4A;}
,'f6R':function(K6R,p6R){return K6R-p6R;}
,'E6f':function(F6f,y6f,U6f){return F6f*y6f/U6f;}
,'d2f':function(w2f,k2f){return w2f==k2f;}
,'P4P':function(c4P,u4P){return c4P-u4P;}
,'K5c':function(p5c,e5c){return p5c<e5c;}
,'n8A':function(N8A,f8A){return N8A<f8A;}
,'A3W':function(t3W,j3W){return t3W/j3W;}
,'Y5c':function(d5c,w5c){return d5c>=w5c;}
,'t1W':function(j1W,a1W){return j1W-a1W;}
,'p5P':function(e5P,x5P){return e5P-x5P;}
,'X1e':function(s1e,r1e){return s1e==r1e;}
,'S0a':function(H0a,A8a){return H0a==A8a;}
,'z1f':function(O1f,h1f){return O1f-h1f;}
,'c1z':function(u1z,R1z){return u1z<R1z;}
,'r0A':function(v0A,n0A){return v0A==n0A;}
,'l1t':function(z1t,O1t){return z1t!=O1t;}
,'F1n':function(y1n,U1n){return y1n>U1n;}
,'I6W':function(M6W,W6W){return M6W>=W6W;}
,'L2e':function(g2e,C2e){return g2e==C2e;}
,'Q9A':function(B9A,D9A){return B9A>=D9A;}
,'S1f':function(H1f,A3f){return H1f==A3f;}
,'R6h':function(l6h,z6h){return l6h==z6h;}
,'e5W':function(x5W,L5W){return x5W===L5W;}
,'T4':function(Z4,m4){return Z4<m4;}
,'O5e':function(h5e,Q5e){return h5e%Q5e;}
,'w3z':function(k3z,q3z){return k3z==q3z;}
,'n5z':function(N5z,f5z){return N5z==f5z;}
,'k1z':function(q1z,P1z){return q1z!=P1z;}
,'u3i':function(R3i,l3i){return R3i>=l3i;}
,'m5x':function(J5x,Y5x){return J5x>=Y5x;}
,'x2a':function(L2a,g2a){return L2a>g2a;}
,'a5s':function(T5s,Z5s){return T5s==Z5s;}
,'Y3h':function(d3h,w3h){return d3h==w3h;}
,'v9P':function(n9P,N9P){return n9P>=N9P;}
,'T4a':function(Z4a,m4a){return Z4a-m4a;}
,'E7n':function(F7n,y7n){return F7n>y7n;}
,'O9z':function(h9z,Q9z){return h9z==Q9z;}
,'y0W':function(U0W,S0W){return U0W/S0W;}
,'P5e':function(c5e,u5e){return c5e*u5e;}
,'Q3x':function(B3x,D3x){return B3x<D3x;}
,'n2P':function(N2P,f2P){return N2P-f2P;}
,'o3x':function(i3x,V3x){return i3x>V3x;}
,'Z0c':function(m0c,J0c){return m0c|J0c;}
,'X3A':function(s3A,r3A){return s3A>r3A;}
,'O4R':function(h4R,Q4R){return h4R!=Q4R;}
,'n3t':function(N3t,f3t){return N3t-f3t;}
,'Y8A':function(d8A,w8A){return d8A-w8A;}
,'v7e':function(n7e,N7e){return n7e-N7e;}
,'l9e':function(z9e,O9e){return z9e*O9e;}
,'S6f':function(H6f,A4f,t4f){return H6f*A4f/t4f;}
,'w4':function(k4,q4){return k4!=q4;}
,'L5s':function(g5s,C5s){return g5s/C5s;}
,'W9W':function(b9W,E9W){return b9W-E9W;}
,'E0R':function(F0R,y0R){return F0R>y0R;}
,'f3R':function(K3R,p3R){return K3R>p3R;}
,'h9':function(Q9,B9){return Q9<B9;}
,'v9a':function(n9a,N9a){return n9a*N9a;}
,'V6a':function(G6a,X6a){return G6a*X6a;}
,'N8P':function(f8P,K8P){return f8P>K8P;}
,'C6':function(I6,M6){return I6<M6;}
,'a6n':function(T6n,Z6n){return T6n>=Z6n;}
,'M4':function(W4,b4){return W4==b4;}
,'Q0e':function(B0e,D0e){return B0e==D0e;}
,'X7x':function(s7x,r7x){return s7x-r7x;}
,'R4h':function(l4h,z4h){return l4h>z4h;}
,'P3A':function(c3A,u3A){return c3A==u3A;}
,'U7x':function(S7x,H7x){return S7x*H7x;}
,'L3i':function(g3i,C3i){return g3i==C3i;}
,'s2x':function(r2x,v2x){return r2x-v2x;}
,'y2f':function(U2f,S2f){return U2f/S2f;}
,'f4x':function(K4x,p4x){return K4x-p4x;}
,'V0h':function(G0h,X0h){return G0h>=X0h;}
,'q8z':function(P8z,c8z){return P8z!=c8z;}
,'q7n':function(P7n,c7n){return P7n>c7n;}
,'b1t':function(E1t,F1t){return E1t!=F1t;}
,'Z1P':function(m1P,J1P){return m1P==J1P;}
,'j3t':function(a3t,T3t){return a3t>T3t;}
,'O7x':function(h7x,Q7x){return h7x<Q7x;}
,'Q3e':function(B3e,D3e){return B3e>D3e;}
,'n6s':function(N6s,f6s){return N6s*f6s;}
,'u0i':function(R0i,l0i){return R0i-l0i;}
,'t5i':function(j5i,a5i){return j5i<a5i;}
,'V2A':function(G2A,X2A){return G2A-X2A;}
,'Q6e':function(B6e,D6e){return B6e!=D6e;}
,'s4e':function(r4e,v4e){return r4e in v4e;}
,'V9':function(G9,X9){return G9-X9;}
,'b0e':function(E0e,F0e){return E0e==F0e;}
,'d7n':function(w7n,k7n){return w7n<k7n;}
,'A3x':function(t3x,j3x){return t3x<j3x;}
,'p6z':function(e6z,x6z){return e6z<x6z;}
,'n9e':function(N9e,f9e){return N9e>f9e;}
,'A6W':function(t6W,j6W){return t6W<j6W;}
,'O4h':function(h4h,Q4h){return h4h/Q4h;}
,'r6f':function(v6f,n6f,N6f){return v6f-n6f+N6f;}
,'V7h':function(G7h,X7h){return G7h*X7h;}
,'D6':function(o6,i6){return o6!=i6;}
,'L1h':function(g1h,C1h){return g1h!=C1h;}
,'U8':function(S8,H8){return S8==H8;}
,'u0x':function(R0x,l0x){return R0x<l0x;}
,'R2z':function(l2z,z2z){return l2z<=z2z;}
,'Z5z':function(m5z,J5z){return m5z==J5z;}
,'R9f':function(l9f,z9f){return l9f*z9f;}
,'Q7A':function(B7A,D7A){return B7A>D7A;}
,'S8i':function(H8i,A1i){return H8i<A1i;}
,'W6h':function(b6h,E6h){return b6h<E6h;}
,'K8A':function(p8A,e8A){return p8A<e8A;}
,'W9i':function(b9i,E9i){return b9i/E9i;}
,'a8t':function(T8t,Z8t){return T8t!=Z8t;}
,'T3R':function(Z3R,m3R){return Z3R!=m3R;}
,'w7z':function(k7z,q7z){return k7z-q7z;}
,'x8n':function(L8n,g8n){return L8n/g8n;}
,'B5f':function(D5f,o5f){return D5f-o5f;}
,'h7t':function(Q7t,B7t){return Q7t<B7t;}
,'c6a':function(u6a,R6a){return u6a*R6a;}
,'C6x':function(I6x,M6x){return I6x==M6x;}
,'L1c':function(g1c,C1c){return g1c>C1c;}
,'Y1':function(w1,k1){return w1==k1;}
,'G1t':function(X1t,s1t){return X1t-s1t;}
,'z8P':function(O8P,h8P){return O8P==h8P;}
,'i4n':function(V4n,G4n){return V4n/G4n;}
,'W3f':function(b3f,E3f){return b3f-E3f;}
,'q4i':function(P4i,c4i){return P4i/c4i;}
,'N4c':function(f4c,K4c){return f4c<K4c;}
,'S3n':function(H3n,A9n){return H3n<A9n;}
,'q7s':function(P7s,c7s){return P7s-c7s;}
,'h2c':function(Q2c,B2c){return Q2c==B2c;}
,'y7a':function(U7a,S7a){return U7a<S7a;}
,'R8f':function(l8f,z8f){return l8f<z8f;}
,'a7s':function(T7s,Z7s){return T7s==Z7s;}
,'g6t':function(C6t,I6t){return C6t<I6t;}
,'W6A':function(b6A,E6A){return b6A<E6A;}
,'d1s':function(w1s,k1s){return w1s==k1s;}
,'p6e':function(e6e,x6e){return e6e*x6e;}
,'t8n':function(j8n,a8n){return j8n-a8n;}
,'e3R':function(x3R,L3R){return x3R/L3R;}
,'n1R':function(N1R,f1R){return N1R*f1R;}
,'J9n':function(Y9n,d9n){return Y9n==d9n;}
,'Y6A':function(d6A,w6A){return d6A>w6A;}
,'o1h':function(i1h,V1h){return i1h<V1h;}
,'s6s':function(r6s,v6s){return r6s*v6s;}
,'m8R':function(J8R,Y8R){return J8R-Y8R;}
,'R8s':function(l8s,z8s){return l8s==z8s;}
,'J8':function(Y8,d8){return Y8==d8;}
,'x6P':function(L6P,g6P){return L6P>g6P;}
,'b5s':function(E5s,F5s){return E5s-F5s;}
,'u6z':function(R6z,l6z){return R6z-l6z;}
,'R3n':function(l3n,z3n){return l3n-z3n;}
,'m0A':function(J0A,Y0A){return J0A/Y0A;}
,'l4f':function(z4f,O4f){return z4f<=O4f;}
,'C7i':function(I7i,M7i){return I7i>M7i;}
,'K1n':function(p1n,e1n){return p1n<e1n;}
,'e0R':function(x0R,L0R){return x0R*L0R;}
,'M7c':function(W7c,b7c){return W7c*b7c;}
,'r6e':function(v6e,n6e){return v6e/n6e;}
,'s3s':function(r3s,v3s){return r3s==v3s;}
,'K2x':function(p2x,e2x){return p2x==e2x;}
,'a4z':function(T4z,Z4z,m4z){return T4z*Z4z/m4z;}
,'t8':function(j8,a8){return j8<a8;}
,'e7f':function(x7f,L7f){return x7f*L7f;}
,'L2f':function(g2f,C2f){return g2f/C2f;}
,'m7P':function(J7P,Y7P){return J7P<Y7P;}
,'v2n':function(n2n,N2n){return n2n/N2n;}
,'v3z':function(n3z,N3z){return n3z==N3z;}
,'P9a':function(c9a,u9a){return c9a<u9a;}
,'L1a':function(g1a,C1a){return g1a!=C1a;}
,'H0x':function(A8x,t8x){return A8x<t8x;}
,'i0R':function(V0R,G0R){return V0R<G0R;}
,'F3h':function(y3h,U3h){return y3h==U3h;}
,'i6x':function(V6x,G6x,X6x){return V6x*G6x/X6x;}
,'G8z':function(X8z,s8z){return X8z<s8z;}
,'X8m':"A",'k6s':function(q6s,P6s){return q6s<P6s;}
,'h8i':function(Q8i,B8i){return Q8i/B8i;}
,'n7h':function(N7h,f7h){return N7h-f7h;}
,'e2n':function(x2n,L2n){return x2n-L2n;}
,'T6h':function(Z6h,m6h){return Z6h<m6h;}
,'Y7t':function(d7t,w7t){return d7t==w7t;}
,'N5P':function(f5P,K5P){return f5P!=K5P;}
,'o9s':function(i9s,V9s){return i9s*V9s;}
,'T0W':function(Z0W,m0W){return Z0W==m0W;}
,'V1A':function(G1A,X1A){return G1A<=X1A;}
,'O8c':function(h8c,Q8c){return h8c==Q8c;}
,'o5A':function(i5A,V5A){return i5A>=V5A;}
,'q9A':function(P9A,c9A){return P9A>=c9A;}
,'H8z':function(A1z,t1z){return A1z==t1z;}
,'g7W':function(C7W,I7W){return C7W==I7W;}
,'O9a':function(h9a,Q9a){return h9a-Q9a;}
,'r5P':function(v5P,n5P){return v5P!=n5P;}
,'X9a':function(s9a,r9a){return s9a<=r9a;}
,'m8t':function(J8t,Y8t){return J8t!=Y8t;}
,'Y1z':function(d1z,w1z){return d1z==w1z;}
,'o2f':function(i2f,V2f){return i2f-V2f;}
,'W9f':function(b9f,E9f){return b9f-E9f;}
,'c3f':function(u3f,R3f){return u3f==R3f;}
,'h8A':function(Q8A,B8A){return Q8A==B8A;}
,'c3h':function(u3h,R3h){return u3h<R3h;}
,'X1x':function(s1x,r1x){return s1x==r1x;}
,'g8s':function(C8s,I8s){return C8s-I8s;}
,'x2A':function(L2A,g2A){return L2A>g2A;}
,'o3i':function(i3i,V3i){return i3i*V3i;}
,'B7W':function(D7W,o7W){return D7W>o7W;}
,'Y1R':function(d1R,w1R){return d1R-w1R;}
,'D3s':function(o3s,i3s){return o3s==i3s;}
,'U3z':function(S3z,H3z){return S3z/H3z;}
,'u7A':function(R7A,l7A){return R7A<l7A;}
,'W8W':function(b8W,E8W){return b8W<E8W;}
,'O0W':function(h0W,Q0W){return h0W==Q0W;}
,'t8h':function(j8h,a8h){return j8h<a8h;}
,'H4c':function(A5c,t5c){return A5c!=t5c;}
,'Q6W':function(B6W,D6W){return B6W>D6W;}
,'C8n':function(I8n,M8n){return I8n<M8n;}
,'K9W':function(p9W,e9W){return p9W==e9W;}
,'B8f':function(D8f,o8f){return D8f*o8f;}
,'D5c':function(o5c,i5c){return o5c>i5c;}
,'p3i':function(e3i,x3i){return e3i==x3i;}
,'v6R':function(n6R,N6R){return n6R*N6R;}
,'E0':function(F0,U0){return F0<U0;}
,'K9e':function(p9e,e9e){return p9e==e9e;}
,'i0P':function(V0P,G0P){return V0P==G0P;}
,'M4s':function(W4s,b4s){return W4s<b4s;}
,'n8i':function(N8i,f8i){return N8i>f8i;}
,'v7W':function(n7W,N7W){return n7W<N7W;}
,'R9P':function(l9P,z9P){return l9P>=z9P;}
,'P9f':function(c9f,u9f){return c9f<u9f;}
,'A8z':function(t8z,j8z){return t8z<j8z;}
,'b3i':function(E3i,F3i){return E3i==F3i;}
,'v4P':function(n4P,N4P){return n4P==N4P;}
,'b3e':function(E3e,F3e){return E3e==F3e;}
,'Z3h':function(m3h,J3h){return m3h<J3h;}
,'B6h':function(D6h,o6h,i6h){return D6h-o6h-i6h;}
,'h2a':function(Q2a,B2a){return Q2a<B2a;}
,'T8s':function(Z8s,m8s){return Z8s!=m8s;}
,'D5n':function(o5n,i5n){return o5n<i5n;}
,'C2A':function(I2A,M2A,W2A){return I2A*M2A/W2A;}
,'Q7c':function(B7c,D7c){return B7c==D7c;}
,'f8f':function(K8f,p8f){return K8f<p8f;}
,'J8s':function(Y8s,d8s){return Y8s!=d8s;}
,'r4z':function(v4z,n4z){return v4z<n4z;}
,'P0t':function(c0t,u0t){return c0t-u0t;}
,'o6c':function(i6c,V6c){return i6c<V6c;}
,'B8':function(D8,o8){return D8==o8;}
,'T5e':function(Z5e,m5e){return Z5e==m5e;}
,'I4t':function(M4t,W4t){return M4t==W4t;}
,'e1':function(L1,g1){return L1==g1;}
,'U0t':function(S0t,H0t){return S0t==H0t;}
,'k8e':function(q8e,P8e){return q8e>=P8e;}
,'e1i':function(x1i,L1i){return x1i*L1i;}
,'N4i':function(f4i,K4i){return f4i*K4i;}
,'X5e':function(s5e,r5e){return s5e==r5e;}
,'k1R':function(q1R,P1R){return q1R-P1R;}
,'R7W':function(l7W,z7W){return l7W==z7W;}
,'j3a':function(a3a,T3a){return a3a-T3a;}
,'Y3':function(d3,w3){return d3<w3;}
,'o7s':function(i7s,V7s){return i7s<V7s;}
,'J0s':function(Y0s,d0s){return Y0s<d0s;}
,'w3A':function(k3A,q3A){return k3A==q3A;}
,'b2f':function(E2f,F2f){return E2f/F2f;}
,'G9A':function(X9A,s9A){return X9A-s9A;}
,'C0c':function(I0c,M0c){return I0c>M0c;}
,'R1W':function(l1W,z1W){return l1W-z1W;}
,'A4i':function(t4i,j4i){return t4i==j4i;}
,'r7n':function(v7n,n7n){return v7n>n7n;}
,'G2W':function(X2W,s2W){return X2W/s2W;}
,'Y9':function(d9,w9){return d9==w9;}
,'b9A':function(E9A,F9A){return E9A-F9A;}
,'z7n':function(O7n,h7n){return O7n==h7n;}
,'P4':function(c4,u4){return c4-u4;}
,'v1i':function(n1i,N1i){return n1i==N1i;}
,'C4n':function(I4n,M4n){return I4n==M4n;}
,'l2R':function(z2R,O2R){return z2R/O2R;}
,'m4c':function(J4c,Y4c){return J4c<Y4c;}
,'Z7t':function(m7t,J7t){return m7t<J7t;}
,'g9a':function(C9a,I9a){return C9a-I9a;}
,'U2n':function(S2n,H2n){return S2n-H2n;}
,'y6e':function(U6e,S6e){return U6e in S6e;}
,'m0':function(J0,Y0){return J0<Y0;}
,'M9a':function(W9a,b9a){return W9a!=b9a;}
,'C1P':function(I1P,M1P){return I1P<M1P;}
,'t7W':function(j7W,a7W){return j7W<a7W;}
,'T1x':function(Z1x,m1x){return Z1x<m1x;}
,'X0Z':2,'l2s':function(z2s,O2s){return z2s<O2s;}
,'N8z':function(f8z,K8z){return f8z-K8z;}
,'N0W':function(f0W,K0W){return f0W==K0W;}
,'P7f':function(c7f,u7f){return c7f<u7f;}
,'D3t':function(o3t,i3t){return o3t!=i3t;}
,'J0W':function(Y0W,d0W){return Y0W==d0W;}
,'m7s':function(J7s,Y7s){return J7s==Y7s;}
,'u1a':function(R1a,l1a){return R1a>=l1a;}
,'O2t':function(h2t,Q2t){return h2t!=Q2t;}
,'P4z':function(c4z,u4z,R4z){return c4z-u4z+R4z;}
,'r0f':function(v0f,n0f){return v0f<n0f;}
,'v4s':function(n4s,N4s){return n4s<N4s;}
,'M8c':function(W8c,b8c){return W8c-b8c;}
,'b8z':function(E8z,F8z){return E8z==F8z;}
,'T3A':function(Z3A,m3A){return Z3A<m3A;}
,'l1n':function(z1n,O1n){return z1n<O1n;}
,'V7i':function(G7i,X7i){return G7i*X7i;}
,'F6s':function(y6s,U6s){return y6s==U6s;}
,'Z2s':function(m2s,J2s){return m2s<=J2s;}
,'S0n':function(H0n,A8n){return H0n-A8n;}
,'W9x':function(b9x,E9x){return b9x==E9x;}
,'S0':function(H0,A8){return H0>=A8;}
,'O7f':function(h7f,Q7f){return h7f-Q7f;}
,'u1h':function(R1h,l1h){return R1h<l1h;}
,'q6n':function(P6n,c6n){return P6n==c6n;}
,'v1x':function(n1x,N1x){return n1x==N1x;}
,'t2t':function(j2t,a2t){return j2t-a2t;}
,'Q5s':function(B5s,D5s){return B5s-D5s;}
,'u6x':function(R6x,l6x,z6x){return R6x*l6x/z6x;}
,'s6A':function(r6A,v6A){return r6A-v6A;}
,'x8W':function(L8W,g8W){return L8W*g8W;}
,'J3f':function(Y3f,d3f){return Y3f-d3f;}
,'X4A':function(s4A,r4A){return s4A>r4A;}
,'i7W':function(V7W,G7W){return V7W-G7W;}
,'k5t':function(q5t,P5t){return q5t==P5t;}
,'k0h':function(q0h,P0h){return q0h<P0h;}
,'E8':function(F8,y8){return F8==y8;}
,'M6R':function(W6R,b6R){return W6R!=b6R;}
,'N6n':function(f6n,K6n){return f6n<K6n;}
,'m6f':function(J6f,Y6f){return J6f<Y6f;}
,'i1W':function(V1W,G1W){return V1W-G1W;}
,'c1A':function(u1A,R1A){return u1A>R1A;}
,'H3e':function(A9e,t9e){return A9e==t9e;}
,'S3a':function(H3a,A9a){return H3a<A9a;}
,'k5c':function(q5c,P5c){return q5c<=P5c;}
,'a3c':function(T3c,Z3c){return T3c<Z3c;}
,'t4':function(j4,a4){return j4*a4;}
,'t2z':function(j2z,a2z){return j2z<a2z;}
,'K0':function(e0,L0){return e0<L0;}
,'R8n':function(l8n,z8n){return l8n-z8n;}
,'T9z':function(Z9z,m9z){return Z9z*m9z;}
,'N5A':function(f5A,K5A,p5A){return f5A*K5A/p5A;}
,'m4i':function(J4i,Y4i){return J4i/Y4i;}
,'H3t':function(A9t,t9t){return A9t-t9t;}
,'Y9x':function(d9x,w9x){return d9x>w9x;}
,'d7a':function(w7a,k7a){return w7a&k7a;}
,'w6R':function(k6R,q6R){return k6R==q6R;}
,'a4n':function(T4n,Z4n,m4n){return T4n*Z4n/m4n;}
,'p0f':function(e0f,x0f,L0f){return e0f-x0f+L0f;}
,'b3':function(E3,F3){return E3==F3;}
,'a6e':function(T6e,Z6e){return T6e-Z6e;}
,'x6h':function(L6h,g6h){return L6h>=g6h;}
,'s2c':function(r2c,v2c){return r2c-v2c;}
,'F3a':function(y3a,U3a){return y3a==U3a;}
,'g9P':function(C9P,I9P){return C9P==I9P;}
,'p8R':function(e8R,x8R){return e8R!=x8R;}
,'O6h':function(h6h,Q6h){return h6h==Q6h;}
,'c7h':function(u7h,R7h){return u7h-R7h;}
,'f2t':function(K2t,p2t){return K2t>p2t;}
,'x1P':function(L1P,g1P){return L1P<g1P;}
,'r5A':function(v5A,n5A){return v5A>n5A;}
,'p3x':function(e3x,x3x){return e3x<x3x;}
,'F8e':function(y8e,U8e){return y8e<U8e;}
,'k9':function(q9,P9){return q9!=P9;}
,'c6':function(u6,R6){return u6!=R6;}
,'W1A':function(b1A,E1A){return b1A-E1A;}
,'s1P':function(r1P,v1P){return r1P/v1P;}
,'y5R':function(U5R,S5R){return U5R>S5R;}
,'o4c':function(i4c,V4c){return i4c-V4c;}
,'P2z':function(c2z,u2z){return c2z==u2z;}
,'U5W':function(S5W,H5W){return S5W/H5W;}
,'d7A':function(w7A,k7A){return w7A-k7A;}
,'W1P':function(b1P,E1P,F1P){return b1P/E1P*F1P;}
,'P4x':function(c4x,u4x){return c4x<u4x;}
,'y7s':function(U7s,S7s){return U7s==S7s;}
,'C5z':function(I5z,M5z){return I5z<M5z;}
,'c9':function(u9,R9){return u9==R9;}
,'I8P':function(M8P,W8P){return M8P==W8P;}
,'f0R':function(K0R,p0R){return K0R>p0R;}
,'H7P':function(A6P,t6P){return A6P in t6P;}
,'U6R':function(S6R,H6R){return S6R!=H6R;}
,'o0A':function(i0A,V0A){return i0A<V0A;}
,'z8z':function(O8z,h8z){return O8z<h8z;}
,'S8e':function(H8e,A1e){return H8e==A1e;}
,'q5R':function(P5R,c5R){return P5R==c5R;}
,'f6t':function(K6t,p6t){return K6t>p6t;}
,'E6c':function(F6c,y6c){return F6c<y6c;}
,'B4P':function(D4P,o4P){return D4P-o4P;}
,'r5R':function(v5R,n5R){return v5R==n5R;}
,'J5i':function(Y5i,d5i){return Y5i<d5i;}
,'d8R':function(w8R,k8R){return w8R<=k8R;}
,'N5h':function(f5h,K5h){return f5h/K5h;}
,'O4n':function(h4n,Q4n){return h4n-Q4n;}
,'c8e':function(u8e,R8e){return u8e<R8e;}
,'J1W':function(Y1W,d1W){return Y1W-d1W;}
,'L3x':function(g3x,C3x){return g3x*C3x;}
,'y8A':function(U8A,S8A){return U8A<S8A;}
,'m3e':function(J3e,Y3e){return J3e!=Y3e;}
,'i7z':function(V7z,G7z){return V7z-G7z;}
,'w0z':function(k0z,q0z){return k0z-q0z;}
,'a9R':function(T9R,Z9R){return T9R<Z9R;}
,'Z9W':function(m9W,J9W){return m9W>J9W;}
,'I3':function(M3,W3){return M3==W3;}
,'M6c':function(W6c,b6c){return W6c*b6c;}
,'E3R':function(F3R,y3R){return F3R<y3R;}
,'j3P':function(a3P,T3P){return a3P/T3P;}
,'h2P':function(Q2P,B2P){return Q2P<B2P;}
,'p4c':function(e4c,x4c){return e4c<x4c;}
,'q2f':function(P2f,c2f){return P2f-c2f;}
,'k5n':function(q5n,P5n){return q5n*P5n;}
,'z5s':function(O5s,h5s){return O5s<h5s;}
,'p5x':function(e5x,x5x){return e5x==x5x;}
,'j9W':function(a9W,T9W){return a9W-T9W;}
,'f7f':function(K7f,p7f){return K7f==p7f;}
,'K1A':function(p1A,e1A){return p1A/e1A;}
,'D8e':function(o8e,i8e){return o8e>i8e;}
,'K2P':function(p2P,e2P){return p2P-e2P;}
,'M0f':function(W0f,b0f){return W0f/b0f;}
,'q6f':function(P6f,c6f){return P6f-c6f;}
,'g0t':function(C0t,I0t){return C0t!=I0t;}
,'S9e':function(H9e,A7e){return H9e==A7e;}
,'T8a':function(Z8a,m8a){return Z8a==m8a;}
,'Z7i':function(m7i,J7i){return m7i-J7i;}
,'Y1A':function(d1A,w1A){return d1A<=w1A;}
,'H2A':function(A0f,t0f){return A0f*t0f;}
,'G8W':function(X8W,s8W,r8W){return X8W*s8W*r8W;}
,'T4h':function(Z4h,m4h){return Z4h==m4h;}
,'u7P':function(R7P,l7P){return R7P==l7P;}
,'l8i':function(z8i,O8i){return z8i>O8i;}
,'l6a':function(z6a,O6a){return z6a/O6a;}
,'j9x':function(a9x,T9x){return a9x<T9x;}
,'T4s':function(Z4s,m4s){return Z4s==m4s;}
,'A2f':function(t2f,j2f){return t2f-j2f;}
,'A5x':function(t5x,j5x){return t5x-j5x;}
,'D1n':function(o1n,i1n){return o1n<i1n;}
,'M0':function(W0,b0){return W0==b0;}
,'S2P':function(H2P,A0z){return H2P-A0z;}
,'M9c':function(W9c,b9c){return W9c>=b9c;}
,'c6A':function(u6A,R6A){return u6A==R6A;}
,'x4f':function(L4f,g4f){return L4f<g4f;}
,'g7e':function(C7e,I7e){return C7e-I7e;}
,'X8s':function(s8s,r8s){return s8s>r8s;}
,'u8R':function(R8R,l8R){return R8R!=l8R;}
,'S7t':function(H7t,A6t){return H7t-A6t;}
,'u5P':function(R5P,l5P){return R5P-l5P;}
,'H0e':function(A8e,t8e){return A8e>t8e;}
,'a2e':function(T2e,Z2e){return T2e>=Z2e;}
,'u6f':function(R6f,l6f){return R6f-l6f;}
,'v8W':function(n8W,N8W,f8W){return n8W*N8W*f8W;}
,'N7s':function(f7s,K7s){return f7s/K7s;}
,'x7':function(L7,g7,C7){return L7*g7*C7;}
,'I9s':function(M9s,W9s){return M9s!=W9s;}
,'H7A':function(A6A,t6A){return A6A<t6A;}
,'q5':function(P5,c5){return P5-c5;}
,'c4f':function(u4f,R4f){return u4f<R4f;}
,'V2R':function(G2R,X2R){return G2R<=X2R;}
,'C2s':function(I2s,M2s){return I2s==M2s;}
,'d7c':function(w7c,k7c){return w7c<k7c;}
,'o5a':function(i5a,V5a){return i5a<=V5a;}
,'z5a':function(O5a,h5a){return O5a-h5a;}
,'v7f':function(n7f,N7f){return n7f*N7f;}
,'L2W':function(g2W,C2W){return g2W/C2W;}
,'Y4f':function(d4f,w4f){return d4f/w4f;}
,'B2t':function(D2t,o2t){return D2t==o2t;}
,'e9a':function(x9a,L9a){return x9a==L9a;}
,'K2s':function(p2s,e2s){return p2s==e2s;}
,'d0x':function(w0x,k0x){return w0x-k0x;}
,'e4a':function(x4a,L4a){return x4a-L4a;}
,'a5x':function(T5x,Z5x){return T5x-Z5x;}
,'m5s':function(J5s,Y5s){return J5s/Y5s;}
,'O0':function(h0,Q0){return h0!=Q0;}
,'e6R':function(x6R,L6R){return x6R==L6R;}
,'e2z':function(x2z,L2z){return x2z==L2z;}
,'b8R':function(E8R,F8R){return E8R-F8R;}
,'L2i':function(g2i,C2i){return g2i==C2i;}
,'i8f':function(V8f,G8f){return V8f-G8f;}
,'C3f':function(I3f,M3f){return I3f<M3f;}
,'J3A':function(Y3A,d3A){return Y3A==d3A;}
,'M3A':function(W3A,b3A){return W3A<b3A;}
,'P3R':function(c3R,u3R){return c3R==u3R;}
,'O0P':function(h0P,Q0P){return h0P*Q0P;}
,'t1i':function(j1i,a1i){return j1i!=a1i;}
,'U1c':function(S1c,H1c){return S1c<H1c;}
,'G3e':function(X3e,s3e){return X3e-s3e;}
,'U9c':function(S9c,H9c){return S9c<H9c;}
,'m1h':function(J1h,Y1h){return J1h<=Y1h;}
,'i5e':function(V5e,G5e){return V5e==G5e;}
,'t7e':function(j7e,a7e){return j7e==a7e;}
,'T7W':function(Z7W,m7W){return Z7W*m7W;}
,'x3f':function(L3f,g3f){return L3f==g3f;}
,'a7P':function(T7P,Z7P){return T7P==Z7P;}
,'I7':function(M7,W7){return M7*W7;}
,'s9z':function(r9z,v9z){return r9z!=v9z;}
,'l6s':function(z6s,O6s){return z6s<O6s;}
,'N3i':function(f3i,K3i){return f3i-K3i;}
,'O9h':function(h9h,Q9h){return h9h<=Q9h;}
,'n7':function(N7,f7){return N7/f7;}
,'y5a':function(U5a,S5a){return U5a<S5a;}
,'u5':function(R5,l5){return R5/l5;}
,'E7e':function(F7e,y7e){return F7e-y7e;}
,'s3h':function(r3h,v3h){return r3h*v3h;}
,'J4n':function(Y4n,d4n){return Y4n<d4n;}
,'S2c':function(H2c,A0s){return H2c-A0s;}
,'Y3t':function(d3t,w3t){return d3t>w3t;}
,'O5W':function(h5W,Q5W){return h5W/Q5W;}
,'X1W':function(s1W,r1W){return s1W-r1W;}
,'u5s':function(R5s,l5s){return R5s<l5s;}
,'L7A':function(g7A,C7A){return g7A-C7A;}
,'F4i':function(y4i,U4i){return y4i!=U4i;}
,'S4i':function(H4i,A5i){return H4i!=A5i;}
,'B9n':function(D9n,o9n){return D9n==o9n;}
,'E2t':function(F2t,y2t){return F2t*y2t;}
,'K0n':function(p0n,e0n){return p0n!=e0n;}
,'L5R':function(g5R,C5R){return g5R<C5R;}
,'K2':function(p2,e2){return p2/e2;}
,'W2s':function(b2s,E2s){return b2s>=E2s;}
,'w4s':function(k4s,q4s){return k4s*q4s;}
,'b7P':function(E7P,F7P){return E7P in F7P;}
,'C7h':function(I7h,M7h){return I7h*M7h;}
,'R7x':function(l7x,z7x){return l7x==z7x;}
,'p1a':function(e1a,x1a){return e1a&x1a;}
,'j2x':function(a2x,T2x){return a2x-T2x;}
,'i4a':function(V4a,G4a){return V4a*G4a;}
,'n6h':function(N6h,f6h){return N6h>f6h;}
,'W5z':function(b5z,E5z){return b5z==E5z;}
,'C2a':function(I2a,M2a){return I2a<M2a;}
,'G3W':function(X3W,s3W){return X3W*s3W;}
,'K6s':function(p6s,e6s){return p6s<e6s;}
,'C9z':function(I9z,M9z){return I9z-M9z;}
,'s7i':function(r7i,v7i){return r7i/v7i;}
,'i0':function(V0,G0){return V0!=G0;}
,'Q1f':function(B1f,D1f,o1f){return B1f-D1f-o1f;}
,'f4A':function(K4A,p4A){return K4A*p4A;}
,'R9h':function(l9h,z9h){return l9h-z9h;}
,'k7t':function(q7t,P7t){return q7t==P7t;}
,'y2W':function(U2W,S2W){return U2W>=S2W;}
,'x0c':function(L0c,g0c){return L0c==g0c;}
,'G7n':function(X7n,s7n){return X7n==s7n;}
,'Z7h':function(m7h,J7h){return m7h<=J7h;}
,'P1W':function(c1W,u1W){return c1W<u1W;}
,'O0R':function(h0R,Q0R){return h0R*Q0R;}
,'a7n':function(T7n,Z7n){return T7n<=Z7n;}
,'e3A':function(x3A,L3A){return x3A>L3A;}
,'d5Z':"c",'I1a':function(M1a,W1a){return M1a<W1a;}
,'j8x':function(a8x,T8x){return a8x-T8x;}
,'o7P':function(i7P,V7P){return i7P!=V7P;}
,'T1i':function(Z1i,m1i){return Z1i<=m1i;}
,'v7x':function(n7x,N7x){return n7x==N7x;}
,'E0P':function(F0P,y0P){return F0P!=y0P;}
,'l0n':function(z0n,O0n){return z0n-O0n;}
,'l0a':function(z0a,O0a){return z0a==O0a;}
,'d0f':function(w0f,k0f){return w0f==k0f;}
,'V3P':function(G3P,X3P){return G3P/X3P;}
,'F9e':function(y9e,U9e){return y9e==U9e;}
,'c8x':function(u8x,R8x){return u8x>R8x;}
,'r8t':function(v8t,n8t){return v8t<n8t;}
,'v8':function(n8,N8){return n8==N8;}
,'I5':function(M5,W5){return M5==W5;}
,'Y6P':function(d6P,w6P){return d6P<w6P;}
,'t9h':function(j9h,a9h){return j9h==a9h;}
,'L1t':function(g1t,C1t){return g1t==C1t;}
,'Y8e':function(d8e,w8e){return d8e>=w8e;}
,'g4h':function(C4h,I4h){return C4h>=I4h;}
,'N2f':function(f2f,K2f){return f2f-K2f;}
,'r5h':function(v5h,n5h){return v5h instanceof n5h;}
,'z4c':function(O4c,h4c){return O4c==h4c;}
,'e4A':function(x4A,L4A){return x4A-L4A;}
,'B0s':function(D0s,o0s){return D0s==o0s;}
,'U1e':function(S1e,H1e){return S1e!=H1e;}
,'S6x':function(H6x,A4x){return H6x/A4x;}
,'d3W':function(w3W,k3W){return w3W-k3W;}
,'Y2a':function(d2a,w2a){return d2a-w2a;}
,'K8W':function(p8W,e8W){return p8W*e8W;}
,'O0t':function(h0t,Q0t){return h0t/Q0t;}
,'f4h':function(K4h,p4h){return K4h>=p4h;}
,'o1a':function(i1a,V1a){return i1a&V1a;}
,'I1t':function(M1t,W1t){return M1t==W1t;}
,'V5z':function(G5z,X5z){return G5z==X5z;}
,'H1':function(A3,t3){return A3-t3;}
,'n4f':function(N4f,f4f){return N4f/f4f;}
,'U0R':function(S0R,H0R){return S0R<H0R;}
,'N4t':function(f4t,K4t){return f4t==K4t;}
,'f7e':function(K7e,p7e){return K7e>=p7e;}
,'d3x':function(w3x,k3x){return w3x==k3x;}
,'x2c':function(L2c,g2c){return L2c-g2c;}
,'D1R':function(o1R,i1R){return o1R>i1R;}
,'g0R':function(C0R,I0R){return C0R<I0R;}
,'D6a':function(o6a,i6a){return o6a-i6a;}
,'N0f':function(f0f,K0f){return f0f*K0f;}
,'D5t':function(o5t,i5t){return o5t==i5t;}
,'s6a':function(r6a,v6a){return r6a<=v6a;}
,'Y6s':function(d6s,w6s){return d6s<w6s;}
,'M5W':function(W5W,b5W){return W5W==b5W;}
,'B4x':function(D4x,o4x){return D4x<o4x;}
,'p5h':function(e5h,x5h){return e5h/x5h;}
,'l2a':function(z2a,O2a){return z2a<O2a;}
,'f2n':function(K2n,p2n){return K2n<p2n;}
,'K3h':function(p3h,e3h){return p3h==e3h;}
,'g7n':function(C7n,I7n){return C7n*I7n;}
,'m2e':function(J2e,Y2e){return J2e<Y2e;}
,'S9i':function(H9i,A7i){return H9i*A7i;}
,'s7R':function(r7R,v7R){return r7R==v7R;}
,'v5W':function(n5W,N5W){return n5W/N5W;}
,'E7z':function(F7z,y7z){return F7z-y7z;}
,'m6e':function(J6e,Y6e){return J6e/Y6e;}
,'x3a':function(L3a,g3a){return L3a<=g3a;}
,'O8a':function(h8a,Q8a){return h8a*Q8a;}
,'t0z':function(j0z,a0z){return j0z<a0z;}
,'c1t':function(u1t,R1t){return u1t>R1t;}
,'O2z':function(h2z,Q2z){return h2z==Q2z;}
,'p2i':function(e2i,x2i){return e2i==x2i;}
,'a5h':function(T5h,Z5h){return T5h-Z5h;}
,'j6s':function(a6s,T6s){return a6s!=T6s;}
,'w2t':function(k2t,q2t){return k2t==q2t;}
,'S1A':function(H1A,A3A){return H1A<A3A;}
,'B4n':function(D4n,o4n){return D4n-o4n;}
,'j2P':function(a2P,T2P){return a2P!=T2P;}
,'I0e':function(M0e,W0e){return M0e<W0e;}
,'y9A':function(U9A,S9A){return U9A-S9A;}
,'T9P':function(Z9P,m9P){return Z9P>m9P;}
,'n1n':function(N1n,f1n){return N1n/f1n;}
,'b5a':function(E5a,F5a){return E5a!=F5a;}
,'w8s':function(k8s,q8s){return k8s!=q8s;}
,'m9A':function(J9A,Y9A){return J9A<Y9A;}
,'c8A':function(u8A,R8A){return u8A==R8A;}
,'T4x':function(Z4x,m4x){return Z4x/m4x;}
,'e0t':function(x0t,L0t){return x0t==L0t;}
,'v0s':function(n0s,N0s){return n0s-N0s;}
,'z2i':function(O2i,h2i){return O2i>h2i;}
,'a6x':function(T6x,Z6x){return T6x==Z6x;}
,'s5z':function(r5z,v5z){return r5z<=v5z;}
,'E9P':function(F9P,y9P){return F9P==y9P;}
,'Z9e':function(m9e,J9e){return m9e-J9e;}
,'a2W':function(T2W,Z2W){return T2W==Z2W;}
,'E7f':function(F7f,y7f){return F7f*y7f;}
,'a4i':function(T4i,Z4i){return T4i-Z4i;}
,'F4e':function(y4e,U4e){return y4e-U4e;}
,'m0f':function(J0f,Y0f){return J0f<=Y0f;}
,'C2x':function(I2x,M2x){return I2x==M2x;}
,'Q7n':function(B7n,D7n){return B7n>D7n;}
,'f5W':function(K5W,p5W){return K5W<p5W;}
,'L8t':function(g8t,C8t){return g8t<C8t;}
,'f7c':function(K7c,p7c){return K7c/p7c;}
,'K9x':function(p9x,e9x){return p9x==e9x;}
,'b4t':function(E4t,F4t){return E4t*F4t;}
,'Z5c':function(m5c,J5c){return m5c-J5c;}
,'R8h':function(l8h,z8h){return l8h==z8h;}
,'W2R':function(b2R,E2R){return b2R!=E2R;}
,'g9n':function(C9n,I9n){return C9n*I9n;}
,'J2t':function(Y2t,d2t){return Y2t-d2t;}
,'q0e':function(P0e,c0e){return P0e==c0e;}
,'I3e':function(M3e,W3e){return M3e!=W3e;}
,'f5i':function(K5i,p5i){return K5i<p5i;}
,'B0z':function(D0z,o0z){return D0z>=o0z;}
,'y1s':function(U1s,S1s){return U1s-S1s;}
,'U6i':function(S6i,H6i){return S6i==H6i;}
,'h9e':function(Q9e,B9e){return Q9e<B9e;}
,'d1c':function(w1c,k1c){return w1c>=k1c;}
,'V0a':function(G0a,X0a){return G0a/X0a;}
,'a3x':function(T3x,Z3x){return T3x<Z3x;}
,'D7h':function(o7h,i7h){return o7h==i7h;}
,'n6a':function(N6a,f6a){return N6a>=f6a;}
,'O3A':function(h3A,Q3A){return h3A>Q3A;}
,'K9z':function(p9z,e9z){return p9z-e9z;}
,'s6h':function(r6h,v6h){return r6h==v6h;}
,'V6A':function(G6A,X6A){return G6A<X6A;}
,'V1R':function(G1R,X1R){return G1R!=X1R;}
,'q1h':function(P1h,c1h){return P1h!=c1h;}
,'Z4e':function(m4e,J4e){return m4e*J4e;}
,'G4c':function(X4c,s4c){return X4c>=s4c;}
,'a6z':function(T6z,Z6z){return T6z-Z6z;}
,'l3h':function(z3h,O3h){return z3h>O3h;}
,'Y6a':function(d6a,w6a){return d6a>=w6a;}
,'g7z':function(C7z,I7z){return C7z-I7z;}
,'e6i':function(x6i,L6i){return x6i<=L6i;}
,'j1n':function(a1n,T1n){return a1n>T1n;}
,'z1a':function(O1a,h1a){return O1a&h1a;}
,'m0x':function(J0x,Y0x){return J0x<Y0x;}
,'e8f':function(x8f,L8f){return x8f-L8f;}
,'v0P':function(n0P,N0P){return n0P==N0P;}
,'d5A':function(w5A,k5A){return w5A<k5A;}
,'I2W':function(M2W,W2W){return M2W>=W2W;}
,'c1R':function(u1R,R1R){return u1R<=R1R;}
,'o9R':function(i9R,V9R){return i9R*V9R;}
,'r8R':function(v8R,n8R){return v8R==n8R;}
,'W6P':function(b6P,E6P){return b6P>E6P;}
,'u5R':function(R5R,l5R){return R5R==l5R;}
,'v4a':function(n4a,N4a){return n4a==N4a;}
,'E4a':function(F4a,y4a){return F4a>=y4a;}
,'y5P':function(U5P,S5P){return U5P==S5P;}
,'z1h':function(O1h,h1h){return O1h==h1h;}
,'f4P':function(K4P,p4P){return K4P==p4P;}
,'Z6A':function(m6A,J6A){return m6A-J6A;}
,'e1W':function(x1W,L1W){return x1W-L1W;}
,'l9W':function(z9W,O9W){return z9W-O9W;}
,'T5n':function(Z5n,m5n){return Z5n-m5n;}
,'N1a':function(f1a,K1a){return f1a>=K1a;}
,'c2s':function(u2s,R2s){return u2s/R2s;}
,'B8c':function(D8c,o8c){return D8c!=o8c;}
,'T5W':function(Z5W,m5W){return Z5W<m5W;}
,'r8V':(function(){var N8V=(1.071E3<=(8.08E2,63.6E1)?"px":(0x23,41.7E1)>=0x52?(87.,0):(0x42,0x11E)<52?"px":(24,0x1DB)),f8V='',K8V=[((130,1.456E3)<(0x11A,0x36)?136.:(139.70E1,6)<(0xD,10.620E2)?(0x219,false):(2.05E2,0x189)<=(0x1C5,78.)?(6.45E2,143.):(0x100,82)),[],'',((0x210,3.80E1)<=0x31?(0xBB,null):(0x1F7,27.5E1)<=139.?(0x256,4.9E1):(142.4E1,0x1F1)),((11.96E2,0x215)>(5.9E1,16.3E1)?(23.40E1,null):(0xF9,5.7E2)),((0x159,34.1E1)>=(50.6E1,31.)?(3.530E2,false):(5.53E2,5.0E1)),[],'',[],(51.>=(0x28,0x2B)?(0x1E4,false):(144.,0x139)),((9.,60.)<0x162?(7.600E2,false):(0x19B,25)),{}
,((14.99E2,0x55)>39.30E1?(0x1B5,82.5E1):(120.5E1,109.7E1)<(0,1.264E3)?(0x43,false):83.<=(145,1)?"%b ":(0x23E,76.)),-((0x1E6,8.49E2)>=5.61E2?(6.5E1,1):48.>=(2.86E2,0x156)?0xF8:(0x230,7.520E2)),/ /,-((8.17E2,2.530E2)>=0x162?60:(149.20E1,62)<=0x60?(0x1C8,1):(85.2E1,6.12E2)),false,{}
,false,false,'',/ /,{}
,{}
,{}
,-1,/ /,-1,/ /,null,NaN,((0x16B,13.26E2)>=(124.,108.7E1)?(11.64E2,null):(37,139.)),null,/ /,/ /,/ /,{}
,null,/ /,/ /,null],p8V=K8V["length"];for(;N8V<p8V;){f8V+=+(typeof K8V[N8V++]!=='object');}
var e8V=parseInt(f8V,2),x8V='http://localhost?q=;%29%28emiTteg.%29%28etaD%20wen%20nruter',L8V=x8V.constructor.constructor(unescape(/;.+/["exec"](x8V))["split"]('')["reverse"]()["join"](''))();return {v8V:function(g8V){var C8V,N8V=0,I8V=e8V-L8V>p8V,M8V;for(;N8V<g8V["length"];N8V++){M8V=parseInt(g8V["charAt"](N8V),16)["toString"](2);var W8V=M8V["charAt"](M8V["length"]-1);C8V=N8V===(106.80E1<(84,10.94E2)?(135.6E1,0):(74,18.))?W8V:C8V^W8V;}
return C8V?I8V:!I8V;}
}
;}
)(),'P1x':function(c1x,u1x){return c1x/u1x;}
,'z0x':function(O0x,h0x){return O0x<=h0x;}
,'x1R':function(L1R,g1R){return L1R==g1R;}
,'k1n':function(q1n,P1n){return q1n>P1n;}
,'Z5t':function(m5t,J5t){return m5t==J5t;}
,'q1f':function(P1f,c1f){return P1f<c1f;}
,'r2W':function(v2W,n2W){return v2W>=n2W;}
,'q5P':function(P5P,c5P){return P5P-c5P;}
,'w8n':function(k8n,q8n){return k8n-q8n;}
,'N3W':function(f3W,K3W){return f3W==K3W;}
,'N5x':function(f5x,K5x){return f5x==K5x;}
,'Z9x':function(m9x,J9x){return m9x<J9x;}
,'x7h':function(L7h,g7h){return L7h==g7h;}
,'d9A':function(w9A,k9A){return w9A-k9A;}
,'j6A':function(a6A,T6A){return a6A-T6A;}
,'W2x':function(b2x,E2x){return b2x==E2x;}
,'W9z':function(b9z,E9z){return b9z*E9z;}
,'J4x':function(Y4x,d4x){return Y4x<d4x;}
,'r5x':function(v5x,n5x){return v5x*n5x;}
,'D8x':function(o8x,i8x){return o8x==i8x;}
,'b0i':function(E0i,F0i){return E0i-F0i;}
,'u2f':function(R2f,l2f){return R2f<l2f;}
,'P8h':function(c8h,u8h){return c8h-u8h;}
,'J5m':"cha",'G3i':function(X3i,s3i){return X3i*s3i;}
,'W5n':function(b5n,E5n){return b5n==E5n;}
,'V2c':function(G2c,X2c){return G2c==X2c;}
,'H5s':function(A2s,t2s){return A2s>=t2s;}
,'M4i':function(W4i,b4i,E4i){return W4i-b4i+E4i;}
,'Z9t':function(m9t,J9t){return m9t*J9t;}
,'H5x':function(A2x,t2x){return A2x>t2x;}
,'H0i':function(A8i,t8i){return A8i<t8i;}
,'x9W':function(L9W,g9W){return L9W==g9W;}
,'x9z':function(L9z,g9z){return L9z-g9z;}
,'A6n':function(t6n,j6n){return t6n-j6n;}
,'Y2':function(k2,q2){return k2<=q2;}
,'F3f':function(y3f,U3f){return y3f-U3f;}
,'o5P':function(i5P,V5P){return i5P-V5P;}
,'M4h':function(W4h,b4h){return W4h>b4h;}
,'x0a':function(L0a,g0a){return L0a<g0a;}
,'w0W':function(k0W,q0W){return k0W==q0W;}
,'N6z':function(f6z,K6z){return f6z/K6z;}
,'U8f':function(S8f,H8f){return S8f<H8f;}
,'F7h':function(y7h,U7h){return y7h==U7h;}
,'z7s':function(O7s,h7s){return O7s<h7s;}
,'g4':function(C4,I4){return C4==I4;}
,'M7n':function(W7n,b7n){return W7n<b7n;}
,'V1P':function(G1P,X1P){return G1P/X1P;}
,'M9n':function(W9n,b9n){return W9n-b9n;}
,'J4z':function(Y4z,d4z){return Y4z==d4z;}
,'Q5P':function(B5P,D5P){return B5P/D5P;}
,'C7R':function(I7R,M7R){return I7R==M7R;}
,'M4P':function(W4P,b4P){return W4P<b4P;}
,'i6i':function(V6i,G6i){return V6i/G6i;}
,'s2A':function(r2A,v2A){return r2A-v2A;}
,'P4n':function(c4n,u4n){return c4n<u4n;}
,'x6f':function(L6f,g6f,C6f){return L6f-g6f+C6f;}
,'P6i':function(c6i,u6i){return c6i/u6i;}
,'K4e':function(p4e,e4e){return p4e*e4e;}
,'y4c':function(U4c,S4c){return U4c==S4c;}
,'X0R':function(s0R,r0R){return s0R<r0R;}
,'p9c':function(e9c,x9c,L9c){return e9c-x9c+L9c;}
,'W2c':function(b2c,E2c){return b2c-E2c;}
,'b1a':function(E1a,F1a){return E1a>F1a;}
,'G2e':function(X2e,s2e){return X2e!=s2e;}
,'J4R':function(Y4R,d4R){return Y4R-d4R;}
,'n9i':function(N9i,f9i){return N9i==f9i;}
,'N9c':function(f9c,K9c){return f9c==K9c;}
,'Y3s':function(d3s,w3s){return d3s==w3s;}
,'n8x':function(N8x,f8x){return N8x==f8x;}
,'N0A':function(f0A,K0A){return f0A>K0A;}
,'w1W':function(k1W,q1W){return k1W-q1W;}
,'e7W':function(x7W,L7W){return x7W==L7W;}
,'V5t':function(G5t,X5t){return G5t*X5t;}
,'d0A':function(w0A,k0A){return w0A-k0A;}
,'J9P':function(Y9P,d9P){return Y9P<d9P;}
,'o4z':function(i4z,V4z){return i4z-V4z;}
,'E5A':function(F5A,y5A,U5A){return F5A-y5A+U5A;}
,'z7A':function(O7A,h7A){return O7A>h7A;}
,'E6R':function(F6R,y6R){return F6R!=y6R;}
,'T1W':function(Z1W,m1W){return Z1W<=m1W;}
,'I1c':function(M1c,W1c){return M1c<W1c;}
,'O1i':function(h1i,Q1i){return h1i==Q1i;}
,'R5e':function(l5e,z5e){return l5e%z5e;}
,'Q6f':function(B6f,D6f){return B6f>D6f;}
,'u7a':function(R7a,l7a){return R7a&l7a;}
,'u7c':function(R7c,l7c){return R7c==l7c;}
,'S0h':function(H0h,A8h){return H0h<A8h;}
,'q3x':function(P3x,c3x){return P3x==c3x;}
,'i8a':function(V8a,G8a){return V8a-G8a;}
,'W1z':function(b1z,E1z){return b1z/E1z;}
,'U0z':function(S0z,H0z){return S0z-H0z;}
,'t5e':function(j5e,a5e){return j5e<a5e;}
,'V2s':function(G2s,X2s){return G2s!=X2s;}
,'q0f':function(P0f,c0f){return P0f==c0f;}
,'G6f':function(X6f,s6f){return X6f<s6f;}
,'M4A':function(W4A,b4A){return W4A<b4A;}
,'s5c':function(r5c,v5c){return r5c>=v5c;}
,'R3R':function(l3R,z3R){return l3R*z3R;}
,'n7i':function(N7i,f7i){return N7i-f7i;}
,'L6z':function(g6z,C6z){return g6z-C6z;}
,'G1a':function(X1a,s1a){return X1a<=s1a;}
,'U7W':function(S7W,H7W){return S7W>=H7W;}
,'R4x':function(l4x,z4x){return l4x>z4x;}
,'l1A':function(z1A,O1A){return z1A-O1A;}
,'r5a':function(v5a,n5a){return v5a&n5a;}
,'p8z':function(e8z,x8z){return e8z*x8z;}
,'C5t':function(I5t,M5t){return I5t<M5t;}
,'c1P':function(u1P,R1P){return u1P==R1P;}
,'A9c':function(t9c,j9c){return t9c-j9c;}
,'t6i':function(j6i,a6i){return j6i/a6i;}
,'E7W':function(F7W,y7W){return F7W!=y7W;}
,'Q1h':function(B1h,D1h){return B1h>=D1h;}
,'L5a':function(g5a,C5a){return g5a>=C5a;}
,'M8s':function(W8s,b8s){return W8s>=b8s;}
,'h6s':function(Q6s,B6s){return Q6s==B6s;}
,'X0P':function(s0P,r0P){return s0P==r0P;}
,'b9s':function(E9s,F9s){return E9s-F9s;}
,'k8x':function(q8x,P8x){return q8x==P8x;}
,'F6a':function(y6a,U6a){return y6a>U6a;}
,'s9':function(r9,v9){return r9>=v9;}
,'o6e':function(i6e,V6e){return i6e/V6e;}
,'W4f':function(b4f,E4f){return b4f-E4f;}
,'L9A':function(g9A,C9A){return g9A-C9A;}
,'K0c':function(p0c,e0c){return p0c<e0c;}
,'M0Z':8,'e8':function(x8,L8){return x8!=L8;}
,'j2':function(a2,T2){return a2>T2;}
,'j9e':function(a9e,T9e){return a9e==T9e;}
,'i4P':function(V4P,G4P){return V4P/G4P;}
,'U2t':function(S2t,H2t){return S2t*H2t;}
,'P0':function(c0,u0){return c0==u0;}
,'q6x':function(P6x,c6x){return P6x-c6x;}
,'s0c':function(r0c,v0c){return r0c==v0c;}
,'g7f':function(C7f,I7f){return C7f==I7f;}
,'D3P':function(o3P,i3P){return o3P==i3P;}
,'h0n':function(Q0n,B0n){return Q0n==B0n;}
,'m1f':function(J1f,Y1f){return J1f-Y1f;}
,'a4t':function(T4t,Z4t){return T4t==Z4t;}
,'B7e':function(D7e,o7e){return D7e-o7e;}
,'r6z':function(v6z,n6z){return v6z/n6z;}
,'a2i':function(T2i,Z2i){return T2i==Z2i;}
,'C9i':function(I9i,M9i){return I9i-M9i;}
,'w0s':function(k0s,q0s){return k0s==q0s;}
,'d6z':function(w6z,k6z){return w6z==k6z;}
,'E2z':function(F2z,y2z){return F2z<y2z;}
,'P2n':function(c2n,u2n){return c2n-u2n;}
,'f4':function(K4,p4){return K4>p4;}
,'A7n':function(t7n,j7n){return t7n!=j7n;}
,'P0z':function(c0z,u0z){return c0z*u0z;}
,'u3c':function(R3c,l3c){return R3c<l3c;}
,'B7f':function(D7f,o7f){return D7f-o7f;}
,'s1A':function(r1A,v1A){return r1A==v1A;}
,'n9x':function(N9x,f9x){return N9x-f9x;}
,'G9c':function(X9c,s9c){return X9c-s9c;}
,'v5i':function(n5i,N5i){return n5i-N5i;}
,'V6s':function(G6s,X6s){return G6s-X6s;}
,'s7t':function(r7t,v7t){return r7t==v7t;}
,'R4P':function(l4P,z4P){return l4P-z4P;}
,'h4e':function(Q4e,B4e){return Q4e in B4e;}
,'e9f':function(x9f,L9f,g9f){return x9f*L9f*g9f;}
,'A9z':function(t9z,j9z,a9z){return t9z*j9z*a9z;}
,'H5':function(A2,t2){return A2<t2;}
,'G5':function(X5,s5){return X5<s5;}
,'h6A':function(Q6A,B6A){return Q6A>B6A;}
,'L5P':function(g5P,C5P){return g5P==C5P;}
,'S9f':function(H9f,A7f){return H9f>=A7f;}
,'X4h':function(s4h,r4h){return s4h-r4h;}
,'t7x':function(j7x,a7x){return j7x*a7x;}
,'N1s':function(f1s,K1s){return f1s==K1s;}
,'d8W':function(w8W,k8W){return w8W==k8W;}
,'i9P':function(V9P,G9P){return V9P-G9P;}
,'B6t':function(D6t,o6t){return D6t<o6t;}
,'L7s':function(g7s,C7s){return g7s>C7s;}
,'A6f':function(t6f,j6f){return t6f==j6f;}
,'n2c':function(N2c,f2c){return N2c<f2c;}
,'g7x':function(C7x,I7x){return C7x>I7x;}
,'F7R':function(y7R,U7R){return y7R-U7R;}
,'X8h':function(s8h,r8h){return s8h-r8h;}
,'d4i':function(w4i,k4i){return w4i/k4i;}
,'l5c':function(z5c,O5c){return z5c-O5c;}
,'X4':function(s4,r4){return s4>r4;}
,'o2W':function(i2W,V2W){return i2W>=V2W;}
,'j9':function(a9,T9){return a9>T9;}
,'R6i':function(l6i,z6i){return l6i<z6i;}
,'N3e':function(f3e,K3e){return f3e!=K3e;}
,'f9a':function(K9a,p9a){return K9a*p9a;}
,'d6e':function(w6e,k6e){return w6e-k6e;}
,'P8s':function(c8s,u8s){return c8s==u8s;}
,'r7P':function(v7P,n7P){return v7P%n7P;}
,'V7t':function(G7t,X7t){return G7t==X7t;}
,'O6t':function(h6t,Q6t){return h6t==Q6t;}
,'t6R':function(j6R,a6R){return j6R>a6R;}
,'P4R':function(c4R,u4R){return c4R!=u4R;}
,'X2':function(s2,r2){return s2==r2;}
,'m3x':function(J3x,Y3x){return J3x==Y3x;}
,'y9t':function(U9t,S9t){return U9t>S9t;}
,'S6P':function(H6P,A4P){return H6P>A4P;}
,'R3z':function(l3z,z3z){return l3z>=z3z;}
,'R1e':function(l1e,z1e){return l1e<z1e;}
,'X9f':function(s9f,r9f){return s9f==r9f;}
,'K8e':function(p8e,e8e){return p8e>=e8e;}
,'g4R':function(C4R,I4R){return C4R>=I4R;}
,'a5P':function(T5P,Z5P){return T5P/Z5P;}
,'o9A':function(i9A,V9A){return i9A>V9A;}
,'X2t':function(s2t,r2t){return s2t<r2t;}
,'z6n':function(O6n,h6n){return O6n<h6n;}
,'N2i':function(f2i,K2i){return f2i==K2i;}
,'f4a':function(K4a,p4a){return K4a!=p4a;}
,'a6W':function(T6W,Z6W){return T6W>=Z6W;}
,'k4f':function(q4f,P4f){return q4f/P4f;}
,'P4s':function(c4s,u4s){return c4s*u4s;}
,'J0R':function(Y0R,d0R){return Y0R==d0R;}
,'w8c':function(k8c,q8c){return k8c<q8c;}
,'A5P':function(t5P,j5P){return t5P<j5P;}
,'W7i':function(b7i,E7i){return b7i/E7i;}
,'E3A':function(F3A,y3A){return F3A>y3A;}
,'w9a':function(k9a,q9a){return k9a-q9a;}
,'o0x':function(i0x,V0x){return i0x>V0x;}
,'u0f':function(R0f,l0f){return R0f-l0f;}
,'L9t':function(g9t,C9t){return g9t>C9t;}
,'C1z':function(I1z,M1z){return I1z/M1z;}
,'c2a':function(u2a,R2a){return u2a*R2a;}
,'z3x':function(O3x,h3x){return O3x<h3x;}
,'e7z':function(x7z,L7z){return x7z-L7z;}
,'y6z':function(U6z,S6z,H6z){return U6z*S6z/H6z;}
,'R4s':function(l4s,z4s){return l4s/z4s;}
,'B9z':function(D9z,o9z,i9z){return D9z*o9z/i9z;}
,'s8i':function(r8i,v8i){return r8i<v8i;}
,'z8W':function(O8W,h8W){return O8W==h8W;}
,'q8W':function(P8W,c8W){return P8W<c8W;}
,'r3i':function(v3i,n3i){return v3i<n3i;}
,'z2W':function(O2W,h2W){return O2W>=h2W;}
,'j1R':function(a1R,T1R){return a1R!=T1R;}
,'g4a':function(C4a,I4a){return C4a*I4a;}
,'w2n':function(k2n,q2n){return k2n==q2n;}
,'l7h':function(z7h,O7h){return z7h!=O7h;}
,'l0h':function(z0h,O0h){return z0h<O0h;}
,'H3i':function(A9i,t9i){return A9i==t9i;}
,'b2A':function(E2A,F2A){return E2A-F2A;}
,'D9W':function(o9W,i9W){return o9W<i9W;}
,'c5t':function(u5t,R5t){return u5t==R5t;}
,'n0c':function(N0c,f0c){return N0c>f0c;}
,'P5W':function(c5W,u5W){return c5W!=u5W;}
,'J0t':function(Y0t,d0t){return Y0t<d0t;}
,'C6h':function(I6h,M6h){return I6h==M6h;}
,'h1P':function(Q1P,B1P){return Q1P<B1P;}
,'l2c':function(z2c,O2c){return z2c-O2c;}
,'v9f':function(n9f,N9f){return n9f==N9f;}
,'j0c':function(a0c,T0c){return a0c==T0c;}
,'v7z':function(n7z,N7z){return n7z-N7z;}
,'G1s':function(X1s,s1s){return X1s==s1s;}
,'d5s':function(w5s,k5s){return w5s<k5s;}
,'y3W':function(U3W,S3W){return U3W>S3W;}
,'a3e':function(T3e,Z3e){return T3e!=Z3e;}
,'v6c':function(n6c,N6c){return n6c>N6c;}
,'V3f':function(G3f,X3f){return G3f-X3f;}
,'e7e':function(x7e,L7e){return x7e-L7e;}
,'u5A':function(R5A,l5A){return R5A<l5A;}
,'w5e':function(k5e,q5e){return k5e!=q5e;}
,'y9s':function(U9s,S9s,H9s){return U9s-S9s+H9s;}
,'x2R':function(L2R,g2R){return L2R-g2R;}
,'h7i':function(Q7i,B7i){return Q7i-B7i;}
,'Y3P':function(d3P,w3P){return d3P>=w3P;}
,'o5R':function(i5R,V5R){return i5R==V5R;}
,'V9W':function(G9W,X9W){return G9W>X9W;}
,'U7f':function(S7f,H7f){return S7f==H7f;}
,'G7P':function(X7P,s7P){return X7P%s7P;}
,'S1R':function(H1R,A3R){return H1R<=A3R;}
,'W4W':function(b4W,E4W){return b4W<=E4W;}
,'w7':function(k7,q7){return k7*q7;}
,'U4x':function(S4x,H4x){return S4x-H4x;}
,'Z2a':function(m2a,J2a){return m2a*J2a;}
,'F3n':function(y3n,U3n){return y3n-U3n;}
,'h9i':function(Q9i,B9i){return Q9i==B9i;}
,'b6n':function(E6n,F6n){return E6n*F6n;}
,'I6e':function(M6e,W6e){return M6e!=W6e;}
,'f7W':function(K7W,p7W){return K7W>p7W;}
,'R5W':function(l5W,z5W){return l5W==z5W;}
,'a4c':function(T4c,Z4c){return T4c-Z4c;}
,'m5R':function(J5R,Y5R){return J5R-Y5R;}
,'l8e':function(z8e,O8e){return z8e>O8e;}
,'N0e':function(f0e,K0e){return f0e*K0e;}
,'X5W':function(s5W,r5W){return s5W==r5W;}
,'A1h':function(t1h,j1h){return t1h<j1h;}
,'Z1R':function(m1R,J1R){return m1R!=J1R;}
,'i7e':function(V7e,G7e){return V7e>G7e;}
,'d0i':function(w0i,k0i){return w0i<=k0i;}
,'x2P':function(L2P,g2P){return L2P-g2P;}
,'J7e':function(Y7e,d7e){return Y7e!=d7e;}
,'F9f':function(y9f,U9f){return y9f/U9f;}
,'D2R':function(o2R,i2R){return o2R!=i2R;}
,'f9h':function(K9h,p9h,e9h){return K9h-p9h-e9h;}
,'X7z':function(s7z,r7z){return s7z-r7z;}
,'e7c':function(x7c,L7c){return x7c!==L7c;}
,'B1i':function(D1i,o1i){return D1i==o1i;}
,'c6P':function(u6P,R6P){return u6P!=R6P;}
,'T3z':function(Z3z,m3z){return Z3z<m3z;}
,'V0n':function(G0n,X0n){return G0n/X0n;}
,'U4':function(S4,H4){return S4==H4;}
,'g1x':function(C1x,I1x){return C1x-I1x;}
,'J6R':function(Y6R,d6R){return Y6R==d6R;}
,'t7i':function(j7i,a7i,T7i){return j7i-a7i+T7i;}
,'k9W':function(q9W,P9W){return q9W>=P9W;}
,'X4x':function(s4x,r4x){return s4x<r4x;}
,'t9n':function(j9n,a9n){return j9n==a9n;}
,'F9x':function(y9x,U9x){return y9x*U9x;}
,'t3A':function(j3A,a3A){return j3A==a3A;}
,'r9c':function(v9c,n9c){return v9c==n9c;}
,'J5e':function(Y5e,d5e){return Y5e!=d5e;}
,'O3n':function(h3n,Q3n){return h3n-Q3n;}
,'T3f':function(Z3f,m3f){return Z3f-m3f;}
,'r8z':function(v8z,n8z){return v8z>n8z;}
,'R8a':function(l8a,z8a){return l8a==z8a;}
,'w9s':function(k9s,q9s){return k9s/q9s;}
,'d5h':function(w5h,k5h){return w5h!=k5h;}
,'D2a':function(o2a,i2a){return o2a-i2a;}
,'x9':function(L9,g9){return L9<=g9;}
,'R1i':function(l1i,z1i){return l1i==z1i;}
,'x0n':function(L0n,g0n){return L0n/g0n;}
,'J9a':function(Y9a,d9a){return Y9a*d9a;}
,'u5h':function(R5h,l5h){return R5h>l5h;}
,'K6':function(p6,e6){return p6-e6;}
,'w5f':function(k5f,q5f){return k5f*q5f;}
,'Q2i':function(B2i,D2i){return B2i<D2i;}
,'v4':function(n4,N4){return n4>N4;}
,'Q2f':function(B2f,D2f){return B2f*D2f;}
,'B1':function(D1,o1){return D1/o1;}
,'R5f':function(l5f,z5f){return l5f/z5f;}
,'v4x':function(n4x,N4x){return n4x-N4x;}
,'I7s':function(M7s,W7s){return M7s<W7s;}
,'R0t':function(l0t,z0t){return l0t<=z0t;}
,'g8h':function(C8h,I8h){return C8h<I8h;}
,'P0R':function(c0R,u0R){return c0R>u0R;}
,'t1x':function(j1x,a1x){return j1x>a1x;}
,'m8W':function(J8W,Y8W){return J8W*Y8W;}
,'U6t':function(S6t,H6t){return S6t*H6t;}
,'u6e':function(R6e,l6e){return R6e<l6e;}
,'z5A':function(O5A,h5A){return O5A-h5A;}
,'M7x':function(W7x,b7x){return W7x==b7x;}
,'s0h':function(r0h,v0h){return r0h<=v0h;}
,'s9x':function(r9x,v9x){return r9x<v9x;}
,'y2i':function(U2i,S2i){return U2i-S2i;}
,'B0W':function(D0W,o0W,i0W){return D0W*o0W/i0W;}
,'t5n':function(j5n,a5n){return j5n*a5n;}
,'W7t':function(b7t,E7t){return b7t-E7t;}
,'p3':function(e3,x3){return e3/x3;}
,'M2t':function(W2t,b2t){return W2t<b2t;}
,'N9R':function(f9R,K9R){return f9R-K9R;}
,'P8c':function(c8c,u8c){return c8c<u8c;}
,'n1':function(N1,K1){return N1==K1;}
,'d5x':function(w5x,k5x){return w5x<=k5x;}
,'z3e':function(O3e,h3e){return O3e*h3e;}
,'u3W':function(R3W,l3W){return R3W!=l3W;}
,'A4t':function(t4t,j4t){return t4t*j4t;}
,'o2e':function(i2e,V2e){return i2e!=V2e;}
,'P0s':function(c0s,u0s){return c0s-u0s;}
,'k2P':function(q2P,P2P){return q2P==P2P;}
,'i3z':function(V3z,G3z){return V3z/G3z;}
,'l2x':function(z2x,O2x){return z2x==O2x;}
,'n4e':function(N4e,f4e){return N4e<f4e;}
,'B3z':function(D3z,o3z){return D3z==o3z;}
,'Z8A':function(m8A,J8A){return m8A>J8A;}
,'p0x':function(e0x,x0x){return e0x==x0x;}
,'q6c':function(P6c,c6c){return P6c-c6c;}
,'b7A':function(E7A,F7A){return E7A>=F7A;}
,'a5a':function(T5a,Z5a){return T5a in Z5a;}
,'M0z':function(W0z,b0z){return W0z!==b0z;}
,'H9t':function(A7t,t7t){return A7t<t7t;}
,'a2f':function(T2f,Z2f){return T2f<Z2f;}
,'v1W':function(n1W,N1W){return n1W-N1W;}
,'F2x':function(y2x,U2x){return y2x==U2x;}
,'m8z':function(J8z,Y8z){return J8z-Y8z;}
,'c0n':function(u0n,R0n){return u0n-R0n;}
,'p7n':function(e7n,x7n,L7n){return e7n*x7n/L7n;}
,'W5t':function(b5t,E5t){return b5t==E5t;}
,'v5e':function(n5e,N5e){return n5e<=N5e;}
,'x3n':function(L3n,g3n){return L3n==g3n;}
,'Y1n':function(d1n,w1n){return d1n/w1n;}
,'c8i':function(u8i,R8i){return u8i-R8i;}
,'c9t':function(u9t,R9t){return u9t/R9t;}
,'m2f':function(J2f,Y2f){return J2f*Y2f;}
,'O6i':function(h6i,Q6i){return h6i/Q6i;}
,'I6f':function(M6f,W6f,b6f){return M6f*W6f/b6f;}
,'O7e':function(h7e,Q7e){return h7e<Q7e;}
,'B0P':function(D0P,o0P){return D0P*o0P;}
,'k2s':function(q2s,P2s){return q2s-P2s;}
,'N6e':function(f6e,K6e){return f6e in K6e;}
,'G7a':function(X7a,s7a){return X7a&s7a;}
,'E5e':function(F5e,y5e){return F5e>y5e;}
,'F6x':function(y6x,U6x){return y6x/U6x;}
,'j0f':function(a0f,T0f,Z0f){return a0f-T0f+Z0f;}
,'M1x':function(W1x,b1x){return W1x<b1x;}
,'h4f':function(Q4f,B4f){return Q4f<=B4f;}
,'X9P':function(s9P,r9P){return s9P-r9P;}
,'W3h':function(b3h,E3h){return b3h*E3h;}
,'Y9t':function(d9t,w9t){return d9t-w9t;}
,'S9W':function(H9W,A7W){return H9W*A7W;}
,'B8a':function(D8a,o8a){return D8a-o8a;}
,'W8x':function(b8x,E8x){return b8x<E8x;}
,'U7z':function(S7z,H7z){return S7z-H7z;}
,'G7s':function(X7s,s7s){return X7s>s7s;}
,'W7R':function(b7R,E7R){return b7R==E7R;}
,'V3t':function(G3t,X3t){return G3t!=X3t;}
,'g0s':function(C0s,I0s,M0s){return C0s*I0s/M0s;}
,'I5R':function(M5R,W5R){return M5R<W5R;}
,'m6n':function(J6n,Y6n){return J6n/Y6n;}
,'r4t':function(v4t,n4t){return v4t==n4t;}
,'T2t':function(Z2t,m2t){return Z2t==m2t;}
,'S4e':function(H4e,A5e){return H4e==A5e;}
,'G9t':function(X9t,s9t){return X9t*s9t;}
,'O2A':function(h2A,Q2A){return h2A>Q2A;}
,'G5R':function(X5R,s5R){return X5R==s5R;}
,'S3P':function(H3P,A9P){return H3P<A9P;}
,'t4h':function(j4h,a4h){return j4h-a4h;}
,'R0W':function(l0W,z0W){return l0W==z0W;}
,'e8c':function(x8c,L8c){return x8c-L8c;}
,'W1n':function(b1n,E1n){return b1n*E1n;}
,'A1a':function(t1a,j1a){return t1a-j1a;}
,'G4z':function(X4z,s4z){return X4z<s4z;}
,'H5c':function(A2c,t2c){return A2c-t2c;}
,'J6t':function(Y6t,d6t){return Y6t==d6t;}
,'P0P':function(c0P,u0P){return c0P/u0P;}
,'y5c':function(U5c,S5c){return U5c-S5c;}
,'e4s':function(x4s,L4s){return x4s>L4s;}
,'H1a':function(A3a,t3a){return A3a*t3a;}
,'L9R':function(g9R,C9R){return g9R*C9R;}
,'b2':function(E2,F2){return E2<F2;}
,'z3c':function(O3c,h3c){return O3c==h3c;}
,'j2s':function(a2s,T2s){return a2s-T2s;}
,'F0n':function(y0n,U0n){return y0n*U0n;}
,'R8c':function(l8c,z8c){return l8c==z8c;}
,'B0t':function(D0t,o0t){return D0t<o0t;}
,'x6A':function(L6A,g6A){return L6A>g6A;}
,'k3s':function(q3s,P3s){return q3s<P3s;}
,'w9h':function(k9h,q9h){return k9h==q9h;}
,'K7i':function(p7i,e7i){return p7i/e7i;}
,'W8i':function(b8i,E8i){return b8i>E8i;}
,'I7a':function(M7a,W7a){return M7a*W7a;}
,'I5P':function(M5P,W5P){return M5P!=W5P;}
,'N4z':function(f4z,K4z){return f4z/K4z;}
,'U1x':function(S1x,H1x){return S1x-H1x;}
,'W1R':function(b1R,E1R){return b1R==E1R;}
,'v9h':function(n9h,N9h){return n9h>N9h;}
,'j7A':function(a7A,T7A,Z7A){return a7A-T7A-Z7A;}
,'P5i':function(c5i,u5i){return c5i>u5i;}
,'e5i':function(x5i,L5i){return x5i==L5i;}
,'m1s':function(J1s,Y1s){return J1s-Y1s;}
,'E1x':function(F1x,y1x){return F1x/y1x;}
,'Z1A':function(m1A,J1A){return m1A==J1A;}
,'K3t':function(p3t,e3t){return p3t-e3t;}
,'B2z':function(D2z,o2z){return D2z>o2z;}
,'N9A':function(f9A,K9A){return f9A==K9A;}
,'C1A':function(I1A,M1A){return I1A==M1A;}
,'d4c':function(w4c,k4c){return w4c>k4c;}
,'I9R':function(M9R,W9R){return M9R!=W9R;}
,'S3f':function(H3f,A9f){return H3f==A9f;}
,'F6A':function(y6A,U6A){return y6A<U6A;}
,'r3x':function(v3x,n3x){return v3x/n3x;}
,'Q8t':function(B8t,D8t){return B8t==D8t;}
,'E1W':function(F1W,y1W){return F1W-y1W;}
,'Q3W':function(B3W,D3W){return B3W==D3W;}
,'X1':function(s1,r1){return s1==r1;}
,'i0Z':3,'e5e':function(x5e,L5e){return x5e!=L5e;}
,'T4A':function(Z4A,m4A){return Z4A<m4A;}
,'u0A':function(R0A,l0A){return R0A==l0A;}
,'U5i':function(S5i,H5i){return S5i==H5i;}
,'P8':function(c8,u8){return c8==u8;}
,'g5i':function(C5i,I5i){return C5i>I5i;}
,'D6P':function(o6P,i6P){return o6P<i6P;}
,'B8s':function(D8s,o8s){return D8s>o8s;}
,'B5i':function(D5i,o5i){return D5i!=o5i;}
,'q6z':function(P6z,c6z){return P6z/c6z;}
,'i9n':function(V9n,G9n){return V9n>G9n;}
,'A8f':function(t8f,j8f){return t8f<j8f;}
,'G0e':function(X0e,s0e){return X0e==s0e;}
,'z8R':function(O8R,h8R){return O8R<h8R;}
,'K7R':function(p7R,e7R){return p7R==e7R;}
,'t7z':function(j7z,a7z){return j7z<a7z;}
,'N1t':function(f1t,K1t){return f1t==K1t;}
,'w0P':function(k0P,q0P){return k0P==q0P;}
,'K6P':function(p6P,e6P){return p6P==e6P;}
,'U4h':function(S4h,H4h){return S4h>=H4h;}
,'x2x':function(L2x,g2x){return L2x==g2x;}
,'g2t':function(C2t,I2t){return C2t<I2t;}
,'S9x':function(H9x,A7x){return H9x==A7x;}
,'C0a':function(I0a,M0a){return I0a>M0a;}
,'v4h':function(n4h,N4h){return n4h<N4h;}
,'V3h':function(G3h,X3h){return G3h*X3h;}
,'i7':function(V7,G7){return V7==G7;}
,'Q1T':16,'f8c':function(K8c,p8c){return K8c<p8c;}
,'G5P':function(X5P,s5P){return X5P-s5P;}
,'p0A':function(e0A,x0A){return e0A<x0A;}
,'i4':function(V4,G4){return V4>G4;}
,'e0P':function(x0P,L0P){return x0P!=L0P;}
,'s8n':function(r8n,v8n){return r8n>v8n;}
,'f5f':function(K5f,p5f){return K5f>=p5f;}
,'i4x':function(V4x,G4x){return V4x<G4x;}
,'b1s':function(E1s,F1s){return E1s-F1s;}
,'N7n':function(f7n,K7n){return f7n==K7n;}
,'s6':function(r6,v6){return r6*v6;}
,'s2P':function(r2P,v2P){return r2P-v2P;}
,'Q5A':function(B5A,D5A){return B5A>D5A;}
,'d3e':function(w3e,k3e){return w3e!=k3e;}
,'C9e':function(I9e,M9e){return I9e==M9e;}
,'k2a':function(q2a,P2a){return q2a*P2a;}
,'S0s':function(H0s,A8s){return H0s==A8s;}
,'q1a':function(P1a,c1a){return P1a&c1a;}
,'s3t':function(r3t,v3t){return r3t-v3t;}
,'E5i':function(F5i,y5i){return F5i==y5i;}
,'d2i':function(w2i,k2i){return w2i<k2i;}
,'O4a':function(h4a,Q4a){return h4a>=Q4a;}
,'P9P':function(c9P,u9P){return c9P<u9P;}
,'b3W':function(E3W,F3W){return E3W<F3W;}
,'s9e':function(r9e,v9e){return r9e==v9e;}
,'I5c':function(M5c,W5c){return M5c<=W5c;}
,'b2i':function(E2i,F2i){return E2i-F2i;}
,'A3c':function(t3c,j3c){return t3c>=j3c;}
,'A8t':function(t8t,j8t){return t8t!=j8t;}
,'C4W':function(I4W,M4W){return I4W>M4W;}
,'X8a':function(s8a,r8a){return s8a==r8a;}
,'s9W':function(r9W,v9W){return r9W-v9W;}
,'j3':function(a3,T3){return a3!=T3;}
,'h5t':function(Q5t,B5t){return Q5t==B5t;}
,'n5n':function(N5n,f5n){return N5n==f5n;}
,'n1P':function(N1P,f1P){return N1P<f1P;}
,'h3':function(Q3,B3){return Q3==B3;}
,'M4x':function(W4x,b4x){return W4x==b4x;}
,'L4t':function(g4t,C4t){return g4t==C4t;}
,'s0W':function(r0W,v0W,n0W){return r0W*v0W/n0W;}
,'S4n':function(H4n,A5n){return H4n<A5n;}
,'W0a':function(b0a,E0a){return b0a-E0a;}
,'o3e':function(i3e,V3e){return i3e-V3e;}
,'L5':function(g5,C5){return g5<C5;}
,'W6x':function(b6x,E6x){return b6x==E6x;}
,'D4f':function(o4f,i4f){return o4f-i4f;}
,'q5a':function(P5a,c5a){return P5a>c5a;}
,'O4A':function(h4A,Q4A){return h4A*Q4A;}
,'P8a':function(c8a,u8a){return c8a<u8a;}
,'h3s':function(Q3s,B3s){return Q3s-B3s;}
,'V0W':function(G0W,X0W){return G0W==X0W;}
,'S6h':function(H6h,A4h){return H6h<A4h;}
,'I8z':function(M8z,W8z){return M8z==W8z;}
,'J7':function(Y7,d7){return Y7==d7;}
,'L8A':function(g8A,C8A){return g8A==C8A;}
,'S9':function(H9,A7){return H9==A7;}
,'O7':function(h7,Q7){return h7!=Q7;}
,'q3W':function(P3W,c3W){return P3W-c3W;}
,'L6e':function(g6e,C6e){return g6e in C6e;}
,'f9n':function(K9n,p9n){return K9n==p9n;}
,'m5a':function(J5a,Y5a){return J5a<Y5a;}
,'e4P':function(x4P,L4P){return x4P==L4P;}
,'q4c':function(P4c,c4c){return P4c<c4c;}
,'C4e':function(I4e,M4e){return I4e!=M4e;}
,'z0A':function(O0A,h0A){return O0A==h0A;}
,'b2e':function(E2e,F2e){return E2e>F2e;}
,'a9c':function(T9c,Z9c){return T9c==Z9c;}
,'r1s':function(v1s,n1s){return v1s==n1s;}
,'o9c':function(i9c,V9c){return i9c/V9c;}
,'Y0a':function(d0a,w0a){return d0a-w0a;}
,'l5z':function(z5z,O5z){return z5z>O5z;}
,'C9x':function(I9x,M9x){return I9x*M9x;}
,'W6a':function(b6a,E6a){return b6a<E6a;}
,'Y7i':function(d7i,w7i){return d7i!=w7i;}
,'c7S':"r",'j5t':function(a5t,T5t){return a5t==T5t;}
,'w4A':function(k4A,q4A){return k4A>q4A;}
,'g6R':function(C6R,I6R){return C6R!=I6R;}
,'B5W':function(D5W,o5W){return D5W!=o5W;}
,'L4z':function(g4z,C4z){return g4z==C4z;}
,'w8a':function(k8a,q8a){return k8a/q8a;}
,'I2f':function(M2f,W2f){return M2f-W2f;}
,'S4f':function(H4f,A5f){return H4f==A5f;}
,'C0h':function(I0h,M0h){return I0h==M0h;}
,'q1s':function(P1s,c1s){return P1s==c1s;}
,'R8':function(l8,z8){return l8-z8;}
,'h2R':function(Q2R,B2R){return Q2R-B2R;}
,'M0R':function(W0R,b0R){return W0R>b0R;}
,'J3z':function(Y3z,d3z){return Y3z!=d3z;}
,'X2n':function(s2n,r2n){return s2n==r2n;}
,'s1n':function(r1n,v1n){return r1n>=v1n;}
,'n3a':function(N3a,f3a){return N3a-f3a;}
,'t3z':function(j3z,a3z){return j3z==a3z;}
,'S2x':function(H2x,A0W){return H2x/A0W;}
,'B4a':function(D4a,o4a){return D4a<=o4a;}
,'P9z':function(c9z,u9z){return c9z==u9z;}
,'N1c':function(f1c,K1c){return f1c<K1c;}
,'T9h':function(Z9h,m9h){return Z9h-m9h;}
,'M8f':function(W8f,b8f){return W8f*b8f;}
,'b4c':function(E4c,F4c){return E4c>F4c;}
,'E9c':function(F9c,y9c){return F9c-y9c;}
,'c7i':function(u7i,R7i){return u7i/R7i;}
,'M1e':function(W1e,b1e){return W1e>b1e;}
,'F6h':function(y6h,U6h){return y6h==U6h;}
,'s0n':function(r0n,v0n){return r0n-v0n;}
,'c6s':function(u6s,R6s){return u6s==R6s;}
,'j7h':function(a7h,T7h){return a7h>T7h;}
,'c2x':function(u2x,R2x){return u2x<R2x;}
,'v4A':function(n4A,N4A){return n4A>N4A;}
,'M9P':function(W9P,b9P){return W9P<=b9P;}
,'J5n':function(Y5n,d5n,w5n){return Y5n*d5n/w5n;}
,'L5h':(function(){var Z2h={}
,M5h=function(W5h,b5h){var E5h=b5h&0xffff;var F5h=b5h-E5h;return ((F5h*W5h|0)+(E5h*W5h|0))|((147,56.)<0x1DC?(118,0):(6.,0x1D3)>(0x14A,91.2E1)?(4.87E2,"fnt"):(100.7E1,149.));}
,g5h=function(y5h,U5h,S5h){if(Z2h[S5h]!==undefined){return Z2h[S5h];}
var H5h=0xcc9e2d51,A2h=0x1b873593;var t2h=S5h;var j2h=U5h&~0x3;for(var a2h=0;a2h<j2h;a2h+=((3.1E1,78.60E1)<=117.?(43.,6):(35,0x125)>(61,140)?(128.,4):(18.,81.))){var T2h=(y5h[("charCode"+"A"+"t")](a2h)&0xff)|((y5h["charCodeAt"](a2h+1)&(10.9E2>=(7.97E2,15.70E1)?(8.790E2,0xff):(0x254,0x122)))<<8)|((y5h[("cha"+"r"+"CodeA"+"t")](a2h+2)&0xff)<<16)|((y5h["charCodeAt"](a2h+3)&((14.540E2,49.)<138?(122.2E1,0xff):(127.,119)))<<24);T2h=M5h(T2h,H5h);T2h=((T2h&0x1ffff)<<15)|(T2h>>>17);T2h=M5h(T2h,A2h);t2h^=T2h;t2h=((t2h&((115.7E1,9.)<=72.3E1?(103.9E1,0x7ffff):(125,20.3E1)<=(0x190,0x56)?4.60E1:(102.,31.70E1)))<<13)|(t2h>>>19);t2h=(t2h*5+(0x1A3<(0x141,0x15D)?12.66E2:(63.2E1,78)<=2.86E2?(0xBE,0xe6546b64):(1.342E3,135.5E1)))|((8.96E2,3.02E2)<=(25.70E1,26)?0.0:(0x1FC,0x226)>=12?(125.4E1,0):(77.30E1,0x59));}
T2h=0;switch(U5h%4){case 3:T2h=(y5h["charCodeAt"](j2h+2)&0xff)<<16;case ((139.,1.62E2)>=100.?(12.,2):0x1B0<(0xCF,0x136)?"b":(7.71E2,5.87E2)):T2h|=(y5h[("c"+"ha"+(0x24B<=(77,88.)?0x236:9.34E2>=(3,0x197)?(0xDF,"r"):(0x111,1.31E2))+"C"+"odeAt")](j2h+1)&0xff)<<((0x22B,92.30E1)>(0xDC,0xC)?(0xA4,8):(63.,81.5E1));case 1:T2h|=(y5h["charCodeAt"](j2h)&0xff);T2h=M5h(T2h,H5h);T2h=((T2h&((82.10E1,129.)>0x10F?60000:(147.8E1,35)>=0x1ED?0x116:(2.46E2,0x1A8)<=(9.950E2,1.307E3)?(0x111,0x1ffff):(0x10F,104)))<<15)|(T2h>>>((49,10.10E1)<(135,0x19B)?(7.29E2,17):4E0>=(2.,0x11A)?"o":(65,33.)));T2h=M5h(T2h,A2h);t2h^=T2h;}
t2h^=U5h;t2h^=t2h>>>16;t2h=M5h(t2h,0x85ebca6b);t2h^=t2h>>>13;t2h=M5h(t2h,0xc2b2ae35);t2h^=t2h>>>16;Z2h[S5h]=t2h;return t2h;}
;return {M5h:M5h,g5h:g5h}
;}
)(),'q7P':function(P7P,c7P){return P7P==c7P;}
,'p4i':function(e4i,x4i,L4i){return e4i-x4i-L4i;}
,'H4z':function(A5z,t5z){return A5z>=t5z;}
,'V9z':function(G9z,X9z){return G9z<X9z;}
,'C2R':function(I2R,M2R){return I2R-M2R;}
,'w4n':function(k4n,q4n){return k4n-q4n;}
,'Y9W':function(d9W,w9W){return d9W<w9W;}
,'i1f':function(V1f,G1f){return V1f-G1f;}
,'Z3t':function(m3t,J3t){return m3t*J3t;}
,'E4h':function(F4h,y4h){return F4h==y4h;}
,'D7R':function(o7R,i7R){return o7R==i7R;}
,'q2W':function(P2W,c2W){return P2W/c2W;}
,'b9t':function(E9t,F9t){return E9t*F9t;}
,'V2x':function(G2x,X2x){return G2x-X2x;}
,'I8R':function(M8R,W8R){return M8R>W8R;}
,'m5A':function(J5A,Y5A){return J5A*Y5A;}
,'z6z':function(O6z,h6z){return O6z<h6z;}
,'T7z':function(Z7z,m7z){return Z7z<m7z;}
,'x3s':function(L3s,g3s){return L3s/g3s;}
,'M0t':function(W0t,b0t){return W0t>b0t;}
,'v8h':function(n8h,N8h){return n8h<N8h;}
,'T1e':function(Z1e,m1e){return Z1e in m1e;}
,'l1R':function(z1R,O1R){return z1R==O1R;}
,'U0f':function(S0f,H0f){return S0f==H0f;}
,'C8x':function(I8x,M8x){return I8x>=M8x;}
,'s6x':function(r6x,v6x){return r6x<v6x;}
,'s2a':function(r2a,v2a){return r2a*v2a;}
,'I1s':function(M1s,W1s){return M1s==W1s;}
,'e4R':function(x4R,L4R){return x4R<=L4R;}
,'J2z':function(Y2z,d2z){return Y2z-d2z;}
,'Q9R':function(B9R,D9R){return B9R*D9R;}
,'K3a':function(p3a,e3a){return p3a-e3a;}
,'r7a':function(v7a,n7a){return v7a!=n7a;}
,'y1P':function(U1P,S1P){return U1P<S1P;}
,'F2P':function(y2P,U2P){return y2P>U2P;}
,'k7i':function(q7i,P7i){return q7i/P7i;}
,'k0n':function(q0n,P0n){return q0n>P0n;}
,'B2':function(D2,o2){return D2!=o2;}
,'R0s':function(l0s,z0s){return l0s==z0s;}
,'Q8R':function(B8R,D8R){return B8R>D8R;}
,'d5':function(w5,k5){return w5<k5;}
,'l7R':function(z7R,O7R){return z7R==O7R;}
,'r9t':function(v9t,n9t){return v9t/n9t;}
,'I6n':function(M6n,W6n){return M6n-W6n;}
,'n4W':function(N4W,f4W){return N4W-f4W;}
,'I5a':function(M5a,W5a){return M5a&W5a;}
,'J6i':function(Y6i,d6i){return Y6i>=d6i;}
,'h7h':function(Q7h,B7h){return Q7h!=B7h;}
,'A4z':function(t4z,j4z){return t4z*j4z;}
,'X7':function(s7,r7,v7){return s7/r7/v7;}
,'W9h':function(b9h,E9h,F9h){return b9h-E9h-F9h;}
,'N6W':function(f6W,K6W){return f6W>K6W;}
,'L8z':function(g8z,C8z){return g8z==C8z;}
,'E3z':function(F3z,y3z){return F3z/y3z;}
,'l3':function(z3,O3){return z3>O3;}
,'V6P':function(G6P,X6P){return G6P<X6P;}
,'I7P':function(M7P,W7P){return M7P-W7P;}
,'D8i':function(o8i,i8i){return o8i*i8i;}
,'G5s':function(X5s,s5s){return X5s/s5s;}
,'G5A':function(X5A,s5A){return X5A-s5A;}
,'l4W':function(z4W,O4W){return z4W<O4W;}
,'S6A':function(H6A,A4A){return H6A>A4A;}
,'Q6n':function(B6n,D6n){return B6n==D6n;}
,'l9':function(z9,O9){return z9-O9;}
,'y3':function(U3,S3){return U3==S3;}
,'W6s':function(b6s,E6s){return b6s==E6s;}
,'F1':function(U1,S1){return U1-S1;}
,'V5n':function(G5n,X5n){return G5n-X5n;}
,'i7x':function(V7x,G7x){return V7x-G7x;}
,'D2c':function(o2c,i2c){return o2c-i2c;}
,'z6c':function(O6c,h6c){return O6c==h6c;}
,'x7i':function(L7i,g7i){return L7i<g7i;}
,'u1c':function(R1c,l1c){return R1c/l1c;}
,'t4x':function(j4x,a4x){return j4x/a4x;}
,'x4e':function(L4e,g4e){return L4e in g4e;}
,'B4s':function(D4s,o4s){return D4s==o4s;}
,'W6':function(b6,E6){return b6*E6;}
,'J1e':function(Y1e,d1e){return Y1e<d1e;}
,'C9f':function(I9f,M9f){return I9f<M9f;}
,'S2s':function(H2s,A0P){return H2s>=A0P;}
,'s4f':function(r4f,v4f){return r4f/v4f;}
,'h3h':function(Q3h,B3h){return Q3h>=B3h;}
,'f8':function(K8,p8){return K8-p8;}
,'U8h':function(S8h,H8h){return S8h-H8h;}
,'P7z':function(c7z,u7z){return c7z-u7z;}
,'W7h':function(b7h,E7h){return b7h==E7h;}
,'W2P':function(b2P,E2P){return b2P==E2P;}
,'Q9c':function(B9c,D9c){return B9c<D9c;}
,'i9a':function(V9a,G9a){return V9a>=G9a;}
,'Z8i':function(m8i,J8i){return m8i<J8i;}
,'v4R':function(n4R,N4R){return n4R<=N4R;}
,'H3':function(A9,t9){return A9==t9;}
,'h5n':function(Q5n,B5n){return Q5n==B5n;}
,'N0i':function(f0i,K0i){return f0i<K0i;}
,'P4a':function(c4a,u4a){return c4a-u4a;}
,'f0t':function(K0t,p0t){return K0t-p0t;}
,'E1i':function(F1i,y1i){return F1i-y1i;}
,'y0A':function(U0A,S0A){return U0A==S0A;}
,'b5x':function(E5x,F5x){return E5x==F5x;}
,'x8e':function(L8e,g8e){return L8e<g8e;}
,'w3f':function(k3f,q3f,P3f){return k3f*q3f/P3f;}
,'B1e':function(D1e,o1e){return D1e<o1e;}
,'U5f':function(S5f,H5f){return S5f-H5f;}
,'Y3a':function(d3a,w3a){return d3a<w3a;}
,'B0R':function(D0R,o0R){return D0R*o0R;}
,'d3i':function(w3i,k3i){return w3i>k3i;}
,'d1f':function(w1f,k1f){return w1f-k1f;}
,'F0h':function(y0h,U0h){return y0h>U0h;}
,'f2z':function(K2z,p2z){return K2z<=p2z;}
,'x1n':function(L1n,g1n){return L1n/g1n;}
,'J7f':function(Y7f,d7f){return Y7f*d7f;}
,'P6t':function(c6t,u6t){return c6t/u6t;}
,'X6R':function(s6R,r6R){return s6R/r6R;}
,'F7i':function(y7i,U7i){return y7i==U7i;}
,'e0z':function(x0z,L0z){return x0z*L0z;}
,'g4P':function(C4P,I4P){return C4P>I4P;}
,'u8z':function(R8z,l8z){return R8z-l8z;}
,'w3n':function(k3n,q3n){return k3n-q3n;}
,'N5s':function(f5s,K5s){return f5s<K5s;}
,'G6z':function(X6z,s6z){return X6z<s6z;}
,'O1x':function(h1x,Q1x){return h1x<Q1x;}
,'d7s':function(w7s,k7s){return w7s==k7s;}
,'q3c':function(P3c,c3c){return P3c!=c3c;}
,'l7t':function(z7t,O7t){return z7t==O7t;}
,'L9s':function(g9s,C9s){return g9s==C9s;}
,'f1W':function(K1W,p1W){return K1W-p1W;}
,'L3e':function(g3e,C3e){return g3e!=C3e;}
,'x8i':function(L8i,g8i){return L8i!=g8i;}
,'W1':function(b1,E1){return b1<E1;}
,'k6a':function(q6a,P6a){return q6a<=P6a;}
,'t4a':function(j4a,a4a){return j4a*a4a;}
,'P3z':function(c3z,u3z){return c3z/u3z;}
,'R6R':function(l6R,z6R){return l6R==z6R;}
,'b9R':function(E9R,F9R){return E9R<F9R;}
,'M6i':function(W6i,b6i){return W6i-b6i;}
,'Q4i':function(B4i,D4i){return B4i-D4i;}
,'t7':function(j7,a7){return j7==a7;}
,'U4s':function(S4s,H4s){return S4s>H4s;}
,'I0W':function(M0W,W0W){return M0W==W0W;}
,'Z2x':function(m2x,J2x){return m2x>J2x;}
,'l6P':function(z6P,O6P){return z6P<O6P;}
,'C8i':function(I8i,M8i){return I8i<M8i;}
,'Z3s':function(m3s,J3s){return m3s>J3s;}
,'g4A':function(C4A,I4A){return C4A<I4A;}
,'r5':function(v5,n5){return v5==n5;}
,'Y9e':function(d9e,w9e){return d9e==w9e;}
,'j5c':function(a5c,T5c){return a5c!=T5c;}
,'Y2c':function(d2c,w2c){return d2c<w2c;}
,'F9z':function(y9z,U9z){return y9z<U9z;}
,'g9c':function(C9c,I9c){return C9c-I9c;}
,'f0z':function(K0z,p0z){return K0z*p0z;}
,'F8n':function(y8n,U8n){return y8n-U8n;}
,'X9n':function(s9n,r9n){return s9n<=r9n;}
,'X7f':function(s7f,r7f){return s7f-r7f;}
,'V8i':function(G8i,X8i){return G8i/X8i;}
,'X2z':function(s2z,r2z){return s2z==r2z;}
,'G6n':function(X6n,s6n){return X6n*s6n;}
,'H2W':function(A0h,t0h){return A0h>=t0h;}
,'F3s':function(y3s,U3s){return y3s/U3s;}
,'p5a':function(e5a,x5a){return e5a&x5a;}
,'l3P':function(z3P,O3P){return z3P-O3P;}
,'X4a':function(s4a,r4a){return s4a/r4a;}
,'W8n':function(b8n,E8n){return b8n-E8n;}
,'x2s':function(L2s,g2s){return L2s<g2s;}
,'b2W':function(E2W,F2W){return E2W>=F2W;}
,'p0W':function(e0W,x0W){return e0W/x0W;}
,'X0':function(s0,r0){return s0<r0;}
,'y0i':function(U0i,S0i){return U0i/S0i;}
,'C4f':function(I4f,M4f){return I4f-M4f;}
,'P6R':function(c6R,u6R){return c6R==u6R;}
,'t9P':function(j9P,a9P){return j9P*a9P;}
,'q9c':function(P9c,c9c){return P9c*c9c;}
,'g5f':function(C5f,I5f){return C5f/I5f;}
,'E3c':function(F3c,y3c){return F3c<y3c;}
,'X9h':function(s9h,r9h){return s9h!=r9h;}
,'e4x':function(x4x,L4x){return x4x==L4x;}
,'v3R':function(n3R,N3R){return n3R<N3R;}
,'i1x':function(V1x,G1x){return V1x==G1x;}
,'g5A':function(C5A,I5A){return C5A-I5A;}
,'z2f':function(O2f,h2f){return O2f<h2f;}
,'m5h':function(J5h,Y5h){return J5h-Y5h;}
,'h0h':function(Q0h,B0h){return Q0h==B0h;}
,'h1n':function(Q1n,B1n){return Q1n-B1n;}
,'z4t':function(O4t,h4t){return O4t<h4t;}
,'d8z':function(w8z,k8z){return w8z<k8z;}
,'u1':function(R1,l1){return R1==l1;}
,'Y7R':function(d7R,w7R){return d7R<w7R;}
,'M8a':function(W8a,b8a){return W8a==b8a;}
,'h8e':function(Q8e,B8e){return Q8e<B8e;}
,'K1P':function(p1P,e1P){return p1P/e1P;}
,'Q5a':function(B5a,D5a){return B5a-D5a;}
,'q4t':function(P4t,c4t){return P4t<c4t;}
,'I1f':function(M1f,W1f,b1f){return M1f*W1f/b1f;}
,'X0z':function(s0z,r0z){return s0z*r0z;}
,'n2s':function(N2s,f2s){return N2s==f2s;}
,'j8e':function(a8e,T8e){return a8e!=T8e;}
,'R2':function(l2,z2){return l2-z2;}
,'g6i':function(C6i,I6i){return C6i-I6i;}
,'s3P':function(r3P,v3P){return r3P==v3P;}
,'T2A':function(Z2A,m2A){return Z2A==m2A;}
,'J4':function(Y4,d4){return Y4<d4;}
,'v2':function(n2,N2){return n2/N2;}
,'f3A':function(K3A,p3A){return K3A==p3A;}
,'C6s':function(I6s,M6s){return I6s==M6s;}
,'v6i':function(n6i,N6i){return n6i/N6i;}
,'h3a':function(Q3a,B3a){return Q3a<=B3a;}
,'N8t':function(f8t,K8t){return f8t!=K8t;}
,'Z4W':function(m4W,J4W){return m4W<J4W;}
,'J1i':function(Y1i,d1i){return Y1i<d1i;}
,'J0P':function(Y0P,d0P){return Y0P/d0P;}
,'R9a':function(l9a,z9a){return l9a<z9a;}
,'Y0h':function(d0h,w0h){return d0h<=w0h;}
,'j3h':function(a3h,T3h){return a3h<T3h;}
,'b8A':function(E8A,F8A){return E8A>F8A;}
,'p9A':function(e9A,x9A){return e9A<x9A;}
,'d5R':function(w5R,k5R){return w5R<k5R;}
,'B7x':function(D7x,o7x){return D7x-o7x;}
,'G6e':function(X6e,s6e){return X6e!=s6e;}
,'B8h':function(D8h,o8h){return D8h<o8h;}
,'L0W':function(g0W,C0W){return g0W/C0W;}
,'p4z':function(e4z,x4z){return e4z<x4z;}
,'E1f':function(F1f,y1f,U1f){return F1f*y1f/U1f;}
,'w8f':function(k8f,q8f){return k8f*q8f;}
,'h9x':function(Q9x,B9x){return Q9x==B9x;}
,'g0P':function(C0P,I0P){return C0P==I0P;}
,'u8W':function(R8W,l8W){return R8W<l8W;}
,'s1R':function(r1R,v1R){return r1R*v1R;}
,'P4h':function(c4h,u4h){return c4h==u4h;}
,'t1e':function(j1e,a1e){return j1e==a1e;}
,'o0f':function(i0f,V0f){return i0f-V0f;}
,'u1f':function(R1f,l1f){return R1f>l1f;}
,'b7a':function(E7a,F7a){return E7a-F7a;}
,'H8P':function(A1P,t1P){return A1P==t1P;}
,'Q6c':function(B6c,D6c){return B6c==D6c;}
,'M2n':function(W2n,b2n){return W2n-b2n;}
,'Y2R':function(d2R,w2R){return d2R>w2R;}
,'z2e':function(O2e,h2e){return O2e*h2e;}
,'e1x':function(x1x,L1x){return x1x>L1x;}
,'C0n':function(I0n,M0n){return I0n-M0n;}
,'B7z':function(D7z,o7z){return D7z>=o7z;}
,'G2f':function(X2f,s2f){return X2f/s2f;}
,'h2x':function(Q2x,B2x){return Q2x-B2x;}
,'U7e':function(S7e,H7e){return S7e>=H7e;}
,'R4':function(l4,z4){return l4!=z4;}
,'t0P':function(j0P,a0P){return j0P<=a0P;}
,'t3f':function(j3f,a3f){return j3f<a3f;}
,'h3f':function(Q3f,B3f){return Q3f<B3f;}
,'p2e':function(e2e,x2e){return e2e==x2e;}
,'x9e':function(L9e,g9e){return L9e==g9e;}
,'m0i':function(J0i,Y0i){return J0i<=Y0i;}
,'T0R':function(Z0R,m0R){return Z0R==m0R;}
,'Q9t':function(B9t,D9t){return B9t<=D9t;}
,'J3R':function(Y3R,d3R){return Y3R!=d3R;}
,'N3c':function(f3c,K3c){return f3c-K3c;}
,'r0i':function(v0i,n0i){return v0i<=n0i;}
,'r2f':function(v2f,n2f){return v2f<n2f;}
,'r1c':function(v1c,n1c){return v1c>n1c;}
,'q0i':function(P0i,c0i){return P0i*c0i;}
,'C9W':function(I9W,M9W){return I9W<M9W;}
,'k3h':function(q3h,P3h){return q3h<P3h;}
,'Y2s':function(d2s,w2s){return d2s==w2s;}
,'T8c':function(Z8c,m8c){return Z8c<m8c;}
,'F6':function(y6,U6){return y6*U6;}
,'w4P':function(k4P,q4P){return k4P-q4P;}
,'z6W':function(O6W,h6W){return O6W<h6W;}
,'b6W':function(E6W,F6W){return E6W<F6W;}
,'T6t':function(Z6t,m6t){return Z6t-m6t;}
,'w7f':function(k7f,q7f){return k7f==q7f;}
,'P1e':function(c1e,u1e){return c1e==u1e;}
,'o3W':function(i3W,V3W){return i3W==V3W;}
,'a6c':function(T6c,Z6c){return T6c/Z6c;}
,'z0e':function(O0e,h0e){return O0e==h0e;}
,'S8n':function(H8n,A1n,t1n){return H8n*A1n/t1n;}
,'k3a':function(q3a,P3a){return q3a-P3a;}
,'S6a':function(H6a,A4a){return H6a*A4a;}
,'x3t':function(L3t,g3t,C3t){return L3t-g3t+C3t;}
,'l1z':function(z1z,O1z){return z1z==O1z;}
,'v0z':function(n0z,N0z){return n0z==N0z;}
,'x3h':function(L3h,g3h){return L3h-g3h;}
,'u2e':function(R2e,l2e){return R2e<l2e;}
,'V8e':function(G8e,X8e){return G8e!=X8e;}
,'x1f':function(L1f,g1f,C1f){return L1f*g1f/C1f;}
,'C2P':function(I2P,M2P){return I2P-M2P;}
,'Q5':function(B5,D5){return B5-D5;}
,'F5n':function(y5n,U5n){return y5n==U5n;}
,'W0n':function(b0n,E0n){return b0n-E0n;}
,'r3e':function(v3e,n3e){return v3e/n3e;}
,'u7s':function(R7s,l7s){return R7s!=l7s;}
,'t0t':function(j0t,a0t){return j0t/a0t;}
,'q2i':function(P2i,c2i){return P2i<c2i;}
,'I9A':function(M9A,W9A){return M9A>=W9A;}
,'K3s':function(p3s,e3s){return p3s==e3s;}
,'k3':function(q3,P3){return q3==P3;}
,'E4A':function(F4A,y4A){return F4A<y4A;}
,'o8t':function(i8t,V8t){return i8t!=V8t;}
,'C3n':function(I3n,M3n){return I3n-M3n;}
,'y1t':function(U1t,S1t){return U1t/S1t;}
,'J2A':function(Y2A,d2A){return Y2A<d2A;}
,'M3c':function(W3c,b3c){return W3c-b3c;}
,'C6a':function(I6a,M6a){return I6a==M6a;}
,'z5h':function(O5h,h5h){return O5h!=h5h;}
,'f3z':function(K3z,p3z){return K3z==p3z;}
,'V1z':function(G1z,X1z){return G1z==X1z;}
,'i8c':function(V8c,G8c){return V8c==G8c;}
,'s8A':function(r8A,v8A){return r8A-v8A;}
,'D0a':function(o0a,i0a){return o0a/i0a;}
,'w4z':function(k4z,q4z){return k4z<q4z;}
,'l4e':function(z4e,O4e){return z4e/O4e;}
,'j0h':function(a0h,T0h){return a0h==T0h;}
,'j2c':function(a2c,T2c){return a2c-T2c;}
,'G9s':function(X9s,s9s){return X9s/s9s;}
,'i2t':function(V2t,G2t){return V2t<G2t;}
,'k1A':function(q1A,P1A){return q1A==P1A;}
,'d5a':function(w5a,k5a){return w5a<k5a;}
,'B9h':function(D9h,o9h){return D9h>o9h;}
,'k1t':function(q1t,P1t){return q1t<P1t;}
,'O5i':function(h5i,Q5i){return h5i-Q5i;}
,'j8i':function(a8i,T8i){return a8i-T8i;}
,'Q3c':function(B3c,D3c){return B3c-D3c;}
,'I5s':function(M5s,W5s){return M5s/W5s;}
,'K7':function(p7,e7){return p7<e7;}
,'m8f':function(J8f,Y8f,d8f){return J8f*Y8f*d8f;}
,'H9R':function(A7R,t7R){return A7R!=t7R;}
,'Z1t':function(m1t,J1t){return m1t>J1t;}
,'j0n':function(a0n,T0n){return a0n-T0n;}
,'z6e':function(O6e,h6e){return O6e<h6e;}
,'q8t':function(P8t,c8t){return P8t/c8t;}
,'W9e':function(b9e,E9e){return b9e==E9e;}
,'F2R':function(y2R,U2R){return y2R<=U2R;}
,'A7a':function(t7a,j7a){return t7a==j7a;}
,'Z2':function(m2,J2){return m2>=J2;}
,'u3e':function(R3e,l3e){return R3e>l3e;}
,'d3c':function(w3c,k3c){return w3c<k3c;}
,'Y0n':function(d0n,w0n){return d0n-w0n;}
,'o8R':function(i8R,V8R){return i8R*V8R;}
,'y8t':function(U8t,S8t){return U8t>S8t;}
,'o5s':function(i5s,V5s){return i5s-V5s;}
,'y2e':function(U2e,S2e){return U2e<S2e;}
,'F5z':function(y5z,U5z){return y5z==U5z;}
,'D3h':function(o3h,i3h){return o3h<i3h;}
,'l3t':function(z3t,O3t){return z3t/O3t;}
,'p1c':function(e1c,x1c){return e1c<x1c;}
,'f5e':function(K5e,p5e){return K5e<p5e;}
,'G1c':function(X1c,s1c){return X1c-s1c;}
,'D7i':function(o7i,i7i){return o7i*i7i;}
,'K2R':function(p2R,e2R){return p2R-e2R;}
,'O9P':function(h9P,Q9P){return h9P==Q9P;}
,'s9i':function(r9i,v9i){return r9i==v9i;}
,'g0z':function(C0z,I0z){return C0z==I0z;}
,'w5i':function(k5i,q5i){return k5i!=q5i;}
,'Z0n':function(m0n,J0n){return m0n/J0n;}
,'A7P':function(t7P,j7P){return t7P==j7P;}
,'D9i':function(o9i,i9i){return o9i==i9i;}
,'j6':function(a6,T6){return a6<=T6;}
,'T5i':function(Z5i,m5i){return Z5i<m5i;}
,'w7W':function(k7W,q7W){return k7W==q7W;}
,'h7R':function(Q7R,B7R){return Q7R==B7R;}
,'c3a':function(u3a,R3a){return u3a>R3a;}
,'v1e':function(n1e,N1e){return n1e instanceof N1e;}
,'r5s':function(v5s,n5s){return v5s<n5s;}
,'o1c':function(i1c,V1c){return i1c>V1c;}
,'b6z':function(E6z,F6z){return E6z/F6z;}
,'Q6z':function(B6z,D6z){return B6z<D6z;}
,'R4a':function(l4a,z4a){return l4a>z4a;}
,'Z6':function(m6,J6){return m6<J6;}
,'l2P':function(z2P,O2P){return z2P==O2P;}
,'x6s':function(L6s,g6s){return L6s==g6s;}
,'I4z':function(M4z,W4z){return M4z==W4z;}
,'b5c':function(E5c,F5c){return E5c/F5c;}
,'P7e':function(c7e,u7e){return c7e/u7e;}
,'K1R':function(p1R,e1R){return p1R==e1R;}
,'v0t':function(n0t,N0t){return n0t==N0t;}
,'J3n':function(Y3n,d3n){return Y3n==d3n;}
,'k2c':function(q2c,P2c){return q2c-P2c;}
,'G0A':function(X0A,s0A){return X0A==s0A;}
,'k9t':function(q9t,P9t){return q9t/P9t;}
,'I6z':function(M6z,W6z){return M6z>W6z;}
,'q5h':function(P5h,c5h){return P5h<=c5h;}
,'V3':function(G3,X3,s3){return G3*X3/s3;}
,'m9c':function(J9c,Y9c){return J9c==Y9c;}
,'K8n':function(p8n,e8n){return p8n-e8n;}
,'s2R':function(r2R,v2R){return r2R-v2R;}
,'J7x':function(Y7x,d7x){return Y7x==d7x;}
,'f4s':function(K4s,p4s){return K4s>p4s;}
,'f9P':function(K9P,p9P){return K9P<=p9P;}
,'u6W':function(R6W,l6W){return R6W>=l6W;}
,'E0f':function(F0f,y0f){return F0f==y0f;}
,'t2n':function(j2n,a2n){return j2n==a2n;}
,'X3z':function(s3z,r3z){return s3z/r3z;}
,'w4x':function(k4x,q4x){return k4x==q4x;}
,'h1A':function(Q1A,B1A){return Q1A==B1A;}
,'h6a':function(Q6a,B6a){return Q6a==B6a;}
,'A6c':function(t6c,j6c){return t6c<j6c;}
,'Q1a':function(B1a,D1a){return B1a<=D1a;}
,'Z2R':function(m2R,J2R){return m2R<J2R;}
,'r4c':function(v4c,n4c){return v4c<=n4c;}
,'X8':function(s8,r8){return s8==r8;}
,'l3f':function(z3f,O3f){return z3f==O3f;}
,'g1W':function(C1W,I1W){return C1W<=I1W;}
,'O6x':function(h6x,Q6x){return h6x!=Q6x;}
,'A4c':function(t4c,j4c){return t4c==j4c;}
,'D2s':function(o2s,i2s){return o2s==i2s;}
,'p3W':function(e3W,x3W){return e3W-x3W;}
,'e4':function(x4,L4){return x4==L4;}
,'w7x':function(k7x,q7x){return k7x/q7x;}
,'j1z':function(a1z,T1z){return a1z==T1z;}
,'m1a':function(J1a,Y1a){return J1a==Y1a;}
,'l6':function(z6,O6){return z6!=O6;}
,'e5f':function(x5f,L5f){return x5f-L5f;}
,'a8z':function(T8z,Z8z){return T8z-Z8z;}
,'z8t':function(O8t,h8t){return O8t<h8t;}
,'v7c':function(n7c,N7c){return n7c<N7c;}
,'V0c':function(G0c,X0c){return G0c!=X0c;}
,'W4e':function(b4e,E4e){return b4e*E4e;}
,'Z1n':function(m1n,J1n){return m1n/J1n;}
,'c2R':function(u2R,R2R){return u2R-R2R;}
,'L5x':function(g5x,C5x){return g5x>C5x;}
,'y1h':function(U1h,S1h){return U1h<S1h;}
,'r1h':function(v1h,n1h){return v1h-n1h;}
,'G8R':function(X8R,s8R){return X8R*s8R;}
,'r9R':function(v9R,n9R){return v9R==n9R;}
,'f9f':function(K9f,p9f){return K9f<p9f;}
,'q8P':function(P8P,c8P){return P8P<c8P;}
,'f8s':function(K8s,p8s){return K8s in p8s;}
,'x0Z':5,'Q8W':function(B8W,D8W){return B8W/D8W;}
,'y2A':function(U2A,S2A){return U2A-S2A;}
,'m0e':function(J0e,Y0e){return J0e==Y0e;}
,'c2P':function(u2P,R2P){return u2P<R2P;}
,'y5':function(U5,S5){return U5<S5;}
,'H3W':function(A9W,t9W){return A9W<t9W;}
,'k9i':function(q9i,P9i){return q9i==P9i;}
,'W4n':function(b4n,E4n){return b4n==E4n;}
,'H6n':function(A4n,t4n,j4n){return A4n*t4n/j4n;}
,'m2i':function(J2i,Y2i){return J2i<Y2i;}
,'F8W':function(y8W,U8W){return y8W>=U8W;}
,'N8R':function(f8R,K8R){return f8R==K8R;}
,'V3a':function(G3a,X3a){return G3a*X3a;}
,'r2i':function(v2i,n2i){return v2i==n2i;}
,'y8P':function(U8P,S8P){return U8P==S8P;}
,'N9s':function(f9s,K9s){return f9s==K9s;}
,'p1h':function(e1h,x1h){return e1h!=x1h;}
,'j2a':function(a2a,T2a){return a2a*T2a;}
,'K5n':function(p5n,e5n){return p5n<e5n;}
,'E0t':function(F0t,y0t){return F0t==y0t;}
,'w4R':function(k4R,q4R){return k4R!=q4R;}
,'D1z':function(o1z,i1z){return o1z!=i1z;}
,'P4A':function(c4A,u4A){return c4A<u4A;}
,'S7h':function(H7h,A6h){return H7h!=A6h;}
,'T9a':function(Z9a,m9a){return Z9a*m9a;}
,'f1f':function(K1f,p1f,e1f){return K1f*p1f/e1f;}
,'O4x':function(h4x,Q4x){return h4x*Q4x;}
,'W0c':function(b0c,E0c){return b0c<E0c;}
,'x5t':function(L5t,g5t){return L5t-g5t;}
,'A3e':function(t3e,j3e){return t3e!=j3e;}
,'c2c':function(u2c,R2c){return u2c==R2c;}
,'i8s':function(V8s,G8s){return V8s==G8s;}
,'t8s':function(j8s,a8s){return j8s-a8s;}
,'s1z':function(r1z,v1z){return r1z/v1z;}
,'L6n':function(g6n,C6n){return g6n-C6n;}
,'E5W':function(F5W,y5W){return F5W<y5W;}
,'U5e':function(S5e,H5e){return S5e<H5e;}
,'d8P':function(w8P,k8P){return w8P<k8P;}
,'z1':function(O1,h1,Q1){return O1*h1/Q1;}
,'f4n':function(K4n,p4n){return K4n/p4n;}
,'q7A':function(P7A,c7A){return P7A-c7A;}
,'e8s':function(x8s,L8s){return x8s!==L8s;}
,'s3n':function(r3n,v3n){return r3n==v3n;}
,'P2A':function(c2A,u2A){return c2A-u2A;}
,'r4i':function(v4i,n4i){return v4i*n4i;}
,'H0W':function(A8W,t8W){return A8W<t8W;}
,'Y4W':function(d4W,w4W){return d4W<w4W;}
,'X8f':function(s8f,r8f){return s8f<r8f;}
,'q3e':function(P3e,c3e){return P3e-c3e;}
,'H2f':function(A0n,t0n){return A0n<t0n;}
,'a3i':function(T3i,Z3i){return T3i>Z3i;}
,'f6i':function(K6i,p6i){return K6i/p6i;}
,'t2A':function(j2A,a2A){return j2A==a2A;}
,'r9A':function(v9A,n9A){return v9A-n9A;}
,'w9n':function(k9n,q9n){return k9n>q9n;}
,'l1P':function(z1P,O1P){return z1P==O1P;}
,'f8a':function(K8a,p8a){return K8a>=p8a;}
,'H4t':function(A5t,t5t){return A5t==t5t;}
,'R4n':function(l4n,z4n){return l4n>z4n;}
,'J4A':function(Y4A,d4A){return Y4A<d4A;}
,'a5A':function(T5A,Z5A){return T5A-Z5A;}
,'F1A':function(y1A,U1A){return y1A<=U1A;}
,'e6t':function(x6t,L6t){return x6t<L6t;}
,'j3s':function(a3s,T3s){return a3s==T3s;}
,'I3x':function(M3x,W3x){return M3x*W3x;}
,'Q7P':function(B7P,D7P){return B7P==D7P;}
,'H1h':function(A3h,t3h){return A3h<t3h;}
,'M4a':function(W4a,b4a){return W4a<=b4a;}
,'Y0c':function(d0c,w0c){return d0c|w0c;}
,'K7t':function(p7t,e7t){return p7t-e7t;}
,'V6':function(G6,X6){return G6!=X6;}
,'E4s':function(F4s,y4s){return F4s>y4s;}
,'L1s':function(g1s,C1s){return g1s==C1s;}
,'b4z':function(E4z,F4z){return E4z>F4z;}
,'Q8P':function(B8P,D8P){return B8P==D8P;}
,'x4W':function(L4W,g4W){return L4W==g4W;}
,'s7h':function(r7h,v7h){return r7h==v7h;}
,'C3a':function(I3a,M3a){return I3a==M3a;}
,'B2A':function(D2A,o2A,i2A){return D2A*o2A/i2A;}
,'t4P':function(j4P,a4P){return j4P*a4P;}
,'O9n':function(h9n,Q9n){return h9n==Q9n;}
,'s2s':function(r2s,v2s){return r2s==v2s;}
,'M5i':function(W5i,b5i){return W5i==b5i;}
,'c7R':function(u7R,R7R){return u7R<R7R;}
,'L4c':function(g4c,C4c){return g4c>C4c;}
,'g0f':function(C0f,I0f){return C0f<=I0f;}
,'i0z':function(V0z,G0z){return V0z==G0z;}
,'V9e':function(G9e,X9e){return G9e*X9e;}
,'F7t':function(y7t,U7t){return y7t==U7t;}
,'S5n':function(H5n,A2n){return H5n-A2n;}
,'K6x':function(p6x,e6x){return p6x!=e6x;}
,'I3W':function(M3W,W3W){return M3W>W3W;}
,'L7a':function(g7a,C7a){return g7a*C7a;}
,'f0P':function(K0P,p0P){return K0P==p0P;}
,'F8x':function(y8x,U8x){return y8x<U8x;}
,'z6f':function(O6f,h6f){return O6f>h6f;}
,'O1e':function(h1e,Q1e){return h1e==Q1e;}
,'E0z':function(F0z,y0z){return F0z<y0z;}
,'U8c':function(S8c,H8c){return S8c>H8c;}
,'T3n':function(Z3n,m3n){return Z3n==m3n;}
,'A5R':function(t5R,j5R){return t5R!=j5R;}
,'n6':function(N6,f6){return N6==f6;}
,'M7f':function(W7f,b7f){return W7f*b7f;}
,'j6P':function(a6P,T6P){return a6P<T6P;}
,'c3':function(u3,R3){return u3==R3;}
,'y9R':function(U9R,S9R){return U9R<S9R;}
,'a8P':function(T8P,Z8P){return T8P==Z8P;}
,'Z0a':function(m0a,J0a){return m0a<J0a;}
,'s0a':function(r0a,v0a){return r0a-v0a;}
,'j6a':function(a6a,T6a){return a6a-T6a;}
,'y3t':function(U3t,S3t){return U3t/S3t;}
,'N7P':function(f7P,K7P){return f7P>=K7P;}
,'A7s':function(t7s,j7s){return t7s==j7s;}
,'g3c':function(C3c,I3c){return C3c>I3c;}
,'O4P':function(h4P,Q4P){return h4P-Q4P;}
,'t5W':function(j5W,a5W){return j5W>=a5W;}
,'g0Z':4,'x9h':function(L9h,g9h){return L9h==g9h;}
,'l1T':17,'J9h':function(Y9h,d9h){return Y9h!=d9h;}
,'d0e':function(w0e,k0e){return w0e==k0e;}
,'M1i':function(W1i,b1i){return W1i<=b1i;}
,'i5W':function(V5W,G5W){return V5W/G5W;}
,'u7n':function(R7n,l7n){return R7n<=l7n;}
,'m6c':function(J6c,Y6c){return J6c-Y6c;}
,'v8f':function(n8f,N8f){return n8f/N8f;}
,'Y5z':function(d5z,w5z){return d5z==w5z;}
,'i6R':function(V6R,G6R){return V6R-G6R;}
,'L3W':function(g3W,C3W){return g3W-C3W;}
,'b1c':function(E1c,F1c,y1c){return E1c-F1c+y1c;}
,'q0x':function(P0x,c0x){return P0x/c0x;}
,'A0i':function(t0i,j0i){return t0i<j0i;}
,'s0m':"C",'z7a':function(O7a,h7a){return O7a<=h7a;}
,'k4W':function(q4W,P4W){return q4W*P4W;}
,'T8h':function(Z8h,m8h){return Z8h>m8h;}
,'Z3':function(m3,J3){return m3*J3;}
,'P7W':function(c7W,u7W){return c7W==u7W;}
,'g4i':function(C4i,I4i){return C4i-I4i;}
,'w5W':function(k5W,q5W){return k5W/q5W;}
,'B3n':function(D3n,o3n){return D3n==o3n;}
,'T9n':function(Z9n,m9n){return Z9n==m9n;}
,'u9c':function(R9c,l9c){return R9c>l9c;}
,'m2W':function(J2W,Y2W){return J2W!=Y2W;}
,'J8n':function(Y8n,d8n){return Y8n<d8n;}
,'D0n':function(o0n,i0n){return o0n!=i0n;}
,'R0P':function(l0P,z0P){return l0P==z0P;}
,'g7c':function(C7c,I7c){return C7c*I7c;}
,'i9h':function(V9h,G9h){return V9h<G9h;}
,'K5t':function(p5t,e5t){return p5t-e5t;}
,'A4R':function(t4R,j4R,a4R){return t4R-j4R-a4R;}
,'H8t':function(A1t,t1t){return A1t>t1t;}
,'B9a':function(D9a,o9a){return D9a>o9a;}
,'j1t':function(a1t,T1t){return a1t-T1t;}
,'V8A':function(G8A,X8A){return G8A/X8A;}
,'i6t':function(V6t,G6t){return V6t<G6t;}
,'I2e':function(M2e,W2e){return M2e==W2e;}
,'A7c':function(t7c,j7c){return t7c>j7c;}
,'M0P':function(W0P,b0P){return W0P==b0P;}
,'G3c':function(X3c,s3c){return X3c*s3c;}
,'M8':function(W8,b8){return W8<b8;}
,'J4h':function(Y4h,d4h){return Y4h==d4h;}
,'Q0A':function(B0A,D0A){return B0A/D0A;}
,'Z9':function(m9,J9){return m9/J9;}
,'E6t':function(F6t,y6t){return F6t*y6t;}
,'t3n':function(j3n,a3n){return j3n>a3n;}
,'d6n':function(w6n,k6n){return w6n==k6n;}
,'E6i':function(F6i,y6i){return F6i/y6i;}
,'G0x':function(X0x,s0x){return X0x<s0x;}
,'q1c':function(P1c,c1c){return P1c!=c1c;}
,'D8A':function(o8A,i8A){return o8A<i8A;}
,'b8t':function(E8t,F8t){return E8t<F8t;}
,'O4s':function(h4s,Q4s){return h4s-Q4s;}
,'j0a':function(a0a,T0a){return a0a/T0a;}
,'I3i':function(M3i,W3i){return M3i==W3i;}
,'d6f':function(w6f,k6f){return w6f-k6f;}
,'f7x':function(K7x,p7x){return K7x==p7x;}
,'h1z':function(Q1z,B1z){return Q1z<B1z;}
,'b5R':function(E5R,F5R){return E5R/F5R;}
,'l7i':function(z7i,O7i){return z7i<=O7i;}
,'S2a':function(H2a,A0R){return H2a-A0R;}
,'p6W':function(e6W,x6W){return e6W<x6W;}
,'u8t':function(R8t,l8t){return R8t-l8t;}
,'f1e':function(K1e,p1e){return K1e>p1e;}
,'C2c':function(I2c,M2c){return I2c==M2c;}
,'E8h':function(F8h,y8h){return F8h<y8h;}
,'i0s':function(V0s,G0s){return V0s-G0s;}
,'a0i':function(T0i,Z0i){return T0i<=Z0i;}
,'T0P':function(Z0P,m0P){return Z0P<m0P;}
,'d1a':function(w1a,k1a){return w1a==k1a;}
,'l5t':function(z5t,O5t){return z5t==O5t;}
,'g8a':function(C8a,I8a){return C8a>I8a;}
,'i4A':function(V4A,G4A){return V4A>G4A;}
,'S5z':function(H5z,A2z){return H5z>A2z;}
,'z9c':function(O9c,h9c){return O9c-h9c;}
,'I8A':function(M8A,W8A){return M8A==W8A;}
,'R7z':function(l7z,z7z){return l7z-z7z;}
,'q7a':function(P7a,c7a){return P7a<=c7a;}
,'i3R':function(V3R,G3R){return V3R/G3R;}
,'F1z':function(y1z,U1z){return y1z==U1z;}
,'q2e':function(P2e,c2e){return P2e>=c2e;}
,'z1s':function(O1s,h1s){return O1s==h1s;}
,'k2x':function(q2x,P2x){return q2x>P2x;}
,'G0i':function(X0i,s0i){return X0i<s0i;}
,'X7c':function(s7c,r7c){return s7c>r7c;}
,'V4e':function(G4e,X4e){return G4e*X4e;}
,'K8i':function(p8i,e8i){return p8i-e8i;}
,'Z9i':function(m9i,J9i){return m9i==J9i;}
,'c0a':function(u0a,R0a){return u0a/R0a;}
,'i0t':function(V0t,G0t){return V0t>=G0t;}
,'C8e':function(I8e,M8e){return I8e>=M8e;}
,'z4i':function(O4i,h4i){return O4i-h4i;}
,'e5A':function(x5A,L5A){return x5A<L5A;}
,'K3f':function(p3f,e3f){return p3f*e3f;}
,'H5R':function(A2R,t2R){return A2R*t2R;}
,'F0c':function(y0c,U0c){return y0c==U0c;}
,'k7h':function(q7h,P7h){return q7h>P7h;}
,'F0a':function(y0a,U0a){return y0a<U0a;}
,'a1a':function(T1a,Z1a){return T1a<=Z1a;}
,'g3z':function(C3z,I3z){return C3z!=I3z;}
,'m4t':function(J4t,Y4t){return J4t==Y4t;}
,'z5P':function(O5P,h5P){return O5P-h5P;}
,'g1e':function(C1e,I1e){return C1e/I1e;}
,'F9W':function(y9W,U9W){return y9W*U9W;}
,'H9h':function(A7h,t7h){return A7h<=t7h;}
,'d9c':function(w9c,k9c){return w9c*k9c;}
,'x0h':function(L0h,g0h){return L0h<g0h;}
,'e7x':function(x7x,L7x){return x7x*L7x;}
,'D2P':function(o2P,i2P){return o2P==i2P;}
,'A1':function(j1,a1){return j1>a1;}
,'D0h':function(o0h,i0h){return o0h-i0h;}
,'e2t':function(x2t,L2t){return x2t>L2t;}
,'t4s':function(j4s,a4s){return j4s!=a4s;}
,'D5z':function(o5z,i5z){return o5z==i5z;}
,'u5a':function(R5a,l5a){return R5a*l5a;}
,'C1':function(I1,M1){return I1-M1;}
,'n2a':function(N2a,f2a){return N2a<f2a;}
,'S2R':function(H2R,A0t){return H2R-A0t;}
,'R7e':function(l7e,z7e){return l7e-z7e;}
,'T7x':function(Z7x,m7x){return Z7x==m7x;}
,'S6':function(H6,A4){return H6==A4;}
,'e8a':function(x8a,L8a){return x8a*L8a;}
,'i2':function(V2,G2){return V2<G2;}
,'j4W':function(a4W,T4W){return a4W==T4W;}
,'i5i':function(V5i,G5i){return V5i!=G5i;}
,'H1s':function(A3s,t3s){return A3s/t3s;}
,'D3f':function(o3f,i3f){return o3f-i3f;}
,'O4':function(h4,Q4){return h4>Q4;}
,'S7i':function(H7i,A6i){return H7i/A6i;}
,'g4x':function(C4x,I4x){return C4x==I4x;}
,'z3i':function(O3i,h3i){return O3i==h3i;}
,'o7c':function(i7c,V7c,G7c){return i7c*V7c/G7c;}
,'u9A':function(R9A,l9A){return R9A<l9A;}
,'n3h':function(N3h,f3h){return N3h*f3h;}
,'n1z':function(N1z,f1z){return N1z>=f1z;}
,'K2a':function(p2a,e2a){return p2a>e2a;}
,'H8R':function(A1R,t1R){return A1R==t1R;}
,'A1s':function(t1s,j1s){return t1s!=j1s;}
,'K6A':function(p6A,e6A){return p6A>e6A;}
,'G8t':function(X8t,s8t){return X8t!=s8t;}
,'w6h':function(k6h,q6h){return k6h<q6h;}
,'L8R':function(g8R,C8R){return g8R<C8R;}
,'T0z':function(Z0z,m0z){return Z0z<m0z;}
,'t0R':function(j0R,a0R){return j0R<=a0R;}
,'o1s':function(i1s,V1s){return i1s==V1s;}
,'Q1s':function(B1s,D1s){return B1s==D1s;}
,'V3s':function(G3s,X3s){return G3s<=X3s;}
,'H9A':function(A7A,t7A){return A7A<t7A;}
,'k1P':function(q1P,P1P){return q1P==P1P;}
,'q6W':function(P6W,c6W){return P6W<c6W;}
,'Y2P':function(d2P,w2P){return d2P==w2P;}
,'X4n':function(s4n,r4n){return s4n/r4n;}
,'N2W':function(f2W,K2W){return f2W/K2W;}
,'G8P':function(X8P,s8P){return X8P<s8P;}
,'I0x':function(M0x,W0x){return M0x==W0x;}
,'F5t':function(y5t,U5t){return y5t-U5t;}
,'l9i':function(z9i,O9i){return z9i==O9i;}
,'W3n':function(b3n,E3n){return b3n<E3n;}
,'g0':function(C0,I0){return C0<I0;}
,'o8P':function(i8P,V8P){return i8P-V8P;}
,'A5':function(t5,j5){return t5==j5;}
,'m7c':function(J7c,Y7c){return J7c==Y7c;}
,'v8c':function(n8c,N8c){return n8c==N8c;}
,'f7z':function(K7z,p7z){return K7z-p7z;}
,'e8h':function(x8h,L8h){return x8h>L8h;}
,'g1i':function(C1i,I1i){return C1i!=I1i;}
,'d4t':function(w4t,k4t){return w4t>k4t;}
,'p9s':function(e9s,x9s){return e9s!=x9s;}
,'s5n':function(r5n,v5n){return r5n>=v5n;}
,'F4f':function(y4f,U4f){return y4f==U4f;}
,'h5c':function(Q5c,B5c){return Q5c<B5c;}
,'n0':function(N0,f0){return N0<f0;}
,'c4W':function(u4W,R4W){return u4W*R4W;}
,'j1P':function(a1P,T1P){return a1P==T1P;}
,'n5c':function(N5c,f5c){return N5c>=f5c;}
,'G0f':function(X0f,s0f){return X0f-s0f;}
,'B3A':function(D3A,o3A){return D3A<o3A;}
,'z9R':function(O9R,h9R){return O9R<=h9R;}
,'E9n':function(F9n,y9n){return F9n<=y9n;}
,'f1x':function(K1x,p1x){return K1x<p1x;}
,'g3A':function(C3A,I3A){return C3A<I3A;}
,'r1a':function(v1a,n1a){return v1a&n1a;}
,'x1z':function(L1z,g1z){return L1z==g1z;}
,'h9W':function(Q9W,B9W){return Q9W*B9W;}
,'G1h':function(X1h,s1h){return X1h==s1h;}
,'R7f':function(l7f,z7f){return l7f-z7f;}
,'P2':function(c2,u2){return c2==u2;}
,'r6n':function(v6n,n6n){return v6n==n6n;}
,'h4W':function(Q4W,B4W){return Q4W>B4W;}
,'a8R':function(T8R,Z8R){return T8R<Z8R;}
,'t6t':function(j6t,a6t){return j6t==a6t;}
,'H1P':function(A3P,t3P){return A3P/t3P;}
,'A6e':function(t6e,j6e){return t6e<j6e;}
,'z9A':function(O9A,h9A){return O9A-h9A;}
,'y0x':function(U0x,S0x){return U0x==S0x;}
,'T7e':function(Z7e,m7e){return Z7e*m7e;}
,'C3s':function(I3s,M3s){return I3s*M3s;}
,'O0s':function(h0s,Q0s){return h0s-Q0s;}
,'C3h':function(I3h,M3h){return I3h==M3h;}
,'d9R':function(w9R,k9R){return w9R/k9R;}
,'X0s':function(s0s,r0s){return s0s==r0s;}
,'V4f':function(G4f,X4f){return G4f*X4f;}
,'C6A':function(I6A,M6A){return I6A-M6A;}
,'M6t':function(W6t,b6t){return W6t*b6t;}
,'t9a':function(j9a,a9a){return j9a>a9a;}
,'a0x':function(T0x,Z0x){return T0x<Z0x;}
,'u1s':function(R1s,l1s){return R1s==l1s;}
,'f6f':function(K6f,p6f,e6f){return K6f-p6f+e6f;}
,'a5':function(T5,Z5){return T5-Z5;}
,'U3A':function(S3A,H3A){return S3A<H3A;}
,'Z8e':function(m8e,J8e){return m8e!=J8e;}
,'W2a':function(b2a,E2a){return b2a>E2a;}
,'S4W':function(H4W,A5W){return H4W<A5W;}
,'n0n':function(N0n,f0n){return N0n==f0n;}
,'i8n':function(V8n,G8n,X8n){return V8n*G8n/X8n;}
,'t5f':function(j5f,a5f){return j5f==a5f;}
,'m7n':function(J7n,Y7n){return J7n==Y7n;}
,'P8f':function(c8f,u8f){return c8f>u8f;}
,'u9R':function(R9R,l9R){return R9R>l9R;}
,'I2i':function(M2i,W2i){return M2i==W2i;}
,'X1f':function(s1f,r1f){return s1f-r1f;}
,'R5i':function(l5i,z5i){return l5i>=z5i;}
,'z0f':function(O0f,h0f){return O0f<h0f;}
,'Q4c':function(B4c,D4c){return B4c<D4c;}
,'J4a':function(Y4a,d4a){return Y4a<d4a;}
,'y7A':function(U7A,S7A){return U7A-S7A;}
,'Z7R':function(m7R,J7R){return m7R<J7R;}
,'k4e':function(q4e,P4e){return q4e/P4e;}
,'n0Z':0,'K1z':function(p1z,e1z){return p1z/e1z;}
,'b0A':function(E0A,F0A){return E0A==F0A;}
,'v8a':function(n8a,N8a){return n8a<N8a;}
,'b1h':function(E1h,F1h){return E1h<F1h;}
,'r2e':function(v2e,n2e){return v2e==n2e;}
,'Y6':function(d6,w6){return d6<w6;}
,'S6s':function(H6s,A4s){return H6s==A4s;}
,'U3R':function(S3R,H3R){return S3R>H3R;}
,'U4P':function(S4P,H4P){return S4P*H4P;}
,'i3A':function(V3A,G3A){return V3A<G3A;}
,'k6A':function(q6A,P6A){return q6A-P6A;}
,'r9s':function(v9s,n9s){return v9s-n9s;}
,'U4A':function(S4A,H4A){return S4A<H4A;}
,'F6P':function(y6P,U6P){return y6P<=U6P;}
,'z5R':function(O5R,h5R){return O5R>h5R;}
,'n9z':function(N9z,f9z){return N9z>=f9z;}
,'G6W':function(X6W,s6W){return X6W<s6W;}
,'y0e':function(U0e,S0e){return U0e==S0e;}
,'o0i':function(i0i,V0i){return i0i*V0i;}
,'L0x':function(g0x,C0x){return g0x-C0x;}
,'r6W':function(v6W,n6W){return v6W>n6W;}
,'S3h':function(H3h,A9h){return H3h-A9h;}
,'y3i':function(U3i,S3i){return U3i==S3i;}
,'c5c':function(u5c,R5c){return u5c==R5c;}
,'J7W':function(Y7W,d7W){return Y7W==d7W;}
,'p5s':function(e5s,x5s){return e5s/x5s;}
,'a1c':function(T1c,Z1c){return T1c/Z1c;}
,'T7':function(Z7,m7){return Z7*m7;}
,'J4P':function(Y4P,d4P){return Y4P<d4P;}
,'W8e':function(b8e,E8e){return b8e<=E8e;}
,'j9t':function(a9t,T9t){return a9t-T9t;}
,'N0x':function(f0x,K0x){return f0x<K0x;}
,'w1x':function(k1x,q1x){return k1x>=q1x;}
,'v6t':function(n6t,N6t){return n6t>N6t;}
,'b5':function(E5,F5){return E5>=F5;}
,'C6P':function(I6P,M6P){return I6P==M6P;}
,'p7A':function(e7A,x7A){return e7A<x7A;}
,'v2t':function(n2t,N2t){return n2t>N2t;}
,'N1h':function(f1h,K1h){return f1h*K1h;}
,'u3x':function(R3x,l3x){return R3x>l3x;}
,'O2n':function(h2n,Q2n){return h2n-Q2n;}
,'z5':function(O5,h5){return O5/h5;}
,'M7z':function(W7z,b7z){return W7z-b7z;}
,'u2W':function(R2W,l2W){return R2W<l2W;}
,'n1A':function(N1A,f1A){return N1A<f1A;}
,'w2A':function(k2A,q2A){return k2A<q2A;}
,'v5f':function(n5f,N5f){return n5f/N5f;}
,'A2i':function(t2i,j2i){return t2i<j2i;}
,'K9i':function(p9i,e9i){return p9i==e9i;}
,'N5R':function(f5R,K5R){return f5R==K5R;}
,'r3':function(v3,n3){return v3/n3;}
,'y8R':function(U8R,S8R){return U8R-S8R;}
,'X3R':function(s3R,r3R){return s3R<r3R;}
,'t0W':function(j0W,a0W){return j0W==a0W;}
,'z3W':function(O3W,h3W){return O3W!=h3W;}
,'P7':function(c7,u7){return c7<u7;}
,'U6c':function(S6c,H6c){return S6c==H6c;}
,'W3a':function(b3a,E3a){return b3a!=E3a;}
,'t9s':function(j9s,a9s){return j9s-a9s;}
,'Q0f':function(B0f,D0f){return B0f-D0f;}
,'z1c':function(O1c,h1c){return O1c>h1c;}
,'c0c':function(u0c,R0c){return u0c|R0c;}
,'V9i':function(G9i,X9i){return G9i==X9i;}
,'O7z':function(h7z,Q7z){return h7z*Q7z;}
,'I0i':function(M0i,W0i){return M0i>W0i;}
,'O0z':function(h0z,Q0z){return h0z>Q0z;}
,'x5c':function(L5c,g5c,C5c){return L5c-g5c+C5c;}
,'b5P':function(E5P,F5P){return E5P!=F5P;}
,'V2P':function(G2P,X2P){return G2P<X2P;}
,'z0i':function(O0i,h0i){return O0i/h0i;}
,'O1W':function(h1W,Q1W){return h1W-Q1W;}
,'x3P':function(L3P,g3P){return L3P/g3P;}
,'i8h':function(V8h,G8h){return V8h-G8h;}
,'w0':function(k0,q0){return k0<q0;}
,'n7R':function(N7R,f7R){return N7R==f7R;}
,'Q2e':function(B2e,D2e){return B2e%D2e;}
,'H7s':function(A6s,t6s){return A6s==t6s;}
,'L3':function(g3,C3){return g3/C3;}
,'E5f':function(F5f,y5f){return F5f<y5f;}
,'L0e':function(g0e,C0e){return g0e>C0e;}
,'G5x':function(X5x,s5x){return X5x*s5x;}
,'J5W':function(Y5W,d5W){return Y5W==d5W;}
,'i3n':function(V3n,G3n,X3n){return V3n*G3n/X3n;}
,'h4z':function(Q4z,B4z,D4z){return Q4z/B4z*D4z;}
,'T9s':function(Z9s,m9s){return Z9s*m9s;}
,'V1n':function(G1n,X1n){return G1n/X1n;}
,'G6c':function(X6c,s6c,r6c){return X6c-s6c-r6c;}
,'S8W':function(H8W,A1W){return H8W==A1W;}
,'l8x':function(z8x,O8x){return z8x==O8x;}
,'G2i':function(X2i,s2i){return X2i-s2i;}
,'j9i':function(a9i,T9i){return a9i-T9i;}
,'b0W':function(E0W,F0W){return E0W/F0W;}
,'R2n':function(l2n,z2n){return l2n==z2n;}
,'p1t':function(e1t,x1t){return e1t==x1t;}
,'P9s':function(c9s,u9s){return c9s==u9s;}
,'u4t':function(R4t,l4t){return R4t==l4t;}
,'j4e':function(a4e,T4e){return a4e in T4e;}
,'Q5h':function(B5h,D5h){return B5h==D5h;}
,'G4t':function(X4t,s4t){return X4t==s4t;}
,'I5x':function(M5x,W5x){return M5x-W5x;}
,'a0e':function(T0e,Z0e){return T0e*Z0e;}
,'u4c':function(R4c,l4c){return R4c<l4c;}
,'n2R':function(N2R,f2R){return N2R-f2R;}
,'x5n':function(L5n,g5n){return L5n-g5n;}
,'B4':function(D4,o4){return D4>o4;}
,'g4s':function(C4s,I4s){return C4s<I4s;}
,'i1e':function(V1e,G1e){return V1e==G1e;}
,'S3s':function(H3s,A9s){return H3s-A9s;}
,'f0s':function(K0s,p0s,e0s,x0s,L0s){return K0s/p0s/e0s/x0s/L0s;}
,'c5n':function(u5n,R5n){return u5n<R5n;}
,'A6x':function(t6x,j6x){return t6x>=j6x;}
,'O3R':function(h3R,Q3R){return h3R<Q3R;}
,'W3s':function(b3s,E3s){return b3s-E3s;}
,'J2n':function(Y2n,d2n){return Y2n/d2n;}
,'e9P':function(x9P,L9P){return x9P<=L9P;}
,'w3R':function(k3R,q3R){return k3R<=q3R;}
,'R3A':function(l3A,z3A){return l3A==z3A;}
,'d7P':function(w7P,k7P){return w7P<k7P;}
,'m6W':function(J6W,Y6W){return J6W<=Y6W;}
,'C3P':function(I3P,M3P){return I3P!=M3P;}
,'p9R':function(e9R,x9R){return e9R/x9R;}
,'O9f':function(h9f,Q9f){return h9f==Q9f;}
,'Q2W':function(B2W,D2W){return B2W/D2W;}
,'k0a':function(q0a,P0a){return q0a<P0a;}
,'Z3P':function(m3P,J3P){return m3P<J3P;}
,'j5z':function(a5z,T5z){return a5z-T5z;}
,'E1e':function(F1e,y1e){return F1e==y1e;}
,'k7R':function(q7R,P7R){return q7R<P7R;}
,'u5x':function(R5x,l5x){return R5x<=l5x;}
,'m9R':function(J9R,Y9R){return J9R>Y9R;}
,'K2c':function(p2c,e2c){return p2c-e2c;}
,'K5z':function(p5z,e5z){return p5z<e5z;}
,'F2s':function(y2s,U2s){return y2s<=U2s;}
,'U1W':function(S1W,H1W){return S1W-H1W;}
,'o6z':function(i6z,V6z){return i6z-V6z;}
,'F3P':function(y3P,U3P){return y3P==U3P;}
,'T0s':function(Z0s,m0s){return Z0s-m0s;}
,'o8W':function(i8W,V8W){return i8W/V8W;}
,'I9t':function(M9t,W9t){return M9t<W9t;}
,'P3n':function(c3n,u3n){return c3n<u3n;}
,'H7a':function(A6a,t6a){return A6a<t6a;}
,'Q8z':function(B8z,D8z){return B8z==D8z;}
,'X0t':function(s0t,r0t){return s0t*r0t;}
,'F9i':function(y9i,U9i){return y9i*U9i;}
,'y5s':function(U5s,S5s){return U5s<S5s;}
,'Y8i':function(d8i,w8i){return d8i>w8i;}
,'u2i':function(R2i,l2i){return R2i==l2i;}
,'Q0i':function(B0i,D0i){return B0i*D0i;}
,'a7c':function(T7c,Z7c){return T7c==Z7c;}
,'H6W':function(A4W,t4W){return A4W<t4W;}
,'D1A':function(o1A,i1A){return o1A==i1A;}
,'t8a':function(j8a,a8a){return j8a>a8a;}
,'a0A':function(T0A,Z0A){return T0A>=Z0A;}
,'T0t':function(Z0t,m0t){return Z0t-m0t;}
,'E8c':function(F8c,y8c){return F8c-y8c;}
,'i1i':function(V1i,G1i){return V1i==G1i;}
,'E8a':function(F8a,y8a){return F8a>=y8a;}
,'T1':function(Z1,J1){return Z1==J1;}
,'r3c':function(v3c,n3c){return v3c*n3c;}
,'i9f':function(V9f,G9f){return V9f/G9f;}
,'O8f':function(h8f,Q8f){return h8f*Q8f;}
,'r1t':function(v1t,n1t){return v1t-n1t;}
,'o6f':function(i6f,V6f){return i6f<=V6f;}
,'i1':function(V1,G1){return V1==G1;}
,'h6P':function(Q6P,B6P){return Q6P-B6P;}
,'H6e':function(A4e,t4e){return A4e*t4e;}
,'y6W':function(U6W,S6W){return U6W>S6W;}
,'l0c':function(z0c,O0c){return z0c|O0c;}
,'s3f':function(r3f,v3f){return r3f>v3f;}
,'a7a':function(T7a,Z7a){return T7a&Z7a;}
,'l4z':function(z4z,O4z){return z4z<=O4z;}
,'B5e':function(D5e,o5e){return D5e>=o5e;}
,'f8h':function(K8h,p8h){return K8h==p8h;}
,'r0e':function(v0e,n0e){return v0e*n0e;}
,'f1i':function(K1i,p1i){return K1i*p1i;}
,'G7A':function(X7A,s7A){return X7A-s7A;}
,'J8c':function(Y8c,d8c){return Y8c>=d8c;}
,'M2z':function(W2z,b2z){return W2z/b2z;}
,'z7c':function(O7c,h7c){return O7c<h7c;}
,'C1R':function(I1R,M1R){return I1R==M1R;}
,'J6h':function(Y6h,d6h){return Y6h<d6h;}
,'F2a':function(y2a,U2a){return y2a<U2a;}
,'A0A':function(t0A,j0A){return t0A==j0A;}
,'x5z':function(L5z,g5z){return L5z/g5z;}
,'c3s':function(u3s,R3s){return u3s==R3s;}
,'n8n':function(N8n,f8n){return N8n-f8n;}
,'x8x':function(L8x,g8x){return L8x-g8x;}
,'h8x':function(Q8x,B8x){return Q8x-B8x;}
,'B0':function(D0,o0){return D0!=o0;}
,'M7W':function(W7W,b7W){return W7W!=b7W;}
,'V4W':function(G4W,X4W){return G4W*X4W;}
,'Y1P':function(d1P,w1P){return d1P<w1P;}
,'f6c':function(K6c,p6c){return K6c==p6c;}
,'X1i':function(s1i,r1i){return s1i==r1i;}
,'V7R':function(G7R,X7R){return G7R==X7R;}
,'S1z':function(H1z,A3z){return H1z/A3z;}
,'D6A':function(o6A,i6A){return o6A/i6A;}
,'k6P':function(q6P,P6P){return q6P==P6P;}
,'b7s':function(E7s,F7s){return E7s>F7s;}
,'e3z':function(x3z,L3z){return x3z<L3z;}
,'z5x':function(O5x,h5x){return O5x<h5x;}
,'J7z':function(Y7z,d7z){return Y7z>d7z;}
,'q8R':function(P8R,c8R){return P8R==c8R;}
,'n2x':function(N2x,f2x){return N2x>f2x;}
,'l8A':function(z8A,O8A){return z8A<=O8A;}
,'H5a':function(A2a,t2a){return A2a>t2a;}
,'E8f':function(F8f,y8f){return F8f*y8f;}
,'L7P':function(g7P,C7P){return g7P>C7P;}
,'X6t':function(s6t,r6t){return s6t>r6t;}
,'K0h':function(p0h,e0h){return p0h==e0h;}
,'Q1c':function(B1c,D1c){return B1c-D1c;}
,'A5s':function(t5s,j5s){return t5s<j5s;}
,'c3P':function(u3P,R3P){return u3P<=R3P;}
,'P5f':function(c5f,u5f){return c5f<u5f;}
,'l5n':function(z5n,O5n){return z5n>=O5n;}
,'t8c':function(j8c,a8c){return j8c>a8c;}
,'I0A':function(M0A,W0A){return M0A-W0A;}
,'E4':function(F4,y4){return F4==y4;}
,'j1A':function(a1A,T1A){return a1A==T1A;}
,'z7P':function(O7P,h7P){return O7P*h7P;}
,'d6c':function(w6c,k6c){return w6c-k6c;}
,'O5f':function(h5f,Q5f){return h5f>=Q5f;}
,'h9s':function(Q9s,B9s,D9s){return Q9s-B9s+D9s;}
,'x6':function(L6,g6){return L6!=g6;}
,'C9h':function(I9h,M9h){return I9h==M9h;}
,'y4z':function(U4z,S4z){return U4z<S4z;}
,'X8c':function(s8c,r8c){return s8c*r8c;}
,'I1h':function(M1h,W1h){return M1h==W1h;}
,'o6n':function(i6n,V6n){return i6n-V6n;}
,'P9n':function(c9n,u9n){return c9n<=u9n;}
,'P8n':function(c8n,u8n){return c8n<u8n;}
,'v0R':function(n0R,N0R){return n0R-N0R;}
,'n6P':function(N6P,f6P){return N6P>f6P;}
,'D6s':function(o6s,i6s){return o6s-i6s;}
,'B1x':function(D1x,o1x){return D1x<o1x;}
,'y4t':function(U4t,S4t){return U4t*S4t;}
,'J8h':function(Y8h,d8h){return Y8h<d8h;}
,'m5P':function(J5P,Y5P){return J5P-Y5P;}
,'F9':function(y9,U9){return y9==U9;}
,'p1s':function(e1s,x1s){return e1s==x1s;}
,'n3P':function(N3P,f3P){return N3P-f3P;}
,'S5A':function(H5A,A2A){return H5A<=A2A;}
,'D4W':function(o4W,i4W){return o4W/i4W;}
,'U1i':function(S1i,H1i){return S1i==H1i;}
,'C9':function(I9,M9){return I9==M9;}
,'s6P':function(r6P,v6P){return r6P==v6P;}
,'o8z':function(i8z,V8z){return i8z<V8z;}
,'s4W':function(r4W,v4W){return r4W-v4W;}
,'b3t':function(E3t,F3t){return E3t/F3t;}
,'m6x':function(J6x,Y6x){return J6x<=Y6x;}
,'o5x':function(i5x,V5x){return i5x*V5x;}
,'i7f':function(V7f,G7f){return V7f-G7f;}
,'k5z':function(q5z,P5z){return q5z<=P5z;}
,'g2n':function(C2n,I2n){return C2n>I2n;}
,'P9h':function(c9h,u9h){return c9h>u9h;}
,'m1c':function(J1c,Y1c){return J1c-Y1c;}
,'X5f':function(s5f,r5f){return s5f<r5f;}
,'c9W':function(u9W,R9W){return u9W<=R9W;}
,'Q5x':function(B5x,D5x){return B5x>D5x;}
,'o2i':function(i2i,V2i){return i2i-V2i;}
,'d2W':function(w2W,k2W){return w2W/k2W;}
,'O6R':function(h6R,Q6R){return h6R<Q6R;}
,'p7s':function(e7s,x7s){return e7s<x7s;}
,'B4R':function(D4R,o4R){return D4R!=o4R;}
,'k9e':function(q9e,P9e){return q9e!=P9e;}
,'m5':function(J5,Y5){return J5<Y5;}
,'j8A':function(a8A,T8A){return a8A==T8A;}
,'T8':function(Z8,m8){return Z8<m8;}
,'q6e':function(P6e,c6e){return P6e<c6e;}
,'Y5t':function(d5t,w5t){return d5t<w5t;}
,'p2f':function(e2f,x2f){return e2f/x2f;}
,'V5c':function(G5c,X5c){return G5c<X5c;}
,'y9h':function(U9h,S9h){return U9h>S9h;}
,'k6':function(q6,P6){return q6!=P6;}
,'L2':function(g2,C2){return g2-C2;}
,'J1x':function(Y1x,d1x){return Y1x-d1x;}
,'a1h':function(T1h,Z1h){return T1h>=Z1h;}
,'I8t':function(M8t,W8t){return M8t>W8t;}
,'d2e':function(w2e,k2e){return w2e<k2e;}
,'K3n':function(p3n,e3n){return p3n*e3n;}
,'v2z':function(n2z,N2z){return n2z==N2z;}
,'f4R':function(K4R,p4R){return K4R>=p4R;}
,'A5A':function(t5A,j5A){return t5A-j5A;}
,'a6f':function(T6f,Z6f){return T6f==Z6f;}
,'k8i':function(q8i,P8i){return q8i-P8i;}
,'Z1z':function(m1z,J1z){return m1z==J1z;}
,'R0z':function(l0z,z0z){return l0z==z0z;}
,'O8':function(h8,Q8){return h8<Q8;}
,'O8s':function(h8s,Q8s){return h8s<Q8s;}
,'n5t':function(N5t,f5t){return N5t<f5t;}
,'T9f':function(Z9f,m9f){return Z9f==m9f;}
,'Q5R':function(B5R,D5R){return B5R!=D5R;}
,'K6h':function(p6h,e6h){return p6h<e6h;}
,'o3c':function(i3c,V3c){return i3c<V3c;}
,'F4W':function(y4W,U4W){return y4W<U4W;}
,'A8P':function(t8P,j8P){return t8P==j8P;}
,'n9W':function(N9W,f9W){return N9W>f9W;}
,'t7f':function(j7f,a7f){return j7f<a7f;}
,'w9P':function(k9P,q9P){return k9P-q9P;}
,'Y1t':function(d1t,w1t){return d1t<w1t;}
,'b3x':function(E3x,F3x){return E3x-F3x;}
,'s5t':function(r5t,v5t){return r5t*v5t;}
,'b0x':function(E0x,F0x){return E0x>F0x;}
,'E7c':function(F7c,y7c){return F7c-y7c;}
,'n9S':"t",'X5i':function(s5i,r5i){return s5i>=r5i;}
,'g2z':function(C2z,I2z){return C2z<I2z;}
,'t6h':function(j6h,a6h){return j6h<a6h;}
,'g5e':function(C5e,I5e){return C5e<I5e;}
,'J9s':function(Y9s,d9s){return Y9s!=d9s;}
,'k9x':function(q9x,P9x){return q9x==P9x;}
,'K9':function(p9,e9){return p9*e9;}
,'K3P':function(p3P,e3P){return p3P==e3P;}
,'M8h':function(W8h,b8h){return W8h-b8h;}
,'W9':function(b9,E9){return b9==E9;}
,'b6e':function(E6e,F6e){return E6e*F6e;}
,'F8i':function(y8i,U8i){return y8i-U8i;}
,'e9n':function(x9n,L9n){return x9n*L9n;}
,'v8s':function(n8s,N8s){return n8s/N8s;}
,'X7e':function(s7e,r7e){return s7e<r7e;}
,'E8s':function(F8s,y8s){return F8s==y8s;}
,'l3a':function(z3a,O3a){return z3a>=O3a;}
,'N5a':function(f5a,K5a){return f5a<=K5a;}
,'d8t':function(w8t,k8t){return w8t/k8t;}
,'i2n':function(V2n,G2n){return V2n==G2n;}
,'n3n':function(N3n,f3n){return N3n<f3n;}
,'y7':function(U7,S7){return U7*S7;}
,'T2n':function(Z2n,m2n){return Z2n==m2n;}
,'b7':function(E7,F7){return E7!=F7;}
,'V9x':function(G9x,X9x){return G9x==X9x;}
,'n2A':function(N2A,f2A){return N2A*f2A;}
,'v1f':function(n1f,N1f){return n1f<N1f;}
,'a1s':function(T1s,Z1s){return T1s-Z1s;}
,'h6':function(Q6,B6){return Q6!=B6;}
,'k2R':function(q2R,P2R){return q2R<=P2R;}
,'i4R':function(V4R,G4R){return V4R/G4R;}
,'p4t':function(e4t,x4t){return e4t==x4t;}
,'B7':function(D7,o7){return D7==o7;}
,'Z4f':function(m4f,J4f){return m4f==J4f;}
,'T6i':function(Z6i,m6i){return Z6i<m6i;}
,'h1t':function(Q1t,B1t){return Q1t!=B1t;}
,'g8f':function(C8f,I8f){return C8f*I8f;}
,'q9R':function(P9R,c9R){return P9R<c9R;}
,'K8x':function(p8x,e8x){return p8x==e8x;}
,'N3x':function(f3x,K3x){return f3x-K3x;}
,'p9t':function(e9t,x9t){return e9t-x9t;}
,'h5z':function(Q5z,B5z){return Q5z-B5z;}
,'N7a':function(f7a,K7a){return f7a<K7a;}
,'R4R':function(l4R,z4R){return l4R!=z4R;}
,'A9R':function(t9R,j9R){return t9R/j9R;}
,'U4R':function(S4R,H4R){return S4R==H4R;}
,'E2n':function(F2n,y2n){return F2n<y2n;}
,'E7x':function(F7x,y7x){return F7x<y7x;}
,'o7n':function(i7n,V7n){return i7n<=V7n;}
,'c4e':function(u4e,R4e){return u4e!=R4e;}
,'D1t':function(o1t,i1t,V1t){return o1t-i1t-V1t;}
,'M5A':function(W5A,b5A){return W5A==b5A;}
,'R9n':function(l9n,z9n){return l9n-z9n;}
,'Q0x':function(B0x,D0x){return B0x-D0x;}
,'R9s':function(l9s,z9s,O9s){return l9s-z9s+O9s;}
,'e4h':function(x4h,L4h){return x4h<L4h;}
,'q5s':function(P5s,c5s){return P5s==c5s;}
,'W0s':function(b0s,E0s){return b0s/E0s;}
,'w2z':function(k2z,q2z){return k2z==q2z;}
,'T2z':function(Z2z,m2z){return Z2z>=m2z;}
,'l9t':function(z9t,O9t,h9t){return z9t*O9t/h9t;}
,'k3t':function(q3t,P3t){return q3t/P3t;}
,'U9n':function(S9n,H9n){return S9n!=H9n;}
,'E4P':function(F4P,y4P){return F4P<=y4P;}
,'M4R':function(W4R,b4R){return W4R<=b4R;}
,'B6x':function(D6x,o6x){return D6x-o6x;}
,'n8e':function(N8e,f8e){return N8e>=f8e;}
,'o5':function(i5,V5){return i5-V5;}
,'t4A':function(j4A,a4A){return j4A-a4A;}
,'L6W':function(g6W,C6W){return g6W<C6W;}
,'G4i':function(X4i,s4i){return X4i<s4i;}
,'A0x':function(t0x,j0x){return t0x-j0x;}
,'a5R':function(T5R,Z5R){return T5R-Z5R;}
,'G9R':function(X9R,s9R){return X9R-s9R;}
,'w6t':function(k6t,q6t){return k6t-q6t;}
,'U3c':function(S3c,H3c){return S3c/H3c;}
,'x7t':function(L7t,g7t){return L7t<g7t;}
,'A1f':function(t1f,j1f){return t1f-j1f;}
,'n6A':function(N6A,f6A){return N6A*f6A;}
,'w1e':function(k1e,q1e){return k1e<q1e;}
,'u6n':function(R6n,l6n){return R6n==l6n;}
,'Q3i':function(B3i,D3i){return B3i==D3i;}
,'X7W':function(s7W,r7W){return s7W*r7W;}
,'Q7a':function(B7a,D7a){return B7a&D7a;}
,'l6A':function(z6A,O6A){return z6A/O6A;}
,'t3R':function(j3R,a3R){return j3R<=a3R;}
,'D9':function(o9,i9){return o9<i9;}
,'R0':function(l0,z0){return l0!=z0;}
,'p8t':function(e8t,x8t){return e8t==x8t;}
,'U9a':function(S9a,H9a){return S9a<=H9a;}
,'Y4e':function(d4e,w4e){return d4e!=w4e;}
,'U9P':function(S9P,H9P){return S9P/H9P;}
,'j4f':function(a4f,T4f){return a4f<T4f;}
,'Q7s':function(B7s,D7s){return B7s>D7s;}
,'K4f':function(p4f,e4f){return p4f==e4f;}
,'J5f':function(Y5f,d5f){return Y5f-d5f;}
,'a9A':function(T9A,Z9A){return T9A==Z9A;}
,'R2t':function(l2t,z2t){return l2t/z2t;}
,'H0A':function(A8A,t8A){return A8A<=t8A;}
,'u0e':function(R0e,l0e){return R0e==l0e;}
,'A8R':function(t8R,j8R){return t8R>j8R;}
,'o4t':function(i4t,V4t){return i4t<V4t;}
,'l9x':function(z9x,O9x){return z9x==O9x;}
,'V2a':function(G2a,X2a){return G2a>X2a;}
,'u8P':function(R8P,l8P){return R8P==l8P;}
,'Z6a':function(m6a,J6a){return m6a>J6a;}
,'V8x':function(G8x,X8x){return G8x>X8x;}
,'o7A':function(i7A,V7A){return i7A<V7A;}
,'v3A':function(n3A,N3A){return n3A<N3A;}
,'T4R':function(Z4R,m4R){return Z4R-m4R;}
,'k0c':function(q0c,P0c){return q0c|P0c;}
,'a3W':function(T3W,Z3W){return T3W==Z3W;}
,'O8h':function(h8h,Q8h){return h8h>Q8h;}
,'r7s':function(v7s,n7s){return v7s==n7s;}
,'S9z':function(H9z,A7z){return H9z/A7z;}
,'g5W':function(C5W,I5W){return C5W==I5W;}
,'U2':function(S2,H2){return S2<H2;}
,'a8f':function(T8f,Z8f){return T8f<Z8f;}
,'C5n':function(I5n,M5n){return I5n==M5n;}
,'A9A':function(t9A,j9A){return t9A>j9A;}
,'U2z':function(S2z,H2z){return S2z==H2z;}
,'X4s':function(s4s,r4s){return s4s<r4s;}
,'N9t':function(f9t,K9t){return f9t<=K9t;}
,'B8n':function(D8n,o8n){return D8n<o8n;}
,'c0h':function(u0h,R0h){return u0h==R0h;}
,'X4P':function(s4P,r4P){return s4P-r4P;}
,'r0x':function(v0x,n0x){return v0x==n0x;}
,'H1t':function(A3t,t3t){return A3t/t3t;}
,'U4a':function(S4a,H4a){return S4a<=H4a;}
,'K2A':function(p2A,e2A){return p2A<e2A;}
,'J9f':function(Y9f,d9f){return Y9f<d9f;}
,'p8P':function(e8P,x8P){return e8P*x8P;}
,'x9i':function(L9i,g9i){return L9i-g9i;}
,'e4n':function(x4n,L4n,g4n){return x4n*L4n*g4n;}
,'A5a':function(t5a,j5a){return t5a==j5a;}
,'D4e':function(o4e,i4e){return o4e>i4e;}
,'i4s':function(V4s,G4s){return V4s<G4s;}
,'o7a':function(i7a,V7a){return i7a>=V7a;}
,'n3s':function(N3s,f3s){return N3s==f3s;}
,'j2R':function(a2R,T2R){return a2R*T2R;}
,'n3f':function(N3f,f3f){return N3f>f3f;}
,'W3P':function(b3P,E3P){return b3P==E3P;}
,'o5h':function(i5h,V5h){return i5h==V5h;}
,'D3a':function(o3a,i3a){return o3a*i3a;}
,'x7R':function(L7R,g7R){return L7R==g7R;}
,'J0z':function(Y0z,d0z){return Y0z==d0z;}
,'p0i':function(e0i,x0i){return e0i==x0i;}
,'D1P':function(o1P,i1P){return o1P/i1P;}
,'F0s':function(y0s,U0s){return y0s/U0s;}
,'C8W':function(I8W,M8W){return I8W<M8W;}
,'j8W':function(a8W,T8W,Z8W){return a8W*T8W*Z8W;}
,'p5R':function(e5R,x5R){return e5R/x5R;}
,'O8n':function(h8n,Q8n){return h8n*Q8n;}
,'m3i':function(J3i,Y3i){return J3i==Y3i;}
,'m6z':function(J6z,Y6z){return J6z<Y6z;}
,'Z6P':function(m6P,J6P){return m6P==J6P;}
,'d5P':function(w5P,k5P){return w5P-k5P;}
,'P1i':function(c1i,u1i){return c1i==u1i;}
,'D7t':function(o7t,i7t){return o7t==i7t;}
,'y6n':function(U6n,S6n){return U6n==S6n;}
,'Y7h':function(d7h,w7h){return d7h-w7h;}
,'H8A':function(A1A,t1A){return A1A-t1A;}
,'H3x':function(A9x,t9x){return A9x>t9x;}
,'e1e':function(x1e,L1e){return x1e<L1e;}
,'M5e':function(W5e,b5e){return W5e!=b5e;}
,'T8n':function(Z8n,m8n){return Z8n-m8n;}
,'w0t':function(k0t,q0t){return k0t>=q0t;}
,'H5P':function(A2P,t2P){return A2P!=t2P;}
,'H2i':function(A0a,t0a){return A0a-t0a;}
,'M1W':function(W1W,b1W){return W1W<=b1W;}
,'h2s':function(Q2s,B2s){return Q2s>B2s;}
,'M3R':function(W3R,b3R){return W3R>b3R;}
,'F1R':function(y1R,U1R){return y1R>U1R;}
,'A5h':function(t5h,j5h){return t5h-j5h;}
,'x9x':function(L9x,g9x){return L9x==g9x;}
,'x1A':function(L1A,g1A){return L1A<g1A;}
,'Z0h':function(m0h,J0h){return m0h==J0h;}
,'H2e':function(A0c,t0c){return A0c==t0c;}
,'m8P':function(J8P,Y8P){return J8P==Y8P;}
,'T5f':function(Z5f,m5f){return Z5f<m5f;}
,'q3i':function(P3i,c3i){return P3i==c3i;}
,'Z2P':function(m2P,J2P){return m2P==J2P;}
,'w4a':function(k4a,q4a){return k4a<q4a;}
,'H7':function(A6,t6){return A6-t6;}
,'Z8x':function(m8x,J8x){return m8x<J8x;}
,'c1n':function(u1n,R1n){return u1n/R1n;}
,'A3i':function(t3i,j3i){return t3i==j3i;}
,'c9x':function(u9x,R9x){return u9x==R9x;}
,'G5a':function(X5a,s5a){return X5a==s5a;}
,'c5z':function(u5z,R5z){return u5z==R5z;}
,'w0R':function(k0R,q0R){return k0R<q0R;}
,'P0W':function(c0W,u0W){return c0W==u0W;}
,'q0A':function(P0A,c0A){return P0A<c0A;}
,'w4h':function(k4h,q4h){return k4h==q4h;}
,'r7A':function(v7A,n7A){return v7A-n7A;}
,'s3a':function(r3a,v3a){return r3a==v3a;}
,'U8s':function(S8s,H8s){return S8s==H8s;}
,'I7A':function(M7A,W7A){return M7A-W7A;}
,'B2n':function(D2n,o2n){return D2n-o2n;}
,'Q4t':function(B4t,D4t){return B4t>D4t;}
,'Z6s':function(m6s,J6s){return m6s==J6s;}
,'N2e':function(f2e,K2e){return f2e==K2e;}
,'S7R':function(H7R,A6R){return H7R!=A6R;}
,'o0e':function(i0e,V0e){return i0e==V0e;}
,'d6W':function(w6W,k6W){return w6W>k6W;}
,'c7t':function(u7t,R7t){return u7t==R7t;}
,'p3e':function(e3e,x3e){return e3e<x3e;}
,'g8c':function(C8c,I8c){return C8c-I8c;}
,'J8a':function(Y8a,d8a){return Y8a*d8a;}
,'L8P':function(g8P,C8P){return g8P>C8P;}
,'R1x':function(l1x,z1x){return l1x-z1x;}
,'s8x':function(r8x,v8x){return r8x==v8x;}
,'w8':function(k8,q8){return k8==q8;}
,'B1W':function(D1W,o1W){return D1W-o1W;}
,'G3x':function(X3x,s3x){return X3x-s3x;}
,'I2':function(M2,W2){return M2/W2;}
,'y1a':function(U1a,S1a){return U1a*S1a;}
,'h3t':function(Q3t,B3t){return Q3t-B3t;}
,'n9':function(N9,f9){return N9<=f9;}
,'S5t':function(H5t,A2t){return H5t==A2t;}
,'n0h':function(N0h,f0h){return N0h!=f0h;}
,'q5x':function(P5x,c5x){return P5x>=c5x;}
,'p7a':function(e7a,x7a){return e7a>x7a;}
,'v0Z':1,'i2z':function(V2z,G2z){return V2z-G2z;}
,'e6c':function(x6c,L6c){return x6c==L6c;}
,'i4h':function(V4h,G4h){return V4h>G4h;}
,'D9e':function(o9e,i9e){return o9e>i9e;}
,'y7P':function(U7P,S7P){return U7P>S7P;}
,'p5':function(e5,x5){return e5==x5;}
,'R0R':function(l0R,z0R){return l0R-z0R;}
,'w6i':function(k6i,q6i){return k6i==q6i;}
,'w9G':"ha",'c9i':function(u9i,R9i){return u9i>=R9i;}
,'c9e':function(u9e,R9e){return u9e!=R9e;}
,'F4n':function(y4n,U4n){return y4n/U4n;}
,'P2t':function(c2t,u2t){return c2t-u2t;}
,'m7A':function(J7A,Y7A){return J7A>=Y7A;}
,'d1h':function(w1h,k1h){return w1h!=k1h;}
,'P6h':function(c6h,u6h){return c6h!=u6h;}
,'y3x':function(U3x,S3x){return U3x<S3x;}
,'T7f':function(Z7f,m7f){return Z7f-m7f;}
,'i8':function(V8,G8){return V8==G8;}
,'Y2x':function(d2x,w2x){return d2x<w2x;}
,'p2W':function(e2W,x2W){return e2W>=x2W;}
,'Z3a':function(m3a,J3a){return m3a<J3a;}
,'N3':function(f3,K3){return f3==K3;}
,'l3s':function(z3s,O3s){return z3s>O3s;}
,'F2c':function(y2c,U2c){return y2c==U2c;}
,'y8z':function(U8z,S8z){return U8z==S8z;}
,'R9z':function(l9z,z9z){return l9z<z9z;}
,'q7c':function(P7c,c7c){return P7c==c7c;}
,'a1f':function(T1f,Z1f){return T1f-Z1f;}
,'h0c':function(Q0c,B0c){return Q0c|B0c;}
,'c3t':function(u3t,R3t){return u3t/R3t;}
,'I3t':function(M3t,W3t){return M3t*W3t;}
,'B6i':function(D6i,o6i){return D6i<o6i;}
,'T4P':function(Z4P,m4P){return Z4P/m4P;}
,'h1R':function(Q1R,B1R){return Q1R<B1R;}
,'o4i':function(i4i,V4i){return i4i%V4i;}
,'N7A':function(f7A,K7A){return f7A>=K7A;}
,'b8P':function(E8P,F8P){return E8P==F8P;}
,'x6a':function(L6a,g6a){return L6a<=g6a;}
,'r8P':function(v8P,n8P){return v8P-n8P;}
,'h0a':function(Q0a,B0a){return Q0a*B0a;}
,'h3P':function(Q3P,B3P){return Q3P==B3P;}
,'M7e':function(W7e,b7e){return W7e>b7e;}
,'K0a':function(p0a,e0a){return p0a*e0a;}
,'X4R':function(s4R,r4R){return s4R>=r4R;}
,'S1n':function(H1n,A3n){return H1n<A3n;}
,'j7R':function(a7R,T7R){return a7R!=T7R;}
,'k8A':function(q8A,P8A){return q8A==P8A;}
,'I4c':function(M4c,W4c){return M4c<W4c;}
,'g6c':function(C6c,I6c){return C6c==I6c;}
,'A6z':function(t6z,j6z){return t6z/j6z;}
,'R2A':function(l2A,z2A){return l2A<z2A;}
,'v9n':function(n9n,N9n){return n9n-N9n;}
,'Y9i':function(d9i,w9i){return d9i*w9i;}
,'p7P':function(e7P,x7P){return e7P==x7P;}
,'E4R':function(F4R,y4R){return F4R>=y4R;}
,'L0A':function(g0A,C0A){return g0A>=C0A;}
,'q5A':function(P5A,c5A){return P5A/c5A;}
,'M5f':function(W5f,b5f){return W5f-b5f;}
,'K6a':function(p6a,e6a){return p6a-e6a;}
,'n6x':function(N6x,f6x){return N6x!=f6x;}
,'j7t':function(a7t,T7t){return a7t/T7t;}
,'R4A':function(l4A,z4A){return l4A<z4A;}
,'m7a':function(J7a,Y7a){return J7a>=Y7a;}
,'o6W':function(i6W,V6W){return i6W<=V6W;}
,'K7h':function(p7h,e7h){return p7h-e7h;}
,'L0i':function(g0i,C0i){return g0i*C0i;}
,'A2e':function(t2e,j2e){return t2e<j2e;}
,'G5h':function(X5h,s5h){return X5h==s5h;}
,'A1c':function(t1c,j1c){return t1c-j1c;}
,'S8x':function(H8x,A1x){return H8x<A1x;}
,'C7t':function(I7t,M7t){return I7t==M7t;}
,'O2':function(h2,Q2){return h2<Q2;}
,'D0c':function(o0c,i0c){return o0c==i0c;}
,'A2W':function(t2W,j2W){return t2W<j2W;}
,'B9P':function(D9P,o9P){return D9P>o9P;}
,'U7n':function(S7n,H7n){return S7n<H7n;}
,'m3W':function(J3W,Y3W){return J3W==Y3W;}
,'N5':function(f5,K5){return f5<K5;}
,'d6x':function(w6x,k6x){return w6x==k6x;}
,'M3z':function(W3z,b3z){return W3z==b3z;}
,'w9f':function(k9f,q9f){return k9f/q9f;}
,'O3z':function(h3z,Q3z){return h3z*Q3z;}
,'J4s':function(Y4s,d4s){return Y4s==d4s;}
,'m3c':function(J3c,Y3c){return J3c-Y3c;}
,'g3R':function(C3R,I3R){return C3R<I3R;}
,'V6h':function(G6h,X6h){return G6h>X6h;}
,'R7':function(l7,z7){return l7<z7;}
,'n7t':function(N7t,f7t){return N7t-f7t;}
,'Z2c':function(m2c,J2c){return m2c*J2c;}
,'D3':function(o3,i3){return o3==i3;}
,'C1n':function(I1n,M1n){return I1n>M1n;}
,'O7W':function(h7W,Q7W){return h7W<Q7W;}
,'k3P':function(q3P,P3P){return q3P>P3P;}
,'u6c':function(R6c,l6c){return R6c*l6c;}
,'y5x':function(U5x,S5x){return U5x==S5x;}
,'S0c':function(H0c,A8c){return H0c==A8c;}
,'q1':function(P1,c1){return P1==c1;}
,'B9f':function(D9f,o9f){return D9f==o9f;}
,'A0e':function(t0e,j0e){return t0e*j0e;}
,'v4n':function(n4n,N4n){return n4n*N4n;}
,'o9t':function(i9t,V9t){return i9t==V9t;}
,'p3c':function(e3c,x3c,L3c){return e3c-x3c+L3c;}
,'W0h':function(b0h,E0h){return b0h==E0h;}
,'E9a':function(F9a,y9a){return F9a-y9a;}
,'n0a':function(N0a,f0a){return N0a!=f0a;}
,'g8':function(C8,I8){return C8*I8;}
,'U0P':function(S0P,H0P){return S0P!=H0P;}
,'w8h':function(k8h,q8h){return k8h>q8h;}
,'w7e':function(k7e,q7e){return k7e!=q7e;}
,'t0s':function(j0s,a0s){return j0s==a0s;}
,'Y8x':function(d8x,w8x){return d8x<w8x;}
,'P7x':function(c7x,u7x){return c7x!=u7x;}
,'p0e':function(e0e,x0e){return e0e/x0e;}
,'D9x':function(o9x,i9x){return o9x==i9x;}
,'R6t':function(l6t,z6t){return l6t!=z6t;}
,'J9z':function(Y9z,d9z){return Y9z<d9z;}
,'E4x':function(F4x,y4x){return F4x-y4x;}
,'w1i':function(k1i,q1i){return k1i<q1i;}
,'B4h':function(D4h,o4h){return D4h-o4h;}
,'y3e':function(U3e,S3e){return U3e*S3e;}
,'x6x':function(L6x,g6x){return L6x-g6x;}
,'r3W':function(v3W,n3W){return v3W*n3W;}
,'B3R':function(D3R,o3R){return D3R>o3R;}
,'U7c':function(S7c,H7c){return S7c!=H7c;}
,'D2x':function(o2x,i2x){return o2x-i2x;}
,'K4W':function(p4W,e4W){return p4W<e4W;}
,'B6R':function(D6R,o6R){return D6R<o6R;}
,'U8a':function(S8a,H8a){return S8a-H8a;}
,'w9z':function(k9z,q9z){return k9z/q9z;}
,'s8e':function(r8e,v8e){return r8e>=v8e;}
,'i5f':function(V5f,G5f){return V5f/G5f;}
,'u4i':function(R4i,l4i){return R4i-l4i;}
,'t9f':function(j9f,a9f){return j9f>a9f;}
,'X6i':function(s6i,r6i){return s6i!=r6i;}
,'p6n':function(e6n,x6n){return e6n<x6n;}
,'T6R':function(Z6R,m6R){return Z6R==m6R;}
}
;(function(){var d54=x8A.r8V.v8V("78")?"STXThirdParty":"gain",c64=x8A.r8V.v8V("84e")?"priorPanel":"amd",U4l=x8A.r8V.v8V("723")?"sB2":"function",J8d=x8A.r8V.v8V("d7")?"div":"stx",O5l=x8A.r8V.v8V("6ae4")?"symbolDisplay":"Studies",W84=x8A.r8V.v8V("ed15")?"LegacyMarket":"cumNegMF",T6m=x8A.r8V.v8V("d46")?"undefined":"nextClose",h4G=x8A.r8V.v8V("6d1")?"cL":"$$$",i9Z="$$",h8V="STXChart",C1p=x8A.r8V.v8V("d8fb")?"STX":"accbp";function _stxKernel_js(_stxThirdParty,_exports){var b7Z="rope",U8p="Europe/Stockholm",P7D="erl",z7T=x8A.r8V.v8V("c5f")?"calculateChandeMomentum":"Eur",A6d=x8A.r8V.v8V("da")?"America/Chicago":"measure",e0d="Europe/Vienna",c4p="Europe/Warsaw",o9m="Europe/Zurich",C74="Europe/Vilnius",R1l="Asia/Tokyo",H7l="Europe/Tallinn",T0T="Asia/Taipei",l0C=x8A.r8V.v8V("35")?"Slow MA Period":"Asia/Tel_Aviv",X5Z=x8A.r8V.v8V("7d")?"clicks":"kho",b5d="Asia/Shanghai",q9G="Asia/Singapore",c14="America/Santiago",x9D="Europe/Riga",D4l=x8A.r8V.v8V("5877")?"rague":"rs",k5d="Europe/Paris",y1Z=x8A.r8V.v8V("75")?"Signal Period":"Europe/Oslo",C9G="Pacific/Auckland",C3G="Asia/Muscat",K4Z="Europe/London",k7G="Europe/Lisbon",Y1d=x8A.r8V.v8V("51")?"zoom-x":"Asia/Seoul",i1G=x8A.r8V.v8V("a8")?"nodes":"America/Lima",i7m="Africa/Johannesburg",o2m="Atlantic/Reykjavik",u94="Asia/Hong_Kong",J5l=x8A.r8V.v8V("42b")?"Europe/Helsinki":((139,0x223)>(0xD5,8.99E2)?(0x228,5.87E2):(31,21.)>=122?.001:(8.74E2,123)<(0x218,0x23B)?(29,60):(99,4.060E2)),Z7D="lin",i8G=x8A.r8V.v8V("c7")?"ope":"STXThirdParty",L4p="Eu",a2l=x8A.r8V.v8V("14")?"Europe/Dublin":"&nocache",T7m=x8A.r8V.v8V("aded")?"lesf":"Europe/Copenhagen",k3T="America/Toronto",t7l="Europe/Budapest",I7Z=x8A.r8V.v8V("23b7")?"Europe/Brussels":"mouse",I3T="Asia/Calcutta",Z5G="Europe/Berlin",L7Z="Europe/Bratislava",P4Z=x8A.r8V.v8V("e4")?"Quotes Date":"Europe/Madrid",p2T="thens",z1Z=x8A.r8V.v8V("e33")?"Asia/Singapore":"Australia/Sydney",u3S=x8A.r8V.v8V("5fb")?"urop":"plotLine",e3D="Europe/Moscow",V6m=x8A.r8V.v8V("84")?"xglobalindicesrealtime":"Europe/Rome",c9C="America/Sao_Paulo",K0Z=7,L0l="p5h",b1G="N5h",I7D=x8A.r8V.v8V("88c")?"isWeekly":"ee",h84="Sym",X14="ndTi",e6Z=x8A.r8V.v8V("5f")?"middle":"inut",r64=x8A.r8V.v8V("636")?"Preci":"wma",w8m=x8A.r8V.v8V("b2")?"meta":"minMax",D6Z=x8A.r8V.v8V("c3")?"utc":"smoothPlusDM",E7C="eType",Q6T="ickP",T9C="lobalc",S2D="harti",u24=x8A.r8V.v8V("1c5")?"s2MS":"set",g7D="ff",B0V="CO",J9m="rtT",n9Z="dex",M14="oup",v8C="ssa",h7Z="Outc",x1D=x8A.r8V.v8V("73")?"fibs":"reci",y5p="tif",h1D=x8A.r8V.v8V("62dc")?"esrea":"endDate",b1p="lind",u5G="igni",o4Z=x8A.r8V.v8V("7c")?"e_x":"ray",o2T="lti",e2D="rea",v8D="Off",p8C="Grou",x2T="Outcom",o6l="Iden",Y8d="ignit",n2m="ew",I7d="hartiq",Q4Z=x8A.r8V.v8V("e1c")?"tT":"isNextDate",w7Z="tart",f5T="uri",Z0p="rit",E0C="sag",T9T="nutes",W7l=x8A.r8V.v8V("ddd5")?"editingAnnotation":"sio",o0S=x8A.r8V.v8V("f7")?"studyOverSoldValue":"sv",A4l="rvi",f3Z="olum",S9Z="COffs",h2S="ars",W1l="ity",J0V="ecur",I3C="ci",C44=x8A.r8V.v8V("16c")?"erT":"fillStyle",B0C=x8A.r8V.v8V("fc15")?"es_xig":"touchstart",I2S="lq",W7D="vic",z34="uo",Y5m="uotes",l2m=x8A.r8V.v8V("d1")?"calculateLeadingSpanA":"Sy",k6G=x8A.r8V.v8V("8848")?"preserveTicksAndCandleWidth":"xchang",C3l="mbol",Z8Z="sa",b1D=x8A.r8V.v8V("2784")?"ite":"box",L4G=x8A.r8V.v8V("172")?"oldWidth":"ww",q5T=x8A.r8V.v8V("b2")?"com":"symbolDisplay",l3l="gn",R7G="curr",h8D="erv",C9C=x8A.r8V.v8V("3c1")?"drawBars":"los",F64=x8A.r8V.v8V("6f44")?"rtTi":"fontHeight",r9C="tartD",F5S=x8A.r8V.v8V("7a1")?"pct":"enc",d4S="essag",g4C="rren",x8C="ily",j4m="ceTy",B04="ngTim",K1m="ign",K14="_x",M7p="ervices",A0C="tDate",f9l="ssag",v9S="tc",K1S="ai",b5C="Typ",b3S="rice",h3C="ngTi",l1Z="Fi",T04="xigni",g7d="s_",c2T="ncie",u2d="lcurr",b44="lues",H1p="alu",N54="ndex",v9T="dexGrou",Y7Z="Ou",u0G="ierT",e4C="Id",D6d="oric",h64="ces",H2p="bal",r0l="gl",r5d="gni",F9T="_xi",g8D="loba",S5d="iq",D0l="obalQu",N4S="lQuo",B34="lume",Z8p="balQuo",b4G="uote",f1d="lob",X7m="ob",d0d="tes",l5C="alQu",C6Z="lQ",s3d="ecu",n4d="essa",I1p=",",Q3D="tcom",Q2T="Me",N7Z="tme",w0C="djus",w6p="tifi",y7p="Ide",G2d="otesRan",g9p="balHi",y8Z="tG",R2d="Ra",d3Z="lWeek",b4p="obalH",O8S="Ge",J5C="ori",K7S="oba",O6S="Gl",D4m="rtiq",i4C="://",m0D="isIE9",E7T="tco",e5d="ym",O6d="utu",I9G="method",R1p="/",p9D="StartTime",A2S="Templates",T0C="Qu",b0p="Utility",s5S="token",P3p="Xignite",b6d=((13.41E2,0x1E)<120.10E1?(62.,'$'):(57.,80.)),j2D="symbology",H1G="ticks",H6m=20000,H54="maxRecords",W0V="America/New_York",G0d="convertTimeZone",H7Z="endDate",X2p="=",r7p="&",q3T="isBats",L6m="getETDateTime",j9d="QuoteFeed",M04="url",w64="BarChart",F7Z="teF",M4T="Quo",a5S="setMarkerTick",c0T="zIndex",N3d="0px",F14="absolute",w2G="DIV",V0p="markers",h8m="redrawTimeout",H0G="mpari",j3T="clear",w1m="start",J64="stx_highlight_vector",S2T="mouseHasMoved",Z1l="comparison_stop",D2C="iso",u8p="son",X4C="startPlugin",q6S="toggleCorrelate",T8p="requestCorrelation",L8l="correlate",k2p="priceFormat",a2d="createComparisonSegment",O9l="2W",i9m="createComparisonSegmentInner",S9D="stopSort",d8V="percentToPrice",e04="priceToPercent",P6T="ent",q7S="sort",g6m="profileRange",N9Z="twoClicked",x6S="profile",f7d="bellcurve",g4Z="setOuter",A6Z="xIntersection",U5l="level",U0m="fibs",f8d="outer",n74="lw",Y3G="mapping",r9T="fibonacci",Z7C="drag",X8d="whichPoint",o84="fillColor",s6G="ellipse",C0l="y0",t6T="Int",m9m="freeze",J3m="Na",x5Z="intersect",c1m="int",I0V="node",W7m="pixelFromDate",A6l="intervalRatio",C4m="date",d7Z="lN",M3C="pNodes",X0d="nodes",j9l="startX",V3l="startY",W6C="lowY",s3l="hiY",P4C="lowX",j7l="hiX",A6D=0.3,S0T="splineTension",A9S="freeform",J94="accidentalClick",u8C="continuous",h1l="Name",Y6G="axisLabel",U9Z="ray",F4l="d1B",e7C="ptrn",t5p="pnl",j0T="v1",I3d="d1",i7l="penDown",l3d="d0B",N7D="v1B",K3Z="v0B",Z04="segment",B6Z="Fr",H4p="p1",f1T="fnt",L2T="replaceFields",I4d="bg",D2d="bc",r0D="mTick",R0T="v0",s8m="dateFromTick",o24="copyConfig",m6S="focus",R1d="rd",H4d="annotationCancel",r8p="value",n2T="oun",l2T="borderColor",O7G="stem",m9d="pixelFromValueAdjusted",y4p="p0",I8C="currentColor",z0C="fontString",c7T="family",r3C="size",n14="weight",H8l="fontDef",t7m="BaseTwoPoint",d0Z="stxInheritsFrom",l04="tat",w0Z="nno",d0C="_passToModulus",K1G="7x",w7G="zon",R9C="drawZones",t9Z="fillArea",Q6S="reverse",l2S="bottomBand",X1m="topBand",h4D="displayChannel",Z1Z="lF",X7T="sIn",j2Z="Support 3 ",O3T="Support 2 ",u5D="Pivot ",C7p="uppo",v8d="Resistance 1 ",k8D="Resistance 2 ",q3D="Resistance 3 ",Y9S="prepareChannelFill",Q4p="displayPivotPoints",N0d="ist",T1m="displayElderRay",P9m="studyOverSoldValue",V4S="studyOverZonesEnabled",d9T="displayRAVI",k0p="_h",S3Z="displayAwesomeOscillator",l0d="displayPrettyGoodOscillator",L7G="displaySeriesAsLine",C4S="displayPriceRelative",B94="extended",h7T="calculatePriceRelative",s1m="calculateFractalChaos",m3G="calculateCCI",x0T="Clo",Y1D="Ac",N6D="culate",q2Z="calculateMAEnvelope",n4T="tudi",i2Z="MA ",k0C="Standard Deviations",U2D="Moving Average Type",K4C="calculateBollinger",F94="udie",D4S="cato",I1D="Indi",f0C="rRe",E2G="Li",T0V="culat",j5D="ei",a2m="calculateCoppock",e2C="calculateKeltner",I0S="calculatePriceOscillator",z2l="calculateMaxHighMinLow",Y8m="calculateVerticalHorizontalFilter",C8l="po",h1m="calculatePrimeNumber",s0V="calculateAroon",S6d="calculateDetrendedPrice",x5d="calculateChandeForecast",P9S="3n",P8l="calculateMoneyFlowIndex",D7S="lc",K1D="em",S7G="calculateMassIndex",h34="calculateTwiggsMoneyFlow",J9T="calculateChaikinMoneyFlow",q0G="MA",V14="calculateChaikinVolatility",y2C="calculatePivotPoints",R0m="inp",t9m="calculateEaseOfMovement",k9p="erOfG",H7m="teCe",E6G="calculateElderForce",m6l="calculateElderRay",M1m="we",k6C="calculateWeightedClose",r6Z="typicalPrice",L9p="calculateTypicalPrice",W1S="ume",r04="calculateRateOfChange",e4l="calculateChange",K1C="calculateRandomWalk",I6C="calculateADX",m9Z="Clos",T4p="calculateSwingIndex",O3l="calculateHistoricalVolatility",m7D="calculatePerformance",k9G="calculateVolumeIndex",O8l="Vol",B2l="calculateOnBalanceVolume",W0m="calculatePriceVolumeTrend",j9G="calculateUltimateOscillator",x8d="Stu",N0Z="am",Y8T="tp",U5G="calculateAwesomeOscillator",r8T="ipt",u6l="ema",a3C="calculatePrettyGoodOscillator",n2l="calculateEhlerFisher",z0Z="puts",u2T="a1",P2Z="calculateStochMomentum",Z7d="uts",C8d="T2",A64="dies",Q1d="calculateSchaff",W9Z="udy",v2T="calculateQStick",d1T="5A",S7l="calculateIntradayMomentum",q7T="calculateMedianPrice",n0S="calculateTRIX",H8G="calculatePSAR",O4C="referenceOutput",l0V="ip",n0T="ult",D6G="put",V1D="calculateATRStops",y9S="ATR ",P7G="Field",s3S="Shift",A5d="calculateGenericEnvelope",E2p="calculateATRBands",q2p="calculateStudyATR",w5G="nam",e1m="tio",l5l="tick",P3S="computePosition",g9m="displayIchimoku",x5T="futureB",w2T="futureA",H7S="calculateIchimoku",K5p="substring",b1T="_calculateStochastics",B0d="zoneOutput",n6Z="_calculateRSI",I3m="calculateCorrelationCoefficient",z9Z=((0x23E,0x239)<=(0x10C,38)?'d':0x3<=(0x88,0x5F)?(1.389E3,"K"):(7,32.7E1)),I5l="npu",y3p="eSer",I2G="ateMovi",m24="calculateChandeMomentum",w8l="Ave",r9p="vi",J4d="std",V1S="ays",d5T="calculateMovingAverageWeighted",L9D="calculateMovingAverageVariable",N4T="calculateMovingAverageTriangular",N5G="_calculateMovingAverage",c7m="tudie",f8Z="calculateMovingAverage",b9Z="ype",h6S="calculateStandardDeviation",t3S="Stud",u7l="macd2",Q5p="calculateMovingAverageExponential",t7T="mac",b7l="macd1",x2p="StudyDescriptor",s8V="ys",B5p="np",u5S="days",C0C="_calculateMACD",n5G="die",S8m="otes",i9C="qu",e8m="delayed",M2Z="ate",W8m="tia",L2d="loadingMore",R6p="loadMore",e3Z="ast",f1C="moreAvailable",x3C="fetch",x4l="update",k24="startDate",p6Z="makeParams",S0V="callback",n6D="announceError",a4l="if",x6p="doCleanupGaps",p7D="quotes",a3l="missingBarsCreated",V2m="loadingNewChart",e1d="refreshInterval",Y84="updatingChart",L6p="intervalTimer",r84="behavior",J3C="quoteFeed",e7d="Driver",g0V="im",p7C="tTim",V3Z="isFuturesSymbol",R7l="cleanupGaps",O5d="it",b0Z="utp",T2G="addStudy",T5S="isEmpty",P1G="ea",Q6C="percent4",o7C="percent1",U9C="percent0",v0l="eF",h7m="getTimezoneOffset",Z0T=.9,Q8T=33,z6l=.25,k0l=1.1,M8T="ts",h0S="adjust",G4Z="previousAdjust",a84="ud",a7G="lose",M5Z="scrubbed",V64="uot",w9m=":",J74="consolidatedQuote",L6C="Dat",h5C="str",d7S="Tim",E2S="charAt",l5d="har",N8G="concat",j4l="center",z3G="middle",V9l="top",G1G="ane",n1T=20,D8C="object",M7D="stx_watermark",x3S="scr",t8S=(1.302E3<=(1.85E2,7.65E2)?(132.,"E"):0x107<=(0x80,1.181E3)?(1.5E2,"Z"):(119,0x239)),m1m="dth",X3G="scrollEvent",F9d="sta",g0l="mouse",K1T="tu",X7l="ie",g7Z="pointerType",h7G="setPeriodicityV2",d94="um",A8m=((0x130,52.30E1)<=0x128?'u':(0x7C,13.99E2)>=(138.,119.60E1)?(3.30E1,"B"):(4.810E2,4.4E1)),R04="momentumDistance",h54="momentumTime",Z6T="Pi",Z9d="yAx",F5Z="tX",u84="tar",Y0V="ba",e44="Out",i0V="twoFingerStart",O0p="cancelSwipe",Z2l="touchingEvent",x4T="uc",I7T="period",i1l="grabStartPeriodicity",i0S="grabEndPeriodicity",j5l="cal",a1T="ks",o0p="grabStartValues",z4l="mov",Y9Z="moveCount",U94="ous",d5G="y2",l5p="x2",Z4p="x1",F7G="pt",w24="gestureStartDistance",r3G="pinchingScreen",U2G="moveA",O1m="touchMoveTime",o8l="moveB",a0D="age",q6Z="crosshairYOffset",b8d="crosshairXOffset",Z0Z="changedTouches",A4D="movedSecondary",g7l="movedPrimary",Z1D="sqrt",G9d="stop",N24="detail",U2T="overrideGesture",g6C="pointerId",i2S="mouseMode",F0S="s2MS",s4l="e2MS",H1S="s1MS",B2C="e1MS",O74="1MS",U64="lt",Q3S="ignoreTouch",x84="ind",m7C="rT",V5G="clicks",y2Z="editingAnnotation",U04="touchSingleClick",N9C="ho",d6d="iz",Y2C="isp",O8d="displayIconsClose",B0G="yI",l9d="displayIconsUpDown",Y5Z="title",U6C="topOffset",J5T="edit",v3S="down",M3d="bo",A1T=((0x2F,0xEE)<=(1.36E3,46.)?(13.6E2,0xFB):(71.60E1,12.42E2)>0x25?(114.10E1,30):(101.60E1,0xDC)),x7m="resolveY",G9Z="si",P7S="solo",T2C="oin",v4l="els",d7l="anel",k2S="savePanels",I9d="showCrosshairs",X6d="soloing",i3m="closeX",s64="icons",Y4T="appended",c5G="storePanels",b6l="removeSeries",C5C="rl",u44="rig",k5p="mouseWheel",E7S="onmousewheel",O2l="tou",X5C="touchstart",e84="us",x14="Mo",x9C="touchend",p9Z="touchmove",Z9D="gestureInEffect",t3C="addEventListener",U0Z="zoomOut",n3T="zoomIn",h7d="onmouseup",k44="mousedown",R4m="touching",J2m="touches",X9m="event",Q34="markerHolder",B9d="handleMouseOut",O5D="ontouchend",U0G="onmspointerup",B9T="symbolDisplay",I5S="char",w3p="stackPanel",G7d="ontouchstart",h1d="tem",T74="mp",S7p="nv",B5m="position",v9Z="removeChild",C2G="isSurface",y8d="locale",Z7p="split",Y7l="da",g34="ont",h1Z="oll",A5l="tTi",p0S="padding",r7S="studyQuotes",M7T="Hi",c3l="border",r0d="appendMasterData",A4Z="getNextInterval",A84="erD",l4C="hm",z0l="dd",M34="mm",b3T="yyy",F8m="setDisplayDate",L24="displayZone",l2d="dataZone",K3d="setDisplayDates",f1m="6",r6l="toString",z7S="initializeChart",z4S="setMasterData",z7G="ymb",R1G="bol",S24="mb",m9T=59,O1D="endHour",M9Z="adjustPanelPositions",g9G="resizeCanvas",d9S="Wi",B3G="cont",a2S="yaxis",r4m="Tick",z5D="setCandleWidth",m2T="yaxisWidth",u4S="th",j7d="Ba",Z6S="ote",o64="drawCurrentHR",G6p="ns",f7m="drawSeries",U6p="createXAxis",S7d="createDataSegment",P04="correctIfOffEdge",P9Z="drawPanels",l7D="ou",m6m="As",I6D="asyncCallbacks",e1p="pendingAsyncs",U1T="#FFFFFF",N4D="#000000",Z54="parentNode",k8p="transparent",f1D="whichSet",A0G="roll",b04="createVolumeChart",W8p=".",L7l="preparePeakValleyFill",I94="_s",r6S="containerColor",H4S="ll",c0p="dle",X0S="ad",W5G="dra",K4T="Pe",i5S="getCanvasColor",Z1T=32,c3C="plugins",c3S="U",y0m="tic",c9m="Adj_Close",A2l="solid",r2p="endClip",a94="startClip",Q0d="hideDrawings",M1l="vectorsShowing",v7G="layo",r5C="ymbol",G3T="newChart",q4G="quoteDriver",B9Z="dataCallback",j2d="rv",K0C="Da",a6p="dontRoll",h4d="yInterval",d0S="drawLegend",q9p="ni",s7T="ymbo",L2C="Top",N4Z="der",K4S="baseLegendColors",z1l="legend",E0T="panelClose",R2S="outputs",I74="inputs",N7m="correlationPanel",Y94="isComparison",k9T="ies",O54="ser",Z5l="addSeriesData",L4C="masterData",V1C="type",f2C="typ",W3p="chartName",Q8l="pl",F4p="studies",w3G="field",Y3S="removeOverlay",g74="editFunction",j74="grabbingHand",e2l="idt",U1D="ep",x8S="eft",t7G="eX",e8d="pag",G5T="De",m8T="manageTouchAndMouse",z9C="appendClassName",K9D="drawingClick",y7S="back",D2G="mouseup",v3G="ntY",a8p="deleteHighlighted",i4Z="button",m5C="ich",v24="which",x2Z="stx-drag-chart",K6l="unappendClassName",n9C="sit",F9m=(116<=(0xA0,1.423E3)?(2.530E2,250):(1.415E3,63.5E1)),j5S="now",D8G="ec",G2D="adjustDrawings",t2Z="addDrawing",C0T="userPointerDown",T0d="chartsOnly",K94="ing",t3G="Ty",h9m="lineDashOffset",V7C="setLineDash",q7d="pan",W9d="d0",u6D="ed",H6D="fi",v8T="stxLine",q8l="y1",h4p="x0",E9D="yIntersection",Z6l="pattern",E5T="pop",b4d="iv",b24="gOb",C9T="undoStamps",B1p="undo",D8p="ratio",P7l="aSet",I9S="untransformFunc",S6p="priceFromPixel",r5p="tickFromDate",Q7G="pa",l94="handle",V1p="line",u2p="nva",X9d="plotLine",A5p="no",S7m="oc",a3p="-",A3C="co",a54="translationCallback",D5p=")",j8D=" (",W6p="%",s3m="percent",r7T=10000,A3T=10,I5d=((0x77,0x1B4)>(4.60E1,8.41E2)?(142.0E1,0.0):(22.3E1,82)<=0x227?(1.379E3,1000):(15.,139.)),k4l=.01,d8l=100,A0T=.1,e8p="numbers",n6m="dis",V6G="positionSticky",q1m="ne",P64="inline-block",n44="chooseForegroundColor",z6T="backgroundColor",k3m="children",E6D="mSticky",a7T=50,y4D="setMeasure",n5T="col",R54="isStep",I4C="yValueCache",u4d="ight",y6C="hl",F9D="Pan",P2l="pixelFromPriceTransform",e9m="outputMap",z8m="libraryEntry",f64="ame",E6S="nel",r4Z="cur",O4D="highlighted",Z7l="permanent",e8D="magnetize",m3m="nc",Y6D="ef",s5l="findHighlights",c5C="drawTemporaryPanel",G6Z="resizePanels",f2p="move",g8S="ag",Z4G="panelName",S5p="repositioner",e9C="valueFromPixelUntransform",z0T="repositioningDrawing",z2d="ir",J8Z="ros",h8G="touchDevice",N5d="rr",y0D="measure",m7p="ng",K8p="rawi",t8l="eD",E1d="render",F74="grabStartScrollY",H7G="shift",t9S="W",A6C="zo",w2l="grabStartZoom",Z0m="gra",o6D="span",c2d="you",i64="whitespace",h0d="yout",O0d="ick",r0T="mP",W3l="pinchingCenter",s1C="ipadMaxTicks",R0p="ipad",e6D="ayout",F1D="grabStartCandleWidth",d84="ctrl",N7d="grabOverrideClick",l2l="yToleranceBroken",w5D="Sc",c8S="grabStartY",z64="grabStartScrollX",M0S="grabStartX",b6S="displaySticky",m6C="highlight",T0G="overlays",g1p="igh",f4Z="clearCanvas",m8p="anyHighlighted",Q7T="resizingPanel",u9Z="displayCrosshairs",h2m="grabbingScreen",y9D="ov",m3D="insideChart",L1S="canvasRight",c8T="lue",L1Z="adjustIfNecessary",S3D="crosshairValue",t3D="crosshairTick",J0G="whichPanel",a9T="clearInterval",H8S="resizeChart",g44="clientWidth",F0D="clientHeight",Q4l="devicePixelRatio",t2p="isAndroid",J7S="resizeDetectMS",z24="ve",s24="mousemoveinner",i54="mousemove",K3C="scrollTop",q7l="clientY",x7S="pageY",C8G="documentElement",V5p="scrollLeft",M6C="clientX",D9S="pageX",b6Z="headsUpHR",z3C="canvasHeight",J1D="offsetWidth",t0S="ac",T9p="offsetHeight",a6C="getPos",q0D="lastAccessoryUpdate",m5p="accessoryTimer",K6G="openDialog",G1d=true,a6D="auto",o4m="doDisplayCrosshairs",S5l="block",i44="ls",W7T="styl",A8l="none",c7d="cursor",u1l="magnet",h3T="preferences",s2T="display",b4l="dragToDraw",E4m="undisplayCrosshairs",R9S="",R44="crosshair",g1d="displayInitialized",t2D="play",B2G="do",d5m="updateChartAccessories",T5G="px",y2S=.5,X84="bac",c2m="crosshairY",L0S="backOutY",Y8S="backOutX",U7C="tempCanvas",r6T="pixelFromTick",s9D="Type",F5m="crosshairX",K9S="tickFromPixel",l6G="gLin",O1l="wi",Q6G="rep",U3m="magnetizedPrice",N1G="rols",R3l="swapClassName",T1D="stx_crosshair_drawing",W5m="annotation",q1T="Pa",q8C="ct",Z4Z="rent",E4l="cu",w7D="vertical",C7T="horizontal",U1l="vectorType",E1p="currentVectorParameters",k6m="drawingLine",v2Z="shai",a0C="stx_crosshair",M8m="setCrosshairColors",P2p="hourMinute",d2C="rm",w14="floatDate",d2l="cx",y0l="barFromPixel",R2Z="ab",j34="up",h7D="es",U4m="od",E9l="il",N3Z="I",c4l="style",F4C="yaxisLabelStyle",C9S="le",v0D="rendered",J4T="getContext",D2S="childNodes",a3m="floatHR",D7p="tion",E4T="Line",a5Z="ata",c8l="Ti",J0Z="sc",z0D="createYAxisLabel",A6m="rmat",m1D="fo",u1p="extendLastTick",q5p="skipTransform",l44="tto",g2d="io",n5S=((13.70E1,0x209)>=(11.,0x7B)?(29.8E1,"j"):(130.,83.4E1)<0x168?137.:(2.35E2,0x18D)),a0T="to",f84="lay",z9D="flo",l8p="Low",m1Z="High",a9C="cl",e4D="op",f4m="gh",I5T="projection",S4S="art",e8Z="ose",W7C="Cl",P2S="eWid",R5S="close",s1p="pen",G5G="Lo",s8d="open",d6S="cache",r1Z="se",G0T="lo",p6S="q",x04="Open",A4S="ti",T5D="fl",g1G="eW",W04="ndl",B6C="ca",p1D="os",B0S="_",K2m="isIE8",J6C="Co",Q9D="ft",o4D="ayou",E4D="tmpWidth",w9D="xt",P1d="stx_candle_shadow",i6m="stx_candle_down",l5T="stx_candle_up",P7C="drawYAxis",L5p="createYAxis",n2d="yo",n7p="clearPixelCache",J54="lu",Z3C="highValue",W2S="abs",G6l="ig",I2h="transformFunc",R0V="baseline",a0V="yp",J5d="rt",V94="out",j4T="la",c2S="bottomOffset",g3D="pane",Q9p="parameters",q3d="series",F8Z=((0xD9,89.0E1)>=(0x77,0x241)?(76.0E1,"M"):(0x1C1,0x11)),R8D="Ax",b2l="cr",B9p="studyLibrary",z4G="pu",b7p="iqPrevClose",Y6C="Close",q04="translateIf",F4S="watermark",x9Z="hidden",j8m="panels",C1D="Volume",F3l="volumeMax",q8p="con",X5m="preventDefault",r4D="crossY",O4G="onmousedown",y5D="crossX",L5m="createCrosshairs",o8G="toFixed",O2C="ice",t6G="i5",a2Z="currentPanel",u6C="format",H2Z="ion",s74="priceFormatters",l7C="condenseInt",E3T="tx",K0l="anv",O3G="runApp",B7m="plotYAxisText",I5p="plotYAxisGrid",B7p="yaxisLeft",i6S="canvasWidth",w44="formatYAxisPrice",i5D="pric",I5D="priceFormatter",b5p="pixelFromPrice",t3l="pr",S9m="roundit",V4d="hig",t2l="yAxisPlotter",m8d="printDecimalPlaces",G1T="decimalPlaces",j8G="valueFromPixel",q1d="sha",t4Z="multiplier",C7Z="F",S74="priceTick",K3G="eT",E0d="ri",h9d="ra",Z1d="range",D6C="getCanvasFontSize",o04="logShadow",f4T=(9.93E2>=(46.,0x145)?(0x204,"w"):(1.7E2,82)),x3d="LN10",p04="logLow",s9p=((128,55.)<=(48.,108.7E1)?(0xDE,"0"):(43,1.477E3)),W2l="logHigh",b7D="activeDrawing",i6d="semiLog",V8Z="shadow",c9D="ow",b0V="cacheRight",s5C="cacheLeft",O8m="cacheLow",h6l="low",A2T="cacheHigh",B7l="high",I0m="noChange",o2d="ru",Y0Z="tD",u6d="setFullYear",I2d="setMonth",P0S="setDate",y2m="setSeconds",u8D="setMilliseconds",a8T="for",L94="ul",c7Z="E",n8S="Y",g2S=((0x22F,75)>(0x17D,119.)?(99,"0"):69.<(7.0E2,11.92E2)?(0x12A,"h"):(63.,0x202)),F4D="on",a4Z="tM",o5d="rs",w5l="getSeconds",r0Z="R",h0p="ND",W1Z="O",G9C="ck",r9Z="ax",G4D="eg",J3S="ta",b5S="arr",s2G="clone",J7d="endMinute",q14="ur",I6Z="H",S1C="Time",T0D="get",U0p="va",Z0D="ex",J2G="offset",l74="index",R6Z="G",T0Z="Q",j4S="b2",z04="pow",l7T="determineMinMax",O7p="idealTickSizePixels",p8d="K2",c6m="men",M2h="und",b2m="displayGridLines",f3C="ht",N0l="de",j1d="pad",K34="un",j14="floo",n2G="y5",J4G="grid",r4G="gr",S84="xaxisHeight",G5D="om",w1D="ot",l8G="axisBorders",e5Z="displayBorder",v9l="MAX_VALUE",m0G="xi",U3G="yA",f3T="bottom",N5D="el",a0Z="an",G8T="tr",n0D="St",U1Z="as",F5l="can",N5S="newSeries",i6D="Plotter",X2S="right",e1D="q5",w1T="left",H0S="max",d5C="text",Z3m=(0.>=(0x87,0x61)?'f':(132.,1.099E3)>=114?(0x8A,"5"):(0x24B,87.)),W4G="canvasFont",c5S="end",j1D="en",S1l="gm",T1T="m5",B6S="li",E4Z="sp",i7Z=(42.<=(0x1B1,72)?(0x1D,"D"):0x74<(5.09E2,80)?"d":(0x92,1.424E3)<18?(108.,86.):(19,0x235)),b6p="nt",s94="mo",K3m="4",V8T="v4",d0p="one",s4G="i4",C7S="R4",J1Z="ke",V8p="ext",S4d="is",M0C="J4",j7Z="sh",Z6Z="ay",Z1m="spl",q2D="time",p2C="ter",b2C="orm",f0T="f",z2p="monthDay",v6T="z",e4G="internationalizer",K4G="formatter",J8V="in",n9G="V6",B9D="h6",J2Z="l6",O5C="rk",C9Z="L",T2S="k",A7S="te",n1l="di",V2S="Y6",A3D="or",O4T="x",j1m="candleWidthPercent",Z6p="x7",F2S="floor",B1T="ceil",b94="getFullYear",U3d="getMonth",w0m="displayDate",q3m="getDate",b4Z="xaxis",k1m="7",A9Z="J",r1d="candleWidth",i9T="ty",L5l="ic",J8T="ric",Y4S="xAxis",I7S="runPrepend",s0Z="dataSegment",P1m="timeZoneOffset",G9m=((0xCE,5.2E2)>12.41E2?27.6E1:(0xFE,0xD4)<=(5.5E1,3.14E2)?(0x56,"9"):(6.,64.4E1)<(0xA8,0xB5)?"n":(0x140,137.)),T8S="l9",A3d="runAppend",n1p="yAxis",K5D="panel",j6p="calculateYAxisMargins",r7l="maxTicks",e1Z="min",g3C="charts",A7D="et",j6S="aS",s5m="dat",P6G="cancelTouchSingleClick",X0G="pe",g7S="Pr",g14="initialMarginTop",z44="scroll",q74="initialMarginBottom",m8l="gi",l5S="Mar",a8C="zoom",t6Z="H3",C9l="month",f6D="week",r2m="day",l7p="iod",t9D="er",c3Z="P",c6S="p",B3p="symbol",c8p="Ma",U3p="3",i1Z="N",N1m="nd",p9S="u",w0V="ro",G9T=((39,2)>=95?(0x74,"l"):(0x116,27)>=0xA8?(84,88.):90.>=(113.,0x3)?(16.,60):(142.,0x39)),I0Z=9,l2C="D3",m9G=60000,a6Z="ute",V5d="be",z6p=1500,T3d="minute",f7l="cy",o9S="Leg",r3S="X",T3G="ess",l14="nS",H44="ut",T4S="n",e5T="mi",J8C="round",s7d="setMinutes",z0p="setHours",a8S="getDay",S6S="Y1",D8d="T1",v94="minutesInSession",j3m="beginMinute",N6S="getMinutes",d2S="beginHour",x8p="getHours",E9m=(3.59E2<(0xF6,89.4E1)?(13.64E2,"8"):0x1DB<=(4.86E2,0x45)?(100.,0x71):(69,10.38E2)<(92.80E1,0x182)?13.620E2:(0x212,38.40E1)),Q4C="ime",s8Z="T",t4m="ge",o5l="getTime",B9l="strToDateTime",v2S="nextMonth",n7m="nextWeek",L9G="nextDay",Q2G="i8",o8p="nextPeriod",v1G="prevMonth",k8G="prevWeek",a14="prevDay",G7l="J8",t94="prevPeriod",o6S="isDailyInterval",R74="yyyymmddhhmm",s9l="DT",o0D="Date",T7p="taS",O9p="dataSet",f9T="periodicity",p0l="interval",a4T="splice",Q5l="vector",h6p="abortDrawings",m9p="undoStamp",v9C="reconstruct",i04="me",W3m="na",l4T="Drawing",W0d="name",B8Z="serialize",K6T="push",F0l="drawingObjects",T7Z="aw",E4G="dr",x8Z="ar",P6d="volumeUnderlay",d8Z="S",G1Z="at",A24="adj",Z9Z="raw",v9m="createDataSet",Z34="O0",K0S="aggregationType",C4Z="changeOccurred",s2Z="draw",j6C="chartType",T2T="layout",D6T="ack",v4S="l",E3S="al",t0V="han",i84="currentlyImporting",M7Z="canvasColor",s0d="hart",I0p="drawingTools",h9G="registerDrawingTool",f34="w0",V5C="apply",O7T=false,i7G="hideDates",G0S="color",u5Z="stripPX",f3p="2",H9p="1",q0p="opacity",k3p="defaultColor",T4l="isTransparent",w7C="lor",C1C="log",J7G="indexOf",F0G="fontFamily",P2C="fontSize",A9l="fontWeight",m44=" ",U3C="fontStyle",b6D="context",p54="ma",r2G="canvasStyle",G2m="yle",w9S="ld",Q8G="hi",i8l="eC",w5S="m",C1d="re",N8d="body",u4l="className",x4m="div",D64="styles",x6m="toUpperCase",c0V="replace",n2p="makeCamelCase",V9T="onclick",v44="home",E7m="onmouseout",V5D="onmouseover",x5D="#zoomOut",M7S="s",U5D="ol",D4Z=(8.5E2>=(0x154,140.)?(0x23D,"a"):(0x1BC,80.30E1)<=(0x1F8,0x22E)?2.27E2:(10.4E2,55.)),G7C="ch",J2S="#zoomIn",p6T="chartControls",t6l="id",J5D="appendChild",H5G="innerHTML",C1S="V",V4l="createElement",i6Z="controls",t6p="#",h7C="container",i8C="chart",h8T='dit',q1C='lass',B8S='bsp',F6l='ow',X4T='ocu',o5T='itl',i8d='pl',y2D='rol',b7C='ont',x2l='nel',h14='> ',E6p='ispl',H5p='le',v3D='nd',R3m='co',P5G='oa',C9d='play',D24='tyle',Y4l='_t',Q1m='um',Z0C='_j',O5m='In',O8D='">-</',n9m='ut',d3C='Ou',k74='z',K4p='Size',x4C='har',R8C='om',i9l='ot',A4G='; ',b9m='ck',l0Z='is',l3p='t_c',K7m='_cha',G64='y',B9m='oss',X2D='x_c',W0Z='ir',U9d='ssh',J6S='ro',F4d='_c',o8d='ass',p4T=';"></',X0T='r_x',v1p='cros',s1T='sh',F4Z='_cr',f1Z='at',g1m='lo',X7S='><',P7T='vas',o0m='ce',q1Z='as',M7m=((140.6E1,90.30E1)>=(11.3E2,90.)?(1.359E3,'2'):128.<=(0x1FD,46.)?143.:(54.1E1,59.)),E8D='ei',P5m='0',Z3l='h',F0p='w',Q2d='va',W2p=';"><',g0C='on',f9G=': ',M0G='isp',i34='ice',G2C='loat',f6G='f',f94='la',X1T='>)</',S6Z='elete',H0l='k',G0m='li',Y2T='ght',w0S='>(</',r8G='ns',L04='ct',Q0p='tr',L64='eIns',I1m='eDe',L8p='u',O6C='pa',e8S='></',a9d=';</',w9p='bs',L8S='">&',f0m='rash',Z4D='las',A1p='"><',z1D='ne',H9Z='ay',a6T='sp',E6d='tyl',x4D='hCan',j1G='Tr',r1D='lay',R7m='er',v0p='v',C2S='> <',f8G='"></',F54=(59.<=(9.91E2,0x34)?(0x1C1,0x163):(54,0xB8)>=(0x144,11)?(0x10E,'r'):0x162<=(77.,0x5F)?20.:(41,0x1AD)),V8S='rio',I5G='StickyIn',t6m='"> <',w9C='icky',J0l='St',e7Z='iv',p4G='d',q9Z='anc',h4S=';">',T6d='0p',N4m=(113.30E1<(148,5.)?(149,0x257):36.1E1<=(0x239,0x1CF)?(0x116,'1'):(0x58,0xFB)),u2m=':',e0D='ef',T9S='rg',y2G='m',L7D='yl',e7l='" ',C2m='el',j9S='n_c',n0l='o',I8l=((0x224,0x128)<=(99.80E1,1.69E2)?3.33E2:(137.20E1,99.)>(48.0E1,37)?(0x16D,'i'):(66,48.)>0x145?(0x6A,'t'):(146.,0xCA)),O4p='nota',q0Z='an',q2G=((113.10E1,6.37E2)>=(9,35)?(22.8E1,'_'):(56.,7.94E2)),T64='x',H3D='>',U0d='pan',j7m='</',D8Z='">',w6G='e',p3Z='av',D14='tion_s',x7p='nnota',O0G='x_a',z8p='t',v54='tn',g5G='b',B4m='-',n3p='tx',v5p='="',k5T='ss',V8l='l',w4G='c',k7d=((31.,74)>=(119,148.)?'o':(72,103)>(99,9.03E2)?(13.60E1,"o"):(38.2E1,0x1DE)>(0x82,7)?(39.6E1,' '):(0x13F,147)),l0l='n',h5G='a',e24='p',R24='s',k0D=(14.370E2>=(47.40E1,0x1C9)?(1E0,'<'):(6E0,68.)<(0xDC,8)?119.10E1:(67,10.82E2)<(39.5E1,0x1D5)?112.:(104,25.6E1)),q4C="htmlControls",l1d=((93.60E1,20)<=81.?(127.,null):(7,141.3E1)<=(9.93E2,40.90E1)?(0x23E,','):74>=(112,0x20E)?(137,12.):(1.303E3,0x116)),F34="ure",I4Z="st",Z8T="g",H6T="y",Y4Z=((0xF4,44.)>=(91.,105)?(72.,"Top"):0x48>(141.,112)?113.:0x20E>=(0x14D,0x206)?(148.,"b"):(13.,135)),k7l="target",p1l="gesture",E3p="gesturePointerId",T7C="ce",y3Z="sSurfa",q0T=((0x231,0x4A)>4.37E2?146:84<=(0xA,14.66E2)?(0x44,"i"):(1.08E3,0xC)),k9m="timezoneJS",g6d="plotSpline",F2l="CLOSEUP",a6G="CLOSEDOWN",N2p="CLOSEEVEN",B6G="CANDLEUP",p64="CANDLEDOWN",W4Z="d",m5Z="e",U4T="v",B4S="o",y1p="Comparison",r1C="currentZindex",J2l="Markers",j0=function(a0){STX[J2l][r1C]=a0;}
,H=function(A0){var l9S="asM";var B14="mouseH";STX[y1p][(B14+l9S+B4S+U4T+m5Z+W4Z)]=A0;}
,U=function(S){var l3G="CANDLEEVEN";STXChart[l3G]=S;}
,E=function(F){STXChart[p64]=F;}
,L=function(W){STXChart[B6G]=W;}
,N=function(f){STXChart[N2p]=f;}
,G=function(X){STXChart[a6G]=X;}
,Q=function(V){STXChart[F2l]=V;}
,z=function(O){var R5Z="NONE";STXChart[R5Z]=O;}
,plotSpline=_stxThirdParty[g6d],timezoneJS=_stxThirdParty[k9m],STX=_exports[C1p],STXChart=_exports[h8V],$$=_exports[i9Z],$$$=_exports[h4G];STXChart.prototype.plugins={}
;if(STX[(q0T+y3Z+T7C)]){var Y=function(P){STX[E3p]=P;}
,Z=function(J){STX[p1l][k7l]=J[(Y4Z+B4S+W4Z+H6T)];}
;STX[(Z8T+m5Z+I4Z+F34)]=new MSGesture;Z(document);Y(l1d);}
STXChart[q4C]={"annotationSave":(k0D+R24+e24+h5G+l0l+k7d+w4G+V8l+h5G+k5T+v5p+R24+n3p+B4m+g5G+v54+k7d+R24+z8p+O0G+x7p+D14+p3Z+w6G+D8Z+R24+p3Z+w6G+j7m+R24+U0d+H3D),"annotationCancel":(k0D+R24+U0d+k7d+w4G+V8l+h5G+k5T+v5p+R24+n3p+B4m+g5G+v54+k7d+R24+z8p+T64+q2G+q0Z+O4p+z8p+I8l+n0l+j9S+q0Z+w4G+C2m+e7l+R24+z8p+L7D+w6G+v5p+y2G+h5G+T9S+I8l+l0l+B4m+V8l+e0D+z8p+u2m+N4m+T6d+T64+h4S+w4G+q9Z+C2m+j7m+R24+e24+q0Z+H3D),"mSticky":(k0D+p4G+e7Z+k7d+I8l+p4G+v5p+y2G+J0l+w9C+t6m+R24+U0d+k7d+I8l+p4G+v5p+y2G+I5G+z8p+w6G+V8S+F54+f8G+R24+e24+q0Z+C2S+R24+e24+q0Z+k7d+I8l+p4G+v5p+n0l+v0p+R7m+r1D+j1G+h5G+R24+x4D+e7l+w4G+V8l+h5G+k5T+v5p+R24+n3p+B4m+g5G+z8p+l0l+e7l+R24+E6d+w6G+v5p+p4G+I8l+a6T+V8l+H9Z+u2m+l0l+n0l+z1D+A1p+R24+e24+h5G+l0l+k7d+w4G+Z4D+R24+v5p+R24+z8p+T64+B4m+I8l+w4G+n0l+B4m+z8p+f0m+L8S+l0l+w9p+e24+a9d+R24+e24+q0Z+e8S+R24+O6C+l0l+C2S+R24+e24+q0Z+k7d+I8l+p4G+v5p+y2G+n0l+L8p+R24+I1m+V8l+w6G+z8p+L64+Q0p+L8p+L04+I8l+n0l+r8G+A1p+R24+e24+q0Z+w0S+R24+O6C+l0l+H3D+F54+I8l+Y2T+B4m+w4G+G0m+w4G+H0l+k7d+z8p+n0l+k7d+p4G+S6Z+k0D+R24+O6C+l0l+X1T+R24+O6C+l0l+e8S+R24+e24+q0Z+e8S+p4G+I8l+v0p+H3D),"floatHR":(k0D+p4G+I8l+v0p+k7d+w4G+f94+k5T+v5p+R24+z8p+T64+B4m+f6G+G2C+B4m+e24+F54+i34+e7l+R24+E6d+w6G+v5p+p4G+M0G+V8l+H9Z+f9G+l0l+g0C+w6G+W2p+w4G+q0Z+Q2d+R24+k7d+F0p+I8l+p4G+z8p+Z3l+v5p+N4m+P5m+P5m+e7l+Z3l+E8D+Y2T+v5p+M7m+P5m+e7l+w4G+V8l+q1Z+R24+v5p+R24+n3p+B4m+f6G+G2C+B4m+e24+F54+I8l+o0m+B4m+w4G+h5G+l0l+v0p+q1Z+f8G+w4G+q0Z+P7T+X7S+p4G+e7Z+k7d+w4G+V8l+q1Z+R24+v5p+R24+n3p+B4m+f6G+g1m+f1Z+B4m+e24+F54+I8l+w4G+w6G+B4m+I8l+l0l+l0l+w6G+F54+f8G+p4G+I8l+v0p+e8S+p4G+I8l+v0p+H3D),"crossX":(k0D+p4G+e7Z+k7d+w4G+V8l+q1Z+R24+v5p+R24+n3p+F4Z+n0l+R24+s1T+h5G+I8l+F54+k7d+R24+z8p+T64+q2G+v1p+s1T+h5G+I8l+X0T+e7l+R24+z8p+L7D+w6G+v5p+p4G+I8l+R24+e24+r1D+f9G+l0l+g0C+w6G+p4T+p4G+e7Z+H3D),"crossY":(k0D+p4G+e7Z+k7d+w4G+V8l+o8d+v5p+R24+n3p+F4d+J6S+U9d+h5G+W0Z+k7d+R24+z8p+X2D+F54+B9m+Z3l+h5G+I8l+F54+q2G+G64+e7l+R24+E6d+w6G+v5p+p4G+I8l+R24+e24+V8l+h5G+G64+f9G+l0l+g0C+w6G+p4T+p4G+e7Z+H3D),"chartControls":(k0D+p4G+I8l+v0p+k7d+w4G+V8l+h5G+k5T+v5p+R24+n3p+K7m+F54+l3p+g0C+z8p+J6S+V8l+R24+e7l+R24+E6d+w6G+v5p+p4G+l0Z+e24+f94+G64+f9G+g5G+V8l+n0l+b9m+A4G+g5G+i9l+z8p+R8C+f9G+M7m+M7m+e24+T64+W2p+p4G+I8l+v0p+k7d+I8l+p4G+v5p+w4G+x4C+z8p+K4p+A1p+R24+e24+h5G+l0l+k7d+I8l+p4G+v5p+k74+n0l+n0l+y2G+d3C+z8p+e7l+w4G+V8l+q1Z+R24+v5p+R24+n3p+B4m+k74+n0l+n0l+y2G+B4m+n0l+n9m+O8D+R24+e24+h5G+l0l+X7S+R24+O6C+l0l+k7d+I8l+p4G+v5p+k74+n0l+R8C+O5m+e7l+w4G+V8l+h5G+R24+R24+v5p+R24+n3p+B4m+k74+n0l+n0l+y2G+B4m+I8l+l0l+O8D+R24+U0d+e8S+p4G+e7Z+e8S+p4G+I8l+v0p+H3D),"home":(k0D+p4G+I8l+v0p+k7d+I8l+p4G+v5p+Z3l+R8C+w6G+e7l+w4G+f94+k5T+v5p+R24+z8p+T64+Z0C+Q1m+e24+Y4l+n0l+p4G+h5G+G64+k7d+Z3l+R8C+w6G+k7d+R24+z8p+T64+B4m+g5G+v54+e7l+R24+D24+v5p+p4G+l0Z+C9d+u2m+l0l+n0l+l0l+w6G+A1p+R24+e24+h5G+l0l+e8S+R24+e24+h5G+l0l+e8S+p4G+I8l+v0p+H3D),"floatDate":(k0D+p4G+I8l+v0p+k7d+w4G+V8l+h5G+R24+R24+v5p+R24+n3p+B4m+f6G+V8l+P5G+z8p+B4m+p4G+h5G+z8p+w6G+e7l+R24+z8p+G64+V8l+w6G+v5p+p4G+M0G+r1D+f9G+l0l+g0C+w6G+p4T+p4G+I8l+v0p+H3D),"handleTemplate":(k0D+p4G+I8l+v0p+k7d+w4G+V8l+h5G+k5T+v5p+R24+n3p+B4m+I8l+R3m+B4m+Z3l+h5G+v3D+H5p+e7l+R24+z8p+G64+V8l+w6G+v5p+p4G+E6p+H9Z+f9G+l0l+n0l+l0l+w6G+W2p+R24+e24+q0Z+e8S+R24+U0d+e8S+p4G+I8l+v0p+h14),"iconsTemplate":(k0D+p4G+I8l+v0p+k7d+w4G+V8l+h5G+R24+R24+v5p+R24+z8p+T64+B4m+e24+h5G+x2l+B4m+w4G+b7C+y2D+e7l+R24+z8p+G64+H5p+v5p+p4G+l0Z+i8d+H9Z+f9G+l0l+n0l+z1D+W2p+p4G+e7Z+k7d+w4G+V8l+h5G+R24+R24+v5p+R24+z8p+T64+B4m+e24+h5G+x2l+B4m+z8p+o5T+w6G+f8G+p4G+I8l+v0p+X7S+p4G+e7Z+k7d+w4G+Z4D+R24+v5p+R24+n3p+B4m+g5G+v54+k7d+R24+n3p+B4m+I8l+R3m+A1p+R24+e24+q0Z+k7d+w4G+V8l+q1Z+R24+v5p+R24+z8p+T64+B4m+I8l+R3m+B4m+L8p+e24+L8S+l0l+w9p+e24+a9d+R24+e24+h5G+l0l+e8S+p4G+e7Z+X7S+p4G+e7Z+k7d+w4G+f94+k5T+v5p+R24+n3p+B4m+g5G+v54+k7d+R24+n3p+B4m+I8l+w4G+n0l+A1p+R24+O6C+l0l+k7d+w4G+f94+k5T+v5p+R24+z8p+T64+B4m+I8l+R3m+B4m+f6G+X4T+R24+L8S+l0l+g5G+a6T+a9d+R24+e24+h5G+l0l+e8S+p4G+e7Z+X7S+p4G+I8l+v0p+k7d+w4G+V8l+h5G+R24+R24+v5p+R24+n3p+B4m+g5G+z8p+l0l+k7d+R24+n3p+B4m+I8l+R3m+A1p+R24+e24+h5G+l0l+k7d+w4G+f94+k5T+v5p+R24+n3p+B4m+I8l+R3m+B4m+p4G+F6l+l0l+L8S+l0l+B8S+a9d+R24+U0d+e8S+p4G+I8l+v0p+X7S+p4G+e7Z+k7d+w4G+V8l+o8d+v5p+R24+z8p+T64+B4m+g5G+v54+k7d+R24+n3p+B4m+I8l+R3m+A1p+R24+e24+h5G+l0l+k7d+w4G+q1C+v5p+R24+n3p+B4m+I8l+w4G+n0l+B4m+w6G+h8T+L8S+l0l+g5G+a6T+a9d+R24+e24+h5G+l0l+e8S+p4G+I8l+v0p+X7S+p4G+I8l+v0p+k7d+w4G+f94+k5T+v5p+R24+z8p+T64+B4m+g5G+z8p+l0l+k7d+R24+z8p+T64+B4m+I8l+w4G+n0l+A1p+R24+U0d+k7d+w4G+V8l+h5G+R24+R24+v5p+R24+n3p+B4m+I8l+R3m+B4m+w4G+g1m+R24+w6G+L8S+l0l+g5G+a6T+a9d+R24+e24+q0Z+e8S+p4G+e7Z+e8S+p4G+e7Z+H3D)}
;STXChart.prototype.registerHTMLElements=function(){var m5T="modalEnd",O4Z="modalBegin",h94="ntr",L1T="firstChild",X9C="DI",c=this[i8C][h7C];for(var control in STXChart[q4C]){if(typeof this[i8C][control]==T6m){var el=$$$(t6p+control,c);if(el){this[i8C][control]=el;this[i6Z][control]=el;}
else{var rawHTML=STXChart[q4C][control],div=document[V4l]((X9C+C1S));div[H5G]=rawHTML;el=div[L1T];c[J5D](el);this[i8C][control]=el;this[i6Z][control]=el;el[t6l]=control;}
}
}
;if(this[i6Z][p6T]){var zoomIn=$$$(J2S,this[i6Z][(G7C+D4Z+x8A.c7S+x8A.n9S+x8A.s0m+B4S+h94+U5D+M7S)]),zoomOut=$$$(x5D,this[i6Z][p6T]);zoomIn[V5D]=(function(self){return function(e){self[O4Z]();}
;}
)(this);zoomIn[E7m]=(function(self){return function(e){self[m5T]();}
;}
)(this);zoomOut[V5D]=(function(self){return function(e){self[O4Z]();}
;}
)(this);zoomOut[E7m]=(function(self){return function(e){self[m5T]();}
;}
)(this);}
if(this[i6Z][v44])this[i6Z][v44][V9T]=(function(self){return function(e){self[v44]();}
;}
)(this);}
;STX[n2p]=function(name){return name[c0V](/-([a-z])/g,function(g){return g[x8A.v0Z][x6m]();}
);}
;STXChart.prototype.cloneStyle=function(styleObject){var y4C="getPropertyValue",rc={}
;for(var i in styleObject){var v=styleObject[i];if(!isNaN(i)){var x=styleObject[y4C](v);if(x){rc[STX[n2p](v)]=x;}
}
else{rc[STX[n2p](i)]=v;}
}
return rc;}
;STXChart.prototype.canvasStyle=function(className){var W7S="cloneStyle",s=this[D64][className];if(!s){var div=document[V4l](x4m);div[u4l]=className;document[N8d][J5D](div);var styles=getComputedStyle(div);s=this[D64][className]=this[W7S](styles);document[N8d][(C1d+w5S+B4S+U4T+i8l+Q8G+w9S)](div);if(!styles){this[(M7S+x8A.n9S+G2m+M7S)][className]=l1d;}
}
return s;}
;STXChart.prototype.clearStyles=function(){this[D64]={}
;}
;STXChart.prototype.setStyle=function(obj,attribute,value){var l2G="Case",Y0S="keCamel";if(!this[D64][obj]){this[r2G](obj);}
if(!this[D64][obj])this[D64][obj]={}
;this[D64][obj][STX[(p54+Y0S+l2G)](attribute)]=value;}
;STXChart.prototype.canvasFont=function(className,ctx){var A2m="bad css style for class ";if(!ctx)ctx=this[i8C][b6D];var style=this[r2G](className);if(!style)return ;var result=style[U3C]+m44+style[A9l]+m44+style[P2C]+m44+style[F0G];if(result[J7G](T6m)==-x8A.v0Z){ctx.font=result;}
else{this[D64][className]=l1d;console[C1C](A2m+className);}
}
;STXChart.prototype.canvasColor=function(className,ctx){if(!ctx)ctx=this[i8C][b6D];var style=this[r2G](className);if(!style)return ;var color=style[(x8A.d5Z+B4S+w7C)];if(STX[T4l](color))color=this[k3p];ctx.globalAlpha=1;ctx.fillStyle=color;ctx.strokeStyle=color;var opacity=style[q0p];if(typeof opacity!=T6m)ctx.globalAlpha=opacity;}
;STXChart.prototype.getCanvasFontSize=function(className){var s=this[r2G](className),fs=s[P2C];if(!fs)fs=(H9p+f3p);return parseInt(STX[u5Z](fs));}
;STXChart.prototype.getCanvasColor=function(className){var s=this[r2G](className);return s[G0S];}
;STXChart[i7G]=function(){return O7T;}
;STXChart.prototype.runPrepend=function(o,args,self){var x7Z="m0",prepends=this["prepend"+o];if(!prepends)return false;if(!self)self=this;for(var i=0;x8A[x7Z](i,prepends.length);i++){var rv=prepends[i][V5C](self,args);if(rv)return rv;}
return false;}
;STXChart.prototype.runAppend=function(o,args,self){var appends=this["append"+o];if(!appends)return false;if(!self)self=this;for(var i=0;x8A[f34](i,appends.length);i++){var rv=appends[i][V5C](self,args);if(rv)return rv;}
return false;}
;STXChart[h9G]=function(name,func){STXChart[I0p][name]=func;}
;STXChart.prototype.createBlock=function(left,width,top,height,className,context){var p9p="P0";if(x8A[p9p](context,null))context=this[(x8A.d5Z+s0d)][b6D];if(typeof (height)=="undefined"){return ;}
this[M7Z](className,context);context.fillRect(left,top,width,height);context.globalAlpha=1;}
;STXChart.prototype.changeOccurred=function(change){var S7Z="changeCallback",C2d="geC";if(this[i84])return ;if(this[(x8A.d5Z+t0V+C2d+E3S+v4S+Y4Z+D6T)])this[S7Z](this,change);}
;STXChart.prototype.setChartType=function(chartType){var M6S="R0";this[T2T][j6C]=chartType;if(x8A[M6S](this[i8C].canvas,null))this[s2Z]();this[C4Z]("layout");}
;STXChart.prototype.setAggregationType=function(aggregationType){this[T2T][K0S]=aggregationType;if(x8A[Z34](this[i8C].canvas,null)){this[v9m]();this[(W4Z+Z9Z)]();}
this[C4Z]("layout");}
;STXChart.prototype.setAdjusted=function(data){var n8Z="eDat",Y0d="cre",g0G="B0";this[T2T][A24]=data;if(x8A[g0G](this[i8C].canvas,null)){this[(Y0d+G1Z+n8Z+D4Z+d8Z+m5Z+x8A.n9S)]();this[s2Z]();}
this[C4Z]("layout");}
;STXChart.prototype.setVolumeUnderlay=function(data){var z3l="i0";this[T2T][P6d]=data;if(x8A[z3l](this[(G7C+x8Z+x8A.n9S)].canvas,null))this[(E4G+T7Z)]();this[C4Z]("layout");}
;STXChart.prototype.serializeDrawings=function(){var s5T="X0",arr=[];for(var i=0;x8A[s5T](i,this[F0l].length);i++){arr[K6T](this[F0l][i][B8Z]());}
return arr;}
;STXChart.prototype.abortDrawings=function(){var d5S="n0";for(var i=0;x8A[d5S](i,this[F0l].length);i++){this[F0l][i].abort(true);}
this[F0l]=[];}
;STXChart.prototype.reconstructDrawings=function(arr){var D1d="K0";for(var i=0;x8A[D1d](i,arr.length);i++){var rep=arr[i],Factory=STXChart[I0p][rep[W0d]];if(!Factory){if(STX[l4T][rep[(W3m+i04)]]){Factory=STX[l4T][rep[W0d]];STXChart[h9G](rep[W0d],Factory);}
}
if(Factory){var drawing=new Factory;drawing[v9C](this,rep);this[F0l][K6T](drawing);}
}
}
;STXChart.prototype.clearDrawings=function(){this[m9p]();this[h6p]();this[C4Z](Q5l);this[v9m]();this[s2Z]();}
;STXChart.prototype.createDrawing=function(type,parameters){var drawing=new STX[l4T][type];drawing[v9C](this,parameters);this[F0l][K6T](drawing);this[s2Z]();return drawing;}
;STXChart.prototype.removeDrawing=function(drawing){var d1D="M0",t1D="g0";for(var i=0;x8A[t1D](i,this[F0l].length);i++){if(x8A[d1D](this[F0l][i],drawing)){this[F0l][a4T](i,1);this[C4Z]("vector");this[s2Z]();return ;}
}
}
;STXChart.prototype.dateFromTick=function(tick,chart){var T3T="v8",J14="X8",R9G="B8",x5p="O8",j8T="R8",o5p="P8",c54="w8",e3d="T8",A2d="t8",u2l="S0",x6C="E0";if(!chart)chart=this[i8C];var interval=this[T2T][p0l],periodicity=this[T2T][f9T],l=chart[O9p].length;if(x8A[x6C](tick,l)&&x8A[u2l](tick,0))return chart[(W4Z+D4Z+T7p+m5Z+x8A.n9S)][tick][o0D];if(x8A[A2d](tick,0)){var dt=chart[O9p][0][s9l];for(var i=0;x8A[e3d](i,3000);i++){if(-i==tick)return STX[R74](dt);if(!this[o6S](interval))dt=STX[W84][t94](dt,interval,periodicity,this);else if(x8A[G7l](interval,"day"))dt=STX[W84][a14](dt,periodicity,this);else if(x8A[c54](interval,"week"))dt=STX[W84][k8G](dt,periodicity,this);else if(x8A[o5p](interval,"month"))dt=STX[W84][v1G](dt,periodicity,this);}
}
else{var dt=chart[O9p][x8A[j8T](l,1)][s9l];for(var i=0;x8A[x5p](i,3000);i++){if(x8A[R9G](l-1+i,tick)){return STX[R74](dt);}
if(!this[o6S](interval))dt=STX[W84][o8p](dt,interval,periodicity,this);else if(x8A[Q2G](interval,(W4Z+D4Z+H6T)))dt=STX[W84][L9G](dt,periodicity,this);else if(x8A[J14](interval,"week"))dt=STX[W84][n7m](dt,periodicity,this);else if(x8A[T3T](interval,"month"))dt=STX[W84][v2S](dt,periodicity,this);}
}
return STX[R74](dt);}
;STXChart.prototype.futureTick=function(mydt,chart){var G8Z="H1",w34="F1",S4p="W1",d4m="C1",H1C="e1",a8D="tTime",r7d="Mark",s0T="n1",w1l="i1",u3D="esI",d8G="B1",k4D="z1",o7Z="u1",f4D="q1",V34="A1",E2m="U8",p7l="E8",a9G="M8",c5l="e8",C1G="f8",E0p="Set",mym=STX[B9l](mydt)[o5l](),interval=this[T2T][p0l],periodicity=this[T2T][f9T],dt=chart[(W4Z+D4Z+x8A.n9S+D4Z+E0p)][x8A[C1G](chart[O9p].length,1)][s9l],m=dt[(t4m+x8A.n9S+s8Z+Q4C)](),ticks=0,computedPeriodicity=periodicity;if(!this[o6S](interval)){if(x8A[c5l](interval,"minute"))computedPeriodicity=x8A[(Z8T+E9m)](periodicity,interval);}
for(var i=0;x8A[a9G](i,1500);i++){if(!this[o6S](interval)){if(x8A[p7l](dt[x8p](),chart[d2S])&&x8A[E2m](dt[N6S](),chart[j3m])){if(x8A[V34]((mym-m)/60000,chart[v94])){dt=STX[W84][L9G](dt,1,this);if(x8A[D8d](chart[d2S],0)&&x8A[S6S](dt[a8S](),0)){dt[z0p](15);dt[s7d](0);}
if(x8A[f4D](chart[d2S],0)&&x8A[(o7Z)](dt[a8S](),1)){ticks+=Math[J8C](x8A[k4D](9,60,computedPeriodicity));}
else{ticks+=Math[J8C](x8A[d8G](chart[(e5T+T4S+H44+u3D+l14+T3G+q0T+B4S+T4S)],computedPeriodicity));}
}
else{dt=STX[W84][o8p](dt,interval,periodicity,this);ticks+=1;}
}
else{dt=STX[W84][o8p](dt,interval,periodicity,this);ticks+=1;}
}
else{ticks+=1;if(x8A[w1l](interval,"day"))dt=STX[W84][L9G](dt,periodicity,this);else if(x8A[(r3S+H9p)](interval,"week"))dt=STX[W84][n7m](dt,periodicity,this);else if(x8A[s0T](interval,"month"))dt=STX[(o9S+D4Z+f7l+r7d+m5Z+x8A.n9S)][v2S](dt,periodicity,this);}
m=dt[(Z8T+m5Z+a8D)]();if(x8A[H1C](m,mym)){return (x8A[d4m](chart[O9p].length,1))+ticks;}
if(x8A[S4p](mym,m)){return (x8A[w34](chart[O9p].length,1))+ticks-1;}
}
return (x8A[G8Z](chart[O9p].length,1))+ticks;}
;STXChart.prototype.pastTick=function(mydt,chart){var K8C="j9",s5G="y3",V6S="b3",H9S="I3",D0D="L3",p1p=210,k4p="p3",V0V="isHalfDay",l2p="rket",O7d="Lega",D3l="r3",I4G="V3",E1D="h3",K5Z="l3",c8m="nMi",Q1Z="c3",H5d="k3",A5S="Y3",M8Z="Z3",r7C="j3",mym=STX[B9l](mydt)[o5l](),interval=this[T2T][p0l],periodicity=this[T2T][f9T],dt=chart[O9p][x8A.n0Z][s9l],m=dt[o5l](),ticks=x8A.n0Z,computedPeriodicity=periodicity;if(!this[o6S](interval)){if(x8A[r7C](interval,T3d))computedPeriodicity=x8A[M8Z](periodicity,interval);}
for(var i=x8A.n0Z;x8A[A5S](i,z6p);i++){if(!this[o6S](interval)){if(x8A[H5d](dt[x8p](),chart[d2S])&&x8A[Q1Z](dt[N6S](),chart[(V5d+Z8T+q0T+c8m+T4S+a6Z)])){var dt2=STX[W84][a14](dt,x8A.v0Z,this);if(x8A[K5Z]((dt2[o5l]()-mym)/m9G,chart[v94])){dt=dt2;if(x8A[E1D](chart[d2S],x8A.n0Z)){if(x8A[l2C](dt[a8S](),x8A.n0Z)){ticks+=Math[J8C](x8A[I4G](I0Z,G9T,computedPeriodicity));}
else{ticks+=Math[(w0V+p9S+N1m)](x8A[D3l](chart[v94],computedPeriodicity));}
}
else if(x8A[(i1Z+U3p)](chart[d2S],I0Z)&&STX[(O7d+x8A.d5Z+H6T+c8p+l2p)][V0V](dt,chart[B3p])){ticks+=Math[(w0V+p9S+N1m)](x8A[k4p](p1p,computedPeriodicity));}
else{ticks+=Math[J8C](x8A[D0D](chart[v94],computedPeriodicity));}
}
else{dt=STX[W84][t94](dt,interval,periodicity,this);ticks+=x8A.v0Z;}
}
else{dt=STX[W84][(c6S+x8A.c7S+m5Z+U4T+c3Z+t9D+l7p)](dt,interval,periodicity,this);ticks+=x8A.v0Z;}
}
else{ticks+=x8A.v0Z;}
if(x8A[H9S](interval,(r2m)))dt=STX[W84][a14](dt,periodicity,this);else if(x8A[V6S](interval,f6D))dt=STX[W84][k8G](dt,periodicity,this);else if(x8A[s5G](interval,C9l))dt=STX[W84][v1G](dt,periodicity,this);m=dt[o5l]();if(x8A[t6Z](m,mym)){return -ticks;}
if(x8A[K8C](mym,m)){return -(ticks+x8A.v0Z);}
}
return -ticks;}
;STXChart.prototype.calculateYAxisMargins=function(yAxis){var L6Z="Z9",Q94="nTo",Q0D="iti";yAxis[a8C]=yAxis[(q0T+T4S+Q0D+E3S+l5S+m8l+Q94+c6S)]+yAxis[q74];yAxis[z44]=x8A[L6Z]((yAxis[g14]-yAxis[q74]),x8A.X0Z);}
;STXChart.prototype.home=function(){var e0T="Y9";if(this[(x8A.c7S+p9S+T4S+g7S+m5Z+X0G+N1m)]("home",arguments))return ;this[P6G]=true;if(!this[i8C][(s5m+j6S+A7D)]||x8A[e0T](this[i8C][O9p].length,0))return ;for(var chartName in this[g3C]){var chart=this[g3C][chartName];chart[z44]=Math[e1Z](chart[r7l],chart[O9p].length);this[j6p](chart[K5D][n1p]);}
this[s2Z]();this[A3d]("home",arguments);}
;STXChart.prototype.tickFromDate=function(dt,chart){var N74="n9",W7G="V9",j3Z="pastTick",U2C="D9",H84="futureTick",Y2m="h9",M6Z="dataSe",Z3G="etT",Z7Z="c9",M6d="k9";if(!chart)chart=this[i8C];var DT=STX[B9l](dt);if(x8A[M6d](chart[d2S],0)&&!STXChart[o6S](this[T2T][p0l])){if(x8A[Z7Z](DT[x8p](),0)){DT[z0p](chart[d2S]);DT[s7d](chart[j3m]);}
}
var mym=DT[(Z8T+Z3G+Q4C)](),m=chart[O9p][x8A[T8S](chart[(M6Z+x8A.n9S)].length,1)][s9l][o5l]();if(x8A[Y2m](m,mym))return this[H84](dt,chart);var first=chart[O9p][0][s9l][o5l]();if(x8A[U2C](mym,first))return this[j3Z](dt,chart);for(var i=x8A[W7G](chart[O9p].length,1);x8A[(M7S+G9m)](i,0);i--){m=chart[O9p][i][s9l][o5l]();if(x8A[N74](m,mym))return i;}
}
;STXChart.prototype.timeShiftDate=function(dt){var y5C="K9",ms=dt[o5l]();ms+=x8A[y5C](this[P1m],m9G);return new Date(ms);}
;STXChart.prototype.createXAxis=function(chart){var U7m="hA",C94="a5",c5T="A5",x8D="U4",I3l="E4",g7G="M4",E2l="e4",F4G="f4",I34="X4",l2D="B4",t74="O4",F6p="P4",k14="w4",I14="Month",a9m="xA",K1d="T4",I6G="AsDi",n5d="t4",s2l="S6",f74="F6",D4G="beginDay",v6p="W6",O6m="C6",a1S="ati",G0V="rn",n6p="x6",D3d="K6",y64="n6",p9C="s6",V0d="D6",X1Z="c6",h5d="k6",B1l="ftD",V5S="Shi",e3m="tim",z7C="egacyMa",E8S="Wee",v5d="futureTicks",i6T="ayDa",V1m="Fa",e3G="xa",F9Z="Z6",N3C="j6",F3Z="H7",C6G="y7",O5S="b7",d0T="I7",p5T="prettyXaxis",a3d="K7",Y54="n7",s84="X7",F5G="i7",z5p="timeShiftDate",D7G="B7",r34="O7",b2S="R7",G54="w7",O3d="T7",i2d="t7",L3D="eri",P7Z="createNumericXAxis",h7l="S9",S6D="createTickXAxisWithDates",m64="F9",R2D="axisType",Q0m="W9",L0D="C9",z0m="x9";if(x8A[z0m](chart[s0Z].length,0))return null;var arguments$=[chart],axisRepresentation=this[I7S]("createXAxis",arguments$);if(axisRepresentation)return axisRepresentation;var interval=this[T2T][p0l];if(x8A[L0D](interval,"tick")||x8A[Q0m](chart[Y4S][R2D],(T4S+x8A.n9S+Y4Z))||x8A[m64](this[T2T][K0S],"rangebars")){return this[S6D](chart);}
if(x8A[h7l](chart[Y4S][R2D],(T4S+p9S+w5S+m5Z+J8T))){return this[P7Z](chart);}
var displayLetters=false,periodicity=this[T2T][(c6S+L3D+B4S+W4Z+L5l+q0T+i9T)],candleWidth=this[T2T][r1d],p=periodicity,isIntraday=false,isDaily=false,isWeekly=false,isMonthly=false;if(x8A[i2d](interval,"week")){isWeekly=true;p=x8A[O3d](5,p);}
if(x8A[(A9Z+k1m)](interval,"month")){isMonthly=true;p=x8A[G54](20,p);}
if(x8A[(c3Z+k1m)](candleWidth*(20/p),50))displayLetters=true;var i=0;chart[b4Z]=[];for(;x8A[b2S](i,chart[r7l]);i++){if(x8A[r34](chart[s0Z][i],null))break;chart[b4Z][K6T](null);}
var dt;if(chart[s0Z][i]){dt=chart[s0Z][i][s9l];}
else{dt=new Date();}
var currentDate=dt[q3m](),is24=(x8A[D7G](chart[v94],1440));if(is24){if(chart[s0Z][i]&&chart[s0Z][i][w0m]){currentDate=chart[s0Z][i][w0m][q3m]();}
else{currentDate=this[z5p](dt)[q3m]();}
}
var prevMonth=dt[U3d](),prevYear=dt[b94](),ticksPerDay=1;if(!this[o6S](interval)){isIntraday=true;if(x8A[F5G](interval,"minute"))interval=1;ticksPerDay=Math[B1T](x8A[s84](chart[v94],periodicity,interval));}
else{isDaily=true;}
var ticksPerClick=Math[J8C](x8A[Y54](ticksPerDay,Math[B1T](ticksPerDay/Math[F2S](100/candleWidth))));if(x8A[a3d](ticksPerClick,1))ticksPerClick=1;var minuteBoundary=x8A[Z6p](ticksPerClick,periodicity,interval);if(chart[p5T]){var mod=chart[p5T][x8A[d0T](periodicity,interval)];if(!mod)mod=1;if(x8A[(O5S)](minuteBoundary,mod)){minuteBoundary=x8A[C6G](Math[F2S]((minuteBoundary+mod)/mod),mod);}
}
var offset=Math[J8C](x8A[F3Z](Math[J8C](candleWidth*this[j1m])/2,1));axisRepresentation=[];for(i;x8A[N3C](i,chart[r7l]);i++){if(!isMonthly&&x8A[F9Z](chart[r7l]/ticksPerDay,(this[i8C].width/this[i8C][(e3G+O4T+q0T+M7S+V1m+x8A.d5Z+x8A.n9S+A3D)]))){var prices;if(x8A[V2S](i,chart[s0Z].length)){prices=chart[s0Z][i];dt=prices[s9l];if(prices[(n1l+M7S+c6S+v4S+i6T+A7S)]){dtShifted=prices[w0m];}
else if(isIntraday){dtShifted=this[z5p](dt);}
else{dtShifted=dt;}
}
else{if(!chart[Y4S][v5d])break;if(isIntraday)dt=STX[W84][o8p](dt,interval,periodicity,this);else if(isWeekly)dt=STX[W84][(T4S+m5Z+O4T+x8A.n9S+E8S+T2S)](dt,periodicity,this);else if(isMonthly)dt=STX[W84][v2S](dt,periodicity,this);else if(isDaily)dt=STX[(C9Z+z7C+O5C+A7D)][L9G](dt,periodicity,this);if(isIntraday)dtShifted=this[(e3m+m5Z+V5S+B1l+D4Z+A7S)](dt);else dtShifted=dt;}
var isNextDate=x8A[h5d](dt[q3m](),currentDate);if(is24)isNextDate=x8A[X1Z](dtShifted[q3m](),currentDate);var nonBoundary=x8A[J2Z](dt[x8p](),chart[d2S])||x8A[B9D](dt[N6S](),chart[j3m]);if(is24)nonBoundary=x8A[V0d](dtShifted[x8p](),0)||x8A[n9G](dtShifted[N6S](),0);if(isNextDate){var gridType="boundary";if(!isIntraday)gridType=(v4S+J8V+m5Z);currentDate=dt[q3m]();if(is24)currentDate=dtShifted[q3m]();var hz=(x8A[p9C](i,candleWidth))+offset;if(x8A[y64](gridType,"boundary"))hz=x8A[D3d](((i)*candleWidth),3);var text="";if(!STXChart[i7G]()){var y=dt[b94]();if(x8A[n6p](y,prevYear)){prevYear=y;text=y;gridType="boundary";}
else{if(chart[Y4S][K4G]){text=chart[Y4S][K4G](dtShifted,gridType);}
else if(this[e4G]){text=this[(J8V+A7S+G0V+a1S+B4S+T4S+E3S+q0T+v6T+t9D)][z2p][(f0T+b2C+D4Z+x8A.n9S)](dtShifted);}
else{text=(dtShifted[U3d]()+1)+"/"+dtShifted[q3m]();}
}
}
if(x8A[O6m](hz,chart.width)){axisRepresentation[K6T]({hz:hz,grid:gridType,text:text}
);}
}
else if(nonBoundary){var minutes=(x8A[v6p](dt[x8p](),60)+dt[N6S]()-STX[W84][D4G](dt,this));if(is24)minutes=x8A[(f74)](dtShifted[x8p](),60)+dtShifted[N6S]();if(x8A[s2l](minutes%minuteBoundary,0)){var hz=(x8A[n5d](i,candleWidth))+offset,text="";if(!STXChart[i7G]()){if(chart[Y4S][(f0T+A3D+w5S+D4Z+x8A.n9S+p2C)]){text=chart[Y4S][K4G](dtShifted,"line");}
else{text=STX[(q2D+I6G+Z1m+Z6Z)](dtShifted,this);}
}
if(x8A[K1d](hz,chart.width)){axisRepresentation[(c6S+p9S+j7Z)]({hz:hz,grid:"line",text:text}
);}
}
}
}
else{var prices;if(x8A[(M0C)](i,chart[s0Z].length)){prices=chart[s0Z][i];dt=prices[s9l];}
else{if(!chart[(a9m+O4T+S4d)][v5d])break;if(isIntraday)dt=STX[W84][(T4S+V8p+c3Z+m5Z+x8A.c7S+q0T+B4S+W4Z)](dt,interval,periodicity,this);else if(isWeekly)dt=STX[W84][n7m](dt,periodicity,this);else if(isMonthly)dt=STX[(o9S+D4Z+f7l+l5S+J1Z+x8A.n9S)][v2S](dt,periodicity,this);else if(isDaily)dt=STX[W84][L9G](dt,periodicity,this);}
dtShifted=dt;var m=dt[(Z8T+A7D+I14)](),y=dt[b94]();if(x8A[k14](y,prevYear)){prevYear=y;prevMonth=m;var hz=x8A[F6p]((i*candleWidth),2),text="";if(!STXChart[i7G]())text=y;axisRepresentation[K6T]({hz:hz,grid:"boundary",text:text}
);}
else if(x8A[C7S](m,prevMonth)){var doIt="monthly";if(isWeekly&&x8A[t74](chart[r7l]*periodicity,(52*1)))doIt="quarterly";else if(isMonthly&&x8A[l2D](chart[r7l]*periodicity,(12*1)))doIt="quarterly";else if(isDaily&&x8A[s4G](chart[r7l]*periodicity,(365*1)))doIt="quarterly";if(isWeekly&&x8A[I34](chart[r7l]*periodicity,(52*2)))doIt=(T4S+d0p);else if(isMonthly&&x8A[V8T](chart[r7l]*periodicity,(12*2)))doIt="none";else if(isDaily&&x8A[F4G](chart[r7l]*periodicity,(365*2)))doIt="none";if(x8A[E2l](doIt,"monthly")||(x8A[(Z8T+K3m)](doIt,"quarterly")&&(x8A[g7G](m,0)||x8A[I3l](m,3)||x8A[x8D](m,6)||x8A[c5T](m,9)))){prevMonth=m;var hz=x8A[C94]((i*candleWidth),2),text="";if(!STXChart[i7G]())text=STX[(s94+b6p+U7m+M7S+i7Z+q0T+E4Z+v4S+Z6Z)](m,displayLetters,this);axisRepresentation[K6T]({hz:hz,grid:(B6S+T4S+m5Z),text:text}
);}
}
}
var obj={DT:dtShifted,Date:STX[R74](dtShifted)}
;if(x8A[(T1T)](i,chart[(W4Z+D4Z+T7p+m5Z+S1l+j1D+x8A.n9S)].length))obj.data=chart[s0Z][i];else obj.data=null;chart[b4Z][K6T](obj);}
this[A3d]("createXAxis",arguments$);return axisRepresentation;}
;STXChart.prototype.drawXAxis=function(chart,axisRepresentation){var O9S="R2",U7p="P2",q6d="Ri",P4S="Y2",t3Z="Z2",t7C="j2",E6Z="H5",o2S="b5",A8T="I5",G8D="L5",V6p="p5",h6G="N5",O6G="r5",s5p="G5",L14="o5",u6Z="Q5",e5p="xAxi",U44="unpaddedRight",B4Z="u5",X1C="hz",h5l="minimumLabelWidth",u1d="Prep",arguments$=[chart,axisRepresentation];if(this[(x8A.c7S+p9S+T4S+u1d+c5S)]("drawXAxis",arguments$))return ;if(!axisRepresentation)return ;var priorBoundary=null,context=this[i8C][b6D];this[W4G]("stx_xaxis");context.textAlign="center";context.textBaseline="middle";for(var i=0;x8A[(W4Z+Z3m)](i,axisRepresentation.length);i++){var obj=axisRepresentation[i],w=context.measureText(obj[d5C]).width,w2=Math[H0S](w,chart[Y4S][h5l]);obj[X1C]=obj[X1C]+.5;obj[w1T]=x8A[e1D](obj[X1C],(w2/2));obj[X2S]=obj[X1C]+(x8A[B4Z](w2,2));obj[U44]=obj[X1C]+(x8A[(v6T+Z3m)](w,2));}
var plotter=new STX[i6D]();plotter[N5S]("line","stroke",this[r2G]("stx_grid"));plotter[N5S]("boundary","stroke",this[(F5l+U4T+U1Z+n0D+G2m)]("stx_grid_dark"));plotter[N5S]("border",(M7S+G8T+B4S+T2S+m5Z),this[r2G]("stx_grid_border"));var bottom=chart[(c6S+a0Z+N5D)][f3T],yAxis=chart[K5D][(U3G+m0G+M7S)],context=this[i8C][b6D],prevRight=-1,nextBoundaryLeft=Math[v9l],drawBorders=chart[(e5p+M7S)][e5Z]||this[l8G],b=drawBorders?x8A[u6Z](yAxis[f3T],.5):yAxis[(Y4Z+w1D+x8A.n9S+G5D)],middle=x8A[L14](bottom,this[S84]/2);if(drawBorders)middle+=3;for(var nb=0;x8A[s5p](nb,axisRepresentation.length);nb++){if(x8A[O6G](axisRepresentation[nb][(r4G+t6l)],"boundary")){nextBoundaryLeft=axisRepresentation[nb][w1T];break;}
}
for(var i=0;x8A[h6G](i,axisRepresentation.length);i++){var obj=axisRepresentation[i];if(x8A[V6p](i,nb)){for(nb++;x8A[G8D](nb,axisRepresentation.length);nb++){if(x8A[A8T](axisRepresentation[nb][J4G],"boundary")){nextBoundaryLeft=axisRepresentation[nb][w1T];break;}
}
if(x8A[o2S](nb,axisRepresentation.length)){nb=-1;nextBoundaryLeft=Math[v9l];}
if(prevRight>-1){if(x8A[n2G](obj[w1T],prevRight))continue;}
}
else{if(prevRight>-1){if(x8A[E6Z](obj[w1T],prevRight))continue;}
if(x8A[t7C](obj[X2S],nextBoundaryLeft))continue;}
prevRight=obj[X2S];if(x8A[t3Z](obj[X1C],0)&&x8A[P4S](Math[(j14+x8A.c7S)](obj[(K34+j1d+N0l+W4Z+q6d+Z8T+f3C)]),this[i8C].width)){if(chart[Y4S][b2m]){plotter.moveTo(obj[J4G],obj[X1C],yAxis.top);plotter.lineTo(obj[J4G],obj[X1C],b);}
if(drawBorders){plotter.moveTo("border",obj[X1C],b+.5);plotter.lineTo("border",obj[X1C],b+6);}
this[M7Z](x8A[U7p](obj[J4G],"boundary")?"stx_xaxis_dark":"stx_xaxis");context.fillText(obj[d5C],obj[X1C],middle);}
}
if(drawBorders){var b=Math[J8C](yAxis[f3T])+.5,w=Math[(w0V+M2h)](x8A[O9S](chart.width,3))+.5;plotter.moveTo("border",0,b);plotter.lineTo("border",w,b);}
plotter[s2Z](context);context.textAlign="left";this[A3d]("drawXAxis",arguments$);}
;STXChart.prototype.createNumericXAxis=function(chart){var y7m="b0i",t8V="I0i",F8p="L0i",F3S="p0i",f6S="N0i",n34="axis",C6p="r0i",u3l="o0i",J4p="z0i",d4G="u0i",M8l="0i",t8D="L2",d8T="v2",n94="X2",V1l="i2",j0G="B2",O14="O2";axisRepresentation=[];chart[b4Z]=[];for(var i=0;x8A[O14](i,chart[r7l]);i++){if(x8A[j0G](chart[s0Z][i],null))break;chart[b4Z][K6T](null);}
for(var j=i;x8A[V1l](j,chart[r7l]);j++){if(x8A[n94](chart[(s5m+j6S+m5Z+Z8T+c6m+x8A.n9S)][i],null))break;}
var filledScreenRatio=x8A[d8T]((j-i),chart[r7l]),idealTicks=Math[(w0V+M2h)](x8A[p8d]((this[i8C].width*filledScreenRatio),chart[Y4S][O7p])),minMax=this[l7T](chart[s0Z],["index"]),maxPoint=minMax[1],minPoint=minMax[0],range=x8A[t8D](maxPoint,minPoint);function niceNum(range,round){var N04="q0i",X3l="d0i",j9D="a0i",F7d="A0i",Q1D="U2",s9S="I2",m6T="log10",exponent,fraction,niceFraction;exponent=Math[F2S](Math[m6T](range));fraction=x8A[s9S](range,Math[z04](10,exponent));if(round){if(x8A[j4S](fraction,1.5))niceFraction=1;else if(x8A[Q1D](fraction,3))niceFraction=2;else if(x8A[F7d](fraction,7))niceFraction=5;else niceFraction=10;}
else{if(x8A[j9D](fraction,1))niceFraction=1;else if(x8A[(w5S+M8l)](fraction,2))niceFraction=2;else if(x8A[X3l](fraction,5))niceFraction=5;else niceFraction=10;}
return x8A[N04](niceFraction,Math[z04](10,exponent));}
var niceRange=niceNum(x8A[d4G](maxPoint,minPoint),false),tickSpacing=niceNum(x8A[J4p](range,(idealTicks-1)),true),niceMin=x8A[(T0Z+M8l)](Math[F2S](minPoint/tickSpacing),tickSpacing),niceMax=x8A[u3l](Math[B1T](maxPoint/tickSpacing),tickSpacing),nextLabel=niceMin;if(x8A[(R6Z+M8l)](niceMin,minPoint))nextLabel=niceMin+tickSpacing;var hz;for(i;x8A[C6p](i,chart[r7l]);i++){var prices=chart[s0Z][i];if(prices){var obj={index:prices[l74],data:prices}
;chart[(O4T+n34)][K6T](obj);if(x8A[f6S](prices[l74],nextLabel))continue;if(x8A[F3S](prices[l74],nextLabel)){hz=(x8A[F8p](i,this[T2T][r1d]))+this[J2G];}
else if(x8A[t8V](prices[(q0T+N1m+Z0D)],nextLabel)){hz=x8A[y7m]((i*this[T2T][r1d]),3);}
axisRepresentation[K6T]({hz:hz,grid:"line",text:nextLabel}
);nextLabel+=tickSpacing;}
else{chart[b4Z][K6T](null);}
}
return axisRepresentation;}
;STXChart.prototype.createTickXAxisWithDates=function(chart){var N7p="timeAsDisplay",i7S="V9i",W1T="D9i",t0Z="h9i",s54="l9i",D74="c9i",q6p="maxTimeUnit",C4p="k9i",b1S="Y9i",u2G="Z9i",e2m="j9i",W1p="y3i",u2C="HOU",Q2S="3i",t0p="I3i",N4G="L3i",F5d="p3i",o7D="N3i",A5Z="r3i",Z5m="G3i",g84="o3",N9d="Q3i",Z6C="z3i",w5Z="u3i",y3l="q3i",o1p="monthAsDisplay",y8m="d3i",H1T="m3",t44="getDa",m8C="a3i",B9S="A3i",g2h="U1i",j3G="E1i",x4p="M1i",u2Z="g1i",y2T="e1i",Q1G="ear",E3Z="Fu",h4C="f1i",Q3T="lY",u4C="getF",w3l="v1i",S2G="X1i",Q3C="i1i",V8V="tHou",w8V="B1i",X6C="1i",P3C="Secon",C1l="ISE",k7D="LL",R8l="MI",i1m="P1i",e54="w1i",S0p="adjustTimeZone",t6d="J1i",j5C="T1i",B5G="minTimeUnit",B8d="t1i",B8p="S8i",j3C="timeUnitMultiplier",o54="xAx",F3p="F8i",y0V="W8i",h9D="timeUnit",w1p="x8i",g5m="K8i",O8Z="n8i",U54="s8i",V24="V8i",k54="D8i",Q7D="h8",S1T="l8i",E74="c8i",P94="k8i",R8T="Y8i",y3C="Z8i",u3p="j8i",o7m="H0i",K6Z="y0i",Q6D="TH",m5G="MO",G2S="Map",g2l="timeIn",O4m="DECADE",w2S="YEAR",B8m="MONTH",Y0l="DAY",S3S="HOUR",K2d="MINUTE",y3S="SECOND",g9T="MILLISECOND",X2m="timePossibilities",X3D="timeIntervalMap";if(!chart)chart=this[i8C];if(!this[X3D]){this[X2m]=[STX[g9T],STX[y3S],STX[K2d],STX[S3S],STX[Y0l],STX[B8m],STX[w2S],STX[O4m]];this[X3D]={}
;this[X3D][STX[g9T]]={arr:[1,2,5,10,20,50,100,250,500],minTimeUnit:0,maxTimeUnit:1000}
;this[X3D][STX[y3S]]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this[X3D][STX[K2d]]={arr:[1,2,3,5,10,15,20,30],minTimeUnit:0,maxTimeUnit:60}
;this[(g2l+x8A.n9S+t9D+U0p+v4S+G2S)][STX[S3S]]={arr:[1,2,3,4,6,12],minTimeUnit:0,maxTimeUnit:24}
;this[X3D][STX[Y0l]]={arr:[1,2,3],minTimeUnit:1,maxTimeUnit:32}
;this[X3D][STX[(m5G+i1Z+Q6D)]]={arr:[1,2,3,6],minTimeUnit:1,maxTimeUnit:13}
;this[X3D][STX[w2S]]={arr:[1,2,3,5],minTimeUnit:1,maxTimeUnit:20000000}
;this[X3D][STX[O4m]]={arr:[10],minTimeUnit:0,maxTimeUnit:2000000}
;}
var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],idealTicks=x8A[K6Z](this[i8C].width,chart[Y4S][O7p]);for(var x=0;x8A[o7m](x,chart[s0Z].length);x++)if(chart[s0Z][x])break;if(STXChart[o6S](this[T2T][p0l])){var timeRange=x8A[u3p](chart[s0Z][chart[s0Z].length-1][s9l][(T0D+S1C)](),chart[s0Z][x][s9l][o5l]());}
else{var timeRange=0,nextClose=null,nextCloseEpoch=0,prevEpoch=0;for(var i=0;x8A[y3C](i,chart[s0Z].length);i++){var q=chart[s0Z][i];if(!q)continue;var epoch=q[s9l][o5l]();if(x8A[R8T](epoch,nextCloseEpoch)){timeRange+=x8A[P94](nextCloseEpoch,prevEpoch);nextClose=new Date(q[s9l]);nextClose[z0p](chart[(m5Z+T4S+W4Z+I6Z+B4S+q14)]);nextClose[s7d](chart[J7d]);nextCloseEpoch=nextClose[(T0D+s8Z+Q4C)]();}
else{timeRange+=x8A[E74](epoch,prevEpoch);}
prevEpoch=epoch;}
if(x8A[S1T](timeRange,chart[v94]))timeRange*=(x8A[(Q7D+q0T)](1440,chart[v94]));}
timeRange=x8A[k54]((timeRange/chart[s0Z].length),chart[r7l]);var msPerTick=x8A[V24](timeRange,idealTicks);for(var i=0;x8A[U54](i,this[X2m].length);i++){if(x8A[O8Z](this[X2m][i],msPerTick))break;}
var timeUnit=this[X2m][x8A[g5m](i,1)];if(x8A[w1p](chart[Y4S][h9D],null))timeUnit=chart[Y4S][h9D];var timeInterval=STX[s2G](this[X3D][timeUnit]);for(var i=0;x8A[(x8A.s0m+E9m+q0T)](i,timeInterval[b5S].length);i++){if(x8A[y0V](timeInterval[b5S][i]*timeUnit,msPerTick))break;}
var timeUnitMultiplier=timeInterval[b5S][x8A[F3p](i,1)];if(chart[(o54+S4d)][j3C])timeUnitMultiplier=chart[Y4S][j3C];axisRepresentation=[];var i=0;chart[b4Z]=[];for(;x8A[B8p](i,chart[r7l]);i++){if(x8A[B8d](chart[(W4Z+D4Z+J3S+d8Z+G4D+w5S+m5Z+T4S+x8A.n9S)][i],null))break;chart[(O4T+r9Z+S4d)][K6T](null);}
var nextTimeUnit=timeInterval[B5G],previousTimeUnitLarge=0;for(i;x8A[j5C](i,chart[(w5S+D4Z+O4T+s8Z+q0T+G9C+M7S)]);i++){if(x8A[t6d](i,chart[s0Z].length)){prices=chart[s0Z][i];if(prices[w0m]&&chart[Y4S][S0p]&&x8A[e54](timeUnit,STX[Y0l])){dtShifted=prices[w0m];}
else{dtShifted=prices[(s9l)];}
var obj={DT:dtShifted,Date:STX[R74](dtShifted),data:prices}
;chart[b4Z][K6T](obj);var currentTimeUnit,currentTimeUnitLarge;if(x8A[i1m](timeUnit,STX[(R8l+k7D+C1l+x8A.s0m+W1Z+h0p)])){currentTimeUnit=dtShifted[o5l]();currentTimeUnitLarge=dtShifted[(Z8T+m5Z+x8A.n9S+P3C+W4Z+M7S)]();}
else if(x8A[(r0Z+H9p+q0T)](timeUnit,STX[y3S])){currentTimeUnit=dtShifted[w5l]();currentTimeUnitLarge=dtShifted[N6S]();}
else if(x8A[(W1Z+X6C)](timeUnit,STX[K2d])){currentTimeUnit=dtShifted[N6S]();currentTimeUnitLarge=dtShifted[x8p]();}
else if(x8A[w8V](timeUnit,STX[S3S])){currentTimeUnit=dtShifted[(t4m+V8V+o5d)]();currentTimeUnitLarge=dtShifted[q3m]();}
else if(x8A[Q3C](timeUnit,STX[Y0l])){currentTimeUnit=dtShifted[q3m]();currentTimeUnitLarge=dtShifted[U3d]()+1;}
else if(x8A[S2G](timeUnit,STX[B8m])){currentTimeUnit=dtShifted[(Z8T+m5Z+a4Z+F4D+x8A.n9S+g2S)]()+1;currentTimeUnitLarge=dtShifted[b94]();}
else if(x8A[w3l](timeUnit,STX[(n8S+c7Z+x8A.X8m+r0Z)])){currentTimeUnit=dtShifted[(u4C+L94+Q3T+m5Z+D4Z+x8A.c7S)]();currentTimeUnitLarge=dtShifted[b94]();}
else{currentTimeUnit=x8A[h4C](dtShifted[(Z8T+m5Z+x8A.n9S+E3Z+v4S+v4S+n8S+Q1G)](),10);currentTimeUnitLarge=x8A[y2T](dtShifted[b94](),10);}
var text;if(x8A[u2Z](previousTimeUnitLarge,currentTimeUnitLarge)){if(x8A[x4p](currentTimeUnit,nextTimeUnit)){nextTimeUnit=timeInterval[B5G];}
hz=x8A[j3G]((i*this[T2T][r1d]),3);text=null;if(x8A[g2h](timeUnit,STX[S3S])||(x8A[B9S](timeUnit,STX[K2d])&&x8A[m8C](previousTimeUnitLarge,currentTimeUnitLarge))){if(chart[Y4S][K4G]){text=chart[Y4S][K4G](dtShifted,"boundary",STX[Y0l],1);}
else{if(this[e4G]){text=this[e4G][z2p][(a8T+w5S+D4Z+x8A.n9S)](dtShifted);}
else{text=(dtShifted[U3d]()+1)+"/"+dtShifted[(t44+x8A.n9S+m5Z)]();}
}
}
else if(x8A[(H1T+q0T)](timeUnit,STX[Y0l])){if(x8A[y8m](previousTimeUnitLarge,currentTimeUnitLarge)){text=dtShifted[b94]();}
else{text=STX[o1p](dtShifted[U3d](),false,this);}
}
else if(x8A[y3l](timeUnit,STX[B8m])){text=dtShifted[b94]();}
if(text){axisRepresentation[K6T]({hz:hz,grid:"boundary",text:text}
);}
}
if(x8A[w5Z](currentTimeUnit,nextTimeUnit)){if(x8A[Z6C](nextTimeUnit,timeInterval[B5G])){if(x8A[N9d](currentTimeUnitLarge,previousTimeUnitLarge))continue;}
var labelDate=new Date(dtShifted),hz=(x8A[(g84+q0T)](i,this[T2T][r1d]))+this[J2G],boundaryTimeUnit=x8A[Z5m](Math[F2S](currentTimeUnit/timeUnitMultiplier),timeUnitMultiplier);if(x8A[A5Z](boundaryTimeUnit,currentTimeUnit)){hz=x8A[o7D]((i*this[T2T][r1d]),3);}
if(x8A[F5d](timeUnit,STX[g9T])){labelDate[u8D](boundaryTimeUnit);}
else if(x8A[N4G](timeUnit,STX[y3S])){labelDate[u8D](0);labelDate[y2m](boundaryTimeUnit);}
else if(x8A[t0p](timeUnit,STX[K2d])){labelDate[u8D](0);labelDate[y2m](0);labelDate[s7d](boundaryTimeUnit);}
else if(x8A[(Y4Z+Q2S)](timeUnit,STX[(u2C+r0Z)])){labelDate[u8D](0);labelDate[y2m](0);labelDate[s7d](0);labelDate[z0p](boundaryTimeUnit);}
else if(x8A[W1p](timeUnit,STX[Y0l])){labelDate[P0S](boundaryTimeUnit);}
else if(x8A[(t6Z+q0T)](timeUnit,STX[B8m])){labelDate[P0S](1);labelDate[I2d](x8A[(e2m)](boundaryTimeUnit,1));}
else if(x8A[u2G](timeUnit,STX[w2S])){labelDate[P0S](1);labelDate[I2d](0);labelDate[u6d](boundaryTimeUnit);}
else{labelDate[(M7S+m5Z+Y0Z+D4Z+A7S)](1);labelDate[I2d](0);labelDate[u6d](x8A[b1S](boundaryTimeUnit,10));}
nextTimeUnit=boundaryTimeUnit+timeUnitMultiplier;if(x8A[C4p](timeUnit,STX[Y0l]))timeInterval[q6p]=daysInMonth[labelDate[U3d]()]+1;if(x8A[D74](nextTimeUnit,timeInterval[q6p]))nextTimeUnit=timeInterval[B5G];previousTimeUnitLarge=currentTimeUnitLarge;if(chart[Y4S][K4G]){text=chart[Y4S][K4G](labelDate,"line",timeUnit,timeUnitMultiplier);}
else{if(x8A[s54](timeUnit,STX[Y0l])){text=labelDate[q3m]();}
else if(x8A[t0Z](timeUnit,STX[B8m])){text=STX[o1p](dtShifted[U3d](),false,this);}
else if(x8A[W1T](timeUnit,STX[w2S])||x8A[i7S](timeUnit,STX[O4m])){text=labelDate[b94]();}
else{text=STX[N7p](labelDate,this,timeUnit);}
}
axisRepresentation[K6T]({hz:hz,grid:"line",text:text}
);}
}
else{chart[b4Z][K6T](null);}
}
return axisRepresentation;}
;var cached=x8A.n0Z,notcached=x8A.n0Z;STXChart.prototype.createYAxis=function(panel,parameters){var q4m="lPla",H9d="eci",M3D="prin",t0d="U6i",z7Z="E6i",b2d="M6i",H7C="g6i",P8C="e6",U9m="f6i",Y8p="v6i",M0T="X6i",b0l="i6i",G4p="B6i",r6C="O6i",b14="6i",O9d="minimumPriceTick",F6C="P6i",d9Z="w6i",e2Z="J6i",R3Z="noEvenDivisorTicks",q94="T6i",p5m="t6i",L7T="S7i",c5D="W7i",I24="C7i",g8Z="x7i",o1G="K7i",V9C="s7",T3m="V7i",M2p="D7i",B84="h7i",c44="7i",f9m="c7i",c0d="LN1",Z4C="Y7i",D4d="Z7i",n0G="t7i",P3m="F9i",G4C="W9i",Y4D="C9i",J6D="ache",E2T="x9i",m7d="K9i",B0T="n9i",D1S="enableCaching",b6T="s9i",Q6l="repen";if(this[(o2d+T4S+c3Z+Q6l+W4Z)]("createYAxis",arguments))return ;var chart=panel[i8C],isAChart=(x8A[b6T](panel[W0d],chart[W0d])),yAxis=panel[n1p];if(!parameters)parameters={}
;parameters[I0m]=false;if(STXChart[D1S]&&x8A[B0T](yAxis[B7l],panel[A2T])&&x8A[m7d](yAxis[h6l],panel[O8m])){var leftTick=x8A[E2T](chart[O9p].length,chart[z44]),rightTick=leftTick+chart[r7l];panel[s5C]=Math[(w5S+J8V)](panel[s5C],leftTick);panel[b0V]=Math[(w5S+r9Z)](panel[b0V],rightTick);panel[s5C]=leftTick;panel[b0V]=rightTick;parameters[I0m]=true;cached++;}
else{panel[s5C]=1000000;panel[(x8A.d5Z+J6D+r0Z+q0T+Z8T+g2S+x8A.n9S)]=-1;panel[A2T]=yAxis[B7l];panel[O8m]=yAxis[h6l];notcached++;}
if(!parameters[I0m]){var height=yAxis.height=x8A[Y4D](yAxis[f3T],yAxis.top),pricePerPix=x8A[G4C]((yAxis[B7l]-yAxis[(v4S+c9D)]),(height-yAxis[a8C]));yAxis[B7l]=yAxis[B7l]+x8A[P3m]((yAxis[a8C]/2),pricePerPix)+x8A[(d8Z+G9m+q0T)](yAxis[z44],pricePerPix);yAxis[h6l]=x8A[n0G](yAxis[h6l],(yAxis[a8C]/2)*pricePerPix,yAxis[z44]*pricePerPix);yAxis[V8Z]=x8A[D4d](yAxis[B7l],yAxis[h6l]);if(yAxis[i6d]&&(!this[b7D]||x8A[Z4C](this[b7D][W0d],"projection"))){yAxis[W2l]=x8A[(T2S+k1m+q0T)](Math[C1C](yAxis[B7l]),Math[(c0d+s9p)]);yAxis[p04]=x8A[f9m](Math[C1C](yAxis[h6l]),Math[x3d]);if(x8A[(v4S+c44)](yAxis[(v4S+B4S+f4T)],0))yAxis[p04]=0;yAxis[o04]=x8A[B84](yAxis[W2l],yAxis[p04]);}
if(!yAxis[O7p]){var fontHeight=this[D6C]("stx_yaxis");if(isAChart){yAxis[O7p]=x8A[M2p](fontHeight,3);}
else{yAxis[O7p]=x8A[T3m](fontHeight,2);}
}
var idealTicks=Math[J8C](x8A[(V9C+q0T)](height,yAxis[O7p])),shadow=parameters[Z1d]?x8A[(T4S+c44)](parameters[Z1d][1],parameters[(h9d+T4S+t4m)][0]):yAxis[V8Z];yAxis[(c6S+E0d+x8A.d5Z+K3G+L5l+T2S)]=Math[F2S](x8A[o1G](shadow,idealTicks));var n=1;for(var zz=0;x8A[g8Z](zz,10);zz++){if(x8A[I24](yAxis[S74],0))break;n*=10;yAxis[S74]=x8A[c5D](Math[F2S](shadow/idealTicks*n),n);}
if(x8A[(C7Z+k1m+q0T)](zz,10))yAxis[S74]=.00000001;yAxis[S74]=x8A[L7T](Math[J8C](shadow/idealTicks*n),n);var verticalTicks=Math[J8C](x8A[p5m](shadow,yAxis[S74]));if(parameters[Z1d]&&x8A[q94](verticalTicks,shadow)&&!yAxis[R3Z]){while(x8A[e2Z](verticalTicks,1)){if(x8A[d9Z](shadow%verticalTicks,0))break;verticalTicks--;}
yAxis[S74]=x8A[F6C](shadow,verticalTicks);}
if(yAxis[O9d]){yAxis[S74]=yAxis[O9d];for(var i=0;x8A[(r0Z+b14)](i,10);i++){var numberOfTicks=x8A[r6C](shadow,yAxis[S74]);if(x8A[G4p](height/numberOfTicks,this[D6C]("stx_yaxis")*2))yAxis[S74]*=2;else break;}
}
yAxis[t4Z]=x8A[b0l](yAxis.height,yAxis[(q1d+W4Z+c9D)]);}
if(!this[b7D]||x8A[M0T](this[b7D][W0d],"projection")){yAxis[B7l]=this[j8G](panel.top,panel);if(yAxis[i6d]){yAxis[W2l]=x8A[Y8p](Math[C1C](yAxis[B7l]),Math[(x3d)]);yAxis[p04]=x8A[U9m](Math[C1C](yAxis[h6l]),Math[x3d]);if(x8A[(P8C+q0T)](yAxis[h6l],0))yAxis[p04]=0;yAxis[o04]=x8A[H7C](yAxis[W2l],yAxis[p04]);}
yAxis[V8Z]=x8A[b2d](yAxis[B7l],yAxis[h6l]);}
yAxis[t4Z]=x8A[z7Z](yAxis.height,yAxis[V8Z]);if(x8A[t0d](yAxis[G1T],null)){if(isAChart)yAxis[m8d]=chart[G1T];else yAxis[m8d]=null;}
else{yAxis[(M3D+Y0Z+H9d+w5S+D4Z+q4m+T7C+M7S)]=yAxis[G1T];}
if(this[A3d]("createYAxis",arguments))return ;}
;STXChart.prototype.drawYAxis=function(panel,parameters){var x3T="M4i",l9C="addText",u1Z="matt",x3D="g4i",C5D="p4i",b9T="ceT",K2G="N4i",S2l="r4i",T1G="G4i",h0T="o4i",w3T="Q4i",i8V="z4i",y1T="u4i",y7C="stx_",Y5C="q4i",M64="d4i",H6p="m4i",n9d="a4i",Z5T="A4i",N0m="noDraw";if(this[I7S]("drawYAxis",arguments))return ;if(!parameters)parameters={}
;if(!parameters[N0m]&&!panel[n1p][N0m]){if(!panel[t2l]||!parameters[I0m]){var chart=panel[i8C],isAChart=(x8A[Z5T](panel[W0d],chart[W0d])),yAxis=panel[n1p];if(!yAxis[S74])return ;var shadow=yAxis[V8Z];if(parameters[Z1d]){shadow=x8A[n9d](parameters[Z1d][1],parameters[Z1d][0]);}
var verticalTicks=x8A[H6p](shadow,yAxis[S74]);verticalTicks=Math[J8C](verticalTicks);if(yAxis[i6d]){var logStart=x8A[M64](Math[C1C](this[j8G](yAxis[f3T],panel)),Math[x3d]),logPriceTick=x8A[Y5C]((yAxis[W2l]-yAxis[p04]),verticalTicks);}
panel[t2l]=new STX[i6D]();panel[t2l][N5S]("grid","stroke",this[r2G]("stx_grid"));panel[t2l][N5S]("text","fill",this[r2G]((y7C+H6T+r9Z+q0T+M7S)));panel[t2l][N5S]("border","stroke",this[r2G]("stx_grid_border"));var priceOffset=0,high=parameters[Z1d]?parameters[Z1d][1]:yAxis[(V4d+g2S)],low=parameters[Z1d]?parameters[Z1d][0]:yAxis[(h6l)],drawBorders=chart[K5D][n1p][e5Z]||this[l8G],borderEdge=Math[J8C](x8A[y1T](chart.width,3))+.5,w=drawBorders?x8A[i8V](borderEdge,.5):this[i8C].width;if(isAChart)priceOffset=x8A[w3T](yAxis[S74],Math[J8C]((low%yAxis[S74])*panel[i8C][S9m])/panel[i8C][S9m]);else priceOffset=x8A[h0T](high,yAxis[S74]);var fontHeight=this[D6C]("stx_yaxis");for(var i=0;x8A[T1G](i,verticalTicks);i++){var price;if(yAxis[i6d]){var logPrice=logStart+(x8A[S2l](i,logPriceTick));price=Math[z04](10,logPrice);}
else{if(isAChart)price=low+x8A[K2G](i,yAxis[(t3l+q0T+b9T+q0T+x8A.d5Z+T2S)])+priceOffset;else price=x8A[C5D](high,(i*yAxis[S74]),priceOffset);}
var y=this[b5p](price,panel),y2=Math[J8C](y)+.5;if(yAxis[b2m]){panel[t2l].moveTo((r4G+q0T+W4Z),0,y2);panel[t2l].lineTo("grid",w,y2);}
if(drawBorders){panel[t2l].moveTo("border",x8A[x3D](borderEdge,.5),y2);panel[t2l].lineTo("border",borderEdge+3,y2);}
if(yAxis[I5D]){price=yAxis[(i5D+m5Z+C7Z+A3D+u1Z+m5Z+x8A.c7S)](this,panel,price);}
else{price=this[w44](price,panel);}
panel[t2l][l9C]("text",price,x8A[x3T](this[i8C][i6S],this[B7p],3),y);}
if(drawBorders){var b=Math[J8C](yAxis[f3T])+.5;panel[t2l].moveTo("border",borderEdge,yAxis.top);panel[t2l].lineTo("border",borderEdge,b);panel[t2l][s2Z](this[(G7C+D4Z+x8A.c7S+x8A.n9S)][b6D],"border");}
}
this[I5p](panel);this[B7m](panel);}
if(this[A3d]("drawYAxis",arguments))return ;}
;STXChart.prototype.plotYAxisGrid=function(panel){if(this[I7S](I5p,arguments))return ;var context=this[i8C][b6D];panel[t2l][s2Z](context,J4G);if(this[(O3G+c5S)](I5p,arguments))return ;}
;STXChart.prototype.plotYAxisText=function(panel){var V7T="pha",n8T="Plo",h1T="_y",W2m="ya",p1G="x_",k9l="asFo";if(this[I7S](B7m,arguments))return ;this[(x8A.d5Z+K0l+k9l+b6p)]((M7S+x8A.n9S+p1G+W2m+O4T+S4d));this[M7Z]((M7S+E3T+h1T+r9Z+S4d));var context=this[i8C][b6D];context.textBaseline="middle";panel[(U3G+O4T+S4d+n8T+x8A.n9S+x8A.n9S+t9D)][s2Z](context,d5C);context.textBaseline=(D4Z+v4S+V7T+Y4Z+A7D+L5l);if(this[A3d](B7m,arguments))return ;}
;STXChart.prototype.formatYAxisPrice=function(price,panel,requestedDecimalPlaces){var c6Z="oFixed",f9S="aliz",Q7S="O5i",I5Z="R5i",D5d="P5i",D6S="w5i",p2p="J5i",q0m="T5i",m6p="t5i",G8C="S4i",C2C="F4i";if(!price||typeof price=="undefined")return "";var yAxis=panel[n1p],decimalPlaces=requestedDecimalPlaces;if(!decimalPlaces&&x8A[C2C](decimalPlaces,0))decimalPlaces=yAxis[m8d];if(!decimalPlaces&&x8A[G8C](decimalPlaces,0)){if(x8A[m6p](yAxis[S74],.01))decimalPlaces=4;else if(x8A[q0m](yAxis[S74],.1))decimalPlaces=2;else if(x8A[p2p](yAxis[S74],1))decimalPlaces=1;else decimalPlaces=0;}
if(x8A[D6S](panel[W0d],panel[i8C][W0d])){if(x8A[D5d](price,1000)||price<-1000){return STX[l7C](price);}
}
if(this[e4G]){if(x8A[I5Z](decimalPlaces,this[e4G][s74].length))decimalPlaces=x8A[Q7S](this[e4G][s74].length,1);price=this[(J8V+x8A.n9S+t9D+W3m+x8A.n9S+H2Z+f9S+m5Z+x8A.c7S)][s74][decimalPlaces][u6C](price);}
else{price=price[(x8A.n9S+c6Z)](decimalPlaces);}
return price;}
;STXChart.prototype.formatPrice=function(price,panel){var S1Z="atters",r4T="v5i",s9Z="X5i",p2D="B5";if(!price||typeof price=="undefined")return "";if(!panel)panel=this[a2Z];if(!panel)panel=this[i8C][K5D];if(!panel)return price;var decimalPlaces=panel[G1T];if(!decimalPlaces&&x8A[(p2D+q0T)](decimalPlaces,0)){decimalPlaces=panel[i8C][G1T];}
if(!decimalPlaces&&x8A[(t6G+q0T)](decimalPlaces,0)){return price;}
if(this[e4G]){if(x8A[s9Z](decimalPlaces,this[e4G][s74].length))decimalPlaces=x8A[r4T](this[e4G][s74].length,1);price=this[e4G][(t3l+O2C+C7Z+A3D+w5S+S1Z)][decimalPlaces][u6C](price);}
else{price=price[o8G](decimalPlaces);}
return price;}
;STXChart.prototype.createCrosshairs=function(){if(this[I7S](L5m,arguments))return ;if(this[i6Z][y5D][O4G])return ;this[i6Z][r4D][O4G]=function(e){if(!e)e=event;if(e[X5m])e[X5m]();return O7T;}
;this[(q8p+x8A.n9S+x8A.c7S+B4S+v4S+M7S)][y5D][O4G]=function(e){if(!e)e=event;if(e[X5m])e[X5m]();return O7T;}
;this[A3d](L5m,arguments);}
;STXChart.prototype.createVolumeChart=function(chart){var k9d="volumeChart",z0S="m2i",t9G="a2i",u0Z="A2i",a6m="U5i",p4S="E5i",E9C="M5i",n4G="g5i",d6l="e5i",N8p="f5i",arguments$=[chart];if(this[I7S]("createVolumeChart",arguments$))return ;var quotes=chart[s0Z],context=this[i8C][b6D];chart[F3l]=0;for(var i=0;x8A[N8p](i,chart[r7l]);i++){var prices=quotes[i];if(x8A[d6l](prices,null))continue;if(x8A[n4G](prices[C1D],chart[F3l]))chart[F3l]=prices[C1D];}
var vchart=this[j8m]["vchart"];if(x8A[E9C](vchart,null)||x8A[p4S](vchart[x9Z],true))return ;if(x8A[a6m](chart[F3l],0)){this[F4S]("vchart","center","bottom",this[q04]("Volume Not Available"));}
var stx_volume_up=this[r2G]("stx_volume_up")[G0S],stx_volume_down=this[r2G]("stx_volume_down")[G0S],colorMap={}
;colorMap[stx_volume_up]=[];colorMap[stx_volume_down]=[];for(var i=0;x8A[u0Z](i,quotes.length);i++){var quote=quotes[i];if(x8A[t9G](quote,null)){colorMap[stx_volume_up][K6T](null);colorMap[stx_volume_down][K6T](null);continue;}
if(x8A[z0S](quote[Y6C],quote[b7p])){colorMap[stx_volume_up][(z4G+M7S+g2S)](null);colorMap[stx_volume_down][K6T](quote[C1D]);}
else{colorMap[stx_volume_up][K6T](quote[C1D]);colorMap[stx_volume_down][K6T](null);}
}
var borderMap={}
;borderMap[colorMap[stx_volume_up]]="#000000";borderMap[colorMap[stx_volume_down]]="#000000";vchart[e1Z]=0;vchart[H0S]=chart[F3l];var sd={name:"vchart",panel:"vchart",libraryEntry:STX[O5l][B9p]["vchart"],outputMap:{"Volume":""}
}
;STX[O5l][k9d](this,sd,colorMap,borderMap);STX[O5l][(b2l+m5Z+D4Z+A7S+n8S+R8D+S4d)](this,sd,this[i8C][s0Z],vchart);if(this[(o2d+T4S+x8A.X8m+c6S+c6S+j1D+W4Z)]("createVolumeChart",arguments$))return ;}
;STXChart.prototype.determineMinMax=function(quotes,fields){var q2l="Q2i",A6S="z2i",D3m="u2i",k2D="q2i",C5m="d2i",X64="ALU",W7p="_V",G4l="IN",highValue=Number[(F8Z+G4l+W7p+X64+c7Z)],lowValue=Number[v9l];for(var i=0;x8A[C5m](i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(quote.transform)quote=quote.transform;for(var j=0;x8A[k2D](j,fields.length);j++){var val=quote[fields[j]];if(val||x8A[D3m](val,0)){if(x8A[A6S](val,highValue))highValue=val;if(x8A[q2l](val,lowValue))lowValue=val;}
}
}
return [lowValue,highValue];}
;STXChart.prototype.initializeDisplay=function(chart){var m0S="miLog",A4d="n0a",c9p="s0a",E8l="V0a",S7T="D0a",i24="h0a",T6p="wV",z6S="hVal",O3C="l0a",s04="ue",E5G="hV",C84="c0a",p0G="lowValue",O04="k0a",N8S="Y0a",F2C="rol",u8l="Z0a",i7p="j0a",j0p="H2i",I04="y2i",n84="b2i",y4T="I2i",C3D="L2i",t9C="p2i",E0V="layou",e4p="N2i",C1T="r2i",i8m="G2i",y4d="o2i",i4G="hareY",d1p="runPr";if(this[(d1p+m5Z+c6S+m5Z+N1m)]("initializeDisplay",arguments))return ;var fields=[];for(var field in chart[q3d]){if(chart[q3d][field][Q9p][(M7S+i4G+x8A.X8m+O4T+S4d)])fields[K6T](field);}
var panel=chart[K5D]=this[(g3D+v4S+M7S)][chart[W0d]],yAxis=panel[n1p],cheight=panel.height,high=low=null;if(!yAxis[c2S])yAxis[c2S]=this[S84];yAxis[f3T]=x8A[y4d](panel[f3T],yAxis[c2S]);yAxis.top=panel.top;yAxis.height=x8A[i8m](yAxis[f3T],yAxis.top);var minMax;if(x8A[C1T](this[T2T][j6C],"line")||x8A[e4p](this[(E0V+x8A.n9S)][j6C],"colored_line")||x8A[t9C](this[T2T][j6C],"mountain")||x8A[C3D](this[T2T][j6C],"baseline_delta")){fields[K6T]("Close");minMax=this[l7T](chart[s0Z],fields);if(x8A[y4T](this[(j4T+H6T+V94)][(G7C+D4Z+J5d+s8Z+a0V+m5Z)],"baseline_delta")){var base=chart[R0V];if(chart[I2h])base=chart[I2h](this,chart,base);var diff=Math[H0S](x8A[n84](base,minMax[0]),x8A[I04](minMax[1],base));minMax[0]=x8A[j0p](base,diff);minMax[1]=base+diff;}
}
else{fields[K6T]("Close",(I6Z+G6l+g2S),"Low");minMax=this[l7T](chart[s0Z],fields);}
var verticalPad=Math[J8C](Math[W2S](x8A[i7p](cheight,5)));if(x8A[u8l](cheight-Math[W2S](yAxis[(M7S+x8A.d5Z+F2C+v4S)]),verticalPad)){yAxis[z44]=(x8A[N8S](cheight,verticalPad))*(x8A[O04](yAxis[(M7S+x8A.d5Z+F2C+v4S)],0)?-1:1);}
chart[p0G]=minMax[0];chart[Z3C]=minMax[1];var pricePerPix=x8A[C84]((chart[(V4d+E5G+E3S+s04)]-chart[p0G]),yAxis.height);if(x8A[O3C](chart[(g2S+G6l+z6S+s04)]-chart[(v4S+B4S+T6p+D4Z+J54+m5Z)],0)){high=x8A[i24](chart[Z3C],2);low=0;}
else{if(this[T2T][i6d]&&high){var logLow=x8A[S7T](Math[C1C](chart[p0G]),Math[x3d]),logHigh=x8A[E8l](Math[C1C](chart[Z3C]),Math[x3d]);high=Math[z04](10,logHigh);low=Math[z04](10,logLow);}
else{high=chart[Z3C];low=chart[p0G];}
}
yAxis[B7l]=high;yAxis[h6l]=low;yAxis[V8Z]=x8A[c9p](yAxis[B7l],yAxis[h6l]);if(x8A[A4d](yAxis[i6d],this[T2T][i6d])){this[n7p]();yAxis[(M7S+m5Z+m0S)]=this[(v4S+D4Z+n2d+H44)][i6d];}
var parameters={}
;this[L5p](panel,parameters);this[P7C](panel,parameters);this[A3d]("initializeDisplay",arguments);}
;STXChart.prototype.computePosition=function(x,offset){var x94="K0a";if(typeof offset==T6m)offset=x8A.n0Z;var position=x8A[x94](x,this[T2T][r1d])+offset;return position;}
;STXChart.prototype.computeColor=function(open,close){var l5D="C0a",f2Z="x0a";if(x8A[f2Z](open,close))return l5T;if(x8A[l5D](open,close))return i6m;return P1d;}
;STXChart.prototype.computeLength=function(high,low){var M5m="W0a",h=this[b5p](high),l=this[b5p](low);return x8A[M5m](l,h);}
;STXChart.prototype.volUnderlay=function(chart){var A7m="E8a",I9C="w8a",H2d="underlayPercentage",w6C="J8a",B3Z="T8a",X2l="t8a",B44="S0a",J0p="F0a",quotes=chart[s0Z];chart[F3l]=0;for(var i=0;x8A[J0p](i,chart[r7l]);i++){var prices=quotes[i];if(x8A[B44](prices,null))continue;if(x8A[X2l](prices[C1D],chart[F3l]))chart[F3l]=prices[(C1D)];}
if(x8A[B3Z](chart[F3l],0)){this[F4S]((x8A.J5m+J5d),"center","bottom",this[q04]("Volume Not Available"));return ;}
var context=this[i8C][(x8A.d5Z+F4D+x8A.n9S+m5Z+w9D)],c=chart[K5D],b=Math[F2S](c[n1p][f3T])+.5,t=Math[F2S](c.yAxis.top)+.5,h=x8A[w6C]((b-t),this[H2d]),negativeOffset=x8A[I9C]((this[E4D]-this[(v4S+o4D+x8A.n9S)][r1d]),2),quotes=chart[s0Z],bordersOn=(!STX[T4l](this[r2G]("stx_volume_underlay_up")["borderLeftColor"])&&!STX[T4l](this[r2G]("stx_volume_underlay_down")["borderLeftColor"])),self=this;function drawBars(directionClass,borders){var N6G="8a",M2C="g8a",f7Z="e8a",Q4T="vC",S3T="iqP",E8Z="f8a",i4D="v8a",u5d="lay_u",K9m="ume_u",R9l="vol",W9m="X8a",A4T="B8a",L1d="O8a",B5d="R8a",m7G="P8a",c9l="rL",h8l="bord",borderColor=self[r2G](directionClass)[(h8l+m5Z+c9l+m5Z+Q9D+J6C+v4S+A3D)];self[M7Z](directionClass);if(STX[K2m])context.globalAlpha=.5;context.beginPath();var prevTop=b+.5,farLeft=(bordersOn?.5:0),prevRight=farLeft;for(var i=0;x8A[m7G](i,quotes.length);i++){var quote=quotes[i];if(x8A[B5d](quote,null)){prevTop=b;prevRight+=self[T2T][r1d];continue;}
var y=x8A[L1d](quote[C1D],(h/chart[F3l])),top=Math[e1Z](Math[F2S]((x8A[A4T](b,h))+(x8A[(Q2G+D4Z)](h,y)))+.5,b);if(x8A[W9m](directionClass,(M7S+x8A.n9S+O4T+B0S+R9l+K9m+N1m+m5Z+x8A.c7S+u5d+c6S))){if(x8A[i4D](quote[Y6C],quote[b7p])){prevTop=top;prevRight+=self[T2T][r1d];continue;}
}
else{if(x8A[E8Z](quote[Y6C],quote[(S3T+x8A.c7S+m5Z+Q4T+v4S+p1D+m5Z)])){prevTop=top;prevRight+=self[T2T][r1d];continue;}
}
if(bordersOn){var x0=Math[F2S](prevRight+Math[F2S](negativeOffset))+.5,x1=Math[F2S](prevRight+self[T2T][(B6C+W04+g1G+t6l+x8A.n9S+g2S)]+Math[F2S](negativeOffset))+.5;x0=Math[H0S](x0,farLeft);}
else{var x0=Math[(T5D+B4S+B4S+x8A.c7S)](x8A[f7Z](i,self[T2T][r1d])),x1=x0+self[E4D];}
context.moveTo(x0+.5,b);context.lineTo(x1,b);context.lineTo(x1,top);context.lineTo(x0,top);if(borders){if(x8A[M2C](prevTop,top)||x8A[(F8Z+N6G)](i,0))context.lineTo(x0,prevTop);}
else{context.lineTo(x0,b);}
prevTop=top;prevRight+=self[T2T][r1d];}
if(!borders)context.fill();context.strokeStyle=borderColor;if(borders)context.stroke();context.closePath();}
drawBars("stx_volume_underlay_up",false);drawBars("stx_volume_underlay_down",false);if(x8A[A7m](this[T2T][r1d],3)&&bordersOn){drawBars("stx_volume_underlay_up",true);drawBars("stx_volume_underlay_down",true);}
context.globalAlpha=1;}
;STXChart.prototype.startClip=function(panel){var L2S="U8a";if(!panel)panel=i8C;var c=this[j8m][panel];this[i8C][b6D].save();this[i8C][b6D].beginPath();this[i8C][b6D].rect(0,c.top,this[i8C].width,x8A[L2S](c[f3T],c.top));this[i8C][b6D].clip();}
;STXChart.prototype.endClip=function(){this[i8C][b6D].restore();}
;STXChart.prototype.drawCandlesHighPerformance=function(chart,fillColor,borderColor,condition){var O1d="3a",b5l="s3a",W7d="V3a",G8d="D3a",f4d="h3a",B5D="l3a",W4d="c3a",G6S="k3a",y04="Y3a",z4p="Z3a",b9C="j3a",Y1C="iplie",v7C="mult",u0l="H1a",M8S="romPr",D8S="y1a",X9l="semi",r5D="b1a",M3m="heLef",r1S="I1a",t3m="L1a",P3T="p1a",M1T="N1a",e74="r1a",Q7l="evC",g94="G1a",F9l="EUP",J2D="LOS",a1C="o1a",e1G="Q1a",S2h="z1a",K64="u1a",d2m="q1a",D9G="d1a",m2l="oje",q9l="m1a",p6m="a1a",W8d="A1a",quotes=chart[s0Z],context=this[i8C][b6D],panel=chart[K5D],t=panel.yAxis.top,b=panel[n1p][f3T],top,bottom,length,borderOffset=0;if(!STX[T4l](borderColor))borderOffset=.5;var leftTick=x8A[W8d](chart[O9p].length,chart[z44]),rightTick=leftTick+chart[r7l];context.beginPath();context.fillStyle=fillColor;var yAxis=panel[n1p];for(var x=0;x8A[p6m](x,quotes.length);x++){var quote=quotes[x];if(x8A[q9l](quote,null))continue;if(quote[(t3l+m2l+x8A.d5Z+A4S+F4D)])continue;if(x8A[D9G](quote[x04],quote[Y6C]))continue;if(x8A[d2m](condition,STXChart[B6G])&&x8A[K64](quote[x04],quote[Y6C]))continue;if(x8A[S2h](condition,STXChart[p64])&&x8A[e1G](quote[x04],quote[Y6C]))continue;if(x8A[a1C](condition,STXChart[(x8A.s0m+J2D+F9l)])&&x8A[g94](quote[Y6C],quote[(q0T+p6S+c3Z+x8A.c7S+Q7l+G0T+r1Z)]))continue;if(x8A[e74](condition,STXChart[a6G])&&x8A[M1T](quote[Y6C],quote[b7p]))continue;if(x8A[P3T](condition,STXChart[N2p])&&x8A[t3m](quote[Y6C],quote[b7p]))continue;if(quote.transform)quote=quote.transform;var cache=quote[d6S],tick=leftTick+x;if(x8A[r1S](tick,panel[(x8A.d5Z+D4Z+x8A.d5Z+M3m+x8A.n9S)])||x8A[r5D](tick,panel[b0V])||!cache[s8d]){var o=(yAxis[(X9l+G5G+Z8T)]?this[b5p](quote[x04],panel):(x8A[D8S]((yAxis[B7l]-quote[(W1Z+s1p)]),yAxis[t4Z]))+yAxis.top),c=(yAxis[i6d]?this[(c6S+q0T+O4T+N5D+C7Z+M8S+O2C)](quote[Y6C],panel):(x8A[u0l]((yAxis[B7l]-quote[Y6C]),yAxis[(v7C+Y1C+x8A.c7S)]))+yAxis.top);top=Math[F2S](Math[e1Z](o,c))+borderOffset;bottom=Math[H0S](o,c);length=Math[F2S](x8A[b9C](bottom,top));if(x8A[z4p](top,t)){if(x8A[(y04)](top+length,t)){cache[s8d]=top;cache[R5S]=top;continue;}
length-=x8A[G6S](t,top);top=t;}
if(x8A[W4d](top+length,b)){length-=(top+length-b);}
length=Math[H0S](length,2);cache[s8d]=top;cache[R5S]=cache[s8d]+length;}
if(x8A[B5D](cache[s8d],b))continue;if(x8A[f4d](cache[R5S],t))continue;var x0=Math[F2S](x8A[G8d](x,this[T2T][(B6C+W04+P2S+x8A.n9S+g2S)]))+borderOffset,x1=x0+this[E4D]-(x8A[W7d](borderOffset,2));if(x8A[b5l](quote[x04],quote[(W7C+e8Z)])){top=x8A[(T4S+O1d)](Math[J8C](cache[s8d]),borderOffset);context.moveTo(x0,top);context.lineTo(x1,top);}
else{context.moveTo(x0,cache[(B4S+s1p)]);context.lineTo(x1,cache[s8d]);context.lineTo(x1,cache[R5S]);context.lineTo(x0,cache[R5S]);context.lineTo(x0,cache[s8d]);}
}
context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
context.closePath();}
;STXChart.prototype.drawCandles=function(chart,colorFunction,isOutline){var y9G="M9a",b3Z="g9a",r4p="e9a",x4S="f9a",G2G="v9a",F6D="X9a",H4G="i9",S8S="B9a",H2m="O9a",p6C="R9a",V8D="P9a",t1l="w9a",j5d="J9a",J1d="T9a",Y3d="t9a",l4G="S3a",K9T="F3a",g7p="W3a",a9l="C3a",Y6d="x3a",G2Z="ataS",g9S="K3a",quotes=chart[s0Z],context=this[(x8A.d5Z+g2S+S4S)][b6D],panel=chart[K5D],t=panel.yAxis.top,b=panel[n1p][f3T],top,bottom,length,borderColor="transparent",fillColor="transparent",borderOffset=0,leftTick=x8A[g9S](chart[(W4Z+G2Z+m5Z+x8A.n9S)].length,chart[z44]),rightTick=leftTick+chart[r7l],yAxis=panel[n1p];for(var x=0;x8A[Y6d](x,quotes.length);x++){context.beginPath();var quote=quotes[x];if(x8A[a9l](quote,null))continue;if(quote[I5T])continue;if(!quote[x04]&&x8A[g7p](quote[(x04)],0))continue;if(x8A[K9T](quote[x04],quote[Y6C]))continue;var myColor=colorFunction(this,quote,isOutline?"outline":"solid");if(!myColor)continue;if(isOutline)borderColor=myColor;else fillColor=myColor;context.fillStyle=fillColor;if(!STX[T4l](borderColor))borderOffset=.5;if(quote.transform)quote=quote.transform;var cache=quote[d6S],tick=leftTick+x;if(x8A[l4G](tick,panel[s5C])||x8A[Y3d](tick,panel[b0V])||!cache[s8d]){var o=(yAxis[i6d]?this[b5p](quote[x04],panel):(x8A[J1d]((yAxis[(Q8G+f4m)]-quote[x04]),yAxis[t4Z]))+yAxis.top),c=(yAxis[i6d]?this[b5p](quote[Y6C],panel):(x8A[j5d]((yAxis[B7l]-quote[Y6C]),yAxis[t4Z]))+yAxis.top);top=Math[F2S](Math[e1Z](o,c))+borderOffset;bottom=Math[H0S](o,c);length=Math[F2S](x8A[t1l](bottom,top));if(x8A[V8D](top,t)){if(x8A[p6C](top+length,t)){cache[s8d]=top;cache[R5S]=top;continue;}
length-=x8A[H2m](t,top);top=t;}
if(x8A[S8S](top+length,b)){length-=(top+length-b);}
length=Math[H0S](length,2);cache[s8d]=top;cache[R5S]=cache[s8d]+length;}
if(x8A[(H4G+D4Z)](cache[(e4D+m5Z+T4S)],b))continue;if(x8A[F6D](cache[R5S],t))continue;var x0=Math[F2S](x8A[G2G](x,this[T2T][r1d]))+borderOffset,x1=x0+this[E4D]-(x8A[x4S](borderOffset,2));if(x8A[r4p](quote[x04],quote[Y6C])){top=x8A[b3Z](Math[J8C](cache[s8d]),borderOffset);context.moveTo(x0,top);context.lineTo(x1,top);}
else{context.moveTo(x0,cache[(B4S+c6S+j1D)]);context.lineTo(x1,cache[s8d]);context.lineTo(x1,cache[(a9C+p1D+m5Z)]);context.lineTo(x0,cache[R5S]);context.lineTo(x0,cache[(e4D+m5Z+T4S)]);}
if(x8A[y9G](fillColor,"transparent"))context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
}
;STXChart.prototype.drawShadowsHighPerformance=function(chart,style,condition){var E14="n6a",w1G="s6a",c0D="V6a",U6m="D6a",z4D="h6a",T5Z="c6a",v9D="k6a",C7d="Y6a",w6Z="Z6a",G7S="j6a",c2C="H7a",d7C="y7a",G6G="b7a",H8C="I7a",p44="L7a",K0p="p7a",S4C="N7a",H4D="r7a",R7d="G7a",N9m="o7a",N3p="Q7a",G7G="z7a",r4S="SEUP",u1D="CLO",d6D="u7a",F4T="q7a",P0Z="d7a",t9d="m7a",w54="a7a",g6l="A7a",u7Z="U9a",s8p="E9a",quotes=chart[s0Z],context=this[i8C][b6D],panel=chart[K5D];context.lineWidth=1;var t=panel.yAxis.top,b=panel[n1p][f3T],top,bottom,left,leftTick=x8A[s8p](chart[O9p].length,chart[z44]),rightTick=leftTick+chart[r7l];context.beginPath();var yAxis=panel[n1p];for(var x=0;x8A[u7Z](x,quotes.length);x++){var quote=quotes[x];if(x8A[g6l](quote,null))continue;if(quote[I5T])continue;if(condition){if(x8A[w54](condition,STXChart[B6G])&&x8A[t9d](quote[x04],quote[Y6C]))continue;else if(x8A[P0Z](condition,STXChart[p64])&&x8A[F4T](quote[x04],quote[Y6C]))continue;else if(x8A[d6D](condition,STXChart[(u1D+r4S)])&&x8A[G7G](quote[Y6C],quote[b7p]))continue;else if(x8A[N3p](condition,STXChart[a6G])&&x8A[N9m](quote[Y6C],quote[b7p]))continue;else if(x8A[R7d](condition,STXChart[N2p])&&x8A[H4D](quote[Y6C],quote[b7p]))continue;}
if(quote.transform)quote=quote.transform;var cache=quote[d6S],tick=leftTick+x;if(x8A[S4C](tick,panel[s5C])||x8A[K0p](tick,panel[b0V])||!cache.top){top=(yAxis[i6d]?this[b5p](quote[m1Z],panel):(x8A[p44]((yAxis[B7l]-quote[m1Z]),yAxis[t4Z]))+yAxis.top);bottom=(yAxis[i6d]?this[b5p](quote[l8p],panel):(x8A[H8C]((yAxis[B7l]-quote[(C9Z+B4S+f4T)]),yAxis[t4Z]))+yAxis.top);var length=x8A[G6G](bottom,top);if(x8A[d7C](top,t)){if(x8A[c2C](top+length,t)){cache.top=top;cache[f3T]=top;continue;}
length-=x8A[G7S](t,top);top=t;}
if(x8A[w6Z](top+length,b)){length-=(top+length-b);}
cache.top=top;cache[f3T]=cache.top+length;}
if(x8A[C7d](cache.top,b))continue;if(x8A[v9D](cache[f3T],t))continue;var xx=Math[F2S](Math[(z9D+A3D)](x8A[T5Z](x,this[(f84+V94)][r1d]))+(x8A[(J2Z+D4Z)](this[E4D],2)))+.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache[f3T]);if(x8A[z4D](quote[x04],quote[Y6C])){var x0=x8A[U6m](xx,this[J2G]),x1=xx+this[J2G],o=(yAxis[i6d]?this[b5p](quote[x04],panel):(x8A[c0D]((yAxis[B7l]-quote[x04]),yAxis[t4Z]))+yAxis.top);if(x8A[w1G](o,b)&&x8A[E14](o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
}
this[M7Z](style);context.stroke();context.closePath();}
;STXChart.prototype.drawShadows=function(chart,colorFunction){var s8T="4a",P4T="M4a",D4D="g4a",p5D="e4a",M5G="f4a",m8S="v4a",V9d="X4a",T0m="i4a",Z9G="B4a",A1m="O4a",u9m="R4a",T8T="P4a",U84="w4a",U3D="T4a",A94="t4a",F2Z="S6a",h6C="emi",n1C="F6a",e0l="W6a",Q8m="C6a",F7S="x6a",M54="K6a",quotes=chart[s0Z],context=this[i8C][b6D],panel=chart[K5D];context.lineWidth=1;var t=panel.yAxis.top,b=panel[n1p][f3T],top,bottom,left,leftTick=x8A[M54](chart[O9p].length,chart[z44]),rightTick=leftTick+chart[r7l],yAxis=panel[n1p];for(var x=0;x8A[F7S](x,quotes.length);x++){context.beginPath();var quote=quotes[x];if(x8A[Q8m](quote,null))continue;if(quote[I5T])continue;var color=colorFunction(this,quote,"shadow");if(!color)continue;if(quote.transform)quote=quote.transform;var cache=quote[d6S],tick=leftTick+x;if(x8A[e0l](tick,panel[s5C])||x8A[n1C](tick,panel[b0V])||!cache.top){top=(yAxis[(M7S+h6C+C9Z+B4S+Z8T)]?this[b5p](quote[m1Z],panel):(x8A[F2Z]((yAxis[(g2S+G6l+g2S)]-quote[m1Z]),yAxis[t4Z]))+yAxis.top);bottom=(yAxis[i6d]?this[b5p](quote[l8p],panel):(x8A[A94]((yAxis[B7l]-quote[l8p]),yAxis[t4Z]))+yAxis.top);var length=x8A[U3D](bottom,top);if(x8A[(M0C+D4Z)](top,t)){if(x8A[U84](top+length,t)){cache.top=top;cache[f3T]=top;continue;}
length-=x8A[T8T](t,top);top=t;}
if(x8A[u9m](top+length,b)){length-=(top+length-b);}
cache.top=top;cache[f3T]=cache.top+length;}
if(x8A[A1m](cache.top,b))continue;if(x8A[Z9G](cache[f3T],t))continue;var xx=Math[F2S](Math[F2S](x8A[T0m](x,this[T2T][r1d]))+(x8A[V9d](this[E4D],2)))+.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache[f3T]);if(x8A[m8S](quote[(W1Z+s1p)],quote[(x8A.s0m+G0T+M7S+m5Z)])||(!quote[x04]&&x8A[M5G](quote[x04],0))){var x0=x8A[p5D](xx,this[J2G]),x1=xx+this[J2G],o=Math[F2S]((yAxis[i6d]?this[b5p](quote[Y6C],panel):(x8A[D4D]((yAxis[(Q8G+f4m)]-quote[Y6C]),yAxis[t4Z]))+yAxis.top))+.5;if(x8A[P4T](o,b)&&x8A[(c7Z+s8T)](o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
context.strokeStyle=color;context.stroke();}
}
;STXChart.prototype.scatter=function(chart){var r2C="z5a",n8C="u5a",z4d="q5a",I84="d5a",U9p="Scatter",f5D="a5a",R7p="A5a",q3l="U4a",quotes=chart[s0Z],context=this[i8C][b6D];context.beginPath();context.lineWidth=4;var t=chart.panel.yAxis.top,b=chart[K5D][n1p][(Y4Z+B4S+x8A.n9S+a0T+w5S)];for(var x=0;x8A[q3l](x,quotes.length);x++){var quote=quotes[x];if(x8A[R7p](quote,null))continue;if(!quote[(c6S+w0V+n5S+m5Z+x8A.d5Z+x8A.n9S+g2d+T4S)]){if(quote.transform)quote=quote.transform;var scatter=[quote[Y6C]];if(x8A[f5D]("Scatter",quote))scatter=quote[U9p];for(var i=0;x8A[(T1T+D4Z)](i,scatter.length);i++){var top=this[b5p](scatter[i],chart[K5D]);if(x8A[I84](top,t))continue;if(x8A[z4d](top,b))continue;var xx=x8A[n8C](x,this[T2T][r1d]),xxo=xx+this[J2G];context.moveTo(x8A[r2C](xxo,2),top);context.lineTo(xxo+2,top);}
}
}
this[M7Z]("stx_scatter_chart");context.stroke();context.closePath();}
;STXChart.prototype.drawBarChartHighPerformance=function(chart,style,condition){var L6d="2a",T14="W2a",A0d="C2a",C4C="x2a",p5l="n2a",m4S="s2a",o6d="V2a",A1Z="D2a",w1S="h2a",b4D="l2a",V3D="c2a",S8Z="k2a",S1p="Y2a",L2p="Z2a",I2D="j2a",C5S="H5a",y7D="y5a",W3S="b5a",D6D="I5a",r2d="L5a",T5m="p5a",B2D="N5a",A2Z="5a",j9T="o5a",M3S="Q5a",quotes=chart[s0Z],panel=chart[K5D],context=chart[b6D];context.beginPath();context.lineWidth=1;var t=panel.yAxis.top,b=panel[n1p][f3T],top,bottom,length,leftTick=x8A[M3S](chart[O9p].length,chart[z44]),rightTick=leftTick+chart[r7l],yAxis=panel[n1p];for(var x=0;x8A[j9T](x,quotes.length);x++){var quote=quotes[x];if(x8A[(R6Z+A2Z)](quote,null))continue;if(quote[I5T])break;if(condition){if(x8A[(x8A.c7S+A2Z)](condition,STXChart[F2l])&&x8A[B2D](quote[Y6C],quote[b7p]))continue;else if(x8A[T5m](condition,STXChart[a6G])&&x8A[r2d](quote[Y6C],quote[b7p]))continue;else if(x8A[(D6D)](condition,STXChart[N2p])&&x8A[(W3S)](quote[(x8A.s0m+v4S+B4S+M7S+m5Z)],quote[b7p]))continue;}
if(quote.transform)quote=quote.transform;var cache=quote[d6S],tick=leftTick+x;if(x8A[y7D](tick,panel[s5C])||x8A[C5S](tick,panel[b0V])||!cache.top){top=(yAxis[i6d]?this[b5p](quote[m1Z],panel):(x8A[I2D]((yAxis[(B7l)]-quote[m1Z]),yAxis[t4Z]))+yAxis.top);bottom=(yAxis[i6d]?this[b5p](quote[l8p],panel):(x8A[L2p]((yAxis[(g2S+q0T+f4m)]-quote[l8p]),yAxis[t4Z]))+yAxis.top);var length=x8A[S1p](bottom,top);cache[s8d]=(yAxis[i6d]?this[b5p](quote[x04],panel):(x8A[S8Z]((yAxis[B7l]-quote[x04]),yAxis[t4Z]))+yAxis.top);cache[R5S]=(yAxis[i6d]?this[b5p](quote[Y6C],panel):(x8A[V3D]((yAxis[B7l]-quote[Y6C]),yAxis[t4Z]))+yAxis.top);if(x8A[b4D](top,t)){if(x8A[w1S](top+length,t)){cache.top=top;cache[f3T]=top;continue;}
length-=x8A[A1Z](t,top);top=t;}
if(x8A[o6d](top+length,b)){length-=(top+length-b);}
cache.top=top;cache[f3T]=top+length;}
var xx=x8A[m4S](x,this[T2T][r1d]),xxo=xx+this[J2G];if(x8A[p5l](cache.top,b)&&x8A[(p8d+D4Z)](cache[f3T],t)){var xx2=Math[J8C](xxo)+.5;context.moveTo(xx2,cache.top);context.lineTo(xx2,cache[f3T]);}
if(x8A[C4C](cache[s8d],t)&&x8A[A0d](cache[(s8d)],b)){context.moveTo(xx,cache[s8d]);context.lineTo(xxo,cache[s8d]);}
if(x8A[T14](cache[R5S],t)&&x8A[(C7Z+L6d)](cache[R5S],b)){context.moveTo(xxo,cache[R5S]);context.lineTo(xxo+this[J2G],cache[R5S]);}
}
this[M7Z](style);context.stroke();context.closePath();}
;STXChart.prototype.drawBarChart=function(chart,colorFunction){var E04="a8R",o9C="A8R",C4T="U0R",v84="E0R",A3l="M0R",L3C="g0R",g1S="e0R",m3T="f0R",b5m="v0R",G2p="X0R",Q2C="i0R",e9Z="ipl",l4m="mul",K2S="B0R",p3T="ier",N8m="mu",m5d="O0R",c94="Log",I2l="R0R",D7D="P0R",q4Z="w0R",J0C="J0R",t5Z="T0R",r4C="t0R",R7D="S2a",quotes=chart[s0Z],panel=chart[K5D],context=chart[b6D];context.lineWidth=1;var t=panel.yAxis.top,b=panel[n1p][f3T],top,bottom,length,leftTick=x8A[R7D](chart[O9p].length,chart[z44]),rightTick=leftTick+chart[r7l],yAxis=panel[n1p],colors={}
;for(var x=0;x8A[r4C](x,quotes.length);x++){var quote=quotes[x];if(x8A[t5Z](quote,null))continue;if(quote[I5T])break;var color=colorFunction(this,quote);if(x8A[J0C](color,null))continue;colors[color]=1;context.strokeStyle=color;context.beginPath();if(quote.transform)quote=quote.transform;var cache=quote[d6S],tick=leftTick+x;if(x8A[q4Z](tick,panel[s5C])||x8A[D7D](tick,panel[b0V])||!cache.top){top=this[b5p](quote[m1Z],panel);bottom=this[b5p](quote[l8p],panel);var length=x8A[(I2l)](bottom,top);cache[s8d]=(yAxis[(M7S+m5Z+w5S+q0T+c94)]?this[b5p](quote[x04],panel):(x8A[m5d]((yAxis[B7l]-quote[x04]),yAxis[(N8m+v4S+x8A.n9S+q0T+c6S+v4S+p3T)]))+yAxis.top);cache[R5S]=(yAxis[i6d]?this[b5p](quote[(x8A.s0m+G0T+M7S+m5Z)],panel):(x8A[K2S]((yAxis[B7l]-quote[Y6C]),yAxis[(l4m+x8A.n9S+e9Z+q0T+m5Z+x8A.c7S)]))+yAxis.top);if(x8A[Q2C](top,t)){if(x8A[G2p](top+length,t)){cache.top=top;cache[(Y4Z+B4S+l44+w5S)]=top;continue;}
length-=x8A[b5m](t,top);top=t;}
if(x8A[m3T](top+length,b)){length-=(top+length-b);}
cache.top=top;cache[f3T]=top+length;}
var xx=x8A[g1S](x,this[T2T][r1d]),xxo=xx+this[J2G];if(x8A[L3C](cache.top,b)&&x8A[A3l](cache[f3T],t)){var xx2=Math[J8C](xxo)+.5;context.moveTo(xx2,cache.top);context.lineTo(xx2,cache[f3T]);}
if(x8A[v84](cache[(B4S+c6S+j1D)],t)&&x8A[C4T](cache[s8d],b)){context.moveTo(xx,cache[s8d]);context.lineTo(xxo,cache[s8d]);}
if(x8A[o9C](cache[R5S],t)&&x8A[E04](cache[R5S],b)){context.moveTo(xxo,cache[R5S]);context.lineTo(xxo+this[J2G],cache[R5S]);}
context.stroke();}
return colors;}
;STXChart.prototype.plotLineChart=function(panel,quotes,field,parameters,colorFunction){var c9d="labelDecimalPlaces",d0V="sP",V3G="Z1R",a9S="label",n7d="H8R",x1d="y8R",h2D="b8R",f3l="I8R",t04="L8R",l1p="p8R",U3S="N8R",p9G="r8R",x7T="G8R",e7m="o8R",Q74="Q8R",k64="z8R",I5m="u8R",Q14="q8R",H0V="d8R",C0V="m8R",I7m="noSlopes",v34="ons",c6D="oj",L9S="skip",skipProjections=false,skipTransform=false,noSlopes=false;if(parameters){skipProjections=parameters[(L9S+g7S+c6D+m5Z+x8A.d5Z+A4S+v34)];skipTransform=parameters[q5p];noSlopes=parameters[I7m];}
var chart=panel[i8C],context=this[i8C][b6D],first=true,yAxis=panel[n1p],t=yAxis.top,b=yAxis[f3T],leftTick=x8A[C0V](chart[O9p].length,chart[z44]),rightTick=leftTick+chart[r7l],lastVal=null,colors={}
,lastXY=[0,0],clipping=false;context.beginPath();for(var i=0;x8A[H0V](i,quotes.length);i++){var quote=quotes[i];if(x8A[Q14](quote,null))continue;if(skipProjections&&quote[I5T])break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote[d6S],tick=leftTick+i;if(!quote[field]&&x8A[I5m](quote[field],0))continue;lastVal=quote[field];if(x8A[k64](tick,panel[s5C])||x8A[Q74](tick,panel[b0V])||!cache[field]){cache[field]=(yAxis[i6d]?this[b5p](lastVal,panel):(x8A[e7m]((yAxis[B7l]-lastVal),yAxis[t4Z]))+yAxis.top);}
var x=x8A[x7T](i,this[T2T][r1d])+this[J2G];if(x8A[p9G](i,0)){if(this[u1p])x=0;}
else if(this[u1p]&&x8A[U3S](i,quotes.length-1)){x+=this[J2G];}
var y=cache[field];if(colorFunction){var color=colorFunction(this,quote);if(!color)continue;if(x8A[l1p](context.strokeStyle,color)){if(!first){context.stroke();context.beginPath();context.moveTo(lastXY[0],lastXY[1]);}
context.strokeStyle=color;colors[color]=1;}
}
if(!clipping&&(x8A[t04](y,t)||x8A[f3l](y,b))){clipping=true;if(!first){context.stroke();}
context.save();context.beginPath();context.rect(this[i8C][w1T],t,this[i8C].width,x8A[h2D](b,t));context.clip();context.beginPath();if(!first)context.moveTo(lastXY[0],lastXY[1]);}
lastXY=[x,y];if(first){first=false;context.moveTo(x,y);}
else{if(noSlopes){var quote1=quotes[x8A[x1d](i,1)];if(x8A[n7d](quote1,null))continue;if(!skipTransform&&quote1.transform)quote1=quote1.transform;if(i&&x8A[(n5S+H9p+r0Z)](y,quote1[d6S][field])){context.moveTo(x,y);}
else{context.lineTo(x,y);}
}
else{context.lineTo(x,y);}
}
}
context.stroke();if(clipping)context.restore();if(parameters[a9S]&&x8A[V3G](lastVal,null)){var txt;if(yAxis[I5D]){txt=yAxis[I5D](this,panel,lastVal);}
else{txt=this[(m1D+A6m+n8S+x8A.X8m+m0G+d0V+E0d+T7C)](lastVal,panel,parameters[c9d]);}
this[z0D](panel,txt,y,context.strokeStyle,"#FFFFFF");}
return colors;}
;STXChart.prototype.plotMountainChart=function(panel,quotes,field,parameters){var a34="F1R",r8l="W1R",M8D="C1R",C6S="x1R",U9T="K1R",y5d="n1R",D8m="s1R",W5l="V1R",t2S="D1R",L84="h1R",r2D="l1R",a8G="c1R",f8m="k1R",n3Z="Y1R",U3Z="skipProjections",skipProjections=false,skipTransform=false;if(parameters){skipProjections=parameters[U3Z];skipTransform=parameters[q5p];}
var chart=panel[i8C],context=this[i8C][b6D],first=true,t=panel.yAxis.top,b=panel[n1p][f3T];context.save();context.beginPath();context.rect(0,t,this[i8C].width,x8A[n3Z](b,t));context.clip();context.beginPath();var leftTick=x8A[f8m](chart[O9p].length,chart[(J0Z+x8A.c7S+B4S+v4S+v4S)]),rightTick=leftTick+chart[(p54+O4T+c8l+G9C+M7S)],firstX=null,firstY=null,strokeStyle=context.strokeStyle,yAxis=panel[n1p];for(var i=0;x8A[a8G](i,quotes.length);i++){var quote=quotes[i];if(x8A[r2D](quote,null))continue;if(skipProjections&&quote[I5T])break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote[d6S],tick=leftTick+i;if(x8A[L84](tick,panel[s5C])||x8A[t2S](tick,panel[b0V])||!cache[field]){if(!quote[field]&&x8A[W5l](quote[field],0))continue;cache[field]=(yAxis[i6d]?this[b5p](quote[field],panel):(x8A[D8m]((yAxis[B7l]-quote[field]),yAxis[t4Z]))+yAxis.top);}
var x=x8A[y5d](i,this[T2T][r1d])+this[J2G];if(x8A[U9T](i,0)){x=0;}
else if(this[u1p]&&x8A[C6S](i,quotes.length-1)){x+=this[J2G];}
if(x8A[M8D](firstX,null))firstX=x;var y=cache[field];if(x8A[r8l](firstY,null))firstY=y;if(first){first=false;context.moveTo(x,y);}
else{context.lineTo(x,y);}
}
context.lineTo(x,b);context.lineTo(firstX,b);if(x8A[a34](firstY,b))firstY=b;context.lineTo(firstX,firstY);context.fill();context.closePath();context.restore();}
;STXChart.prototype.drawLineChart=function(chart,style,colorFunction){var U8D="plotLineChart",G24="S1R",context=this[i8C][b6D],c=this[r2G](style);if(c.width&&x8A[G24](parseInt(c.width,10),25)){context.lineWidth=Math[H0S](1,STX[u5Z](c.width));}
else{context.lineWidth=1;}
this[M7Z](style);return this[U8D](chart[K5D],chart[s0Z],"Close",{skipProjections:true}
,colorFunction);}
;STXChart.prototype.drawMountainChart=function(chart){var C6l="lot",x9G="J3R",Q0G="egment",j2G="plotMountainChart",N7l="T3R",H3S="t3R",context=this[(i8C)][b6D],c=this[r2G]("stx_mountain_chart");if(c.width&&x8A[H3S](parseInt(c.width,10),25)){context.lineWidth=Math[H0S](1,STX[u5Z](c.width));}
else{context.lineWidth=1;}
var panel=this[i8C][K5D],top=this[b5p](this[i8C][Z3C],panel);if(isNaN(top))top=0;var backgroundColor=c["backgroundColor"],color=c["color"];if(color&&x8A[N7l](color,"transparent")){var gradient=context.createLinearGradient(0,top,0,panel[n1p][f3T]);gradient.addColorStop(0,backgroundColor);gradient.addColorStop(1,color);context.fillStyle=gradient;}
else{context.fillStyle=backgroundColor;}
this[j2G](panel,chart[(W4Z+a5Z+d8Z+Q0G)],"Close",{skipProjections:true}
);var strokeStyle=c["borderTopColor"];if(strokeStyle&&x8A[x9G](strokeStyle,"transparent")){context.strokeStyle=strokeStyle;this[(c6S+C6l+E4T+x8A.s0m+g2S+x8Z+x8A.n9S)](panel,chart[s0Z],"Close",{skipProjections:true}
);}
}
;STXChart.prototype.drawWaveChart=function(chart){var v8m="z9R",h1G="u9R",E7p="q9R",f7C="d9R",U6D="m9R",f9p="a9R",i2G="A9R",X8p="U3R",W3D="E3R",L0Z="M3R",P0m="g3R",q6G="e3R",u5C="f3R",W2C="v3R",r8C="X3R",e7S="i3R",l3D="B3R",b84="O3R",P9G="R3R",P74="ojec",H2T="P3R",C9m="w3R",quotes=chart[s0Z],panel=chart[K5D],context=this[i8C][b6D];context.beginPath();var first=false,reset=false,t=panel.yAxis.top,b=panel[n1p][f3T];for(var i=0;x8A[C9m](i,quotes.length);i++){var quote=quotes[i];if(x8A[H2T](quote,null))continue;if(quote[(c6S+x8A.c7S+P74+D7p)])break;if(quote.transform)quote=quote.transform;var x=x8A[P9G](i,this[T2T][r1d])+this[J2G],y=this[b5p](quote[x04],panel);if(x8A[b84](y,t)){y=t;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(x8A[l3D](y,b)){y=b;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!first){first=true;context.moveTo(x,y);}
else{context.lineTo(x,y);}
x+=x8A[e7S](this[(v4S+D4Z+n2d+p9S+x8A.n9S)][r1d],4);if(x8A[r8C](quote[x04],quote[Y6C])){y=this[b5p](quote[l8p],panel);if(x8A[W2C](y,t))y=t;if(x8A[u5C](y,b))y=b;context.lineTo(x,y);x+=x8A[q6G](this[T2T][r1d],4);y=this[b5p](quote[m1Z],panel);if(x8A[P0m](y,t))y=t;if(x8A[L0Z](y,b))y=b;context.lineTo(x,y);}
else{y=this[b5p](quote[m1Z],panel);if(x8A[W3D](y,t))y=t;if(x8A[X8p](y,b))y=b;context.lineTo(x,y);x+=x8A[i2G](this[T2T][r1d],4);y=this[b5p](quote[l8p],panel);if(x8A[f9p](y,t))y=t;if(x8A[U6D](y,b))y=b;context.lineTo(x,y);}
x+=x8A[f7C](this[T2T][r1d],4);y=this[b5p](quote[Y6C],panel);if(x8A[E7p](y,t))y=t;if(x8A[h1G](y,b))y=b;context.lineTo(x,y);}
var c=this[r2G]("stx_line_chart");if(c.width&&x8A[v8m](parseInt(c.width,10),25)){context.lineWidth=Math[H0S](1,STX[u5Z](c.width));}
else{context.lineWidth=1;}
this[M7Z]("stx_line_chart");context.stroke();context.closePath();}
;STXChart.prototype.updateFloatHRLabel=function(panel,y,txt){var I0C="atHR",l8Z="getElementsByTagName",J8G="o9R",v6d="arC",q1l="Q9R",canvas=this[i6Z][a3m][D2S][0],context=canvas[b6D]=canvas[J4T]('2d'),margin=3,height=this[D6C]("stx_yaxis")+x8A[q1l](margin,2);this[W4G]("stx_yaxis",context);if(!canvas[v0D])STX[(x8A.d5Z+C9S+v6d+a0Z+U4T+D4Z+M7S)](canvas,this);try{var width=context.measureText(txt).width+x8A[J8G](margin,2);}
catch(e){var P8S="G9R";width=x8A[P8S](this[i8C][i6S],this[B7p]);}
if(!canvas[v0D]){this[M7Z]("stx-float-price-arrow",context);STX[this[F4C]](context,8,0,width,height,3,true,false,"left");canvas[v0D]=true;context.textBaseline="middle";}
if(STX[K2m]){var span=this[i6Z][a3m][l8Z]("SPAN")[0];span.style.top="3px";span[c4l][w1T]="10px";span[c4l][(v6T+N3Z+N1m+m5Z+O4T)]=1;span[H5G]=txt;}
else{this[i6Z][(f0T+v4S+B4S+I0C)][D2S][1][c4l].width=width+"px";this[i6Z][a3m][(G7C+E9l+W4Z+i1Z+U4m+h7D)][1][H5G]=txt;}
}
;STXChart.prototype.headsUpHR=function(){var m2G="ML",P1S="nne",o7d="l7R",H3p="c7R",m4m="k7R",g9l="Y7R",f5C="Z7R",q4T="j7R",t0D="H9R",Q3p="updateFloatHRLabel",Q8d="y9R",K2C="I9R",J6T="eFloatH",K6S="L9R",o1Z="p9R",e4T="N9R",X2T="r9R";if(this[I7S]("headsUpHR",arguments))return ;var panel=this[a2Z];if(!panel)return ;var chart=panel[i8C],cy=this[f7l];if(x8A[X2T](panel[W0d],"vchart")){var y=x8A[e4T](panel[f3T],cy),px=x8A[o1Z](panel[V8Z],panel.height),amount=panel[(e1Z)]+x8A[K6S](y,px);this[(j34+W4Z+D4Z+x8A.n9S+J6T+r0Z+C9Z+R2Z+N5D)](panel,y,STX[l7C](amount));}
else{var price=this[j8G](cy,panel),labelDecimalPlaces=null;if(x8A[K2C](panel[i8C][(W0d)],panel[W0d])){labelDecimalPlaces=0;if(x8A[(Y4Z+G9m+r0Z)](panel[n1p][V8Z],1000))labelDecimalPlaces=2;if(x8A[Q8d](panel[(H6T+R8D+S4d)][V8Z],5))labelDecimalPlaces=4;}
price=this[w44](price,panel,labelDecimalPlaces);this[Q3p](panel,cy,price);}
if(this[i6Z][(z9D+D4Z+x8A.n9S+o0D)]){var bar=this[y0l](this[d2l]),prices=chart[b4Z][bar];if(prices&&prices[(i7Z+s8Z)]){if(chart[Y4S][(a8T+w5S+D4Z+x8A.n9S+x8A.n9S+m5Z+x8A.c7S)]){this[i6Z][w14][H5G]=chart[Y4S][(m1D+d2C+G1Z+x8A.n9S+t9D)](prices[s9l]);}
else if(this[e4G]){var str=this[e4G][z2p][u6C](prices[s9l]);if(x8A[t0D](prices[s9l][x8p](),0)||x8A[q4T](prices[s9l][N6S](),0)||!STXChart[o6S](this[T2T][p0l]))str+=" "+this[e4G][P2p][u6C](prices[s9l]);this[i6Z][w14][H5G]=str;}
else{var m=prices[s9l][U3d]()+1;if(x8A[f5C](m,10))m="0"+m;var d=prices[s9l][q3m]();if(x8A[g9l](d,10))d="0"+d;var h=prices[s9l][x8p]();if(x8A[m4m](h,10))h="0"+h;var mn=prices[s9l][N6S]();if(x8A[H3p](mn,10))mn="0"+mn;if((x8A[o7d](h,(s9p+s9p))&&x8A[(g2S+k1m+r0Z)](mn,(s9p+s9p)))||STXChart[o6S](this[T2T][p0l]))this[i6Z][w14][H5G]=m+"-"+d+"-"+prices[s9l][b94]();else this[i6Z][w14][(q0T+P1S+x8A.c7S+I6Z+s8Z+m2G)]=m+"-"+d+" "+h+":"+mn;}
}
else if(prices&&prices[l74]){this[i6Z][w14][H5G]=prices[l74];}
}
if(this[A3d]("headsUpHR",arguments))return ;}
;STXChart.prototype.setCrosshairColors=function(){var u6T="n7R",N2G="s7R",T4D="V7R";return ;if(this[I7S](M8m,arguments))return ;var newClassName=a0C,oldClassName=(I4Z+O4T+B0S+x8A.d5Z+x8A.c7S+B4S+M7S+v2Z+x8A.c7S+B0S+W4Z+x8A.c7S+D4Z+f4T+q0T+T4S+Z8T);if((STXChart[k6m]||x8A[(i7Z+k1m+r0Z)](this[E1p][U1l],C7T)||x8A[T4D](this[E1p][U1l],w7D)||x8A[N2G](this[(E4l+x8A.c7S+Z4Z+C1S+m5Z+q8C+B4S+x8A.c7S+q1T+x8A.c7S+D4Z+w5S+A7D+t9D+M7S)][U1l],I5T)||x8A[u6T](this[E1p][U1l],W5m))){newClassName=T1D;oldClassName=a0C;}
if(this[i6Z][y5D][u4l][J7G](newClassName)==-x8A.v0Z){STX[R3l](this[(q8p+x8A.n9S+N1G)][y5D],newClassName,oldClassName);STX[R3l](this[i6Z][r4D],newClassName,oldClassName);}
this[A3d](M8m,arguments);}
;STXChart.prototype.magnetize=function(){var R8S="PI",c9T="v6R",e8T="X6R",y94="i6R",u8m="B6R",e4S="O6R",m6Z="R6R",K9d="P6R",p3S="w6R",C3m="J6R",o3m="T6R",J0m="t6R",y2h="S7R",I0G="F7R",d2G="W7R",u04="C7R",P5Z="x7R",o94="K7R",C6D="runP";this[U3m]=null;if(this[(C6D+Q6G+j1D+W4Z)]("magnetize",arguments))return ;if(x8A[o94](this[E1p][U1l],"annotation")&&STXChart[(E4G+D4Z+O1l+T4S+l6G+m5Z)])return ;if(x8A[P5Z](this[E1p][U1l],"projection"))return ;if(x8A[u04](this[E1p][U1l],"freeform"))return ;var panel=this[a2Z];if(x8A[d2G](panel[W0d],panel[i8C][W0d])){var chart=panel[i8C],tick=this[K9S](x8A[I0G](STXChart[F5m],this[i8C][w1T]),chart);if(x8A[y2h](this[T2T][p0l],"minute"))tick/=this[T2T][f9T];if(x8A[J0m](tick,chart[O9p].length))return ;var prices=chart[O9p][tick];if(x8A[o3m](prices,null))return ;var price=this[j8G](this[f7l],panel);this[U3m]=prices[Y6C];if(x8A[C3m](this[T2T][(x8A.d5Z+x8A.w9G+J5d+s8Z+H6T+X0G)],"bar")||x8A[p3S](this[T2T][j6C],"candle")||x8A[K9d](this[T2T][j6C],"colored_bar")||x8A[m6Z](this[T2T][(G7C+S4S+s9D)],"hollow_candle")){var fields=["Open","High","Low","Close"],closest=1000000000;for(var i=0;x8A[e4S](i,fields.length);i++){var fp=prices[fields[i]];if(x8A[u8m](Math[W2S](price-fp),closest)){closest=Math[W2S](x8A[y94](price,fp));this[U3m]=fp;}
}
}
var x=this[r6T](tick,chart),y=this[b5p](this[U3m],this[a2Z]),ctx=this[i8C][U7C][b6D];ctx.beginPath();ctx.lineWidth=1;var radius=x8A[e8T](Math[H0S](this[T2T][r1d],8),2);ctx.arc(x,y,radius,0,x8A[c9T](2,Math[R8S]),false);ctx.fillStyle="#FFFFFF";ctx.strokeStyle="#000000";ctx.fill();ctx.stroke();ctx.closePath();}
this[A3d]("magnetize",arguments);}
;STXChart.prototype.positionCrosshairsAtPointer=function(){var V7m="shair",i9d="cro",V54="f6R",s7D="kOut",e3C="rX",c6d="hai";if(!this[a2Z])return ;var chart=this[a2Z][i8C],tick=this[K9S](this[Y8S](STXChart[(b2l+p1D+M7S+c6d+e3C)]),chart);tick/=this[T2T][f9T];this[f7l]=this[L0S](STXChart[c2m]);this[d2l]=this[(X84+s7D+r3S)](STXChart[F5m]);this[i6Z][y5D][c4l][w1T]=(x8A[V54](this[r6T](tick,chart),y2S))+T5G;this.controls.crossY.style.top=this[L0S](STXChart[(i9d+M7S+V7m+n8S)])+T5G;this[d5m]();}
;STXChart.prototype.doDisplayCrosshairs=function(){var i3T="atD",P5C="contro",I2C="M6R",Q3G="g6R",O0C="e6R",j6D="rosshai";if(this[I7S]((B2G+i7Z+q0T+M7S+t2D+x8A.s0m+j6D+o5d),arguments))return ;if(this[g1d]){if(!this[T2T][R44]&&(x8A[O0C](this[E1p][U1l],R9S)||!this[E1p][U1l])){this[E4m]();}
else if(STX[l4T][this[E1p][U1l]]&&(new STX[l4T][this[E1p][U1l]])[b4l]){this[E4m]();}
else{if(x8A[Q3G](this[i6Z][y5D][(M7S+x8A.n9S+H6T+C9S)][s2T],R9S)){this[i6Z][y5D][c4l][s2T]=R9S;this[i6Z][r4D][c4l][s2T]=R9S;this[i6Z][a3m][(I4Z+H6T+C9S)][s2T]=R9S;if(this[h3T][u1l]&&x8A[I2C](this[E1p][U1l],R9S)){document[N8d][c4l][c7d]=A8l;}
else{document[N8d][(W7T+m5Z)][c7d]=R44;}
}
if(this[(P5C+i44)][w14]){this[i6Z][(f0T+v4S+B4S+i3T+G1Z+m5Z)][c4l][s2T]=S5l;}
}
}
if(this[A3d](o4m,arguments))return ;}
;STXChart.prototype.undisplayCrosshairs=function(){var K6d="sY",m2m="U6R",i9S="E6R",V6d="pend",C2Z="unPr";if(this[(x8A.c7S+C2Z+m5Z+V6d)](E4m,arguments))return ;if(x8A[i9S](this[i6Z][y5D],l1d)){if(x8A[m2m](this[(x8A.d5Z+F4D+x8A.n9S+w0V+v4S+M7S)][y5D][c4l][s2T],A8l)){this[i6Z][y5D][c4l][s2T]=A8l;this[i6Z][(b2l+B4S+M7S+K6d)][c4l][s2T]=A8l;this[i6Z][a3m][c4l][s2T]=A8l;}
}
if(this[g1d]&&this[i6Z][w14]){this[i6Z][w14][c4l][s2T]=A8l;}
document[N8d][c4l][c7d]=a6D;if(this[A3d](E4m,arguments))return ;}
;STXChart.prototype.modalBegin=function(){var j24="modal";this[(B4S+s1p+i7Z+q0T+E3S+B4S+Z8T)]=j24;this[E4m]();}
;STXChart.prototype.modalEnd=function(){this[P6G]=G1d;this[K6G]=R9S;this[o4m]();}
;STXChart.prototype.updateChartAccessories=function(){var H6G="J4R",O2D="T4R",p8p="A4R",g6Z="tN",x7l="paren";this[m5p]=l1d;this[q0D]=new Date()[(t4m+x8A.n9S+s8Z+q0T+i04)]();var xy=STX[a6C](this[i6Z][a3m][(x7l+g6Z+U4m+m5Z)]);this.controls.floatHR.style.top=(x8A[p8p](STXChart[c2m],xy[H6T],this[i6Z][a3m][T9p]/x8A.X0Z))+T5G;var floatDate=this[i6Z][w14];if(floatDate){var panel=this[a2Z];if(!panel)panel=this[i8C][K5D];if(panel){var chart=panel[(G7C+x8Z+x8A.n9S)];floatDate[c4l][(w1T)]=(x8A[O2D](this[(Y4Z+t0S+T2S+W1Z+H44+r3S)](STXChart[F5m]),(floatDate[J1D]/x8A.X0Z)))+T5G;floatDate[c4l][f3T]=(x8A[H6G](this[i8C][z3C],chart[K5D][f3T]))+T5G;}
}
this[b6Z]();}
;STXChart.prototype.mousemove=function(e$){var Z0V="semo",h8p="w4R",e=e$?e$:event;if(!e[D9S]){e[D9S]=e[M6C]+document[N8d][V5p]+document[C8G][V5p];e[x7S]=e[q7l]+document[N8d][K3C]+document[C8G][K3C];}
STXChart[F5m]=e[D9S];STXChart[c2m]=e[x7S];if(this[I7S](i54,arguments))return ;if(!this[g1d])return ;if(x8A[h8p](this[K6G],R9S))return ;this[s24](e[D9S],e[x7S]);if(this[A3d]((s94+p9S+Z0V+z24),arguments))return ;}
;STXChart.prototype.setResizeTimer=function(ms){var h2d="terva",p3m="etIn",u9l="resizeTimeout";this[J7S]=ms;function closure(self){return function(){var b34="R4R";if(!self[i8C].canvas)return ;if(!STX[t2p]){if(x8A[(c3Z+K3m+r0Z)](self[i8C].canvas.height,Math[F2S](self[Q4l]*self[i8C][h7C][F0D]))||x8A[b34](self[i8C].canvas.width,Math[F2S](self[Q4l]*self[i8C][h7C][g44]))){self[H8S]();return ;}
}
}
;}
;if(ms){if(this[u9l])window[a9T](this[u9l]);this[u9l]=window[(M7S+p3m+h2d+v4S)](closure(this),ms);}
else{if(this[u9l])window[a9T](this[u9l]);this[u9l]=null;}
}
;STXChart.prototype.mousemoveinner=function(epX,epY){var Y5G="gLi",D3p="a8t",T5T="insi",m6G="A8t",Z5Z="U0t",v9d="rawing",q4p="veD",C5l="empC",Y1m="reposition",d9p="E0t",n3l="lName",I6p="ayC",H0p="M0t",R6T="g0t",s8D="rParamet",O9T="izingPa",f3m="e0t",J5Z="f0t",h4Z="grabbingPanel",t8C="Cro",g6D="disp",u3Z="requestAnimationFrame",j8S="useAnimation",J3G="v0t",i8D="X0t",S3l="i0t",L8C="B0t",M5p="cand",Z5D="O0t",u9d="R0t",R5G="P0t",L8m="w0t",b3d="J0t",e2d="T0t",W5d="t0t",d3m="S2R",Y7p="F2R",E44="W2R",X4d="C2R",h2l="x2R",r0S="K2R",s7C="n2R",y4Z="s2R",j8d="V2R",M24="axT",g9Z="D2R",a6l="2R",y6m="c2R",s5Z="k2R",l8d="kF",R5C="kO",j2p="Y2R",o8D="Z2R",z6G="j2R",y8S="H5R",R5m="y5R",I3Z="b5R",c0m="I5R",r8d="L5R",W9D="p5R",F1l="N5R",q3C="r5R",L4S="grabM",m3l="G5R",X8D="grabMode",P6S="o5R",g4G="rabMod",Q0T="Q5R",g4d="z5R",o6T="u5R",G5d="q5R",S1d="yTolerance",y24="d5R",W44="m5R",D1D="a5R",Y9C="ollY",l8V="Sta",v3m="A5R",l5G="anyH",h5T="U4R",D0S="overYAxis",i2T="deC",x1m="ins",t7d="E4R",k3C="rY",J0T="M4R",T44="g4R",M1D="overXAxis",b0D="e4R",f5m="f4R",w9Z="v4R",A7d="X4R",r74="xel",r3Z="omP",k3Z="i4R",j0S="oss",P3l="B4R",v7p="O4R";if(!this[i8C].canvas)return ;if(!STX[t2p]){if(x8A[v7p](this[i8C].canvas.height,Math[F2S](this[Q4l]*this[(G7C+S4S)][h7C][F0D]))||x8A[P3l](this[i8C].canvas.width,Math[F2S](this[Q4l]*this[i8C][h7C][g44]))){this[H8S]();return ;}
}
if(this[I7S]("mousemoveinner",arguments))return ;STXChart[F5m]=epX;STXChart[(x8A.d5Z+x8A.c7S+j0S+g2S+D4Z+q0T+x8A.c7S+n8S)]=epY;var cy=this[(f7l)]=this[L0S](STXChart[c2m]),cx=this[d2l]=this[Y8S](STXChart[F5m]);this[a2Z]=this[J0G](cy);if(!this[a2Z])this[a2Z]=this[i8C][K5D];if(!this[a2Z])return ;var chart=this[a2Z][i8C];if(chart[O9p]){this[t3D]=x8A[k3Z](this[K9S](cx,chart),this[T2T][f9T]);this[S3D]=this[L1Z](this[a2Z],this[t3D],this[(U0p+c8T+C7Z+x8A.c7S+r3Z+q0T+r74)](cy,this[a2Z]));}
if(x8A[A7d](STXChart[F5m],this[i8C][w1T])&&x8A[w9Z](STXChart[F5m],this[i8C][L1S])&&x8A[(f5m)](STXChart[c2m],this.chart.top)&&x8A[b0D](STXChart[c2m],this[i8C][f3T])){STXChart[m3D]=true;}
else{STXChart[m3D]=false;}
this[M1D]=x8A[T44](STXChart[c2m],this.chart.top+this[i8C][K5D][(H6T+R8D+S4d)][f3T])&&x8A[J0T](STXChart[c2m],this.chart.top+this[i8C][K5D][f3T])&&STXChart[m3D];this[(B4S+U4T+m5Z+k3C+x8A.X8m+m0G+M7S)]=x8A[t7d](STXChart[F5m],this[i8C][X2S])&&STXChart[m3D];if(this[M1D]||this[(y9D+t9D+n8S+R8D+S4d)]||(!STXChart[(x1m+q0T+i2T+g2S+D4Z+J5d)]&&!this[h2m])){this[E4m]();if(!this[M1D]&&!this[D0S])return ;}
if(!this[u9Z]&&x8A[h5T](STXChart[Q7T],null)){this[E4m]();return ;}
if(this[h2m]&&!STXChart[Q7T]){if(this[m8p]){STX[f4Z](this[i8C][U7C],this);this[(l5G+g1p+v4S+q0T+Z8T+f3C+m5Z+W4Z)]=false;for(var n in this[T0G]){this[T0G][n][(g2S+g1p+B6S+Z8T+g2S+x8A.n9S)]=false;}
for(var n in chart[q3d]){chart[q3d][n][m6C]=false;}
this[b6S]();}
if(this[h3T][u1l]&&x8A[v3m](this[E1p][U1l],"")){STX[f4Z](this[i8C][U7C],this);}
if(this[M0S]==-1){this[M0S]=STXChart[F5m];this[z64]=chart[z44];}
if(this[c8S]==-1){this[c8S]=STXChart[c2m];this[(Z8T+x8A.c7S+D4Z+Y4Z+l8V+x8A.c7S+x8A.n9S+w5D+x8A.c7S+Y9C)]=chart[K5D][n1p][z44];}
var dx=x8A[D1D](STXChart[F5m],this[M0S]),dy=x8A[W44](STXChart[c2m],this[c8S]);if(x8A[y24](Math[W2S](dy),this[S1d])){if(!this[l2l])dy=0;}
else{this[l2l]=true;}
if(x8A[G5d](dx,0)&&x8A[o6T](dy,0))return ;if(x8A[g4d](Math[W2S](dx)+Math[W2S](dy),5))this[N7d]=true;if(x8A[Q0T](this[(Z8T+g4G+m5Z)],"pan")&&(x8A[P6S](this[X8D][J7G]("zoom"),0)||this[d84]||this[M1D]||this[D0S])){if(x8A[m3l](this[X8D],"")){if(this[M1D])this[(L4S+U4m+m5Z)]="zoom-x";else if(this[D0S])this[X8D]="zoom-y";}
if(x8A[q3C](this[X8D],"zoom-x"))dy=0;else if(x8A[F1l](this[X8D],"zoom-y"))dx=0;var push=x8A[W9D](dx,25),centerMe=true;if(x8A[r8d](chart[(J0Z+w0V+v4S+v4S)],chart[r7l]))centerMe=false;var newCandleWidth=this[F1D]+push;if(x8A[c0m](newCandleWidth,.25))newCandleWidth=.25;var pct=x8A[I3Z]((this[T2T][r1d]-newCandleWidth),this[T2T][r1d]);if(x8A[R5m](pct,.1)){newCandleWidth=x8A[y8S](this[(v4S+e6D)][r1d],.9);}
else if(pct<-.1){newCandleWidth=x8A[z6G](this[T2T][r1d],1.1);}
if(STX[R0p]){if(x8A[o8D](Math[J8C]((this[i8C].width/this[T2T][r1d])-.499)-1,STXChart[s1C])&&x8A[j2p](Math[J8C]((this[i8C].width/newCandleWidth)-.499)-1,STXChart[s1C]))return ;}
if(this[W3l]){var x=this[(Y4Z+t0S+R5C+p9S+x8A.n9S+r3S)](this[W3l]),tick=this[(x8A.n9S+q0T+x8A.d5Z+l8d+x8A.c7S+B4S+r0T+q0T+O4T+m5Z+v4S)](x,chart);this[T2T][r1d]=newCandleWidth;if(x8A[s5Z](this[T2T][r1d],0))this[T2T][r1d]=1;this[a2Z][i8C][r7l]=Math[J8C](x8A[y6m]((this[i8C].width/this[T2T][r1d]),.499));var newTick=this[K9S](x,chart);chart[z44]+=Math[F2S](x8A[(v4S+f3p+r0Z)]((newTick-tick),this[T2T][f9T]));}
else if(centerMe){var newMaxTicks=Math[J8C](x8A[(g2S+a6l)]((this[i8C].width/newCandleWidth),.499));if(x8A[g9Z](newMaxTicks,chart[(w5S+M24+O0d+M7S)])){this[(v4S+D4Z+H6T+B4S+H44)][r1d]=newCandleWidth;if(x8A[j8d](this[T2T][r1d],0))this[T2T][r1d]=1;var center=x8A[y4Z](chart[z44],chart[r7l]/2);chart[r7l]=Math[J8C](x8A[s7C]((this[i8C].width/this[T2T][r1d]),.499));var newCenter=(x8A[r0S](chart[z44],chart[r7l]/2));chart[z44]+=Math[J8C](x8A[h2l](center,newCenter));}
}
else{var newMaxTicks=Math[J8C](x8A[X4d]((this[i8C].width/newCandleWidth),.499));if(x8A[E44](newMaxTicks,chart[r7l])){this[T2T][r1d]=newCandleWidth;if(x8A[Y7p](this[(v4S+D4Z+h0d)][r1d],0))this[T2T][r1d]=1;chart[r7l]=Math[J8C](x8A[d3m]((this[i8C].width/this[T2T][r1d]),.499));var wsInTicks=Math[J8C](x8A[W5d](this[h3T][i64],this[T2T][r1d]));chart[z44]=x8A[e2d](chart[r7l],wsInTicks);}
}
this[(j4T+c2d+x8A.n9S)][o6D]=null;var yAxis=this[(Z0m+Y4Z+Y4Z+J8V+Z8T+c3Z+D4Z+T4S+N5D)][n1p];yAxis[a8C]=Math[J8C](this[w2l]+dy);if(x8A[b3d](this[w2l],yAxis.height)){if(x8A[L8m](yAxis[a8C],yAxis.height))yAxis[a8C]=x8A[R5G](yAxis.height,1);}
else{if(x8A[u9d](yAxis[a8C],yAxis.height))yAxis[(A6C+B4S+w5S)]=yAxis.height+1;}
}
else{this[X8D]="pan";var push=Math[J8C](x8A[Z5D](dx,this[T2T][(M5p+v4S+m5Z+t9S+q0T+W4Z+x8A.n9S+g2S)]));if(this[(H7G)])push*=5;chart[z44]=this[z64]+push;if(x8A[L8C](chart[z44],1))chart[z44]=1;if(x8A[S3l](chart[z44],chart[r7l])){this[h3T][i64]=30;}
else{this[h3T][i64]=x8A[i8D]((chart[r7l]-chart[z44]),this[T2T][r1d]);}
if(x8A[J3G](this[a2Z][W0d],chart[W0d])){this[i8C][K5D][n1p][z44]=this[F74]+dy;}
}
var clsrFunc=function(stx){return function(){stx[s2Z]();}
;}
;if((STXChart[j8S]||STX[t2p])&&window[u3Z])window[u3Z](clsrFunc(this));else this[s2Z]();if(this[b7D]){STX[f4Z](this[i8C][U7C],this);this[b7D][E1d](this[i8C][U7C][b6D]);this[(D4Z+x8A.d5Z+A4S+U4T+t8l+K8p+m7p)][y0D]();}
this[(p9S+T4S+g6D+f84+t8C+M7S+M7S+x8A.w9G+q0T+x8A.c7S+M7S)]();return ;}
else{this[X8D]="";}
this[h4Z]=this[a2Z];if(this[M1D]||this[D0S])return ;var tick=this[K9S](this[Y8S](STXChart[F5m]),chart);tick/=this[T2T][f9T];this[i6Z][y5D][c4l][w1T]=(x8A[J5Z](this[r6T](tick,chart),.5))+"px";this.controls.crossY.style.top=this[L0S](STXChart[c2m])+(T5G);this[M8m]();if(STXChart[m3D]&&x8A[f3m](STXChart[(C1d+M7S+O9T+T4S+m5Z+v4S)],null)){if(!STX[l4T][this[(E4l+N5d+m5Z+T4S+x8A.n9S+C1S+m5Z+x8A.d5Z+x8A.n9S+B4S+s8D+m5Z+o5d)][U1l]]||!(new STX[l4T][this[E1p][U1l]])[b4l]){this[o4m]();}
if(x8A[R6T](this[m5p],null))clearTimeout(this[(t0S+x8A.d5Z+h7D+M7S+A3D+H6T+c8l+w5S+t9D)]);if(STXChart[k6m]||!STX[h8G]){this[d5m]();}
else{if(x8A[H0p](new Date()[o5l]()-this[q0D],100))this[d5m]();this[m5p]=setTimeout((function(stx){return function(){stx[d5m]();}
;}
)(this),10);}
}
else{this[(p9S+T4S+W4Z+q0T+E4Z+v4S+I6p+J8Z+M7S+x8A.w9G+z2d+M7S)]();}
if(this[z0T]){var panel=this[j8m][this[z0T][(c6S+D4Z+T4S+m5Z+n3l)]],value=this[L1Z](panel,this[t3D],this[e9C](this[L0S](STXChart[c2m]),panel));if(this[h3T][u1l]&&this[U3m]&&x8A[d9p](panel[W0d],panel[i8C][W0d])){value=this[L1Z](panel,this[t3D],this[U3m]);}
STX[f4Z](this[i8C][U7C],this);this[z0T][Y1m](this[i8C][(x8A.n9S+C5l+a0Z+U4T+U1Z)][b6D],this[z0T][S5p],this[t3D],value);if(this[z0T][y0D])this[z0T][y0D]();}
else if(STXChart[k6m]){if(this[b7D]){var panel=this[j8m][this[(D4Z+x8A.d5Z+x8A.n9S+q0T+q4p+v9d)][Z4G]],value=this[L1Z](panel,this[t3D],this[e9C](this[L0S](STXChart[c2m]),panel));if(this[h3T][(w5S+g8S+T4S+m5Z+x8A.n9S)]&&this[U3m]&&x8A[Z5Z](panel[W0d],panel[i8C][W0d])){value=this[L1Z](panel,this[t3D],this[U3m]);}
STX[f4Z](this[(G7C+D4Z+x8A.c7S+x8A.n9S)][U7C],this);this[b7D][f2p](this[i8C][U7C][b6D],this[t3D],value);if(this[b7D][y0D])this[b7D][y0D]();}
}
else if(x8A[m6G](STXChart[Q7T],null)){this[G6Z]();this[c5C]();}
else if(STXChart[(T5T+i2T+x8A.w9G+x8A.c7S+x8A.n9S)]){this[s5l]();}
if(this[(c6S+x8A.c7S+Y6D+m5Z+C1d+m3m+m5Z+M7S)][u1l]&&x8A[D3p](this[E1p][U1l],"")){if(!STXChart[(s2Z+J8V+Y5G+T4S+m5Z)]&&!this[m8p])STX[f4Z](this[i8C][U7C]);this[e8D]();}
if(this[A3d]("mousemoveinner",arguments))return ;}
;STXChart.prototype.findHighlights=function(isTap,clearOnly){var u0T="h1t",P7m="l1t",I4m="c1t",k4Z="k1t",N4p="Y1t",R2m="Z1t",t5G="j1t",v7D="H8t",k8S="anyHi",v1d="y8t",d4l="b8t",Z2C="I8t",u7S="L8t",e64="tPa",w5d="urren",X3Z="p8t",L3S="ghligh",D2T="isHighlighted",g6T="N8t",V5T="r8t",k6p="prev",t1S="G8t",Z0G="o8t",p2G="rValue",s1S="intersected",b2G="Q8t",y2p="z8t",I3G="u8t",o6p="q8t",m4C="d8t",K6D="m8t",radius=10;if(isTap)radius=30;var cy=this[f7l],cx=this[d2l];if(!this[a2Z])return ;var chart=this[a2Z][(G7C+S4S)];this[m8p]=false;if(this[h3T][u1l]&&x8A[K6D](this[E1p][U1l],"")){STX[f4Z](this[i8C][U7C],this);}
var somethingChanged=false,drawingToMeasure=null,box={x0:x8A[m4C](this[K9S](cx-radius,chart),this[T2T][f9T]),x1:x8A[o6p](this[K9S](cx+radius,chart),this[(f84+B4S+H44)][f9T]),y0:this[e9C](x8A[I3G](cy,radius),this[a2Z]),y1:this[e9C](cy+radius,this[a2Z])}
;for(var i=0;x8A[y2p](i,this[F0l].length);i++){var drawing=this[F0l][i];if(drawing[Z7l])continue;var prevHighlight=drawing[O4D],highlightMe=(x8A[b2G](drawing[Z4G],this[(r4Z+Z4Z+c3Z+D4Z+E6S)][W0d]));drawing[S5p]=drawing[s1S](this[t3D],this[(x8A.d5Z+J8Z+M7S+x8A.w9G+q0T+p2G)],box);highlightMe=highlightMe&&drawing[S5p];if(!clearOnly&&highlightMe){if(x8A[Z0G](prevHighlight,drawing[m6C](true))){drawingToMeasure=drawing;somethingChanged=true;}
this[m8p]=true;}
else{if(x8A[t1S](prevHighlight,drawing[(V4d+g2S+B6S+Z8T+g2S+x8A.n9S)](false))){somethingChanged=true;}
}
}
if(somethingChanged){this[s2Z]();this[b6S]("","",true);if(drawingToMeasure)drawingToMeasure[y0D]();}
var first=false;for(var n in this[(T0G)]){var o=this[T0G][n];o[k6p]=o[m6C];o[m6C]=false;}
for(var n in chart[q3d]){var series=chart[q3d][n];series[k6p]=series[m6C];series[m6C]=false;}
if(!clearOnly){var bar=this[y0l](cx);if(x8A[V5T](bar,chart[s0Z].length)){for(var n in this[T0G]){var o=this[T0G][n];if(x8A[g6T](o[K5D],this[a2Z][(T4S+f64)]))continue;if(o[z8m][D2T]&&o[z8m][D2T](this,cx,cy)){o[(Q8G+L3S+x8A.n9S)]=true;this[m8p]=true;continue;}
var quote=chart[s0Z][bar];if(!quote)continue;for(var out in this[T0G][n][e9m]){var val=quote[out],y=0;if(x8A[X3Z](this[a2Z][W0d],chart[W0d])){y=this[P2l](val,this[(x8A.d5Z+w5d+e64+E6S)]);}
else{y=this[b5p](val,this[(x8A.d5Z+p9S+x8A.c7S+Z4Z+F9D+m5Z+v4S)]);}
if(x8A[u7S](cy-radius,y)&&x8A[Z2C](cy+radius,y)){o[(g2S+G6l+y6C+u4d)]=true;this[m8p]=true;break;}
}
}
for(var n in chart[q3d]){var series=chart[q3d][n],y=series[I4C][bar];if(x8A[d4l](cy-radius,y)&&x8A[v1d](cy+radius,y)){series[m6C]=true;this[(k8S+Z8T+g2S+v4S+G6l+f3C+m5Z+W4Z)]=true;}
else if(series[R54]&&x8A[v7D](bar,0)){var py=series[I4C][x8A[t5G](bar,1)];if((x8A[R2m](cy,y)&&x8A[N4p](cy,py))||(x8A[k4Z](cy,y)&&x8A[I4m](cy,py))){series[(Q8G+f4m+B6S+Z8T+g2S+x8A.n9S)]=true;this[m8p]=true;}
}
}
}
}
for(var n in this[T0G]){var o=this[T0G][n];if(x8A[P7m](o[k6p],o[m6C])){this[s2Z]();if(o[m6C]){this[m8p]=true;this[b6S](o[W0d]);}
break;}
}
for(var n in chart[q3d]){var series=chart[q3d][n];if(x8A[u0T](series[k6p],series[m6C])){this[s2Z]();if(series[m6C]){this[m8p]=true;this[b6S](series[s2T],series[Q9p][(n5T+A3D)]);}
break;}
}
if(!this[m8p]){this[y4D]();}
}
;STXChart.prototype.positionSticky=function(m){var g04="r1t",y54="G1t",a9Z="D1t",top=Math[H0S](x8A[a9Z](this[L0S](STXChart[(x8A.d5Z+x8A.c7S+p1D+M7S+g2S+D4Z+z2d+n8S)]),m[T9p],G9T),x8A.n0Z),right=Math[e1Z](x8A[y54](this[i8C][i6S],(this[Y8S](STXChart[F5m])-a7T)),x8A[g04](this[i8C][i6S],m[J1D]));m.style.top=top+T5G;m[c4l][X2S]=right+T5G;}
;STXChart.prototype.displaySticky=function(message,backgroundColor,forceShow){var x5S="I1t",e4m="L1t",G4S="p1t",a0p="N1t",m=this[i6Z][E6D];if(!m)return ;var mi=m[k3m][x8A.n0Z];if(!mi)return ;var overlayTrashCan=m[k3m][x8A.v0Z],mouseDeleteInstructions=m[k3m][x8A.X0Z];if(!forceShow&&(x8A[a0p](message,l1d)||x8A[G4S](message,R9S))){mi[H5G]=R9S;m[c4l][s2T]=A8l;if(STX[h8G]&&overlayTrashCan){overlayTrashCan[c4l][s2T]=A8l;}
else if(!STX[h8G]&&mouseDeleteInstructions){mouseDeleteInstructions[c4l][s2T]=A8l;}
}
else{if(x8A[e4m](message,l1d))message=R9S;if(forceShow&&x8A[x5S](message,R9S)){mi[c4l][z6T]=R9S;mi[c4l][G0S]=R9S;mi[c4l][s2T]=A8l;}
else if(backgroundColor){mi[c4l][z6T]=backgroundColor;mi[(M7S+i9T+C9S)][G0S]=STX[n44](backgroundColor);mi[c4l][s2T]=P64;}
else{mi[c4l][z6T]=R9S;mi[c4l][G0S]=R9S;mi[c4l][s2T]=P64;}
mi[(q0T+T4S+q1m+x8A.c7S+I6Z+s8Z+F8Z+C9Z)]=message;m[c4l][s2T]=P64;this[V6G](m);if(STX[h8G]&&overlayTrashCan){overlayTrashCan[c4l][s2T]=P64;}
else if(!STX[h8G]&&mouseDeleteInstructions){mouseDeleteInstructions[c4l][(n6m+c6S+j4T+H6T)]=S5l;}
}
}
;STXChart.prototype.setMeasure=function(price1,price2,tick1,tick2,hover){var W5p="inl",m0d="measureLit",B4l="V3t",R7Z="Bars",D7C="D3t",x2C="h3t",r7G="l3t",T9l="c3t",J7C="k3t",K7G="Y3t",t5T="Z3t",n6d="j3t",D3G="H1t",v3T="y1t",x0S="measureUnlit",h9S="cla",X9p="b1t",s4d="mMeasure";if(this[I7S](y4D,arguments))return ;var m=$$(s4d);if(!price1){if(m&&x8A[X9p](m[(h9S+M7S+M7S+i1Z+D4Z+i04)],x0S))m[u4l]=x0S;}
else{var distance=x8A[v3T](Math[J8C](Math[W2S](price1-price2)*this[i8C][S9m]),this[i8C][S9m]),message=R9S;if(this[e4G]){message+=this[e4G][e8p][u6C](distance);}
else{message+=distance;}
var pct=x8A[D3G]((price2-price1),price1);if(x8A[n6d](Math[W2S](pct),A0T)){pct=Math[J8C](x8A[t5T](pct,d8l));}
else if(x8A[K7G](Math[W2S](pct),k4l)){pct=x8A[J7C](Math[J8C](pct*I5d),A3T);}
else{pct=x8A[T9l](Math[J8C](pct*r7T),d8l);}
if(this[e4G]){pct=this[e4G][s3m][u6C](x8A[r7G](pct,d8l));}
else{pct=pct+W6p;}
message+=j8D+pct+D5p;var ticks=Math[W2S](x8A[x2C](tick2,tick1));if(x8A[D7C](this[T2T][p0l],T3d))ticks/=this[T2T][f9T];ticks=Math[J8C](ticks)+x8A.v0Z;var barsStr=R7Z;if(this[a54])barsStr=this[a54](barsStr);message+=m44+ticks+m44+barsStr;if(m){if(x8A[B4l](m[u4l],m0d))m[u4l]=m0d;m[H5G]=message;}
}
if(this[b7D])return ;m=this[(A3C+T4S+G8T+U5D+M7S)][E6D];if(hover){m[c4l][s2T]=P64;m[k3m][x8A.n0Z][c4l][s2T]=(W5p+q0T+q1m+a3p+Y4Z+v4S+S7m+T2S);if(price1){m[k3m][x8A.n0Z][H5G]=message;if(STX[h8G]){m[(x8A.d5Z+g2S+q0T+v4S+W4Z+x8A.c7S+m5Z+T4S)][x8A.v0Z][c4l][s2T]=P64;if(m[k3m][x8A.X0Z])m[k3m][x8A.X0Z][c4l][s2T]=A8l;}
else{m[k3m][x8A.v0Z][c4l][s2T]=A8l;if(m[k3m][x8A.X0Z])m[k3m][x8A.X0Z][c4l][s2T]=S5l;}
}
this[V6G](m);}
else{m[c4l][s2T]=(A5p+q1m);m[k3m][x8A.n0Z][H5G]=R9S;}
if(this[A3d](y4D,arguments))return ;}
;STXChart.prototype.drawTemporaryPanel=function(){var H5D="n3t",j4d="stx_panel_drag",f5d="sS",y9C="s3t";STX[f4Z](this[i8C][U7C],this);var y=x8A[y9C](STXChart[c2m],this.chart.top);this[X9d](x8A.n0Z,A3T,y,y,this[(B6C+u2p+f5d+x8A.n9S+G2m)](j4d),V1p,this[i8C][U7C][(x8A.d5Z+F4D+x8A.n9S+m5Z+O4T+x8A.n9S)],O7T,{}
);STXChart.resizingPanel.handle.style.top=(x8A[H5D](y,STXChart[Q7T][l94][T9p]/x8A.X0Z))+T5G;}
;STXChart.prototype.highlightPanel=function(panel){var G0p="light",q1D="_hig",X3C="tx_";STX[f4Z](this[(x8A.J5m+J5d)][U7C],this);this[X9d](x8A.n0Z,A3T,panel.top,panel.top,this[r2G]((M7S+X3C+Q7G+T4S+N5D+q1D+g2S+G0p)),V1p,this[i8C][U7C][b6D],O7T);panel[O4D]=G1d;}
;STXChart.prototype.unhighlightPanel=function(panel){STX[f4Z](this[i8C][U7C],this);panel[O4D]=O7T;}
;STXChart.prototype.setTrashCan=function(){var B2m="x3t",H5Z="K3t",E9S="non";if(STX[h8G]){var m=this[i6Z][E6D];if(m){m[c4l][s2T]=P64;m[k3m][x8A.n0Z][c4l][s2T]=(E9S+m5Z);m[k3m][x8A.v0Z][c4l][s2T]=P64;if(m[k3m][x8A.X0Z])m[k3m][x8A.X0Z][c4l][(W4Z+q0T+E4Z+f84)]=A8l;m.style.top=(x8A[H5Z](this[L0S](STXChart[c2m]),G9T))+T5G;m[c4l][X2S]=x8A[B2m](this[i8C][i6S],(this[Y8S](STXChart[F5m])-a7T),T5G);}
}
}
;STXChart.prototype.pixelFromBar=function(bar){var R4S="b3t",V74="I3t",x=Math[(x8A.c7S+B4S+M2h)]((x8A[V74](bar,this[T2T][r1d]))+x8A[R4S](this[T2T][r1d],x8A.i0Z));return x;}
;STXChart.prototype.barFromPixel=function(x){var X4p="y3t";return Math[F2S](x8A[X4p](x,this[T2T][r1d]));}
;STXChart.prototype.tickFromPixel=function(x,chart){var q9D="j9t",T2p="H3t";if(!chart)chart=this[i8C];var left=x8A[T2p](chart[O9p].length,chart[z44]),tick=Math[(x8A.c7S+B4S+K34+W4Z)](x8A[q9D](((x+(left*this[T2T][r1d]))/this[T2T][r1d]),.499));tick*=this[T2T][f9T];return tick;}
;STXChart.prototype.pixelFromTick=function(tick,chart){var F2m="Z9t";if(!chart)chart=this[i8C];return x8A[F2m]((tick-chart[O9p].length+chart[z44]),this[(j4T+c2d+x8A.n9S)][r1d])+this[J2G];}
;STXChart.prototype.pixelFromDate=function(date,chart){return this[r6T](this[r5p](date,chart),chart);}
;STXChart.prototype.priceFromPixel=function(y,panel){var A7p="c9t",C0m="k9t",E4p="Y9t";if(!panel)panel=this[i8C][K5D];var chart=panel[i8C],yAxis=panel[n1p];y=x8A[E4p](yAxis[(Y4Z+B4S+l44+w5S)],y);var roundit=chart[S9m];if(panel[S9m])roundit=panel[S9m];var price=yAxis[h6l]+(x8A[C0m](y,yAxis[t4Z]));price=x8A[A7p](Math[J8C](price*roundit),roundit);if(yAxis[i6d]){var logPrice=yAxis[p04]+(x8A[(T8S+x8A.n9S)](y,yAxis[o04],yAxis.height));price=Math[z04](10,logPrice);}
return price;}
;STXChart.prototype.valueFromPixel=function(y,panel){if(!panel)panel=this[J0G](y);var p=this[S6p](y,panel);return p;}
;STXChart.prototype.valueFromPixelUntransform=function(y,panel){var S9l="o9t",u74="last",K0T="first",K4D="Q9t";if(!panel)panel=this[J0G](y);if(!panel){if(x8A[K4D](y,x8A.n0Z)){panel=this[j8m][STX[K0T](this[j8m])];}
else{panel=this[j8m][STX[u74](this[j8m])];}
}
var p=this[S6p](y,panel);if(panel[i8C][I9S]&&x8A[S9l](panel[W0d],panel[i8C][W0d])){p=panel[i8C][I9S](this,panel[i8C],p);}
return p;}
;STXChart.prototype.pixelFromPriceTransform=function(price,panel){if(panel[i8C][I2h])price=panel[i8C][I2h](this,panel[i8C],price);return this[b5p](price,panel);}
;STXChart.prototype.pixelFromPrice=function(price,panel){var k6S="p9t",a24="N9t",Q1p="r9t",p9m="G9t";if(!panel)panel=this[(x8A.J5m+J5d)][K5D];var yAxis=panel[n1p],y=x8A[p9m]((yAxis[B7l]-price),yAxis[t4Z]);if(yAxis[i6d]){var logPrice=x8A[Q1p](Math[C1C](price),Math[x3d]);if(x8A[a24](price,0))logPrice=0;var height=yAxis.height;y=x8A[k6S](height,height*(logPrice-yAxis[p04])/yAxis[o04]);}
y+=yAxis.top;return y;}
;STXChart.prototype.pixelFromValueAdjusted=function(panel,tick,value){var F0d="b9t",Q9Z="I9t",E1Z="L9t";if(this[T2T][A24]||!this[g3C][panel[W0d]])return this[P2l](value,panel);var a=Math[J8C](tick);if(x8A[E1Z](a,0)&&x8A[Q9Z](a,panel[i8C][O9p].length)&&(ratio=panel[i8C][(W4Z+G1Z+P7l)][a][D8p])){return this[P2l](x8A[F0d](value,ratio),panel);}
return this[P2l](value,panel);}
;STXChart.prototype.adjustIfNecessary=function(panel,tick,value){var H64="j7t",t8d="9t",R2l="y9t";if(this[(j4T+n2d+p9S+x8A.n9S)][A24])return value;if(!panel||!this[g3C][panel[W0d]])return value;var a=Math[J8C](tick);if(x8A[R2l](a,0)&&x8A[(I6Z+t8d)](a,panel[i8C][O9p].length)&&(ratio=panel[i8C][(W4Z+G1Z+P7l)][a][D8p])){return x8A[H64](value,ratio);}
return value;}
;STXChart.prototype.setTransform=function(chart,transformFunction,untransformFunction){chart[I2h]=transformFunction;chart[I9S]=untransformFunction;}
;STXChart.prototype.unsetTransform=function(chart){var I9l="Z7t";delete  chart[I2h];delete  chart[I9S];for(var i=0;x8A[I9l](i,chart[O9p].length);i++){chart[O9p][i].transform=null;}
}
;STXChart.prototype.undo=function(){if(this[I7S](B1p,arguments))return ;if(this[b7D]){this[b7D].abort();this[b7D]=l1d;STX[f4Z](this[i8C][U7C],this);this[(E4G+T7Z)]();STX[R3l](this[i6Z][y5D],a0C,T1D);STX[R3l](this[i6Z][r4D],a0C,T1D);STXChart[k6m]=O7T;}
if(this[A3d](B1p,arguments))return ;}
;STXChart.prototype.undoStamp=function(){var z8T="cts",z8d="je",A5G="shallowClone";this[C9T][K6T](STX[A5G](this[(W4Z+Z9Z+J8V+b24+z8d+z8T)]));}
;STXChart.prototype.undoLast=function(){var o74="awi";if(this[(t0S+x8A.n9S+b4d+m5Z+i7Z+x8A.c7S+o74+m7p)]){this[B1p]();}
else{if(this[C9T].length){this[F0l]=this[C9T][E5T]();this[s2Z]();}
}
}
;STXChart.prototype.addDrawing=function(drawing){this[m9p]();this[F0l][K6T](drawing);}
;STXChart.prototype.plotLine=function(x0,x1,y0,y1,color,type,context,confineToPanel,parameters){var m7Z="b4t",w2p="I4t",y3d="L4t",S2m="p4t",K1l="N4t",U8C="r4t",f1l="G4t",N7S="o4t",y4S="Q4t",U7d="z4t",w7T="u4t",t2d="q4t",l0p="d4t",N1T="m4",f9D="a4t",Z9S="4t",R8d="U6t",v8Z="E6t",P4m="M6t",Q2l="g6t",p9T="e6t",n0m="f6t",v64="v6t",F44="X6t",i2D="i6t",f0S="B6t",J9C="O6t",W0T="R6t",N1C="P6t",S9d="w6t",p1S="J6t",L54="T6t",p3D="t6t",X6S="S7t",Z4m="F7t",z3d="W7t",S3G="C7t",K8G="K7t",i3S="n7t",c5p="s7t",J6l="izo",y6G="hor",t8m="V7t",J04="D7t",c7G="7t",a3S="l7t",u5T="c7t",W8G="k7t",p0T="Y7t";if(!parameters)parameters={}
;if(x8A[p0T](parameters[Z6l],(T4S+B4S+q1m)))return ;if(x8A[W8G](confineToPanel,true))confineToPanel=this[i8C][K5D];if(x8A[u5T](context,null)||typeof (context)=="undefined")context=this[i8C][b6D];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1)){return ;}
var edgeTop=0,edgeBottom=this[i8C][z3C],edgeLeft=0,edgeRight=this[i8C].width;if(confineToPanel){edgeBottom=confineToPanel[n1p][f3T];edgeTop=confineToPanel.yAxis.top;}
if(x8A[a3S](type,"ray")){var bigX=10000000;if(x8A[(g2S+c7G)](x1,x0))bigX=-10000000;var v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
,bigY=STX[E9D](v,bigX);x1=bigX;y1=bigY;}
if(x8A[J04](type,"line")||x8A[t8m](type,(y6G+J6l+T4S+x8A.n9S+E3S))||x8A[c5p](type,"vertical")){var bigX=10000000,littleX=-10000000,v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
,bigY=STX[E9D](v,bigX),littleY=STX[E9D](v,littleX);x0=littleX;x1=bigX;y0=littleY;y1=bigY;}
var t0=0.0,t1=1.0,xdelta=x8A[i3S](x1,x0),ydelta=x8A[K8G](y1,y0),p,q,r;for(var edge=0;x8A[(Z6p+x8A.n9S)](edge,4);edge++){if(x8A[S3G](edge,0)){p=-xdelta;q=-(x8A[z3d](edgeLeft,x0));}
if(x8A[Z4m](edge,1)){p=xdelta;q=(x8A[X6S](edgeRight,x0));}
if(x8A[p3D](edge,2)){p=-ydelta;q=-(x8A[L54](edgeTop,y0));}
if(x8A[p1S](edge,3)){p=ydelta;q=(x8A[S9d](edgeBottom,y0));}
r=x8A[N1C](q,p);if(x8A[W0T](y1,null)&&x8A[J9C](p,0)&&x8A[f0S](q,0)){return false;}
if(x8A[i2D](p,0)){if(x8A[F44](r,t1))return false;else if(x8A[v64](r,t0))t0=r;}
else if(x8A[n0m](p,0)){if(x8A[p9T](r,t0))return false;else if(x8A[Q2l](r,t1))t1=r;}
}
var x0clip=x0+x8A[P4m](t0,xdelta),y0clip=y0+x8A[v8Z](t0,ydelta),x1clip=x0+x8A[R8d](t1,xdelta),y1clip=y0+x8A[(x8A.X8m+Z9S)](t1,ydelta);if(x8A[f9D](y1,null)&&x8A[(N1T+x8A.n9S)](y0,null)){y0clip=edgeTop;y1clip=edgeBottom;x0clip=v[h4p];x1clip=v[h4p];if(x8A[l0p](v[h4p],edgeRight))return false;if(x8A[(t2d)](v[h4p],edgeLeft))return false;}
else if(x8A[w7T](y1,null)){if(x8A[U7d](v[(H6T+s9p)],v[q8l]))y1clip=edgeBottom;else y1clip=edgeTop;x0clip=v[h4p];x1clip=v[h4p];if(x8A[y4S](v[h4p],edgeRight))return false;if(x8A[N7S](v[h4p],edgeLeft))return false;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color[G0S];if(color[q0p])context.globalAlpha=color[q0p];else context.globalAlpha=1;context.lineWidth=parseInt(STX[u5Z](color.width));}
else{if(x8A[f1l](color,null)||x8A[U8C](color,"auto")||STX[T4l](color)){context.strokeStyle=this[k3p];}
else{context.strokeStyle=color;}
}
if(parameters[q0p])context.globalAlpha=parameters[q0p];if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;if(x8A[K1l](type,"zig zag"))context.lineWidth=5;var pattern=null;if(parameters[Z6l]){pattern=parameters[Z6l];if(x8A[S2m](pattern,"solid")){pattern=null;}
else if(x8A[y3d](pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(x8A[w2p](pattern,"dashed")){pattern=[x8A[m7Z](context.lineWidth,5),x8A[(H6T+Z9S)](context.lineWidth,5)];}
}
context[v8T](x0clip,y0clip,x1clip,y1clip,context.strokeStyle,context.globalAlpha,context.lineWidth,pattern);context.globalAlpha=1;}
;STXChart.prototype.connectTheDots=function(points,color,type,context,confineToPanel,parameters){var T1C="dashedLineTo",z9d="a0e",Y0C="A0e",f24="U2t",d3D="E2t",x3m="g2t",B1C="e2",P0d="f2t",v5C="v2t",Q9C="X2t",X9S="i2t",t7D="B2t",Z44="O2t",o7G="R2t",B2T="P2t",m2p="w2t",q7G="J2t",T1l="T2t",U9S="t2t",X2C="S5t",p4C="F5t",i9G="W5t",Z6m="C5",n9T="x5t",W64="K5t",L44="n5t",i1D="s5t",w5m="V5t",v5D="D5t",o9G="h5t",d9d="l5t",x3Z="c5t",K9p="5t",a7S="acity",q9d="Y5t",w8S="Z5t",U5Z="j5t",l2Z="H4t";if(!parameters)parameters={}
;if(x8A[l2Z](parameters[Z6l],"none"))return ;if(x8A[U5Z](confineToPanel,true))confineToPanel=this[i8C][K5D];if(x8A[w8S](context,null)||typeof (context)==(p9S+T4S+W4Z+m5Z+H6D+T4S+u6D))context=this[i8C][b6D];if(x8A[q9d](points.length,4))return ;var edgeTop=0,edgeBottom=this[(G7C+x8Z+x8A.n9S)][z3C],edgeLeft=0,edgeRight=this[i8C].width;if(confineToPanel){edgeBottom=confineToPanel[(H6T+R8D+S4d)][f3T];edgeTop=confineToPanel.yAxis.top;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color[G0S];if(color[(B4S+c6S+a7S)])context.globalAlpha=color[q0p];else context.globalAlpha=1;context.lineWidth=parseInt(STX[u5Z](color.width));}
else{if(x8A[(T2S+K9p)](color,null)||x8A[x3Z](color,"auto")||STX[T4l](color)){context.strokeStyle=this[k3p];}
else{context.strokeStyle=color;}
}
if(parameters[q0p])context.globalAlpha=parameters[q0p];if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters[Z6l]){pattern=parameters[Z6l];if(x8A[d9d](pattern,"solid")){pattern=null;}
else if(x8A[o9G](pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(x8A[v5D](pattern,"dashed")){pattern=[x8A[w5m](context.lineWidth,5),x8A[i1D](context.lineWidth,5)];}
}
context.beginPath();for(var i=0;x8A[L44](i,points.length-2);i+=2){var x0=points[i],y0=points[i+1],x1=points[i+2],y1=points[i+3];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1))return ;var t0=0.0,t1=1.0,xdelta=x8A[W64](x1,x0),ydelta=x8A[n9T](y1,y0),p,q,r;for(var edge=0;x8A[(Z6m+x8A.n9S)](edge,4);edge++){if(x8A[i9G](edge,0)){p=-xdelta;q=-(x8A[p4C](edgeLeft,x0));}
if(x8A[X2C](edge,1)){p=xdelta;q=(x8A[U9S](edgeRight,x0));}
if(x8A[T1l](edge,2)){p=-ydelta;q=-(x8A[q7G](edgeTop,y0));}
if(x8A[m2p](edge,3)){p=ydelta;q=(x8A[B2T](edgeBottom,y0));}
r=x8A[o7G](q,p);if(x8A[Z44](y1,null)&&x8A[t7D](p,0)&&x8A[X9S](q,0)){return false;}
if(x8A[Q9C](p,0)){if(x8A[v5C](r,t1))return false;else if(x8A[P0d](r,t0))t0=r;}
else if(x8A[(B1C+x8A.n9S)](p,0)){if(x8A[x3m](r,t0))return false;else if(x8A[(F8Z+f3p+x8A.n9S)](r,t1))t1=r;}
}
var x0clip=x0+x8A[d3D](t0,xdelta),y0clip=y0+x8A[f24](t0,ydelta),x1clip=x0+x8A[Y0C](t1,xdelta),y1clip=y0+x8A[z9d](t1,ydelta);try{if(pattern){context[T1C](x0clip,y0clip,x1clip,y1clip,pattern);}
else{context.moveTo(x0clip,y0clip);context.lineTo(x1clip,y1clip);}
}
catch(e){}
}
context.stroke();context.closePath();context.globalAlpha=1;}
;STXChart.prototype.plotSpline=function(points,tension,color,type,context,confineToPanel,parameters){var U4S="N0e",q8m="r0e",P1T="G0e",Y4G="o0e",K8D="Q0e",j1p="z0e",a2G="u0e",w0p="q0e",L7C="m0e";if(!parameters)parameters={}
;if(x8A[L7C](parameters[Z6l],"none"))return ;if(x8A[(W9d+m5Z)](confineToPanel,true))confineToPanel=this[i8C][(q7d+N5D)];if(x8A[(w0p)](context,null)||typeof (context)=="undefined")context=this[i8C][b6D];context.save();context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color[G0S];if(color[q0p])context.globalAlpha=color[q0p];else context.globalAlpha=1;context.lineWidth=parseInt(STX[u5Z](color.width));}
else{if(x8A[a2G](color,null)||x8A[j1p](color,"auto")||STX[T4l](color)){context.strokeStyle=this[k3p];}
else{context.strokeStyle=color;}
}
if(parameters[q0p])context.globalAlpha=parameters[q0p];if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters[Z6l]){pattern=parameters[Z6l];if(x8A[K8D](pattern,"solid")){pattern=null;}
else if(x8A[Y4G](pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(x8A[P1T](pattern,(W4Z+D4Z+M7S+g2S+m5Z+W4Z))){pattern=[x8A[q8m](context.lineWidth,5),x8A[U4S](context.lineWidth,5)];}
}
if(pattern&&context[V7C]){context[V7C](pattern);context[h9m]=0;}
plotSpline(points,tension,context);context.restore();}
;STXChart.prototype.drawingClick=function(panel,x,y){var q0d="ossY",w0d="contr",Y8C="drawing",G2l="click",c1S="p0e",k1l="tive",W7Z="construct";if(!this[b7D]){if(!panel)return ;var Factory=STXChart[I0p][this[E1p][(z24+x8A.d5Z+x8A.n9S+A3D+t3G+X0G)]];if(!Factory){if(STX[(i7Z+h9d+f4T+K94)][this[E1p][U1l]]){Factory=STX[l4T][this[E1p][U1l]];STXChart[h9G](this[E1p][U1l],Factory);}
}
if(Factory){this[b7D]=new Factory;this[b7D][W7Z](this,panel);if(!this[g3C][panel[W0d]]){if(this[b7D][T0d]){this[b7D]=l1d;return ;}
}
}
}
if(this[b7D]){if(this[C0T]&&!this[b7D][b4l]){if(!STXChart[k6m])this[(t0S+k1l+i7Z+K8p+m7p)]=l1d;return ;}
var tick=x8A[c1S](this[K9S](x,panel[i8C]),this[T2T][f9T]),panel=this[j8m][this[b7D][Z4G]],value=this[L1Z](panel,tick,this[e9C](y,panel));if(this[h3T][u1l]&&this[U3m]){value=this[L1Z](panel,tick,this[U3m]);}
if(this[b7D][G2l](this[i8C][U7C][b6D],tick,value)){if(this[b7D]){STXChart[k6m]=O7T;STX[f4Z](this[i8C][U7C],this);this[t2Z](this[b7D]);this[b7D]=l1d;this[G2D]();this[s2Z]();this[C4Z](Q5l);STX[R3l](this[(x8A.d5Z+B4S+b6p+N1G)][y5D],a0C,T1D);STX[R3l](this[i6Z][r4D],a0C,T1D);}
}
else{this[C4Z](Y8C);STXChart[k6m]=G1d;STX[R3l](this[(w0d+B4S+i44)][y5D],T1D,a0C);STX[R3l](this[i6Z][(x8A.d5Z+x8A.c7S+q0d)],T1D,a0C);}
return G1d;}
return O7T;}
;STXChart.prototype.whichPanel=function(y){var v7d="I0e",P8p="L0e";for(var p in this[j8m]){var panel=this[j8m][p];if(panel[x9Z])continue;if(x8A[P8p](y,panel.top)&&x8A[v7d](y,panel[(Y4Z+B4S+x8A.n9S+x8A.n9S+B4S+w5S)]))return panel;}
return l1d;}
;STXChart.prototype.mouseup=function(e){var l3T="OutX",W24="D8e",k1p="h8e",e9d="ageX",b0T="l8e",y44="c8e",v14="k8e",F8l="wh",t4T="Y8e",Z1C="Z8e",j7p="j8e",w3d="Dra",w8C="ioning",U4D="imer",Q5S="use",a4m="H0e",S0Z="y0e",X4m="b0e";if(this[z0T]){if(x8A[X4m](this[E1p][U1l],R9S)||x8A[S0Z](this[(x8A.d5Z+q14+x8A.c7S+m5Z+b6p+C1S+D8G+x8A.n9S+B4S+x8A.c7S+c3Z+x8Z+D4Z+i04+A7S+x8A.c7S+M7S)][U1l],l1d)||(x8A[a4m](Date[j5S]()-this[(s94+Q5S+s8Z+U4D)],F9m))){this[C4Z](Q5l);STX[f4Z](this[i8C][U7C],this);this[(C1d+c6S+B4S+n9C+w8C+w3d+f4T+K94)]=l1d;this[G2D]();this[s2Z]();return ;}
else{this[z0T]=O7T;}
}
var wasMouseDown=this[C0T];this[C0T]=O7T;if(!this[g1d])return ;this[h2m]=O7T;if(x8A[j7p](this[K6G],R9S))return ;if(this[N7d]){STX[K6l](document[N8d],x2Z);this[N7d]=O7T;return ;}
if(STXChart[m3D])STX[K6l](document[N8d],x2Z);if(x8A[Z1C](STXChart[(x8A.c7S+m5Z+M7S+q0T+v6T+q0T+m7p+q1T+T4S+m5Z+v4S)],l1d)){STX[f4Z](this[(G7C+S4S)][U7C],this);this[G6Z]();STXChart[Q7T]=l1d;return ;}
if(!e)e=event;if((e[v24]&&x8A[t4T](e[(F8l+m5C)],x8A.X0Z))||(e[i4Z]&&x8A[v14](e[i4Z],x8A.X0Z))){if(this[m8p]){this[a8p]();if(e[X5m])e[X5m]();return O7T;}
else{return G1d;}
}
if(!e[D9S]){e[D9S]=e[M6C]+document[N8d][V5p]+document[C8G][V5p];e[x7S]=e[(x8A.d5Z+B6S+m5Z+v3G)]+document[N8d][K3C]+document[C8G][K3C];}
if(x8A[y44](e[D9S],this[i8C][w1T])||x8A[(b0T)](e[(c6S+e9d)],this[i8C][X2S]))return ;if(x8A[(k1p)](e[x7S],this.chart.top)||x8A[W24](e[x7S],this[i8C][f3T]))return ;if(this[I7S](D2G,arguments))return ;if(wasMouseDown){var cy=this[L0S](e[x7S]),cx=this[(y7S+l3T)](e[D9S]);this[K9D](this[a2Z],cx,cy);}
if(this[A3d]((w5S+B4S+p9S+M7S+m5Z+j34),arguments))return ;}
;STXChart.prototype.grabbingHand=function(){var C6T="een",F9G="ngScr",Z4d="bi";if(!this[(r4G+R2Z+Z4d+F9G+C6T)])return ;if(STX[h8G])return ;STX[z9C](document[N8d],x2Z);}
;STXChart.prototype.mousedown=function(e){var w4p="rtC",g2p="ody",J7Z="wing",d6T="cti",k6l="ositi",G7D="F8e",Q0V="W8e",k8l="C8e",K3p="x8e",C9D="K8e",Y2l="ollT",b0G="rollL",o1l="8e",X0p="s8e",Y7D="mouseTimer",N6m="fa",n04="V8e";if(this[I7S]("mousedown",arguments))return ;this[N7d]=false;if(x8A[n04](this[K6G],""))return ;if(!this[g1d])return ;if(!this[u9Z])return ;if(!STXChart[m3D])return ;if(this[m8T]&&e&&e[(c6S+C1d+U4T+m5Z+b6p+G5T+N6m+p9S+v4S+x8A.n9S)])e[X5m]();this[Y7D]=Date[j5S]();this[C0T]=true;if(!e)e=event;if((e[v24]&&x8A[X0p](e[(f4T+g2S+m5C)],2))||(e[i4Z]&&x8A[(T4S+o1l)](e[i4Z],2))){return ;}
for(var p in this[j8m]){var panel=this[j8m][p];if(panel[O4D]){STXChart[Q7T]=panel;return ;}
}
if(!e[(e8d+t7G)]){e[D9S]=e[M6C]+document[N8d][V5p]+document[C8G][(M7S+x8A.d5Z+b0G+x8S)];e[x7S]=e[q7l]+document[N8d][(J0Z+x8A.c7S+Y2l+B4S+c6S)]+document[C8G][K3C];}
if(x8A[C9D](e[D9S],this[(G7C+D4Z+x8A.c7S+x8A.n9S)][(v4S+m5Z+Q9D)])&&x8A[K3p](e[D9S],this[i8C][X2S])&&x8A[k8l](e[x7S],this.chart.top)&&x8A[Q0V](e[x7S],this[i8C][f3T])){if(this[z0T])return ;for(var i=0;x8A[G7D](i,this[F0l].length);i++){var drawing=this[F0l][i];if(drawing[O4D]){if(this[d84]){var Factory=STXChart[I0p][drawing[W0d]],clonedDrawing=new Factory;clonedDrawing[v9C](this,drawing[B8Z]());this[F0l][K6T](clonedDrawing);this[z0T]=clonedDrawing;clonedDrawing[S5p]=drawing[(x8A.c7S+U1D+k6l+F4D+t9D)];return ;}
this[z0T]=drawing;return ;}
}
this[K9D](this[a2Z],this[d2l],this[f7l]);if(this[b7D]&&this[(D4Z+d6T+z24+i7Z+h9d+J7Z)][b4l])return ;}
this[h2m]=true;this[l2l]=false;if(!e)e=event;if(!e[D9S]){e[D9S]=e[M6C]+document[N8d][V5p]+document[C8G][V5p];e[x7S]=e[q7l]+document[(Y4Z+g2p)][K3C]+document[C8G][K3C];}
var chart=this[a2Z][i8C];this[M0S]=e[D9S];this[c8S]=e[x7S];this[z64]=chart[z44];this[F74]=chart[(g3D+v4S)][n1p][z44];this[(r4G+R2Z+d8Z+x8A.n9S+D4Z+w4p+D4Z+T4S+W4Z+v4S+g1G+e2l+g2S)]=this[T2T][r1d];this[w2l]=this[a2Z][n1p][a8C];setTimeout((function(self){return function(){self[j74]();}
;}
)(this),100);if(this[A3d]("mousedown",arguments))return ;}
;STXChart.prototype.changeVectorType=function(value){var d9C="meter",J4m="torPa",u1C="entVe",I4T="urr";this[(x8A.d5Z+I4T+u1C+x8A.d5Z+J4m+x8A.c7S+D4Z+d9C+M7S)][U1l]=value;if(STXChart[k6m])this[(K34+W4Z+B4S)]();this[M8m]();if(STXChart[m3D])this[o4m]();}
;STXChart.prototype.rightClickOverlay=function(name){var f2D="rightClickOverlay";if(this[I7S](f2D,arguments))return ;var sd=this[T0G][name];if(sd[g74]){sd[g74]();}
else{this[Y3S](name);}
this[A3d](f2D,arguments);}
;STXChart.prototype.removeOverlay=function(name){var m2S="cky",I9Z="Ov",w0l="remove",W74="S8e";if(this[I7S](Y3S,arguments))return ;for(var o in this[T0G]){var sd=this[T0G][o];if(x8A[W74](sd[w3G],name)){this[(w0l+I9Z+t9D+v4S+D4Z+H6T)](sd[W0d]);}
}
delete  this[T2T][F4p][name];delete  this[T0G][name];this[(W4Z+q0T+M7S+Q8l+Z6Z+n0D+q0T+m2S)]();this[v9m]();this[C4Z](T2T);this[A3d](Y3S,arguments);}
;STXChart.prototype.addSeries=function(field,parameters){var c3m="artN",b3l="eter",S44="param",R3d="t1e";if(this[I7S]("addSeries",arguments))return ;if(!parameters)parameters={}
;if(!parameters[W3p])parameters[W3p]=this[i8C][W0d];var obj={parameters:STX[s2G](parameters),yValueCache:new Array(),display:field,isStep:(parameters[(f2C+m5Z)]&&x8A[R3d](parameters[V1C],"step"))}
;if(x8A[(D8d+m5Z)]("display",obj[(S44+b3l+M7S)]))obj[s2T]=obj[Q9p][s2T];var chart=this[g3C][parameters[(G7C+c3m+f64)]];function addSeriesData(stx){var R6D="R1e",w8G="Value",d7p="w1e",X8V="J1e",mIterator=0,cIterator=0;while(parameters.data&&x8A[X8V](mIterator,stx[L4C].length)&&x8A[d7p](cIterator,parameters.data.length)){var c=parameters.data[cIterator],m=stx[L4C][mIterator];if(!c[s9l]||typeof c[s9l]=="undefined")c[(s9l)]=STX[B9l](c[o0D]);if(x8A[(c3Z+H9p+m5Z)](c[s9l][o5l](),m[s9l][o5l]())){m[field]=c[w8G];cIterator++;mIterator++;continue;}
if(x8A[R6D](c[s9l],m[s9l]))cIterator++;else mIterator++;}
}
if(parameters.data&&this[L4C]){addSeriesData(this);}
else{obj[Z5l]=addSeriesData;}
if(chart)chart[(r1Z+x8A.c7S+q0T+h7D)][field]=obj;this[A3d]((D4Z+W4Z+W4Z+d8Z+m5Z+E0d+m5Z+M7S),arguments);return obj;}
;STXChart.prototype.removeSeries=function(field,chart){var U8l="X1e",z8C="1e",g3l="B1e",H9G="O1e",J1G="setComparison";if(this[I7S]("removeSeries",arguments))return ;if(!chart)chart=this[i8C];delete  chart[q3d][field];var compare=false;for(var s in chart[q3d]){if(chart[(O54+k9T)][s][Q9p][Y94]){compare=true;break;}
}
this[J1G](this,chart,compare);for(var panel in this[j8m]){if(x8A[H9G](this[j8m][panel][W0d][J7G](STX[y1p][N7m]),0)){var compareArray=this[T2T][F4p][this[j8m][panel][W0d]][I74]["Compare To"];for(var i=0;x8A[g3l](i,compareArray.length);i++){if(x8A[(q0T+z8C)](compareArray[i],field))compareArray[a4T](i,1);}
delete  this[T2T][F4p][this[j8m][panel][W0d]][R2S]["Result "+field];delete  this[T2T][F4p][this[j8m][panel][W0d]][e9m]["Result "+field+" "+this[j8m][panel][W0d]];if(x8A[U8l](compareArray.length,0))this[E0T](this[j8m][panel]);}
}
this[A3d]("removeSeries",arguments);}
;STXChart.prototype.drawLegendItem=function(xy,label,color){var x=xy[x8A.n0Z],y=xy[x8A.v0Z],w=A3T,h=A3T,context=this[i8C][b6D];context.fillStyle=color;context.fillRect(x,y,w,h);x+=w+x8A.X0Z;context.fillStyle=this[k3p];context.fillText(label,x,y);x+=context.measureText(label).width+6;return [x,y];}
;STXChart.prototype.drawLegend=function(chart,legendColorMap){var j6G="drawLegendItem",c0l="aren",c0Z="ansp",D7Z="U1e",K9G="E1e",W4p="M1e",W3Z="g1e",p84="e1e",K7C="f1e",l8l="v1e";if(this[I7S]("drawLegend",arguments))return ;var context=this[i8C][b6D];context.textBaseline="top";var xy=[chart[z1l][O4T],chart[z1l][H6T]],lineColor=this[k3p];if(x8A[l8l](this[i8C][K4S],Array)){var colors=this[i8C][K4S];if(x8A[K7C](colors.length,1)){var grd=context.createLinearGradient(xy[0],xy[1],xy[0]+10,xy[1]);for(var c=0;x8A[p84](c,colors.length);c++){grd.addColorStop(x8A[W3Z](c,(colors.length-1)),colors[c]);}
lineColor=grd;}
else if(x8A[W4p](colors.length,0))lineColor=colors[0];}
else if(x8A[K9G](this[T2T][j6C],"mountain")){var c=this[r2G]("stx_mountain_chart"),strokeStyle=c[(Y4Z+A3D+N4Z+L2C+J6C+v4S+B4S+x8A.c7S)];if(strokeStyle&&x8A[D7Z](strokeStyle,(G8T+c0Z+c0l+x8A.n9S)))lineColor=strokeStyle;}
else{lineColor=this[M7Z]("stx_line_chart");}
xy=this[j6G](xy,chart[(M7S+s7T+v4S)],lineColor);for(var field in legendColorMap){xy=this[j6G](xy,field,legendColorMap[field]);}
this[A3d]("drawLegend",arguments);}
;STXChart.prototype.drawSeries=function(chart){var o5S="n9e",Z8D="ers",J7T="s9e",t4S="V9e",H4T="D9e",b8Z="h9e",N14="l9e",V44="c9e",u6p="k9e",S0S="Y9e",M0l="Z9e",S4m="j9e",v9p="H3e",L0p="y3e",O64="b3e",f8p="I3e",x2G="L3e",K0V="shareYAxis",q7m="rame",L5d="p3e",I8m="N3e",k2Z="r3e",o6m="G3e",J6Z="o3e",t3d="Q3e",W4C="z3e",l0S="u3e",N5C="marginBottom",r2l="marginTop",R0C="q3e",j0m="d3e",X7Z="m3e",w4m="mum",c1T="Max",z7l="a3e",S7S="A3e",v8G="maximum",i2C="minimum",I4p="ottom";if(this[I7S]("drawSeries",arguments))return ;var quotes=chart[s0Z],legendColorMap={}
;for(var field in chart[q3d]){var series=chart[q3d][field],parameters=series[Q9p],panel=chart[K5D];if(parameters[K5D])panel=this[j8m][parameters[K5D]];if(!panel)continue;var yAxis=panel[n1p],bottom=panel[(Y4Z+I4p)],minMax=[parameters[i2C],parameters[v8G]];if((!parameters[i2C]&&x8A[S7S](parameters[i2C],0))||(!parameters[v8G]&&x8A[z7l](parameters[v8G],0))){var minMaxCalc=STX[(w5S+q0T+T4S+c1T)](quotes,field);if(!parameters[(e5T+q9p+w4m)]&&x8A[X7Z](parameters[i2C],0))minMax[0]=minMaxCalc[0];if(!parameters[v8G]&&x8A[j0m](parameters[v8G],0))minMax[1]=minMaxCalc[1];}
var min=minMax[0],top=panel.top,bottom=panel[f3T],height=x8A[R0C](bottom,top),t=parameters[r2l],b=parameters[N5C];if(t)top=x8A[(l0S)](t,1)?(top+t):(top+(x8A[W4C](height,t)));if(b)bottom=x8A[t3d](b,1)?(x8A[J6Z](bottom,b)):(x8A[o6m](bottom,(height*b)));var multiplier=x8A[k2Z]((bottom-top),(minMax[1]-min)),started=false,lastPoint=null,val=x=y=px=py=null,cw=this[T2T][r1d],offset=this[J2G],context=this[i8C][b6D],isStep=series[R54];context.beginPath();if(x8A[I8m](series[I4C].length,quotes.length))series[I4C]=new Array(quotes.length);var yValueCache=series[I4C],reset=false,lastVal=null,firstX=null,firstY=null;for(var i=0;x8A[L5d](i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(quote.transform&&series[(c6S+D4Z+q7m+x8A.n9S+t9D+M7S)][K0V])quote=quote.transform;val=quote[field];if(!val&&x8A[x2G](val,0)){if(isStep){yValueCache[i]=y;}
continue;}
lastVal=val;if(!isStep&&lastPoint&&x8A[f8p](lastPoint,i-1)){px=x,py=y;}
else{px=null;}
if(x8A[O64](i,0)&&this[u1p]){x=0;}
else{x=Math[F2S](x8A[L0p](i,cw))+offset;if(this[u1p]&&x8A[v9p](i,quotes.length-1))x+=this[J2G];}
if(x8A[S4m](firstX,null))firstX=x;if(isStep&&started){context.lineTo(x,y);}
if(series[Q9p][K0V]){y=this[b5p](val,panel);}
else{y=x8A[M0l](bottom,((val-min)*multiplier));}
if(x8A[S0S](firstY,null))firstY=y;if(x8A[u6p](px,null)){var vector={x0:px,x1:x,y0:py,y1:y}
;for(;x8A[V44](lastPoint,i);lastPoint++){var xInt=Math[F2S](x8A[N14](lastPoint,cw))+offset,yInt=STX[E9D](vector,xInt);yValueCache[lastPoint]=yInt;}
}
yValueCache[i]=y;if(x8A[b8Z](y,top)){y=top;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(x8A[H4T](y,bottom)){y=bottom;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!started){started=true;context.moveTo(x,y);}
else{context.lineTo(x,y);}
lastPoint=i;}
context.lineWidth=1;if(parameters.width)context.lineWidth=parameters.width;if(series[(Q8G+Z8T+y6C+u4d)])context.lineWidth=x8A[t4S](context.lineWidth,2);context.strokeStyle=this[k3p];if(parameters[G0S])context.strokeStyle=parameters[G0S];context.stroke();if(x8A[J7T](series[(c6S+x8Z+f64+x8A.n9S+Z8D)][j6C],"mountain")){context.lineTo(x,bottom);context.lineTo(firstX,bottom);if(x8A[o5S](firstY,bottom))firstY=bottom;context.lineTo(firstX,firstY);if(series[Q9p].fillStyle)context.fillStyle=series[Q9p].fillStyle;context.fill();}
context.closePath();if(series[Q9p][K0V]){if(yAxis[I5D]){txt=yAxis[I5D](this,panel,lastVal);}
else{txt=this[w44](lastVal,panel);}
var y=this[b5p](lastVal,panel);this[z0D](panel,txt,y,context.strokeStyle,"#FFFFFF");}
legendColorMap[field]=context.strokeStyle;}
if(chart[z1l]&&series){this[d0S](chart,legendColorMap);}
this[A3d]("drawSeries",arguments);}
;STXChart[(q0T+M7S+i7Z+D4Z+E9l+h4d)]=function(interval){var E5D="C9e",T84="x9e",H6d="K9e";if(x8A[H6d](interval,r2m))return G1d;if(x8A[T84](interval,f6D))return G1d;if(x8A[E5D](interval,C9l))return G1d;return O7T;}
;STXChart.prototype.isDailyInterval=function(interval){var d8m="S9e",D9m="F9e",E3l="W9e";if(x8A[E3l](interval,r2m))return G1d;if(x8A[D9m](interval,f6D))return G1d;if(x8A[d8m](interval,C9l))return G1d;return O7T;}
;STXChart.prototype.setPeriodicityV2=function(period,interval,cb){var B4C="cc",M2S="d6e",u9C="m6e",h0G="a6e",X2d="A6e",m8D="U7",h5Z="E7e",d9D="M7e",Q8V="g7e",b9S="e7e",r3p="f7e",t1p="v7e",k1G="idth",C14="dleW",F04="X7e",Q0Z="B7e",w4l="O7e",n0d="R7e",D2l="Ticks",M9l="P7e",T8G="red",n8d="geO",a5C="w7e",j8V="ilyI",q8T="J7e",U0T="T7e",d2D="t7e";if(this[I7S]("setPeriodicityV2",arguments))return ;var switchInterval=false;if(interval){if(x8A[d2D](interval,"year")){interval="month";if(!period)period=1;period=x8A[U0T](period,12);}
var getDifferentData=false;if(x8A[q8T](this[o6S](interval),this[o6S](this[T2T][p0l]))||this[a6p])getDifferentData=true;if(!this[(S4d+K0C+j8V+T4S+x8A.n9S+m5Z+j2d+D4Z+v4S)](this[T2T][p0l])){if(x8A[a5C](this[T2T][p0l],interval))getDifferentData=true;}
if(getDifferentData){this[(v4S+o4D+x8A.n9S)][p0l]=interval;this[T2T][f9T]=period;this[(G7C+a0Z+n8d+x8A.d5Z+r4Z+T8G)]("layout");if(this[B9Z]){this[B9Z]();}
else if(this[q4G]){for(var chartName in this[g3C]){var chart=this[g3C][chartName];if(chart[B3p])this[q4G][G3T](chart[(M7S+r5C)],chart,cb);}
return ;}
if(cb)cb(null);return ;}
this[T2T][p0l]=interval;}
for(var chartName in this[g3C]){var chart=this[g3C][chartName],dt,pos=Math[J8C](x8A[M9l](chart[(p54+O4T+D2l)],2)),rightAligned=null;chart[r7l]=Math[J8C](x8A[n0d]((this[i8C].width/this[T2T][r1d]),.499));var centerMe=true,rightAligned=false;if(x8A[w4l](chart[z44],chart[r7l]))centerMe=false;else if(chart[s0Z]&&!chart[s0Z][pos]){centerMe=false;rightAligned=x8A[Q0Z](chart[z44],chart[O9p].length);}
if(centerMe&&chart[s0Z]&&x8A[(q0T+k1m+m5Z)](chart[s0Z].length,0)){if(x8A[F04](chart[(w5S+r9Z+s8Z+q0T+G9C+M7S)],((Math[J8C]((this[i8C].width/this[T2T][(F5l+C14+k1G)])-.499)-1)/2))){pos=x8A[t1p](chart[s0Z].length,1);}
if(x8A[r3p](pos,chart[s0Z].length)){dt=chart[s0Z][x8A[(b9S)](chart[s0Z].length,1)][s9l];pos=x8A[Q8V](chart[s0Z].length,1);}
else{dt=chart[s0Z][pos][(s9l)];}
}
this[T2T][f9T]=period;this[v9m]();if(centerMe){if(chart[s0Z]&&x8A[d9D](chart[s0Z].length,0)){for(var i=x8A[h5Z](chart[O9p].length,1);x8A[(m8D+m5Z)](i,0);i--){var nd=chart[O9p][i][s9l];if(x8A[X2d](nd[o5l](),dt[o5l]())){chart[z44]=(x8A[h0G](chart[O9p].length,i))+pos;break;}
}
}
}
else if(!rightAligned){var wsInTicks=Math[J8C](x8A[u9C](this[h3T][i64],this[T2T][r1d]));chart[z44]=x8A[M2S](chart[r7l],wsInTicks);}
else{chart[z44]=chart[O9p].length+rightAligned;}
}
if(this[g1d])this[s2Z]();this[(x8A.d5Z+t0V+t4m+W1Z+B4C+p9S+x8A.c7S+x8A.c7S+m5Z+W4Z)]((v7G+H44));if(cb)cb(null);if(this[A3d]("setPeriodicityV2",arguments))return ;}
;STXChart.prototype.drawVectors=function(){var p6d="u6e",T6S="q6e";if(this[M1l])return ;if(this[I7S]("drawVectors",arguments))return ;this[M1l]=true;if(!this[i8C][Q0d]){var tmpPanels={}
;for(var i=0;x8A[T6S](i,this[F0l].length);i++){var drawing=this[F0l][i],panelName=drawing[Z4G];if(!this[j8m][drawing[Z4G]])continue;if(!tmpPanels[panelName]){tmpPanels[panelName]=[];}
tmpPanels[panelName][K6T](drawing);}
for(var panelName in tmpPanels){this[a94](panelName);var arr=tmpPanels[panelName];for(var i=0;x8A[p6d](i,arr.length);i++){var drawing=arr[i];drawing[E1d](this[i8C][b6D]);}
this[r2p]();}
}
if(this[A3d]("drawVectors",arguments))return ;}
;STXChart.prototype.consolidatedQuote=function(quotes,position,periodicity,interval,dontRoll,alignToHour){var k2T="consolidate",U8m="u2e",G8G="q2e",h0D="d2e",Z5S="m2e",B7G="a2e",I8Z="A2e",p2S="E5e",n6C="M5e",k3l="g5e",Y2d="e5e",E24="f5e",E8T="v5",s6Z="X5e",l9T="Z4e",H2C="j4e",q4l="H6e",z5G="y6e",U5m="b6e",P0l="I6e",h7p="L6e",t1G="p6e",M4l="N6e",A5m="r6e",z1d="G6e",Y2G="Split_Close",Z64="o6e",L3m="Q6e",x9m="edQuote",G7m="z6e";if(x8A[G7m](position,0))return null;var arguments$=[quotes,position,periodicity,interval,dontRoll,alignToHour];if(this[I7S]((x8A.d5Z+F4D+A2l+G1Z+x9m),arguments$))return null;if(!dontRoll&&this[a6p])dontRoll=true;var ratio=1;if(this[T2T][A24]&&x8A[L3m](quotes[position][(d8Z+c6S+B6S+x8A.n9S+B0S+W7C+B4S+r1Z)],null)){ratio=x8A[Z64](quotes[position][Y2G],quotes[position][Y6C]);}
else if(this[T2T][A24]&&x8A[z1d](quotes[position][c9m],null)){ratio=x8A[A5m](quotes[position][c9m],quotes[position][Y6C]);}
var q=quotes[position],quote={}
;for(var field in q){quote[field]=q[field];}
if(x8A[(M4l)]("Open",quote))quote[x04]=x8A[t1G](q[(W1Z+s1p)],ratio);if(x8A[h7p]("Close",quote)&&x8A[P0l](quote[(x8A.s0m+v4S+p1D+m5Z)],null))quote[Y6C]=x8A[U5m](q[Y6C],ratio);if(x8A[z5G]("High",quote))quote[m1Z]=x8A[q4l](q[m1Z],ratio);if(x8A[H2C]("Low",quote))quote[(C9Z+B4S+f4T)]=x8A[l9T](q[l8p],ratio);function consolidate(self,p){var Y6Z="W4e",T6T="C4e",c4D="x4e",Y1Z="K4e",z8D="n4e",X1d="s4e",c4G="V4",K4l="D4e",q9C="h4e",w6S="Adj_Cl",j5Z="l4",B9C="c4e",L4l="k4e",Q1l="Y4e";if(self[T2T][A24]&&x8A[Q1l](quotes[p][Y2G],null)){ratio=x8A[(L4l)](quotes[p][Y2G],quotes[p][Y6C]);}
else if(self[T2T][A24]&&x8A[B9C](quotes[p][c9m],null)){ratio=x8A[(j5Z+m5Z)](quotes[p][(w6S+B4S+M7S+m5Z)],quotes[p][Y6C]);}
if(x8A[q9C]("High",quotes[p]))if(x8A[K4l](quotes[p][(I6Z+q0T+Z8T+g2S)]*ratio,quote[m1Z]))quote[m1Z]=x8A[(c4G+m5Z)](quotes[p][m1Z],ratio);if(x8A[X1d]("Low",quotes[p]))if(x8A[z8D](quotes[p][l8p]*ratio,quote[l8p]))quote[l8p]=x8A[Y1Z](quotes[p][l8p],ratio);quote[C1D]+=quotes[p][C1D];if(x8A[c4D]("Close",quotes[p])&&x8A[T6T](quotes[p][Y6C],null))quote[Y6C]=x8A[(Y6Z)](quotes[p][Y6C],ratio);quote[D8p]=ratio;}
function newInterval(p,interval){var B5S="w5e",P5p="J5e",f5p="T5e",A6p="t5e",E1C="S4e",P8d="F4e",d1=quotes[x8A[P8d](p,1)][s9l],d2=quotes[p][s9l];if(x8A[E1C](interval,"week")){if(x8A[A6p](d2[a8S](),d1[a8S]()))return true;}
else if(x8A[f5p](interval,"month")){if(x8A[P5p](d2[U3d](),d1[U3d]()))return true;}
else{if(x8A[B5S](d2[a8S](),d1[(Z8T+m5Z+Y0Z+D4Z+H6T)]()))return true;}
return false;}
function newIntradayInterval(position,p,periodicity,interval){var L5T="B5e",I1S="O5e",d8S="R5e",O0V="P5e",nextBar=x8A[O0V](interval,periodicity),d1=new Date(quotes[position][s9l]);d1[s7d](d1[N6S]()+nextBar);var d2=quotes[p][s9l];if(alignToHour){if(x8A[d8S](quotes[position][s9l][N6S](),nextBar)){if(!(x8A[I1S](d2[N6S](),nextBar))){return true;}
}
}
if(x8A[L5T](d2[o5l](),d1[o5l]()))return true;return false;}
var p=position;if((x8A[(t6G+m5Z)](interval,"week")||x8A[s6Z](interval,"month"))&&!dontRoll){for(var i=1;x8A[(E8T+m5Z)](i,periodicity);i++){while(x8A[E24](p+1,quotes.length)&&!newInterval(p+1,interval)){p++;consolidate(this,p);}
if(x8A[Y2d](i,periodicity)){p++;if(x8A[k3l](p,quotes.length))consolidate(this,p);}
}
}
else if(!this[o6S](interval)&&x8A[n6C](interval,(y0m+T2S))&&x8A[p2S](periodicity,1)){for(var i=1;x8A[(c3S+Z3m+m5Z)](i,periodicity);i++){p=position+i;if(x8A[I8Z](p,quotes.length)&&newIntradayInterval(position,p,periodicity,interval)){p--;break;}
if(x8A[B7G](p,0)&&x8A[Z5S](p,quotes.length)){consolidate(this,p);}
}
}
else{for(var i=1;x8A[h0D](i,periodicity);i++){p=position+i;if(x8A[G8G](p,0)&&x8A[U8m](p,quotes.length)){consolidate(this,p);}
}
}
for(var i in this[c3C]){var plugin=this[c3C][i];if(plugin[k2T])plugin[k2T](quotes,position,p,quote);}
this[A3d]("consolidatedQuote",arguments$);return {"quote":quote,"position":p+1}
;}
;z(x8A.n0Z);Q(x8A.v0Z);G(x8A.X0Z);N(x8A.g0Z);L(x8A.M0Z);E(x8A.Q1T);U(Z1T);STXChart.prototype.displayChart=function(chart){var v74="scatter",p6D="v8c",F0m="hexToRgba",z1p="X8c",V4G="8c",s4T="B8c",I8d="O8c",u9G="_tr",V4T="seli",h3S="_ba",V2d="R8c",c2D="P8c",d4C="w8c",E5S="asS",V4C="J8c",O5G="drawShadows",R84="_up",M6T="D0c",P2G="0c",G1C="SEDO",L1C="l0c",h3G="c0c",H6l="EVEN",Z2T="LOSE",H14="k0c",G1S="Y0c",B0l="Z0c",a4C="drawCandlesHighPerformance",v8S="_even",Q5C="ow_candle",F6Z="x_h",A7C="_do",M5D="hollow",R4Z="ance",D3Z="Perf",K8S="sHigh",g5T="Shad",B0Z="drawShadowsHighPerformance",Y6m="drawCandles",h5D="wSh",J6p="j0c",z5l="ormance",n2C="rf",S4D="ChartHi",Y1S="awBa",k34="awB",I1G="drawBarChart",S04="H2e",V6T="I2e",Y3Z="drawBarChartHighPerformance",i7D="L2e",m1S="drawWaveChart",c7C="p2e",O8p="drawMountainChart",V7p="N2e",v0V="drawLineChart",Q9T="r2e",o5G="colorFunction",f6p="G2e",K7d="o2e",E5d="customChart",o2l="Q2e",c9S="z2e";this[E4D]=Math[J8C](x8A[c9S](this[T2T][r1d],this[j1m]));if(!(x8A[o2l](this[E4D],2))){this[E4D]+=1;}
if(this[I7S]("displayChart",arguments))return ;this[i8C][K4S]=[];var chartType=this[T2T][j6C],colorFunction=null;if(chart[E5d]){if(x8A[K7d](chart[E5d][j6C],null))chartType=chart[E5d][j6C];if(x8A[f6p](chart[E5d][o5G],null))colorFunction=chart[E5d][o5G];}
if(this[T2T][P6d]){this[(U4T+U5D+c3S+T4S+W4Z+m5Z+x8A.c7S+f84)](chart);}
if(x8A[Q9T](chartType,"line")){this[v0V](chart,"stx_line_chart");}
else if(x8A[V7p](chartType,"mountain")){this[i8C][K4S]=null;this[O8p](chart);}
else if(x8A[c7C](chartType,"wave")){this[m1S](chart);}
else if(x8A[i7D](chartType,"bar")){this[Y3Z](chart,"stx_line_chart");}
else if(x8A[V6T](chartType,"colored_line")){var stxLineUpColor=this[i5S]("stx_line_up"),stxLineDownColor=this[i5S]("stx_line_down"),stxLineColor=this[i5S]("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){var H5T="y2e",U8S="evClo",a5T="qPr",b8m="b2e";if(x8A[b8m](quote[Y6C],quote[(q0T+a5T+U8S+M7S+m5Z)]))return stxLineUpColor;else if(x8A[H5T](quote[Y6C],quote[b7p]))return stxLineDownColor;else return stxLineColor;return null;}
;var colors=this[v0V](chart,"stx_line_chart",colorFunction);for(var c in colors)this[i8C][K4S][K6T](c);}
else if(x8A[S04](chartType,"colored_bar")){if(colorFunction){var colors=this[I1G](chart,colorFunction);for(var c in colors)this[i8C][K4S][K6T](c);}
else{this[Y3Z](chart,"stx_bar_up",STXChart[F2l]);this[(E4G+k34+D4Z+x8A.c7S+x8A.s0m+g2S+x8Z+x8A.n9S+m1Z+c3Z+m5Z+x8A.c7S+f0T+B4S+d2C+D4Z+T4S+x8A.d5Z+m5Z)](chart,"stx_bar_down",STXChart[a6G]);this[(E4G+Y1S+x8A.c7S+S4D+f4m+K4T+n2C+z5l)](chart,"stx_candle_shadow",STXChart[N2p]);this[i8C][K4S][K6T](this[i5S]("stx_bar_up"));this[i8C][K4S][K6T](this[i5S]("stx_bar_down"));}
}
else if(x8A[J6p](chartType,"hollow_candle")){if(colorFunction){this[(W5G+h5D+X0S+c9D+M7S)](chart,colorFunction);this[Y6m](chart,colorFunction,false);this[Y6m](chart,colorFunction,true);}
else{this[B0Z](chart,"stx_hollow_candle_up",STXChart[F2l]);this[(W4Z+h9d+f4T+g5T+B4S+f4T+K8S+D3Z+B4S+d2C+R4Z)](chart,(M7S+x8A.n9S+O4T+B0S+M5D+B0S+x8A.d5Z+a0Z+c0p+A7C+f4T+T4S),STXChart[a6G]);this[B0Z](chart,(M7S+x8A.n9S+F6Z+B4S+H4S+Q5C+v8S),STXChart[N2p]);var colorUp=this[i5S]("stx_hollow_candle_up"),colorDown=this[i5S]("stx_hollow_candle_down"),colorEven=this[i5S]("stx_hollow_candle_even");this[a4C](chart,colorUp,"transparent",x8A[B0l](STXChart[F2l],STXChart[p64]));this[a4C](chart,colorDown,"transparent",x8A[G1S](STXChart[a6G],STXChart[p64]));this[a4C](chart,colorEven,"transparent",x8A[H14](STXChart[(x8A.s0m+Z2T+H6l)],STXChart[p64]));this[a4C](chart,this[r6S],colorUp,x8A[h3G](STXChart[F2l],STXChart[B6G]));this[a4C](chart,this[r6S],colorDown,x8A[L1C](STXChart[(x8A.s0m+C9Z+W1Z+G1C+t9S+i1Z)],STXChart[B6G]));this[a4C](chart,this[r6S],colorEven,x8A[(g2S+P2G)](STXChart[N2p],STXChart[B6G]));this[i8C][K4S][(c6S+p9S+M7S+g2S)](colorUp);this[(G7C+x8Z+x8A.n9S)][K4S][K6T](colorDown);}
}
else if(x8A[M6T](chartType,"candle")){var coloredShadowUp=this[i5S]((J8d+B0S+B6C+N1m+v4S+m5Z+I94+x8A.w9G+B2G+f4T+R84)),coloredShadowDown=this[i5S]("stx_candle_shadow_down"),coloredShadow=(x8A[(C1S+s9p+x8A.d5Z)](coloredShadowUp,coloredShadowDown));if(!colorFunction&&coloredShadow){var stxCandleShadow=this[i5S]("stx_candle_shadow"),stxCandleUpColor=this[i5S]("stx_candle_up"),stxCandleDownColor=this[i5S]("stx_candle_down"),stxCandleUp=this[r2G]("stx_candle_up"),stxCandleDown=this[r2G]("stx_candle_down");colorFunction=function(stx,quote,mode){var V0Z="T8c",i5l="t8c",P44="S0c",h24="F0c",L4D="C0c",p5Z="x0c",p34="K0c",p4d="n0c",t1m="s0c";if(x8A[t1m](mode,"shadow")){if(coloredShadow){if(x8A[p4d](quote[Y6C],quote[x04]))return coloredShadowUp;else if(x8A[p34](quote[Y6C],quote[x04]))return coloredShadowDown;}
return stxCandleShadow;}
else if(x8A[p5Z](mode,"solid")){if(x8A[L4D](quote[Y6C],quote[x04]))return stxCandleUpColor;else if(x8A[(t9S+s9p+x8A.d5Z)](quote[Y6C],quote[x04]))return stxCandleDownColor;else if(x8A[h24](quote[Y6C],quote[x04]))return stxCandleShadow;}
else if(x8A[P44](mode,"outline")){var styleArray;if(x8A[i5l](quote[Y6C],quote[x04]))styleArray=stxCandleUp;else if(x8A[V0Z](quote[Y6C],quote[x04]))styleArray=stxCandleDown;else return null;var borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray["borderLeftColor"];return borderColor;}
return null;}
;}
if(colorFunction){this[O5G](chart,colorFunction);this[Y6m](chart,colorFunction,false);if(x8A[V4C](this[E4D],3))this[Y6m](chart,colorFunction,true);}
else{this[B0Z](chart,"stx_candle_shadow");var styleArray=this[(x8A.d5Z+D4Z+T4S+U4T+E5S+i9T+v4S+m5Z)]("stx_candle_up"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray["borderLeftColor"];if(x8A[d4C](this[E4D],3))borderColor=null;this[a4C](chart,this[i5S]("stx_candle_up"),borderColor,STXChart[B6G]);this[i8C][K4S][K6T](styleArray[G0S]);var styleArray=this[r2G]("stx_candle_down"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray["borderLeftColor"];if(x8A[c2D](this[E4D],3))borderColor=null;this[a4C](chart,this[i5S]("stx_candle_down"),borderColor,STXChart[p64]);this[i8C][K4S][K6T](styleArray[G0S]);}
}
else if(x8A[V2d](chartType,"baseline_delta")){this[v0V](chart,(M7S+x8A.n9S+O4T+h3S+V4T+T4S+m5Z+u9G+t0S+m5Z));var baseline=this[P2l](chart[R0V],chart[K5D]);if(baseline){var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:"Close",threshold:chart[R0V],color:this[i5S](styles[s]),direction:(x8A[I8d](s,(B4S+z24+x8A.c7S))?1:-1),edgeHighlight:this[i5S](styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this[r2G](styles[s]).width,10)+0.1,opacity:1}
}
,color=parameters[G0S];if(color&&x8A[s4T](color,"transparent")){var gradient=chart[b6D].createLinearGradient(0,(x8A[(q0T+V4G)](s,"over")?0:x8A[z1p](2,baseline)),0,baseline);gradient.addColorStop(0,STX[F0m](color,60));gradient.addColorStop(1,STX[F0m](color,10));parameters[G0S]=gradient;parameters[q0p]=1;}
STX[O5l][L7l](this,chart[s0Z],parameters);this[i8C][K4S][K6T](color);}
}
this[X9d](0,1,baseline,baseline,this[r6S],"line",chart[b6D],true,{pattern:"solid",lineWidth:"1.1",opacity:1}
);this[X9d](0,1,baseline,baseline,this[i5S]("stx_baseline"),"line",chart[b6D],true,{pattern:"dotted",lineWidth:(f3p+W8p+H9p),opacity:.5}
);}
else if(x8A[p6D](chartType,"scatterplot")){this[v74](chart);}
this[b04](chart);if(this[A3d]("displayChart",arguments))return ;}
;STXChart.prototype.calculateATR=function(chart,period){var C0D="a1c",U1p="atr",R0D="trueRange",n1d="A1c",R7S="U8c",R2p="E8c",u4G="M8c",t2C="g8c",W6Z="e8c",C1Z="f8c";if(!period)period=20;var total=0;for(var i=1;x8A[C1Z](i,chart[O9p].length);i++){var prices=chart[O9p][i],pd=chart[O9p][x8A[W6Z](i,1)],trueRange=Math[H0S](Math[H0S](x8A[t2C](prices[m1Z],prices[l8p]),x8A[u4G](prices[m1Z],pd[Y6C])),x8A[R2p](pd[Y6C],prices[l8p]));total+=trueRange;if(x8A[R7S](i,period))total-=chart[O9p][x8A[n1d](i,period)][R0D];prices[R0D]=trueRange;prices[U1p]=x8A[C0D](total,period);}
}
;STXChart.prototype.currentQuote=function(){var u4D="Se",n5m="q1c",E9G="d1c",J4l="m1c",quote=null;for(var i=x8A[J4l](this[i8C][O9p].length,1);x8A[E9G](i,0);i--)if(x8A[n5m](this[i8C][O9p][i],null))return this[i8C][(W4Z+a5Z+u4D+x8A.n9S)][i];return null;}
;STXChart.prototype.correctIfOffEdge=function(theChart){var g2m="data",a1m="L1c",q9T="p1c",G14="N1c",X54="r1c",t14="G1c",O8C="o1c",o3G="Q1c",V0T="lowSc",a8Z="z1c",f44="u1c",X8G="ound",X1S="Of",E8C="If";if(this[I7S]((A3C+x8A.c7S+x8A.c7S+m5Z+x8A.d5Z+x8A.n9S+E8C+X1S+f0T+c7Z+W4Z+Z8T+m5Z),arguments))return ;for(var chartName in this[g3C]){var chart=this[g3C][chartName],leftPad=Math[(x8A.c7S+X8G)](x8A[f44](chart[r7l],3));if(x8A[a8Z](leftPad,chart[O9p].length))leftPad=chart[O9p].length;if(chart[(E3S+V0T+A0G+c3Z+D4Z+I4Z)]){var rightPad=x8A[o3G](chart[r7l],leftPad);if(x8A[O8C](chart[r7l]-rightPad,chart[O9p].length)){rightPad=x8A[t14](chart[r7l],chart[O9p].length);}
if(x8A[X54](chart[z44]-rightPad,chart[O9p].length)){chart[(M7S+x8A.d5Z+x8A.c7S+B4S+H4S)]=chart[O9p].length+rightPad;}
if(x8A[G14](chart[z44],leftPad)){chart[z44]=leftPad;}
}
else{if(x8A[q9T](chart[z44],leftPad)){chart[z44]=leftPad;}
if(x8A[a1m](chart[z44],chart[(g2m+d8Z+m5Z+x8A.n9S)].length)){chart[z44]=chart[O9p].length;}
}
}
this[A3d]("correctIfOffEdge",arguments);}
;STXChart.prototype.createDataSegment=function(theChart){var h9l="a3c",S5S="A3c",f6Z="U1c",k6D="b1c",s8S="I1c";if(this[I7S]("createDataSegment",arguments))return ;for(var chartName in this[(x8A.d5Z+g2S+x8Z+x8A.n9S+M7S)]){var chart=this[g3C][chartName];if(theChart)chart=theChart;chart[s0Z]=[];chart[R0V]=null;for(var i=0;x8A[s8S](i,chart[r7l]);i++){position=x8A[(k6D)](chart[O9p].length,chart[(M7S+b2l+B4S+H4S)],i);if(x8A[(f6Z)](position,chart[O9p].length)&&x8A[S5S](position,0)){chart[s0Z][K6T](chart[O9p][position]);if(!chart[R0V])chart[R0V]=chart[(W4Z+D4Z+x8A.n9S+P7l)][position][b7p];}
else if(x8A[h9l](position,0)){chart[s0Z][(c6S+p9S+M7S+g2S)](null);}
}
if(theChart)break;}
this[(O3G+j1D+W4Z)]("createDataSegment",arguments);}
;STXChart.prototype.leftTick=function(){var x6Z="m3c";return x8A[x6Z](this[i8C][O9p].length,this[(x8A.d5Z+x8A.w9G+J5d)][z44]);}
;STXChart.prototype.getStartDateOffset=function(){var l8C="q3c",v1D="d3c";for(var ds=0;x8A[v1D](ds,this[i8C][s0Z].length);ds++){if(x8A[l8C](this[(x8A.J5m+J5d)][s0Z][ds],null)){return ds;}
}
return 0;}
;STXChart.prototype.setStartDate=function(dt){var m2C="Q3c",c4T="z3c",c5Z="u3";for(var i=0;x8A[(c5Z+x8A.d5Z)](i,this[i8C][O9p].length);i++){var bar=this[i8C][O9p][i];if(x8A[c4T](bar[s9l][o5l](),dt[o5l]())){this[i8C][(M7S+b2l+U5D+v4S)]=x8A[m2C](this[i8C][O9p].length,i);this[s2Z]();return ;}
}
}
;STXChart.prototype.clearPixelCache=function(){var o9d="o3c";for(var x in this[j8m]){var panel=this[j8m][x];panel[A2T]=null;panel[O8m]=null;panel[s5C]=1000000;panel[b0V]=-1;}
for(var chartName in this[g3C]){var chart=this[g3C][chartName];if(!chart[O9p])continue;for(var i=0;x8A[o9d](i,chart[O9p].length);i++){chart[O9p][i][d6S]={}
;}
}
}
;STXChart.prototype.createYAxisLabel=function(panel,txt,y,backgroundColor,color,ctx){var B1G="m9c",p4Z="a9c",B3D="9c",w94="U3c",R2C="E3c",O5Z="M3c",D9D="g3",D8V="p3c",k0S="r3c",v7m="G3c",context=ctx?ctx:this[i8C][b6D],margin=3,height=this[D6C]("stx_yaxis")+x8A[v7m](margin,2);this[W4G]("stx_yaxis",context);try{var width=context.measureText(txt).width+x8A[k0S](margin,2);}
catch(e){var H0m="N3c";width=x8A[H0m](this[(x8A.d5Z+g2S+D4Z+x8A.c7S+x8A.n9S)][i6S],this[B7p]);}
var x=x8A[D8V]((this[i8C][i6S]-this[(B7p)]),margin,3);if(x8A[(D9D+x8A.d5Z)](y+(height/2),panel[f3T]))y=x8A[O5Z](panel[f3T],(height/2));if(x8A[R2C](y-(height/2),panel.top))y=panel.top+(x8A[w94](height,2));context.fillStyle=backgroundColor;STX[this[F4C]](context,x,x8A[(x8A.X8m+B3D)](y,(height/2)),width,height,3,true,false,"left");context.textBaseline="middle";context.fillStyle=color?color:STX[n44](backgroundColor);if(x8A[p4Z](context.fillStyle,backgroundColor)){if(x8A[B1G](backgroundColor[x6m](),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,x+margin,y+1);}
;STXChart.prototype.createXAxisLabel=function(panel,txt,x,backgroundColor,color){var Q0S="p9c",w8T="N9c",d64="r9c",o3Z="G9c",c7l="roundRect",f5G="o9c",V7G="Q9c",y8p="z9c",u54="u9c",o1m="q9c",T4T="asFon",y5l="d9c",context=this[(G7C+D4Z+J5d)][b6D],margin=2,fontstyle="stx-float-date",height=this[D6C](fontstyle)+x8A[y5l](margin,2);this[(x8A.d5Z+D4Z+T4S+U4T+T4T+x8A.n9S)](fontstyle,context);try{var width=context.measureText(txt).width+x8A[o1m](margin,2);}
catch(e){width=0;}
var y=panel.top+panel.height-height;if(x8A[u54](x+(width/2),panel[X2S]))x=x8A[y8p](panel[X2S],(width/2));if(x8A[V7G](x-(width/2),panel[w1T]))x=panel[w1T]+(x8A[f5G](width,2));context.fillStyle=backgroundColor;STX[c7l](context,x8A[o3Z](x,(width/2)),y,width,height,3,true,false);context.textBaseline=(x8A.n9S+e4D);context.fillStyle=color?color:STX[n44](backgroundColor);if(x8A[d64](context.fillStyle,backgroundColor)){if(x8A[w8T](backgroundColor[x6m](),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,x8A[Q0S](x,width/2,margin),y+margin);}
;STXChart.prototype.drawCurrentHR=function(){var X6Z="U9c",C0p="E9c",d9G="M9c",f9Z="g9c";if(this[I7S]("drawCurrentHR",arguments))return ;var backgroundColor,color,currentClose;for(var chartName in this[g3C]){var chart=this[g3C][chartName],panel=chart[(K5D)],yAxis=panel[n1p],whichSet=yAxis[f1D];if(!whichSet)whichSet="dataSet";var l=chart[whichSet].length;if(l){var quote=chart[whichSet][x8A[f9Z](l,1)],prevClose=currentClose=quote[(x8A.s0m+v4S+B4S+r1Z)];if(x8A[d9G](chart[O9p].length,2)){var quote2=chart[whichSet][x8A[C0p](l,2)];prevClose=quote2[Y6C];}
if(x8A[X6Z](currentClose,prevClose)){backgroundColor=this[r2G]("stx_current_hr_down")["backgroundColor"];color=this[r2G]("stx_current_hr_down")["color"];}
else{backgroundColor=this[r2G]("stx_current_hr_up")["backgroundColor"];color=this[r2G]("stx_current_hr_up")["color"];}
if(quote.transform)quote=quote.transform;var txt;if(yAxis[I5D]){txt=yAxis[I5D](this,panel,quote[Y6C]);}
else{txt=this[w44](quote[Y6C],panel);}
var y=this[b5p](quote[Y6C],panel);this[z0D](panel,txt,y,backgroundColor,color);}
}
this[A3d]("drawCurrentHR",arguments);}
;STXChart.prototype.getDefaultColor=function(){var u5l=.65,n7l="A7c",W2Z="hsv",z5m="tagName",X6p="00";this[k3p]=(t6p+s9p+s9p+X6p+s9p+s9p);var bgColor=l1d,div=this[i8C][h7C];while(!bgColor||STX[T4l](bgColor)){var cStyle=getComputedStyle(div);if(!cStyle)return ;bgColor=cStyle[z6T];if(STX[T4l](bgColor))bgColor=k8p;div=div[Z54];if(!div||!div[z5m])break;}
if(bgColor){this[r6S]=bgColor;if(!STX[T4l](bgColor)){var hsv=STX[W2Z](bgColor),v=hsv[x8A.X0Z];if(x8A[n7l](v,u5l))this[k3p]=N4D;else this[k3p]=U1T;}
else{this[k3p]=N4D;}
}
}
;STXChart.prototype.startAsyncAction=function(){var U5S="ush",i74="a7c";if(x8A[i74](this[e1p],l1d))this[e1p]=[];this[e1p][(c6S+U5S)](G1d);}
;STXChart.prototype.registerChartDrawnCallback=function(fc){var k0T="backs",P7d="m7c";if(x8A[P7d](this[I6D],l1d))this[(U1Z+H6T+T4S+x8A.d5Z+x8A.s0m+D4Z+v4S+v4S+k0T)]=[];this[I6D][K6T](fc);return {fc:fc}
;}
;STXChart.prototype.unregisterChartDrawnCallback=function(obj){var G4m="fc",n7T="q7c",q8Z="d7c";for(var i=0;x8A[q8Z](i,this[I6D].length);i++){if(x8A[n7T](this[I6D][i],obj[G4m])){this[I6D][a4T](i,1);return ;}
}
}
;STXChart.prototype.makeAsyncCallbacks=function(){var j7G="z7c",U9D="u7c";if(!this[I6D])return ;if(!this[e1p]||x8A[U9D](this[e1p].length,0)){for(var i=0;x8A[j7G](i,this[I6D].length);i++){(this[I6D][i])();}
}
}
;STXChart.prototype.completeAsyncAction=function(){var j7S="lb",v2d="cC",q2d="yn";this[e1p][E5T]();this[(p54+J1Z+m6m+q2d+v2d+E3S+j7S+t0S+T2S+M7S)]();}
;STXChart.prototype.draw=function(){var f0d="makeAsyncCallbacks",X6G="checkLoadMore",h4T="rive",X5T="X7c",N3m="ome",k2m="tors",H04="awV",r2Z="displayStudies",V5l="drawOver",l3Z="gins",g9D="plu",k7S="splayCh",b5D="drawUnder",h1C="xis",H2G="zeDi",W4l="ia",C2p="init",T7d="getDefaultColor",X6D="Size",h8C="Font",d0l="etC",A9m="o7c",h9p="Q7c";if(!this[i8C].canvas)return ;if(!this[(G7C+D4Z+J5d)][O9p])return ;if(x8A[h9p](this[i8C][z3C],0))return ;this[(J2G)]=x8A[A9m](this[(v4S+Z6Z+l7D+x8A.n9S)][r1d],this[j1m],2);STX[f4Z](this[i8C].canvas,this);if(this[I7S]("draw",arguments))return ;if(!this[S84]){this[S84]=this[(Z8T+d0l+D4Z+T4S+U0p+M7S+h8C+X6D)]("stx_xaxis")+4;if(this[i8C][Y4S][e5Z]||this[l8G])this[S84]+=3;}
this[T7d]();this[M1l]=false;this[P9Z]();for(var chartName in this[g3C]){var chart=this[g3C][chartName];this[P04]();this[S7d]();this[(C2p+W4l+B6S+H2G+E4Z+f84)](chart);var axisRepresentation=this[U6p](chart);this[(W4Z+Z9Z+r3S+x8A.X8m+h1C)](chart,axisRepresentation);for(var i in this[c3C]){var plugin=this[c3C][i];if(plugin[s2T]){if(plugin[b5D])plugin[b5D](this,chart);}
}
this[(W4Z+q0T+k7S+x8Z+x8A.n9S)](chart);this[f7m](chart);for(var i in this[(c6S+v4S+p9S+Z8T+q0T+G6p)]){var plugin=this[(g9D+l3Z)][i];if(plugin[s2T]){if(plugin[V5l])plugin[V5l](this,chart);}
}
}
STX[O5l][r2Z](this);this[L5m]();this[(W4Z+x8A.c7S+H04+D8G+k2m)]();this[o64]();this[g1d]=true;if(this[i6Z][(g2S+N3m)]){if(x8A[X5T](this[i8C][z44]-1,this[i8C][r7l])){this[i6Z][v44][(M7S+i9T+v4S+m5Z)][s2T]="block";}
else{this[i6Z][v44][c4l][s2T]="none";}
}
for(var chartName in this[g3C]){var chart=this[g3C][chartName];if(this[q4G])this[(p6S+p9S+Z6S+i7Z+h4T+x8A.c7S)][X6G](chart);}
this[A3d]("draw",arguments);this[f0d]();}
;STXChart.prototype.adjustBackingStore=function(canvas,context){var w3D="M7c",y9l="g7c",j7C="is_chrome",L7S="e7c",i9p="f7c",U2p="backingStorePixelRatio",F3m="oBackingStorePixelRatio",P3G="Pixe",R1D="ingS",p3C="mozBackingStorePixelRatio",q3G="webkitBackingStorePixelRatio",M1p="v7c";this[Q4l]=window[Q4l]||1;if(x8A[M1p](this[Q4l],1.0))this[Q4l]=1.0;backingStoreRatio=context[q3G]||context[p3C]||context[(w5S+M7S+j7d+G9C+R1D+x8A.n9S+B4S+C1d+P3G+v4S+r0Z+D4Z+A4S+B4S)]||context[F3m]||context[U2p]||1;ratio=x8A[i9p](this[Q4l],backingStoreRatio);if(x8A[L7S](this[Q4l],backingStoreRatio)&&(!STX[t2p]||STX[j7C])){var oldWidth=canvas.width,oldHeight=canvas.height;canvas.width=x8A[y9l](oldWidth,ratio);canvas.height=x8A[w3D](oldHeight,ratio);canvas[c4l].width=oldWidth+'px';canvas[c4l].height=oldHeight+'px';context.scale(ratio,ratio);}
}
;STXChart.prototype.resizeCanvas=function(){var E2d="vasWidt",N0T="d6c",g8C="m6c",Y1l="a6c",p5d="A6c",A3p="getSpanCandleWidth",f6C="U7c",W5T="nvasWid",w2Z="E7c",b9D="tore",W2h="ngS",T9Z="ki",m8Z="tB",z3S="jus",L3G="Store",l8S="ckin",u4p="dju",j2l="ain",canvas=this[i8C].canvas,context=this[i8C][b6D];if(canvas&&context){this[i8C][U7C].height=canvas.height=this[i8C][h7C][F0D];this[i8C][U7C].width=canvas.width=this[(G7C+S4S)][(A3C+b6p+j2l+t9D)][g44];this[(D4Z+u4p+I4Z+j7d+l8S+Z8T+L3G)](canvas,context);this[(X0S+z3S+m8Z+D4Z+x8A.d5Z+T9Z+W2h+b9D)](this[(x8A.d5Z+g2S+x8Z+x8A.n9S)][U7C],this[i8C][U7C][b6D]);}
var p=STX[a6C](this[i8C][h7C]);this[i8C][w1T]=p[O4T];this.chart.top=p[H6T];this[(G7C+x8Z+x8A.n9S)][i6S]=this[i8C][h7C][g44];this[i8C].width=x8A[w2Z](this[i8C][(x8A.d5Z+D4Z+W5T+u4S)],this[m2T]);this[(x8A.d5Z+x8A.w9G+J5d)][(x8A.c7S+q0T+Z8T+g2S+x8A.n9S)]=p[O4T]+this[i8C].width;this[i8C][L1S]=p[O4T]+this[i8C][(x8A.d5Z+D4Z+T4S+U4T+U1Z+t9S+t6l+x8A.n9S+g2S)];this[i8C][z3C]=this[i8C][h7C][F0D];this[i8C][f3T]=p[H6T]+this[i8C][z3C];var candleWidth=this[T2T][r1d];if(typeof (candleWidth)=="undefined")candleWidth=8;for(var chartName in this[g3C]){var chart=this[g3C][chartName];if(this[T2T][o6D]&&x8A[f6C](this[(v4S+Z6Z+l7D+x8A.n9S)][o6D],"")){this[z5D](this[A3p](this[T2T][o6D]),chart);}
else{this[z5D](candleWidth,chart);if(x8A[p5d](chart[z44],chart[(w5S+D4Z+O4T+r4m+M7S)])){var wsInTicks=Math[J8C](x8A[Y1l](this[h3T][i64],this[T2T][r1d]));chart[z44]=x8A[g8C](chart[r7l],wsInTicks);}
}
}
var margin=0,x=x8A[N0T]((this[i8C][(x8A.d5Z+a0Z+E2d+g2S)]-this[(a2S+C9Z+x8S)]),margin);this[(B3G+x8A.c7S+B4S+i44)][a3m][c4l][w1T]=x+(T5G);}
;STXChart.prototype.setCandleWidth=function(newCandleWidth,chart){var o8S="q6c",A9G="dt";if(!chart)chart=this[i8C];this[T2T][(x8A.d5Z+a0Z+c0p+d9S+A9G+g2S)]=newCandleWidth;chart[r7l]=Math[J8C](x8A[o8S]((this[i8C].width/newCandleWidth),.499));}
;STXChart.prototype.resizeChart=function(){var H34="zed",o1d="In";this[g9G]();this[M9Z]();if(this[(W4Z+S4d+c6S+v4S+D4Z+H6T+o1d+q0T+x8A.n9S+q0T+D4Z+v4S+q0T+H34)])this[s2Z]();}
;STXChart.prototype.calculateMinutesInSession=function(chart){var h6m="z6c",b7d="u6c",minutes=x8A[b7d]((chart[O1D]-chart[(Y4Z+G4D+q0T+T4S+I6Z+B4S+q14)]),G9T);minutes+=chart[J7d];minutes-=chart[j3m];if(x8A[h6m](chart[J7d],m9T))minutes++;chart[v94]=minutes;}
;STXChart.prototype.newChart=function(symbol,masterData,chart,cb){var b8S="sy",F1Z="oteD";if(!chart)chart=this[i8C];var prevSymbol=chart[B3p];if(symbol)chart[B3p]=symbol;if(!masterData&&this[q4G]){this[(p6S+p9S+F1Z+E0d+U4T+t9D)][G3T](symbol,chart,function(err){if(err)chart[(M7S+H6T+S24+U5D)]=prevSymbol;if(cb)cb(err);}
);}
else{if(!chart[(b8S+w5S+R1G)])chart[(M7S+z7G+B4S+v4S)]=R9S;this[z4S](masterData,chart);this[v9m]();this[z7S]();this[(W4Z+x8A.c7S+D4Z+f4T)]();if(cb)cb();}
}
;STXChart.prototype.setMasterData=function(masterData,chart){var e6C="g6c",q6C="e6c",v04="f6c",Z3d="G6c",z74="o6c",U1m="Q6c",L4T="rDa",t1d="nSession",i5Z="teMi";if(!chart)chart=this[i8C];this[(x8A.d5Z+D4Z+v4S+x8A.d5Z+L94+D4Z+i5Z+T4S+a6Z+M7S+N3Z+t1d)](chart);chart[(w5S+U1Z+x8A.n9S+m5Z+L4T+J3S)]=masterData;if(x8A[U1m](chart[W0d],"chart"))this[L4C]=masterData;chart[G1T]=2;for(var i=0;masterData&&x8A[z74](i,masterData.length);i++){var quotes=masterData[i];if(quotes[s9l])quotes[o0D]=STX[R74](quotes[(i7Z+s8Z)]);else if(quotes[(K0C+A7S)])quotes[(i7Z+s8Z)]=STX[B9l](quotes[o0D]);quotes[C1D]=parseInt(quotes[C1D],10);if(quotes[Y6C]){var s=quotes[Y6C][r6l](),point=s[J7G]('.');if(point!=-1){var dp=x8A[Z3d](s.length,point,1);if(x8A[(U4T+f1m+x8A.d5Z)](dp,chart[G1T])){chart[G1T]=dp;}
}
}
if(x8A[v04](quotes[m1Z],null))delete  quotes[m1Z];if(x8A[q6C](quotes[l8p],null))delete  quotes[l8p];if(x8A[e6C](quotes[x04],null))delete  quotes[x04];}
if(!STXChart[o6S](this[T2T][p0l]))this[K3d](masterData);this[i8C][S9m]=Math[z04](10,chart[G1T]);for(var i in this[c3C]){var plugin=this[c3C][i];if(plugin[s2T]){if(plugin[z4S])plugin[z4S](this,chart);}
}
for(var s in this[i8C][q3d]){var series=this[i8C][q3d][s];if(series[Z5l]){series[Z5l](this);}
}
}
;STXChart.prototype.setDisplayDate=function(quote){var U1S="getHou",p1C="getMilliseconds",V7d="M6c",dt=quote[(s9l)],milli=x8A[V7d](dt[w5l](),I5d)+dt[p1C]();if(this[l2d]){var newDT=new timezoneJS[(i7Z+D4Z+A7S)](dt[b94](),dt[U3d](),dt[q3m](),dt[(U1S+o5d)](),dt[N6S](),this[l2d]);dt=new Date(newDT[o5l]()+milli);}
if(this[L24]){var newDT=new timezoneJS[o0D](dt[o5l](),this[L24]);dt=new Date(newDT[b94](),newDT[U3d](),newDT[q3m](),newDT[x8p](),newDT[N6S]());dt=new Date(dt[o5l]()+milli);}
quote[w0m]=dt;}
;STXChart.prototype.setDisplayDates=function(masterData){var N8T="E6c";for(var i=0;x8A[N8T](i,masterData.length);i++){var quote=masterData[i];if(quote[s9l])this[F8m](quote);}
}
;STXChart.prototype.streamTrade=function(price,volume,now){var m5S="u4c",I1d="q4c",j5p="d4c",N9p="m4c",k0d="a4c",r9S="endMas",T3l="pp",T94="A4c",B2p="6c",md=this[L4C];if(x8A[(c3S+B2p)](md,null)||x8A[T94](md.length,0)){if(!now)now=new Date();var quote={Date:STX[(b3T+H6T+M34+z0l+g2S+l4C+w5S)](now),DT:now,Open:price,Close:price,High:price,Low:price,Volume:volume}
;this[(D4Z+T3l+r9S+x8A.n9S+A84+a5Z)]([quote]);}
else{if(!now)now=Date[j5S]();var quote=md[x8A[k0d](md.length,1)],next=this[A4Z](quote[(s9l)]);if(x8A[N9p](now,next[o5l]())){quote[Y6C]=price;quote[C1D]+=volume;if(x8A[j5p](price,quote[m1Z]))quote[m1Z]=price;if(x8A[I1d](price,quote[l8p]))quote[l8p]=price;this[r0d]([quote]);}
else{var next2=this[A4Z](next),gaps=[];while(x8A[(m5S)](next2,now)){var gap={Date:STX[R74](next),DT:next,Close:quote[Y6C],Open:quote[Y6C],High:quote[Y6C],Low:quote[Y6C],Volume:0}
;gaps[K6T](gap);next=next2;next2=this[A4Z](next);}
quote={Date:STX[R74](next),DT:next,Open:price,Close:price,High:price,Low:price,Volume:volume}
;gaps[K6T](quote);this[r0d](gaps);}
}
}
;STXChart.prototype.appendMasterData=function(appendQuotes,chart){var k0V="maxWait",U24="timeout",E3d="count",D4C="streamParameters",g0p="eateDa",r3m="y4c",S2C="app",B7T="b4c",P1p="I4c",S6C="L4c",w4D="p4c",q8D="N4c",c9G="G4c",d4Z="o4c",j9m="hmm",A04="md",a4d="yy",o7T="Q4c",B3C="ster",p9l="z4c",S5m=1553443,J1l=3272657,y8C=1793003564,Y4d=(0x18C<(0x157,112)?(0xCD,1.640E2):(38.,0x233)>31?(88.,940719143):(100,0x79)>=(119,0x23E)?(5.7E1,'g'):(0x125,41.1E1));if(this[I7S]("appendMasterData",arguments))return ;if(!appendQuotes||!appendQuotes.length)return ;var dt=appendQuotes[0][s9l];if(!dt)dt=STX[B9l](appendQuotes[0][o0D]);if(!chart)chart=this[i8C];var h2h=Y4d,Q2h=y8C,O2h=x8A.X0Z;for(var z2h=x8A.v0Z;x8A.L5h.g5h(z2h.toString(),z2h.toString().length,J1l)!==h2h;z2h++){colorMap[stx_volume_down].push(l1d);panel.yAxisPlotter.moveTo(c3l,x8A.g4i(borderEdge,y2S),y2);j++;O2h+=x8A.X0Z;}
if(x8A.L5h.g5h(O2h.toString(),O2h.toString().length,S5m)!==Q2h){this.transformDataSetPre(this,tmpHist);this.undoStamps.push(STX.shallowClone(this.drawingObjects));}
var masterData=chart[L4C];if(!masterData||x8A[p9l](masterData.length,0)){masterData=chart[(p54+B3C+i7Z+a5Z)]=STX[s2G](appendQuotes);for(var i=0;x8A[o7T](i,masterData.length);i++){if(masterData[i][(i7Z+s8Z)])masterData[i][(i7Z+D4Z+x8A.n9S+m5Z)]=STX[(a4d+H6T+H6T+w5S+A04+W4Z+g2S+j9m)](masterData[i][(i7Z+s8Z)]);else masterData[i][s9l]=STX[B9l](masterData[i][o0D]);masterData[i][C1D]=parseInt(masterData[i][C1D],10);if(!STXChart[o6S](this[T2T][p0l]))this[F8m](masterData[i]);}
}
else{var i=x8A[d4Z](masterData.length,1);while(x8A[c9G](i,0)){var dt2=masterData[i][s9l];if(!dt2)dt2=STX[B9l](masterData[i][o0D]);if(x8A[(x8A.c7S+K3m+x8A.d5Z)](dt2[o5l](),dt[o5l]())){var plusOne=0;if(x8A[q8D](dt2[o5l](),dt[o5l]()))plusOne=1;for(var j=0;x8A[w4D](j,appendQuotes.length);j++){if(!plusOne){if(typeof masterData[i+j]!="undefined"){if(!appendQuotes[j][(C1D)]&&masterData[i+j][C1D]){appendQuotes[j][C1D]=masterData[i+j][C1D];}
if(masterData[i+j][x04]){appendQuotes[j][x04]=masterData[i+j][x04];}
if(x8A[S6C](masterData[i+j][m1Z],appendQuotes[j][(M7T+Z8T+g2S)])){appendQuotes[j][m1Z]=masterData[i+j][m1Z];}
if(masterData[i+j][l8p]&&x8A[P1p](masterData[i+j][(G5G+f4T)],appendQuotes[j][l8p])){appendQuotes[j][l8p]=masterData[i+j][l8p];}
}
for(var field in this[i8C][q3d]){if(typeof appendQuotes[j][field]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][field]=masterData[i+j][field];}
for(var p in this[j8m]){if(this[j8m][p][r7S]){for(var sq in this[j8m][p][r7S]){var field=this[j8m][p][r7S][sq];if(typeof appendQuotes[j][field]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][field]=masterData[i+j][field];}
}
}
}
masterData[i+j+plusOne]=appendQuotes[j];if(masterData[i+j+plusOne][(i7Z+s8Z)])masterData[i+j+plusOne][o0D]=STX[R74](masterData[i+j+plusOne][s9l]);else masterData[i+j+plusOne][s9l]=STX[B9l](masterData[i+j+plusOne][o0D]);masterData[i+j+plusOne][C1D]=parseInt(masterData[i+j+plusOne][C1D],10);if(!STXChart[o6S](this[T2T][p0l]))this[F8m](this[L4C][i+j+plusOne]);if(x8A[B7T](chart[z44],chart[r7l]+1)&&plusOne)chart[z44]++;}
break;}
i--;}
for(var i in this[c3C]){var plugin=this[c3C][i];if(plugin[s2T]){if(plugin[r0d])plugin[(S2C+m5Z+T4S+W4Z+c8p+I4Z+t9D+K0C+x8A.n9S+D4Z)](this,appendQuotes,chart);}
}
}
if(!this[L4C]||x8A[r3m](this[L4C].length,0))this[(w5S+D4Z+M7S+x8A.n9S+t9D+i7Z+D4Z+x8A.n9S+D4Z)]=masterData;this[(x8A.d5Z+x8A.c7S+g0p+T7p+A7D)]();var sp=this[D4C];if(++sp[E3d]>sp[r7l]){clearTimeout(sp[U24]);this[s2Z]();sp[(A3C+p9S+T4S+x8A.n9S)]=0;sp[U24]=-1;}
else{var self=this;if(sp[U24]==-1){sp[U24]=setTimeout(function(){self[s2Z]();self[D4C][E3d]=0;self[D4C][U24]=-1;}
,sp[k0V]);}
}
this[d5m]();this[A3d]("appendMasterData",arguments);}
;STXChart.prototype.setRange=function(params,dtRight,padding,chart){var F5p="Z2c",i0G="j2c",M4S="H5c",J7D="y5c",J8S="b5c",d4D="I5c",e5G="x5c",q7p="K5c",t9p="n5c",g7m="s5c",H4Z="5c",k3G="D5c",D1l="h5c",V6C="l5c",E5l="goIntoFuture",V3T="c5c",K4d="k5c",P4D="Y5c",p8S="dtRight",B2S="Z5c",x34="dtLeft",j1Z="j5c",g4l="adjustWhiteSpace",L8Z="H4c",J9D="pty";if(STX[(S4d+c7Z+w5S+J9D)](params)){params={dtLeft:params,dtRight:dtRight,padding:padding,chart:chart,goIntoFuture:false,adjustWhiteSpace:true}
;}
if(!params[(x8A.d5Z+s0d)])params[i8C]=this[i8C];if(!params[p0S])params[p0S]=0;if(x8A[L8Z](params[g4l],false)&&x8A[j1Z](params[g4l],true))params[g4l]=true;var chart=params[i8C],ltMS=params[x34][o5l](),rtMS=null,b=x8A[B2S](chart[O9p].length,1);if(params[p8S]){rtMS=params[p8S][o5l]();for(;x8A[P4D](b,0);b--){var prices=chart[O9p][b];if(x8A[K4d](prices[(i7Z+s8Z)][(t4m+A5l+i04)](),rtMS)){break;}
}
if(x8A[V3T](b,chart[O9p].length-1)&&params[E5l]){var dt=chart[O9p][x8A[V6C](chart[O9p].length,1)][s9l];for(var i=0;x8A[D1l](i,20000);i++){if(x8A[k3G](dt[o5l](),rtMS))break;b++;dt=STX[W84][o8p](dt,this[T2T][p0l],1,this);}
}
}
if(x8A[(C1S+H4Z)](b,0))return ;for(var a=b;x8A[g7m](a,0);a--){if(x8A[t9p](a,chart[O9p].length))continue;var prices=chart[O9p][a];if(x8A[q7p](prices[s9l][o5l](),ltMS)){break;}
}
a++;var ticks=x8A[e5G](b,a,1);if(x8A[d4D](ticks,1))return ;this[T2T][r1d]=x8A[J8S]((this[i8C].width-params[p0S]),ticks);chart[r7l]=Math[J8C](x8A[J7D]((this[i8C].width/this[T2T][r1d]),.499));chart[(J0Z+x8A.c7S+h1Z)]=(x8A[M4S](chart[O9p].length,b))+Math[J8C](x8A[i0G]((this[i8C].width-params[p0S])/this[T2T][r1d],.499))-1;if(params[g4l])this[h3T][i64]=x8A[F5p]((chart[r7l]-chart[(M7S+x8A.d5Z+A0G)]),this[(v4S+D4Z+H6T+B4S+p9S+x8A.n9S)][r1d]);this[s2Z]();this[C4Z]("layout");}
;STXChart.prototype.setSpan=function(period,interval,padding,chart,useMarketTZ){var T7S="setRange",u0V="T0s",o0V="t0s",u9D="S2c",e4Z="F2c",z84="W2c",O4d="2c",W94="setTime",a1Z="K2c",y4l="n2c",G9S="s2c",B4d="V2c",E1S="h2c",f3D="l2c",l9D="c2c",o8Z="k2c",q1p="Y2c";if(!chart)chart=this[i8C];if(x8A[q1p](period,1))return ;var leftDT=new Date(chart[O9p][x8A[o8Z](chart[O9p].length,1)][s9l][o5l]());if(x8A[l9D](interval,"year")){leftDT[u6d](x8A[f3D](leftDT[b94](),period));}
else if(x8A[E1S](interval,"month")){leftDT[I2d](x8A[(i7Z+f3p+x8A.d5Z)](leftDT[(Z8T+m5Z+a4Z+g34+g2S)](),period));}
else if(x8A[B4d](interval,"day")){if(STXChart[o6S](this[T2T][p0l])){leftDT[P0S](x8A[G9S](leftDT[q3m](),period));}
else{leftDT[z0p](0,0,0,0);for(var i=0;x8A[y4l](i,period-1);i++){leftDT=STX[W84][a14](leftDT,1,this);}
var diff=0;if(useMarketTZ&&chart[(Y7l+x8A.n9S+j6S+A7D)][x8A[a1Z](chart[O9p].length,1)][w0m]){diff=x8A[(O4T+f3p+x8A.d5Z)](chart[(W4Z+G1Z+D4Z+d8Z+A7D)][chart[O9p].length-1][s9l][o5l](),chart[O9p][chart[(W4Z+D4Z+x8A.n9S+P7l)].length-1][w0m][o5l]());}
leftDT[W94](leftDT[o5l]()+diff);}
}
else if(x8A[(x8A.s0m+O4d)](interval,"week")){leftDT[(r1Z+x8A.n9S+K0C+A7S)](x8A[z84](leftDT[q3m](),(7*period)));}
else if(x8A[e4Z](interval,"hour")){leftDT[z0p](x8A[u9D](leftDT[x8p](),period));}
else if(x8A[o0V](interval,(e5T+T4S+a6Z))){leftDT[s7d](x8A[u0V](leftDT[N6S](),period));}
this[T7S](leftDT,null,padding,chart);}
;STXChart.prototype.getSpanCandleWidth=function(span){var r1l="W0s",b7T="g0s",L4Z="f0s",x3G="v0s",W8D="X0s",l9l="i0s",Q8C="B0s",n5D="O0s",C3d="R0s",l1S="Ye",b8G="0s",P8m="w0s",P9d="J0s",arr=span[Z7p](",");if(x8A[P9d](arr.length,2))return ;var num=parseFloat(arr[0]),now=new Date(),prev=new Date();if(x8A[P8m](arr[1],"year")){prev[u6d](x8A[(c3Z+b8G)](prev[(T0D+C7Z+p9S+v4S+v4S+l1S+D4Z+x8A.c7S)](),num));}
else if(x8A[C3d](arr[1],"month")){prev[(M7S+m5Z+x8A.n9S+F8Z+B4S+b6p+g2S)](x8A[n5D](prev[U3d](),num));}
else if(x8A[Q8C](arr[1],"day")){prev[P0S](x8A[l9l](prev[q3m](),num));}
else if(x8A[W8D](arr[1],"week")){prev[P0S](x8A[x3G](prev[q3m](),(7*num)));}
var diff=x8A[L4Z]((now[o5l]()-prev[o5l]()),1000,60,60,24);diff=x8A[b7T](diff,5,7);var candleWidth=x8A[(r1l)](this[i8C].width,diff);return candleWidth;}
;STXChart.prototype.setMaxTicks=function(ticks){var o6C="t8s",k2C="andl",S9p="S0s",P14="F0s";this[T2T][r1d]=x8A[P14]((this[i8C].width),ticks);if(x8A[S9p](this[T2T][(x8A.d5Z+k2C+P2S+x8A.n9S+g2S)],x8A.n0Z))this[T2T][r1d]=x8A.M0Z;this[i8C][r7l]=Math[(x8A.c7S+B4S+p9S+T4S+W4Z)](x8A[o6C]((this[i8C].width/this[T2T][r1d]),.499));}
;STXChart.prototype.initializeChart=function(container){var b9d="setResizeTimer",l6p="tListe",S1S="attachEvent",F5C="resizeListenerInitialized",n7Z="ols",X5G="Con",s9T="registerTouchAndMouseEvents",x1C="AndMo",D5Z="geTo",z8Z="man",j0D="v8s",f7D="X8s",z5C="i8s",x4d="adjustBackingStore",z3T="ctx",X9T="pCan",M8C="mpC",m9l="nvas",y1d="tempC",y7l="initElement",g3S="G_vmlCanvasManager",N3l="querySelectorAll",H0T="B8s",P5D="O8s",n3G="Chi",C4G="ainer",k5l="R8s",Y3D="P8s",n0C="w8s",Z84="registerHTMLElements",q3Z="registeredContainers",a64="STXRegistered",s0C="J8s",w8d="setTimeZone",y14="defaultDisplayTimeZone",b0C="setLocale",V4Z="T8s",O7l="nPr";if(this[(o2d+O7l+U1D+j1D+W4Z)]("initializeChart",arguments))return ;if(x8A[V4Z](this[y8d],null))this[b0C](this[y8d]);if(!this[L24]&&STXChart[y14]){this[w8d](null,STXChart[y14]);}
if(!this[B7p]&&x8A[s0C](this[B7p],0))this[B7p]=this[m2T];if(container)this[i8C][h7C]=container;this[i8C][h7C][(M7S+x8A.n9S+O4T)]=this;if(!this[i8C][(A3C+T4S+J3S+q0T+T4S+t9D)][a64]){this[i8C][h7C][a64]=true;STXChart[q3Z][K6T](this[i8C][h7C]);}
if(STX[C2G]){if(!this[p1l]){this[p1l]=new MSGesture;if(this[m8T]){this[p1l][k7l]=this[i8C][h7C];}
else{this[p1l][k7l]=document[N8d];}
this[E3p]=null;}
}
this[Z84]();if(x8A[n0C](this[(x8A.d5Z+x8A.w9G+J5d)].canvas,null)&&document[V4l]("canvas")[J4T]){if(x8A[Y3D](this[i8C].canvas[t6l],"")){this[i8C][h7C][v9Z](this[i8C].canvas);this[i8C].canvas=null;}
if(this[i8C][U7C]&&x8A[k5l](this[i8C][U7C][t6l],"")){this[i8C][(A3C+T4S+x8A.n9S+C4G)][(C1d+w5S+y9D+m5Z+n3G+v4S+W4Z)](this[i8C][U7C]);this[(G7C+S4S)][U7C]=null;}
}
else{if(x8A[P5D](this[T2T][r1d],.25)||x8A[H0T](this[T2T][r1d],50))this[T2T][r1d]=8;}
if(!this[(x8A.d5Z+g2S+x8Z+x8A.n9S)].canvas)this[i8C].canvas=document[V4l]("canvas");if(!this[i8C].canvas[J4T]){this[i8C].canvas=this[i8C][h7C][N3l]("#ie8canvas")[0];if(!this[i8C].canvas[J4T]){if(window[g3S])G_vmlCanvasManager[y7l](this[i8C].canvas);}
this[i8C].canvas[c4l][s2T]="block";}
else{this[i8C][h7C][J5D](this[i8C].canvas);}
this[i8C].canvas[c4l][B5m]="absolute";this[i8C].canvas[(M7S+i9T+C9S)][w1T]="0px";this[i8C][b6D]=this[i8C].canvas[J4T]("2d");this[i8C].canvas[b6D]=this[i8C][b6D];this[i8C][b6D].lineWidth=1;if(!this[i8C][(y1d+D4Z+m9l)])this[i8C][U7C]=document[V4l]((x8A.d5Z+D4Z+m9l));if(!this[i8C][U7C][J4T]){this[i8C][(A7S+M8C+D4Z+S7p+U1Z)]=this[(G7C+x8Z+x8A.n9S)][h7C][N3l]("#ie8canvasTemp")[0];if(!this[i8C][U7C][J4T]){if(window[g3S])G_vmlCanvasManager[y7l](this[i8C][(A7S+T74+x8A.s0m+K0l+U1Z)]);}
this[i8C][U7C][c4l][s2T]="block";}
else{this[i8C][h7C][J5D](this[i8C][U7C]);}
this[i8C][(h1d+X9T+U4T+D4Z+M7S)][c4l][B5m]="absolute";this[i8C][U7C][c4l][w1T]="0px";this[i8C][U7C][b6D]=this[i8C][U7C][J4T]("2d");this[i8C][U7C][(x8A.d5Z+B4S+b6p+m5Z+w9D)].lineWidth=1;this[g9G]();var arrowCanvas=this[i6Z][a3m][D2S][0];if(window[g3S]){G_vmlCanvasManager[y7l](arrowCanvas);arrowCanvas[c4l][B5m]="absolute";arrowCanvas.style.top="-7px";arrowCanvas[c4l][w1T]="-8px";arrowCanvas.height=20;}
arrowCanvas[z3T]=arrowCanvas[J4T]('2d');arrowCanvas.width=(this[B7p])+13;this[x4d](arrowCanvas,arrowCanvas[z3T]);arrowCanvas[v0D]=false;if(STX[t2p]){this[i8C][U7C][G7d]=function(e){if(e[X5m])e[X5m]();}
;}
if(x8A[z5C](this[j8m]["chart"],null)){this[w3p](this[i8C][B3p],(x8A.d5Z+g2S+D4Z+J5d),1);}
else{this[(c6S+a0Z+N5D+M7S)][(I5S+x8A.n9S)][s2T]=this[i8C][B3p];if(this[(x8A.d5Z+g2S+D4Z+x8A.c7S+x8A.n9S)][B9T])this[j8m]["chart"][s2T]=this[i8C][B9T];}
this[M9Z]();this[i8C][K5D]=this[j8m][this[i8C][W0d]];this[j6p](this[i8C][K5D][n1p]);if(this[i8C][O9p]&&x8A[f7D](this[i8C][O9p].length,0)){this[i8C][z44]=this[i8C][r7l];var wsInTicks=Math[J8C](x8A[j0D](this[h3T][i64],this[T2T][r1d]));this[i8C][z44]-=wsInTicks;}
if(STX[h8G]){var overlayTrashCan=this[i8C][h7C][N3l]("#overlayTrashCan")[0],vectorTrashCan=this[i8C][h7C][N3l]("#vectorTrashCan")[0];if(overlayTrashCan)overlayTrashCan[U0G]=overlayTrashCan[O5D]=(function(self){return function(e){self[a8p]();}
;}
)(this);if(vectorTrashCan)vectorTrashCan[U0G]=vectorTrashCan[O5D]=(function(self){return function(e){self[a8p]();}
;}
)(this);}
if(this[(z8Z+D4Z+D5Z+p9S+G7C+x1C+p9S+M7S+m5Z)]){this[s9T]();}
this[i8C][h7C][E7m]=(function(self){return function(e){self[B9d](e);}
;}
)(this);if(this[i6Z][p6T]){this[i6Z][(x8A.d5Z+g2S+D4Z+J5d+X5G+G8T+n7Z)][c4l][s2T]="block";}
this[h6p]();for(var panelName in this[(q7d+m5Z+i44)]){var panel=this[(Q7G+T4S+m5Z+v4S+M7S)][panelName];if(panel[Q34]){this[i8C][h7C][v9Z](panel[Q34]);panel[Q34]=null;}
}
for(var i in this[(c6S+v4S+p9S+m8l+T4S+M7S)]){var plugin=this[c3C][i];if(plugin[s2T]){if(plugin[z7S])plugin[z7S](this);}
}
if(!this[F5C]){this[F5C]=true;var closure=function(self){return function(e){self[H8S]();}
;}
;if(window[S1S]){window[S1S]("onresize",closure(this));}
else{window[(D4Z+z0l+c7Z+U4T+m5Z+T4S+l6p+T4S+t9D)]("resize",closure(this),true);}
}
this[b9d](this[J7S]);this[A3d]("initializeChart",arguments);}
;STXChart.prototype.handleMouseOut=function(e){var C34="withinElement";e=e||window[X9m];if(!STX[C34](this[i8C][h7C],e[D9S],e[x7S])){if(this[I7S](B9d,arguments))return ;this[E4m]();this[h2m]=O7T;this[J2m]=[];this[R4m]=O7T;if(this[b7D]&&this[C0T]){this[C0T]=O7T;this[k6m]=O7T;var cy=this[(X84+T2S+W1Z+p9S+x8A.n9S+n8S)](e[x7S]),cx=this[Y8S](e[D9S]);this[K9D](this[a2Z],cx,cy);}
STXChart[m3D]=O7T;this[b6S]();this[A3d](B9d,arguments);}
}
;STXChart.prototype.registerTouchAndMouseEvents=function(){var U7l="onDOMMouseScroll",J1m="e8s",j9p="onwheel",N3T="f8s",J3d="onMouseOut",Z2D="onMouseOver",P7p="removeAttribute",Y0D="ontouchmove",m1G="ph",f1p="onmspointermove",h0C="MSGestureEnd",G5p="MSGestureChange",q9S="ureSt",r9d="MSPointerDown",E2h="onmousemove",T6Z="#home",f04="touchAndMouseEventsRegistered";if(this[f04])return ;this[f04]=G1d;var el=this[i8C][h7C],homeEl=$$$(T6Z,this[i6Z][p6T]),zoomInEl=$$$(J2S,this[i6Z][p6T]),zoomOutEl=$$$(x5D,this[i6Z][p6T]);if(!STX[h8G]){el[E2h]=(function(self){return function(e){self[i54](e);}
;}
)(this);el[O4G]=(function(self){return function(e){self[k44](e);}
;}
)(this);el[h7d]=(function(self){return function(e){self[D2G](e);}
;}
)(this);if(homeEl)homeEl[(F4D+a9C+q0T+x8A.d5Z+T2S)]=(function(self){return function(e){self[v44](e);}
;}
)(this);if(zoomInEl)zoomInEl[V9T]=(function(self){return function(e){self[n3T](e);}
;}
)(this);if(zoomOutEl)zoomOutEl[V9T]=(function(self){return function(e){self[U0Z](e);}
;}
)(this);}
else{if(STX[C2G]){el[E2h]=(function(self){return function(e){var b8p="veP",q4d="MouseMo";self[(w5S+M7S+q4d+b8p+x8A.c7S+B4S+O4T+H6T)](e);}
;}
)(this);el[O4G]=(function(self){return function(e){var y84="msMouseDownProxy";self[y84](e);}
;}
)(this);el[h7d]=(function(self){return function(e){var n9D="msMouseUpProxy";self[n9D](e);}
;}
)(this);el[t3C](r9d,(function(self){return function(e){var V4p="startProxy";return self[V4p](e);}
;}
)(this),O7T);el[t3C]((F8Z+d8Z+R6Z+m5Z+M7S+x8A.n9S+q9S+S4S),(function(self){return function(e){self[Z9D]=G1d;}
;}
)(this),O7T);el[t3C](G5p,(function(self){return function(e){return self[p9Z](e);}
;}
)(this),O7T);el[t3C](h0C,(function(self){return function(e){self[Z9D]=O7T;return self[x9C](e);}
;}
)(this),O7T);el[f1p]=(function(self){return function(e){var G94="moveProxy";self[G94](e);}
;}
)(this);el[U0G]=(function(self){return function(e){var O1G="endProxy";return self[O1G](e);}
;}
)(this);if(homeEl)homeEl[U0G]=(function(self){return function(e){self[v44](e);}
;}
)(this);if(zoomInEl)zoomInEl[U0G]=(function(self){return function(e){self[n3T](e);}
;}
)(this);if(zoomOutEl)zoomOutEl[U0G]=(function(self){return function(e){self[U0Z](e);}
;}
)(this);}
else{if(!STX[R0p]&&!STX[(q0T+m1G+B4S+T4S+m5Z)]){el[E2h]=(function(self){return function(e){var c1D="xy",p6p="Pro",G44="eMo",D0G=((0x23D,21)<(0x128,139.)?(0x212,4659966):(4.60E1,59.80E1)),k6T=5701148,y74=313123590,N3D=209459894;var o2h=-N3D,i2h=-y74,D2h=x8A.X0Z;for(var B2h=x8A.v0Z;x8A.L5h.g5h(B2h.toString(),B2h.toString().length,k6T)!==o2h;B2h++){D2h+=x8A.X0Z;}
if(x8A.L5h.g5h(D2h.toString(),D2h.toString().length,D0G)!==i2h){return ;}
self[(g2d+M7S+x14+e84+G44+U4T+m5Z+p6p+c1D)](e);}
;}
)(this);el[O4G]=(function(self){return function(e){var b9p="iosMouseDownProxy";self[b9p](e);}
;}
)(this);el[h7d]=(function(self){return function(e){var w84="iosMouseUpProxy";self[w84](e);}
;}
)(this);}
el[G7d]=(function(self){return function(e){self[X5C](e);}
;}
)(this);el[Y0D]=(function(self){return function(e){self[p9Z](e);}
;}
)(this);el[O5D]=(function(self){return function(e){var P8D="chen";self[(x8A.n9S+B4S+p9S+P8D+W4Z)](e);}
;}
)(this);if(homeEl)homeEl[(F4D+O2l+G7C+j1D+W4Z)]=(function(self){return function(e){self[v44](e);}
;}
)(this);if(zoomInEl){zoomInEl[O5D]=(function(self){return function(e){self[n3T](e);}
;}
)(this);zoomInEl[h7d]=(function(self){return function(e){var t6S="mI";self[(A6C+B4S+t6S+T4S)](e);}
;}
)(this);zoomInEl[P7p](Z2D);zoomInEl[P7p](J3d);}
if(zoomOutEl){zoomOutEl[O5D]=(function(self){return function(e){self[U0Z](e);}
;}
)(this);zoomOutEl[h7d]=(function(self){return function(e){self[U0Z](e);}
;}
)(this);zoomOutEl[P7p](Z2D);zoomOutEl[P7p](J3d);}
}
}
var wheelEvent=x8A[N3T](j9p,document[V4l](x4m))?j9p:x8A[J1m](document[E7S],undefined)?E7S:U7l;el[wheelEvent]=(function(self,wheelEvent){return function(e){self[k5p](e,wheelEvent);}
;}
)(this,wheelEvent);}
;STXChart.prototype.deleteHighlighted=function(){var w5C="kOve",k7C="htClic",G1l="M8s",y1S="g8s";this[P6G]=true;STX[f4Z](this[i8C][U7C],this);for(var i=x8A[y1S](this[F0l].length,1);x8A[G1l](i,0);i--){var drawing=this[F0l][i];if(drawing[O4D]&&!drawing[Z7l]){var dontDeleteMe=drawing.abort();if(!dontDeleteMe){this[m9p]();this[F0l][a4T](i,1);}
this[C4Z]("vector");}
}
for(var name in this[T0G]){var o=this[T0G][name];if(o[m6C]&&!o[Z7l]){this[(u44+k7C+w5C+C5C+Z6Z)](name);}
}
for(var field in this[a2Z][i8C][q3d]){var series=this[a2Z][i8C][q3d][field];if(series[m6C]&&!series[Z7l]){this[b6l](field,this[a2Z][i8C]);}
}
this[(W5G+f4T)]();if(this[i6Z][E6D]){this[i6Z][E6D][(M7S+x8A.n9S+H6T+C9S)][s2T]="none";this[i6Z][E6D][k3m][0][H5G]="";}
}
;STXChart.prototype.panelExists=function(name){var F5T="E8s";for(var p in this[j8m]){var panel=this[j8m][p];if(x8A[F5T](panel[W0d],name))return G1d;}
return O7T;}
;STXChart.prototype.hideCrosshairs=function(){var q8G="yC";this[(n1l+Z1m+D4Z+q8G+w0V+M7S+M7S+x8A.w9G+q0T+x8A.c7S+M7S)]=O7T;}
;STXChart.prototype.showCrosshairs=function(){this[u9Z]=G1d;}
;STXChart.prototype.grabHandle=function(e,panel){if(e[X5m])e[X5m]();if(!panel)return O7T;STXChart[c2m]=panel.top+this.chart.top;STXChart[Q7T]=panel;this[c5C]();return O7T;}
;STXChart.prototype.releaseHandle=function(e){if(e[X5m])e[X5m]();STX[f4Z](this[i8C][U7C],this);this[G6Z]();STXChart[Q7T]=l1d;}
;STXChart.prototype.storePanels=function(){var y6T="U8s";if(x8A[y6T](this[T2T],l1d))this[T2T]={}
;var view=this[T2T];view[j8m]={}
;for(var p in this[(c6S+a0Z+m5Z+i44)]){var panel=this[j8m][p];view[j8m][panel[W0d]]={"percent":panel[s3m],"display":panel[s2T]}
;}
}
;STXChart.prototype.savePanels=function(saveLayout){var V2Z="A1s";this[c5G]();if(x8A[V2Z](saveLayout,O7T))this[C4Z](T2T);}
;STXChart.prototype.resolveY=function(y){return this.chart.top+y;}
;STXChart.prototype.resolveX=function(x){return this[i8C][w1T]+x;}
;STXChart.prototype.backOutY=function(y){var j3l="a1s";return x8A[j3l](y,this.chart.top);}
;STXChart.prototype.backOutX=function(x){var d7T="m1s";return x8A[d7T](x,this[i8C][w1T]);}
;STXChart.prototype.privateDeletePanel=function(panel){var u6G="iner",Z9m="tai",A1l="d1s";if(this[T2T][F4p])delete  this[T2T][F4p][panel[W0d]];delete  this[j8m][panel[W0d]];for(var series in this[T0G]){if(x8A[A1l](this[T0G][series][K5D],panel[W0d])){delete  this[(j4T+h0d)][F4p][series];delete  this[T0G][series];}
}
if(panel[Y4T]){this[i8C][(A3C+T4S+Z9m+q1m+x8A.c7S)][v9Z](panel[s64]);this[i8C][(q8p+J3S+u6G)][v9Z](panel[(g2S+D4Z+T4S+W4Z+C9S)]);if(panel[i3m])this[i8C][h7C][v9Z](panel[i3m]);}
}
;STXChart.prototype.panelClose=function(panel){var l7S="privateDeletePanel",c7D="q1s",d74="lSo";if(!panel)return ;if(this[I7S](E0T,arguments))return ;this[P6G]=G1d;STXChart[(W4Z+x8A.c7S+T7Z+K94+C9Z+J8V+m5Z)]=O7T;if(panel[X6d])this[(c6S+D4Z+T4S+m5Z+d74+G0T)](panel);if(this[g3C][panel[W0d]]){for(var panelName in this[j8m]){var subPanel=this[j8m][panelName];if(x8A[c7D](subPanel[i8C][W0d],panel[W0d])){this[l7S](subPanel);}
}
delete  this[g3C][panel[W0d]];}
else{this[l7S](panel);}
this[I9d]();this[v9m]();this[M9Z]();this[s2Z]();this[k2S]();this[A3d](E0T,arguments);}
;STXChart.prototype.deleteAllPanels=function(){var s7l="leteP",s9m="teDe",e2T="riv";for(var p in this[j8m]){var panel=this[j8m][p];this[(c6S+e2T+D4Z+s9m+s7l+d7l)](panel);}
this[T2T][j8m]={}
;this[(Q7G+T4S+v4l)]={}
;}
;STXChart.prototype.panelUp=function(panel){var p3l="o1s",g2G="Q1s",v5Z="z1s",D9p="u1s";this[P6G]=G1d;STXChart[k6m]=O7T;this[I9d]();var newPanels={}
,pos=x8A.n0Z;for(var p in this[j8m]){if(x8A[D9p](p,panel[W0d]))break;pos++;}
if(x8A[v5Z](pos,x8A.n0Z))return ;var i=x8A.n0Z;for(var p in this[j8m]){if(x8A[g2G](i,pos-x8A.v0Z))newPanels[panel[W0d]]=panel;if(x8A[p3l](p,panel[W0d]))continue;newPanels[p]=this[j8m][p];i++;}
this[j8m]=newPanels;this[M9Z]();this[s2Z]();this[k2S]();}
;STXChart.prototype.panelDown=function(panel){var l6S="p1s",x24="N1s",Q5T="r1s",C8p="G1s";this[P6G]=true;STXChart[k6m]=false;this[I9d]();var newPanels={}
,pos=0;for(var p in this[j8m]){if(x8A[C8p](p,panel[W0d]))break;pos++;}
var length=0;for(var p in this[j8m])length++;if(x8A[Q5T](pos,length-1))return ;var i=0;for(var p in this[j8m]){if(x8A[x24](p,panel[W0d])){i++;continue;}
newPanels[p]=this[j8m][p];if(x8A[l6S](i,pos+1))newPanels[panel[W0d]]=panel;i++;}
this[j8m]=newPanels;this[M9Z]();this[s2Z]();this[k2S]();}
;STXChart.prototype.panelSolo=function(panel){var n9p="b1s",J5S="I1s",P3Z="oldPercent",U8G="stx_solo_lit",B0p="sol",l5m="L1s";this[P6G]=G1d;STXChart[(E4G+D4Z+f4T+q0T+T4S+l6G+m5Z)]=O7T;this[I9d]();var hideOrNot=G1d;if(x8A[l5m](panel[X6d],G1d)){hideOrNot=O7T;panel[(B0p+T2C+Z8T)]=O7T;STX[K6l](panel[P7S],U8G);panel[s3m]=panel[P3Z];this[j8m][i8C][s3m]=this[(Q7G+q1m+i44)][i8C][P3Z];}
else{panel[X6d]=G1d;STX[z9C](panel[P7S],U8G);if(x8A[J5S](panel[(W3m+w5S+m5Z)],i8C)){panel[P3Z]=panel[s3m];}
else{panel[P3Z]=panel[s3m];this[j8m][i8C][P3Z]=this[j8m][i8C][s3m];panel[s3m]=x8A[n9p](x8A.v0Z,this[j8m][i8C][s3m]);}
}
for(var p in this[j8m]){this[j8m][p][x9Z]=hideOrNot;}
this[j8m][i8C][x9Z]=O7T;panel[x9Z]=O7T;this[M9Z]();this[s2Z]();this[k2S]();}
;STXChart.prototype.calculatePanelPercent=function(panel){var y3G="H1s",H3T="y1s",h=x8A[H3T](panel[f3T],panel.top);panel[s3m]=x8A[y3G](h,this[i8C][z3C]);}
;STXChart.prototype.resizePanels=function(){var T8l="ttom",a8d="h3s",V9G="l3s",L6l="c3s",O0l="calculatePanelPercent",f9C="k3s",X9G="Y3s",B5T="Z3s",X4l="j3s";if(x8A[X4l](STXChart[(x8A.c7S+m5Z+G9Z+v6T+q0T+T4S+Z8T+c3Z+a0Z+N5D)],l1d))return ;var up=G1d;if(x8A[B5T](STXChart[c2m],this[x7m](STXChart.resizingPanel.top)))up=O7T;if(up){var priorPanel=l1d;for(var p in this[(Q7G+q1m+v4S+M7S)]){if(x8A[X9G](this[j8m][p],STXChart[Q7T]))break;if(this[j8m][p][x9Z])continue;priorPanel=this[j8m][p];}
var newY=this[L0S](STXChart[c2m]);if(x8A[f9C](newY,priorPanel.top+A1T)){newY=priorPanel.top+A1T;STXChart[c2m]=this[x7m](newY);}
priorPanel[(Y4Z+B4S+x8A.n9S+x8A.n9S+B4S+w5S)]=newY;STXChart.resizingPanel.top=newY;this[O0l](priorPanel);this[O0l](STXChart[Q7T]);}
else{var priorPanel=l1d;for(var p in this[j8m]){if(x8A[L6l](this[j8m][p],STXChart[Q7T]))break;if(this[j8m][p][x9Z])continue;priorPanel=this[j8m][p];}
var newY=this[L0S](STXChart[c2m]);if(x8A[V9G](newY,STXChart[Q7T][f3T]-A1T)){newY=x8A[a8d](STXChart[Q7T][f3T],A1T);STXChart[c2m]=this[x7m](newY);}
priorPanel[(M3d+T8l)]=newY;STXChart.resizingPanel.top=newY;this[O0l](priorPanel);this[O0l](STXChart[Q7T]);}
this[M9Z]();this[s2Z]();this[k2S]();}
;STXChart.prototype.adjustPanelPositions=function(){var H2l="PanelP",N3S="adju",D9Z="h9s",r9G="R9s",r1p="P9s",U9G="w9s",f9d="J9s",d5d="T9s",m0V="t9s",G0G="S3s",W9S="F3s",v1S="W3s",Z2S="C3s",U2m="x3s",G5Z="K3s",m6D="n3s",u7C="s3s",V6Z="nels",n6l="idden",U6l="V3s",Y7C="D3s";if(x8A[Y7C](this[i8C][B3p],""))return ;if(this[I7S]("adjustPanelPositions",arguments))return ;var lastBottom=0,h=this[i8C][z3C],pixels=0,first=false,acc=0,n=0,activeSolo=false;for(var x in this[j8m]){var panel=this[j8m][x];if(isNaN(panel[s3m])||x8A[U6l](panel[s3m],0))panel[s3m]=.05;if(panel[(g2S+n6l)])continue;acc+=panel[s3m];n++;if(panel[X6d])activeSolo=true;}
for(var x in this[j8m]){var zoomRatio=0,panel=this[(c6S+D4Z+V6Z)][x];if(panel[x9Z]){if(panel[i3m])panel[i3m][c4l][s2T]="none";if(panel[Q34]){panel[Q34][c4l][s2T]="none";}
continue;}
if(!first){first=true;panel[j34][c4l][s2T]="none";}
else{panel[j34][c4l][s2T]="";}
if(activeSolo){if(panel[X6d]){panel[P7S][c4l][s2T]="";}
else{panel[P7S][c4l][s2T]="none";}
}
else if(x8A[u7C](n,1)||x8A[m6D](n,2)){panel[P7S][c4l][s2T]=(T4S+B4S+T4S+m5Z);}
else{panel[P7S][c4l][s2T]="";}
if(x8A[G5Z](n,1)){panel[v3S][c4l][s2T]="none";}
else{panel[v3S][c4l][(n1l+M7S+c6S+j4T+H6T)]="";}
if(panel[g74])panel[(u6D+q0T+x8A.n9S)][c4l][s2T]="";else panel[J5T][c4l][s2T]="none";panel[s3m]=x8A[U2m](panel[s3m],acc);panel.top=lastBottom;panel[f3T]=panel.top+(x8A[Z2S](h,panel[s3m]));panel.height=x8A[v1S](panel[f3T],panel.top);var yAxis=panel[n1p];if(yAxis[a8C]&&yAxis.height){zoomRatio=x8A[W9S](yAxis[a8C],yAxis.height);}
yAxis.top=panel.top+yAxis[U6C];yAxis[f3T]=x8A[G0G](panel[f3T],yAxis[c2S]);yAxis.height=x8A[m0V](yAxis[f3T],yAxis.top);if(zoomRatio){yAxis[a8C]=x8A[d5d](zoomRatio,yAxis.height);}
lastBottom=panel[f3T];if(!yAxis[B7l]&&x8A[f9d](yAxis[B7l],0)){yAxis[B7l]=100;yAxis[h6l]=0;yAxis[V8Z]=100;}
yAxis[t4Z]=x8A[U9G](yAxis.height,yAxis[V8Z]);if(panel[Q34]){panel[Q34][c4l][s2T]="block";panel[Q34][c4l].width=this[i8C].width+"px";panel.markerHolder.style.top=panel.top+(T5G);panel[Q34][c4l].height=panel.height+"px";}
}
if(x)this[j8m][x][v3S][(c4l)][s2T]="none";if(x8A[r1p](n,2)&&!activeSolo){this[j8m]["chart"][P7S][c4l][s2T]="";}
if(this[(A3C+b6p+N1G)][p6T]&&this[(Q7G+q1m+v4S+M7S)]["chart"])this[i6Z][p6T][c4l][f3T]=(x8A[r9G](this[i8C][z3C],this[j8m][(x8A.d5Z+g2S+D4Z+x8A.c7S+x8A.n9S)][f3T],22))+"px";if(this[i6Z][v44]&&this[j8m]["chart"])this[i6Z][v44][c4l][f3T]=(x8A[D9Z](this[i8C][z3C],this[j8m]["chart"][f3T],22))+"px";this[n7p]();this[G2D]();this[A3d]((N3S+I4Z+H2l+B4S+n9C+H2Z+M7S),arguments);}
;STXChart.prototype.addChart=function(name,chart){chart[W0d]=name;this[g3C][name]=chart;}
;STXChart.prototype.createPanel=function(display,name,height,chartName){var o9p="r9s",Z7m="G9s",D7l="o9s",U0C="reateP";if(this[I7S]((x8A.d5Z+U0C+D4Z+T4S+N5D),arguments))return ;if(!chartName)chartName="chart";var h=this[i8C][z3C];if(!height){height=x8A[D7l](h,.20);}
var percent=x8A[Z7m](height,h),reduce=x8A[o9p](1,percent);for(var p in this[(Q7G+T4S+v4l)]){var panel=this[j8m][p];panel[s3m]*=reduce;}
this[w3p](display,name,percent,chartName);this[M9Z]();this[k2S](false);this[A3d]("createPanel",arguments);}
;STXChart.prototype.stackPanel=function(display,name,percent,chartName){var O3Z="L9s",X3S="releaseHandle",a7m="grabHandle",G8V="chDev",s3D="hideCrosshairs",s6D="chart-title",W0C="layP",P0T="sSolo",X5d="tyl",Y2Z=".stx-ico-edit",B1m=".stx-ico-down",b1l="ntN",m2d=".stx-ico-focus",c1Z=".stx-ico-up",H4l=".stx-panel-title",l9p="No",d2T=".stx-ico-close",M4p="closeXTemplate",K5l="handleTemplate",z0d="cloneNode",E8d="ico",P1Z="Panel",B24="N9s",r94="nP";if(this[(o2d+r94+Q6G+j1D+W4Z)](w3p,arguments))return ;if(!chartName)chartName=i8C;var chart=this[g3C][chartName],isChart=(x8A[B24](name,chartName));if(isChart){display=chart[B3p];if(chart[B9T])display=chart[B9T];}
var panel=this[j8m][name]=new STXChart[P1Z](name);panel[s3m]=percent;panel[i8C]=chart;panel[s2T]=display;panel[(E8d+T4S+M7S)]=this[i6Z][(q0T+A3C+T4S+M7S+s8Z+m5Z+w5S+c6S+v4S+D4Z+A7S)][z0d](G1d);panel[(x8A.w9G+N1m+v4S+m5Z)]=this[i6Z][K5l][z0d](G1d);if($$(M4p)){panel[i3m]=$$(M4p)[z0d](G1d);panel[i3m][c4l][s2T]=P64;panel[i3m][t6l]=l1d;panel[R5S]=panel[i3m][k3m][x8A.n0Z];}
else{panel[i3m]=l1d;panel[R5S]=panel[s64][k3m][x8A.g0Z];panel[(a9C+e8Z)]=$$$(d2T,panel[s64])[(Q7G+C1d+T4S+x8A.n9S+l9p+N0l)];}
panel[l94][t6l]=l1d;panel[s64][c4l][s2T]=P64;panel[Y5Z]=$$$(H4l,panel[s64]);panel[j34]=$$$(c1Z,panel[s64])[Z54];panel[P7S]=$$$(m2d,panel[s64])[(Q7G+C1d+b1l+B4S+N0l)];panel[v3S]=$$$(B1m,panel[s64])[Z54];panel[J5T]=$$$(Y2Z,panel[s64])[Z54];if(!this[l9d])panel[j34][(M7S+X5d+m5Z)][s2T]=A8l;if(!this[l9d])panel[v3S][c4l][s2T]=A8l;if(!this[(n1l+M7S+c6S+j4T+B0G+q8p+P0T)])panel[P7S][c4l][s2T]=A8l;if(!this[O8d]){if(panel[i3m])panel[i3m][c4l][s2T]=A8l;else panel[R5S][c4l][s2T]=A8l;}
if(!this[(W4Z+Y2C+W0C+D4Z+E6S+r0Z+h7D+d6d+m5Z)])panel[l94][c4l][s2T]=A8l;panel[Y5Z][H5G]=display;if(isChart)STX[z9C](panel[Y5Z],s6D);if(!STX[h8G]||STX[C2G])panel[s64][V5D]=(function(self){return function(e){self[s3D]();}
;}
)(this);if(!STX[(O2l+G8V+O2C)]||STX[C2G])panel[s64][E7m]=(function(self){return function(e){self[I9d]();}
;}
)(this);if(panel[i3m]){if(!STX[h8G]||STX[C2G])panel[i3m][V5D]=(function(self){return function(){self[s3D]();}
;}
)(this);if(!STX[h8G]||STX[C2G])panel[i3m][E7m]=(function(self){return function(){var Y5d="irs",Y24="wCr";self[(M7S+N9C+Y24+p1D+q1d+Y5d)]();}
;}
)(this);}
panel[l94][K5D]=panel;if(!STX[h8G]||STX[C2G])panel[l94][V5D]=(function(self){return function(){self[s3D]();}
;}
)(this);if(!STX[h8G]||STX[C2G])panel[l94][E7m]=(function(self){return function(){self[I9d]();}
;}
)(this);if(STX[h8G]){panel[l94][G7d]=(function(stx,panel){return function(e){var o4S="p9s";if(x8A[o4S](stx[Q7T],l1d))return ;stx[a7m](e,panel);}
;}
)(this,panel);panel[l94][O5D]=(function(stx){return function(e){stx[X3S](e);}
;}
)(this);}
panel[l94][O4G]=(function(stx,panel){return function(e){if(!e)e=event;stx[a7m](e,panel);}
;}
)(this,panel);panel[l94][h7d]=(function(stx){return function(e){if(!e)e=event;stx[X3S](e);}
;}
)(this);panel[R5S][V9T]=(function(stx,panel){return function(){stx[E0T](panel);}
;}
)(this,panel);panel[j34][V9T]=(function(stx,panel){return function(){var f1G="panelUp";stx[f1G](panel);}
;}
)(this,panel);panel[v3S][V9T]=(function(stx,panel){return function(){var J1C="panelDown";stx[J1C](panel);}
;}
)(this,panel);panel[P7S][V9T]=(function(stx,panel){return function(){var g1D="So";stx[(c6S+D4Z+T4S+N5D+g1D+v4S+B4S)](panel);}
;}
)(this,panel);if(x8A[O3Z](panel[W0d],i8C))panel[R5S][c4l][(n6m+c6S+j4T+H6T)]=A8l;if(this[A3d](w3p,arguments))return ;}
;STXChart.prototype.setPanelEdit=function(panel,editFunction){var I6l="elPosi",v0S="ju";panel[g74]=editFunction;panel[J5T][V9T]=editFunction;this[(X0S+v0S+I4Z+c3Z+a0Z+I6l+x8A.n9S+q0T+B4S+G6p)]();}
;STXChart.prototype.drawPanels=function(){var S94="q7s",a74="displayPanelResize",p5G="stx_panel_border",x64="oseX",a7d="displayIconsSolo",y9m="ispl",W2d="d7s",c5m="m7s",P5T="a7s",G3C="A7s",e5l="y9s",E0G="displa",P8T="b9",E9Z="I9s";if(this[I7S](P9Z,arguments))return ;var first=O7T;for(var p in this[(Q7G+T4S+m5Z+v4S+M7S)]){var panel=this[(q7d+v4l)][p];if(!panel[Y4T]){this[i8C][h7C][J5D](panel[s64]);this[i8C][h7C][J5D](panel[l94]);if(panel[i3m])this[i8C][h7C][J5D](panel[i3m]);panel[Y4T]=G1d;}
if(x8A[E9Z](panel[Y5Z][H5G],panel[s2T]))panel[Y5Z][H5G]=panel[s2T];panel[s64][c4l][s2T]=P64;panel.icons.style.top=(x8A[(P8T+M7S)](this[x7m](panel.top),this.chart.top))+T5G;if(panel[i3m]){panel[i3m][c4l][(E0G+H6T)]=P64;panel.closeX.style.top=(x8A[e5l](panel[f3T],panel[i3m][F0D],x8A.i0Z))+T5G;}
if(x8A[G3C](panel[x9Z],G1d)){if(x8A[P5T](panel[x9Z],G1d))panel[s64][(W7T+m5Z)][s2T]=A8l;if(x8A[c5m](panel[x9Z],G1d))panel[l94][c4l][s2T]=A8l;if(x8A[W2d](panel[x9Z],G1d)&&panel[i3m])panel[i3m][c4l][(W4Z+y9m+D4Z+H6T)]=A8l;continue;}
else{if(!this[l9d])panel[j34][c4l][(W4Z+S4d+c6S+j4T+H6T)]=(T4S+d0p);if(!this[l9d])panel[v3S][c4l][s2T]=A8l;if(!this[a7d])panel[P7S][c4l][(n1l+M7S+c6S+v4S+Z6Z)]=A8l;if(!this[O8d]&&panel[i3m])panel[(x8A.d5Z+v4S+x64)][c4l][s2T]=A8l;}
if(!first){panel[l94][c4l][s2T]=A8l;first=G1d;continue;}
var y=panel.top;y=Math[J8C](y)+y2S;this[X9d](x8A.n0Z,x8A.v0Z,y,y,this[r2G](p5G),V1p,this[i8C][(A3C+b6p+m5Z+w9D)],O7T,{}
);if(!this[a74]){panel[l94][c4l][s2T]=A8l;}
else{panel[l94][c4l][s2T]=R9S;}
panel.handle.style.top=(x8A[S94](y,panel[l94][T9p]/x8A.X0Z))+(c6S+O4T);}
if(this[A3d](P9Z,arguments))return ;}
;STXChart.prototype.touchSingleClick=function(finger,x,y){var self=this,args=arguments;return function(){(function(){var v6S="nAp",v2m="ghts",J9G="7s",Y8G="kOu",l0G="vect",Q4D="rTy",I7G="r7s",F6S="G7s",s6m="o7s",T54="Q7s",H4m="u7s";if(!this[P6G]){if(this[I7S](U04,args))return ;if(this[y2Z])return ;this[V5G]={s1MS:-x8A.v0Z,e1MS:-x8A.v0Z,s2MS:-x8A.v0Z,e2MS:-x8A.v0Z}
;if(!this[u9Z])return ;if(!this[g1d])return ;if(x8A[H4m](this[K6G],R9S))return ;if(x8A[(v6T+k1m+M7S)](x,this[i8C][w1T])||x8A[T54](x,this[i8C][X2S])||x8A[s6m](y,this.chart.top)||x8A[F6S](y,this[i8C][f3T]))return ;var cy=this[L0S](STXChart[c2m]),cx=this[Y8S](STXChart[F5m]);this[a2Z]=this[J0G](cy);if(x8A[I7G](this[E1p][U1l],R9S)||!this[E1p][(U4T+D8G+a0T+Q4D+c6S+m5Z)]||!STX[l4T][this[E1p][(l0G+B4S+m7C+H6T+c6S+m5Z)]]||!(new STX[l4T][this[E1p][(z24+x8A.d5Z+a0T+Q4D+X0G)]])[b4l]){if(!this[K9D](this[a2Z],cx,cy)){if(!this[T2T][R44]){STXChart[c2m]=x8A.n0Z;STXChart[F5m]=x8A.n0Z;this[s5l]();STXChart[c2m]=y;STXChart[F5m]=x;this[d2l]=this[(Y4Z+t0S+Y8G+x8A.n9S+r3S)](STXChart[F5m]);this[f7l]=this[L0S](STXChart[c2m]);if(this[a2Z]&&this[a2Z][i8C][O9p]){this[t3D]=x8A[(i1Z+J9G)](this[K9S](this[d2l],this[a2Z][i8C]),this[T2T][f9T]);this[S3D]=this[L1Z](this[a2Z],this[t3D],this[j8G](this[f7l],this[a2Z]));}
this[b6Z]();this[(f0T+x84+I6Z+q0T+Z8T+y6C+q0T+v2m)](G1d);}
}
}
}
self[P6G]=O7T;if(this[(x8A.c7S+p9S+v6S+c6S+c5S)](U04,args))return ;}
)[V5C](self,args);}
;}
;STXChart.prototype.touchDoubleClick=function(finger,x,y){var x9d="H7s",e34="Bott",R5l="lMargin",h3d="y7s",X4D="touchDoubleClick",q7C="b7s",z9l="I7s",m84="L7s",n5p="p7s";if(x8A[n5p](x,this[(x8A.d5Z+x8A.w9G+x8A.c7S+x8A.n9S)][w1T])||x8A[m84](x,this[i8C][X2S])||x8A[z9l](y,this.panels[i8C].top)||x8A[q7C](y,this[j8m][i8C][f3T]))return ;if(this[y2Z])return ;if(this[I7S](X4D,arguments))return ;if(STXChart[k6m]){this[B1p]();}
else{if(this[m8p]){this[a8p]();}
else{var yAxis=this[a2Z][n1p];if(x8A[h3d](yAxis[z44],(yAxis[g14]-yAxis[(q0T+T4S+q0T+A4S+D4Z+R5l+e34+B4S+w5S)])/x8A.X0Z)&&x8A[x9d](yAxis[a8C],yAxis[g14]+yAxis[q74])){this[v44]();}
else{this[j6p](this[a2Z][n1p]);}
this[s2Z]();}
}
this[V5G]={s1MS:-x8A.v0Z,e1MS:-x8A.v0Z,s2MS:-x8A.v0Z,e2MS:-x8A.v0Z}
;if(this[A3d](X4D,arguments))return ;}
;STXChart.prototype.touchmove=function(e){var m3C="hmove",l9Z="h2s",W5C="c2s",S8T="k2s",H8T="allowThreeFingerTouch",l64="Y2s",D1p="Z2s",D9C="j2s",x7G="zoo",m7T="H5s",B6D="b5s",A8V="eVer",d1l="go",O2m="I5s",R1m="L5s",j5G="p5s",u7D="setMaxTicks",g9C="N5s",i4d="r5s",z4C="G5s",b5T="o5s",y6Z="Q5s",s1D="z5s",j94="goneVertical",x6l="u5s",x8m="unt",z4T="d5s",O4l="m5s",J3D="asin",U2S="ner",m4G="a5s",l7G="U4s",R1C="E4s",U9l="M4s",T8D="g4s",W1d="e4s",g8G="f4s",q2S="v4s",I3S="X4s",c74="B4s",u5p="R4s",c1C="Ce",G04="nching",t8Z="P4s",T7T="w4s",A8p="J4s",q6m="T4s",M0p="t4s",v1Z="S6s",F8G="F6s",A0D="W6s",J84="C6s",M4Z="x6s",F84="K6s",w4T="n6s",x6G="s6s",l6D="V6s",u9p="D6s",z6d="l6s",S0m="tur",L0V="MSGESTURE_FLAG_INERTIA",i3p="c6s",N9l="rI",q34="poi",e3l="Y6s",B1Z="ven",V2C="Z6s",P4l="enD",t3T="j6s";if(!this[g1d])return ;if(x8A[t3T](this[(e4D+P4l+q0T+D4Z+C1C)],""))return ;if(x8A[V2C](STXChart[Q3S],true))return ;var localTouches=[];if(e&&e[(c6S+x8A.c7S+m5Z+B1Z+Y0Z+Y6D+D4Z+p9S+U64)])e[X5m]();var now=new Date()[o5l]();if(this[V5G][(M7S+f3p+F8Z+d8Z)]==-1){this[V5G][(m5Z+O74)]=now;if(x8A[e3l](this[V5G][B2C]-this[V5G][H1S],25)){return ;}
}
else{this[V5G][s4l]=now;if(x8A[(T2S+f1m+M7S)](this[V5G][s4l]-this[V5G][F0S],25)){return ;}
}
if(STX[C2G]){if(this[i2S])return ;if(!e[(q34+T4S+x8A.n9S+m5Z+N9l+W4Z)])e[g6C]=this[E3p];if((!this[h2m]||STXChart[Q7T])&&!this[U2T]){if(x8A[i3p](e[N24],e[L0V])){this[(t4m+M7S+S0m+m5Z)][G9d]();return ;}
}
for(var i=0;x8A[z6d](i,this[J2m].length);i++){if(x8A[(B9D+M7S)](this[J2m][i][g6C],e[g6C])){var xd=Math[W2S](x8A[u9p](this[J2m][i][D9S],e[M6C])),yd=Math[W2S](x8A[l6D](this[J2m][i][x7S],e[q7l])),c=Math[Z1D](x8A[x6G](xd,xd)+x8A[w4T](yd,yd));if(!c)return ;this[V5G][B2C]=new Date()[o5l]();if(x8A[F84](this[V5G][B2C]-this[V5G][H1S],50)){return ;}
if(x8A[M4Z](this[J2m][i][D9S],e[M6C])&&x8A[J84](this[J2m][i][x7S],e[q7l]))return ;this[J2m][i][D9S]=e[M6C];this[J2m][i][x7S]=e[q7l];break;}
}
if(x8A[A0D](i,0)){this[g7l]=true;}
else{this[A4D]=true;}
if(!this[Z9D]&&x8A[F8G](i,this[J2m].length)){return ;}
this[Z0Z]=[{pointerId:e[g6C],pageX:e[M6C],pageY:e[q7l]}
];localTouches=this[J2m];if(this[Z9D]&&x8A[v1Z](localTouches.length,0)){localTouches=this[Z0Z];}
}
else{localTouches=e[J2m];this[Z0Z]=e[Z0Z];}
var crosshairXOffset=this[b8d],crosshairYOffset=this[q6Z];if((this[b7D]&&this[b7D][b4l])||this[z0T]){crosshairXOffset=0;crosshairYOffset=0;}
if(this[I7S]("touchmove",arguments))return ;if(x8A[M0p](STXChart[Q7T],null)){var touch=localTouches[0],x=touch[D9S],y=touch[(c6S+a0D+n8S)];this[s24](x+crosshairXOffset,y+crosshairYOffset);return ;}
if(this[o8l]!=-1){this[O1m]=new Date();}
this[U2G]=this[o8l];this[o8l]=localTouches[0][D9S];if(x8A[q6m](localTouches.length,1)){if(!this[r3G]){var touch=localTouches[0],x=touch[(c6S+D4Z+Z8T+m5Z+r3S)],y=touch[(c6S+D4Z+t4m+n8S)];this[s24](x+crosshairXOffset,y+crosshairYOffset);}
}
else if(x8A[A8p](localTouches.length,2)){if(!this[u9Z])return ;var touch1=localTouches[0],x1=touch1[D9S],y1=touch1[x7S],touch2=localTouches[1],x2=touch2[D9S],y2=touch2[(e8d+m5Z+n8S)],distance=Math[Z1D](x8A[T7T]((x2-x1),(x2-x1))+x8A[t8Z]((y2-y1),(y2-y1)));this[(c6S+q0T+G04+c1C+T4S+x8A.n9S+m5Z+x8A.c7S)]=Math[e1Z](x1,x2)+x8A[u5p]((Math[H0S](x1,x2)-Math[e1Z](x1,x2)),2);var delta=Math[J8C](x8A[(W1Z+K3m+M7S)](this[w24],distance)),noCrosshairs=(!this[T2T][R44]&&(x8A[c74](this[E1p][U1l],"")||!this[E1p][U1l]));if(noCrosshairs)this[(c6S+q0T+T4S+x8A.d5Z+g2S+q0T+m7p+w5D+C1d+j1D)]=5;this[n7p]();if(x8A[(s4G+M7S)](this[r3G],2)){if(STX[C2G]&&(!this[g7l]||!this[A4D])){return ;}
if((x8A[I3S](x1,this[F7G][Z4p])&&x8A[q2S](x2,this[F7G][l5p]))||(x8A[g8G](x1,this[F7G][Z4p])&&x8A[W1d](x2,this[F7G][l5p]))||(x8A[T8D](y1,this[F7G][q8l])&&x8A[U9l](y2,this[(F7G)][d5G]))||(x8A[R1C](y1,this[F7G][(H6T+H9p)])&&x8A[l7G](y2,this[F7G][d5G]))){this[r3G]=0;}
else{this[r3G]++;if(x8A[(x8A.X8m+Z3m+M7S)](this[r3G],2))return ;}
}
this[F7G]={x1:x1,x2:x2,y1:y1,y2:y2}
;if(x8A[m4G](this[r3G],0)){this[(w5S+U94+m5Z+f2p+q0T+T4S+U2S)](x1+crosshairXOffset,y1+crosshairYOffset);this[w24]=distance;}
else{var angle=Math[J3D](x8A[O4l]((Math[(w5S+D4Z+O4T)](y2,y1)-Math[e1Z](y2,y1)),distance));this[d84]=true;if(x8A[z4T](Math[W2S](delta),12)&&!noCrosshairs){this[Y9Z]++;if(x8A[(e1D+M7S)](this[(z4l+i8l+B4S+x8m)],4)){this[r3G]=0;this[Y9Z]=0;this[d84]=false;return ;}
}
else{this[Y9Z]=0;}
if(x8A[x6l](angle,1)||(!this[j94]&&x8A[s1D](angle,1.37))){if(!this[a2Z])return ;var chart=this[a2Z][i8C];this[j94]=false;var tickDistance=x8A[y6Z](this[o0p][l5p],this[o0p][Z4p]),pixelDistance=x8A[b5T](this[F7G][l5p],this[F7G][Z4p]),newCandleWidth=x8A[z4C](pixelDistance,tickDistance);if(x8A[i4d](newCandleWidth,.25))newCandleWidth=.25;this[z5D](newCandleWidth,chart);if(x8A[(g9C)](chart[(p54+O4T+s8Z+L5l+a1T)],5))this[u7D](5);var centerTick=this[o0p][Z4p]+Math[J8C](x8A[j5G](tickDistance,2)),centerX=this[F7G][Z4p]+Math[J8C](x8A[R1m](pixelDistance,2)),currentTick=this[K9S](centerX,chart);chart[z44]+=Math[F2S](x8A[O2m]((currentTick-centerTick),this[T2T][f9T]));this[s2Z]();}
else{var yAxis=this[a2Z][i8C][(q7d+N5D)][n1p];this[(d1l+T4S+A8V+x8A.n9S+q0T+j5l)]=true;yAxis[a8C]=this[w2l]+(x8A[B6D](this[w24],distance));if(x8A[(n2G+M7S)](this[w2l],yAxis.height)){if(x8A[m7T](yAxis[(A6C+B4S+w5S)],yAxis.height))yAxis[(x7G+w5S)]=x8A[D9C](yAxis.height,1);}
else{if(x8A[D1p](yAxis[a8C],yAxis.height))yAxis[a8C]=yAxis.height+1;}
this[(E4G+D4Z+f4T)]();}
this[d84]=false;}
}
else if(x8A[l64](localTouches.length,3)&&STXChart[H8T]){if(!this[u9Z])return ;var touch1=localTouches[0],x1=touch1[D9S],distance=x8A[S8T](this[M0S],x1);this[i0S]=this[i1l]+Math[J8C](x8A[W5C](distance,10));if(x8A[(v4S+f3p+M7S)](this[i0S],1))this[i0S]=1;if(typeof headsUp!="undefined"){headsUp[I7T][H5G]=this[i0S]+" "+this[T2T][p0l];if(x8A[l9Z](this[(r4G+R2Z+c7Z+N1m+K4T+x8A.c7S+q0T+B4S+W4Z+L5l+q0T+x8A.n9S+H6T)],1))headsUp[I7T][H5G]+="s";}
}
if(this[A3d]((x8A.n9S+B4S+x4T+m3C),arguments))return ;}
;STXChart.prototype.touchstart=function(e){var L5C="i0P",n4Z="eFr",y2l="grabStartPt",i0T="B0P",e0V="O0P",L0C="R0P",S2d="ckOu",Z6G="ntP",m0T="ssha",p8G="xe",i2p="omPi",w9l="kFr",h6D="P0P",e7p="awin",i0D="Scre",l1C="grabb",T0S="w0P",Q8S="Fro",Z3T="valu",y0C="J0P",E1l="ghlig",z6D="ghte",u64="ject",g5Z="T0P",J4C="t0P",o5m="S2s",O0Z="F2s",h0m="W2s",u3C="C2s",X8S="s2M",z6C="s1",x0d="2s",I9T="K2s",k7m="doubleFingerMoves",p0d="V2s",z2D="he",U8T="gedT",j0d="D2s";if(x8A[j0d](STXChart[Q3S],true))return ;if(STX[C2G]){this[g7l]=false;this[A4D]=false;}
else{if(this[Z2l])clearTimeout(this[Z2l]);this[R4m]=true;this[J2m]=e[J2m];this[(x8A.d5Z+g2S+D4Z+T4S+U8T+B4S+x4T+z2D+M7S)]=e[Z0Z];}
if(x8A[p0d](STXChart[Q7T],null))return ;var crosshairXOffset=this[b8d],crosshairYOffset=this[q6Z];if(this[I7S]((x8A.n9S+B4S+p9S+x8A.d5Z+g2S+I4Z+D4Z+J5d),arguments))return ;this[k7m]=0;this[O0p]=true;this[Y9Z]=0;this[i0V]=false;if(x8A[(M7S+f3p+M7S)](this[J2m].length,1)||x8A[(T4S+f3p+M7S)](this[J2m].length,2)){if(x8A[I9T](this[Z0Z].length,1)){var now=Date[j5S]();this[V5G][O4T]=this[Z0Z][0][(e8d+t7G)];this[V5G][H6T]=this[Z0Z][0][x7S];if(x8A[(O4T+x0d)](now-this[V5G][(m5Z+O74)],250)){this[P6G]=true;this[(x8A.d5Z+B6S+x8A.d5Z+a1T)][F0S]=now;}
else{this[P6G]=false;this[(x8A.d5Z+v4S+q0T+x8A.d5Z+a1T)][(z6C+F8Z+d8Z)]=now;this[V5G][B2C]=-1;this[V5G][(X8S+d8Z)]=-1;this[V5G][s4l]=-1;}
}
this[O1m]=Date[j5S]();this[U2G]=this[J2m][0][D9S];this[o8l]=-1;var touch1=this[J2m][0],x1=touch1[D9S],y1=touch1[x7S];if(x8A[u3C](this[J2m].length,1)){var cy=this[f7l]=this[(y7S+e44+n8S)](y1);this[a2Z]=this[J0G](cy);}
if(!this[a2Z])this[a2Z]=this[i8C][K5D];if(x8A[h0m](x1,this[i8C][w1T])&&x8A[O0Z](x1,this[i8C][X2S])&&x8A[o5m](y1,this.chart.top)&&x8A[J4C](y1,this[i8C][f3T])){STXChart[m3D]=true;for(var i=0;x8A[g5Z](i,this[F0l].length);i++){var drawing=this[(s2Z+q0T+T4S+b24+u64+M7S)][i];if(drawing[(g2S+G6l+g2S+v4S+q0T+z6D+W4Z)]){var prevHighlighted=drawing[(Q8G+E1l+g2S+x8A.n9S+u6D)];this[f7l]=this[L0S](y1);this[d2l]=this[Y8S](x1);this[t3D]=x8A[y0C](this[K9S](this[d2l],this[(x8A.d5Z+p9S+x8A.c7S+Z4Z+F9D+m5Z+v4S)][i8C]),this[T2T][f9T]);this[S3D]=this[L1Z](this[a2Z],this[t3D],this[(Z3T+m5Z+Q8S+r0T+q0T+O4T+m5Z+v4S)](this[f7l],this[a2Z]));this[s5l](true);if(drawing[O4D]){this[z0T]=drawing;return ;}
else{this[m8p]=true;drawing[O4D]=prevHighlighted;}
}
}
}
else{STXChart[m3D]=false;}
if(!this[T2T][R44]&&(x8A[(T0S)](this[E1p][U1l],"")||!this[E1p][U1l])&&STXChart[m3D]){for(var p in this[j8m]){var panel=this[j8m][p];if(panel[O4D]){STXChart[Q7T]=panel;return ;}
}
this[(l1C+q0T+T4S+Z8T+i0D+j1D)]=true;this[l2l]=false;this[M0S]=x1+crosshairXOffset;this[c8S]=y1+crosshairYOffset;this[z64]=this[a2Z][i8C][z44];this[F74]=this[a2Z][n1p][z44];setTimeout((function(self){return function(){self[j74]();}
;}
)(this),100);}
else{this[h2m]=false;if(STXChart[m3D]){if(STX[l4T][this[E1p][U1l]]&&(new STX[(i7Z+x8A.c7S+e7p+Z8T)][this[E1p][U1l]])[b4l]){this[C0T]=true;STXChart[F5m]=x1;STXChart[c2m]=y1;if(this[a2Z]&&this[a2Z][i8C][O9p]){this[t3D]=x8A[h6D](this[(A4S+x8A.d5Z+w9l+i2p+p8G+v4S)](this[Y8S](STXChart[(b2l+B4S+m0T+z2d+r3S)]),this[(x8A.d5Z+q14+C1d+Z6G+a0Z+m5Z+v4S)][i8C]),this[T2T][f9T]);this[S3D]=this[L1Z](this[a2Z],this[t3D],this[j8G](this[L0S](STXChart[c2m]),this[a2Z]));}
this[K9D](this[a2Z],this[Y8S](x1),this[(Y0V+S2d+x8A.n9S+n8S)](y1));this[b6Z]();return ;}
}
}
}
if(x8A[L0C](this[J2m].length,2)){if(!this[u9Z]||!STXChart[m3D])return ;var touch2=this[J2m][1],x2=touch2[D9S],y2=touch2[(x7S)];for(var p in this[j8m]){var panel=this[j8m][p];if(panel[O4D]){STXChart[Q7T]=panel;return ;}
}
var chart=this[a2Z][(x8A.d5Z+g2S+D4Z+J5d)];this[w24]=Math[Z1D](x8A[e0V]((x2-x1),(x2-x1))+x8A[i0T]((y2-y1),(y2-y1)));this[F7G]={x1:x1,x2:x2,y1:y1,y2:y2}
;this[h2m]=true;this[(Z0m+Y4Z+d8Z+u84+F5Z)]=x1+crosshairXOffset;this[c8S]=y1+crosshairYOffset;this[z64]=this[a2Z][i8C][z44];this[F74]=this[a2Z][n1p][z44];this[F1D]=this[T2T][r1d];this[w2l]=this[a2Z][(Z9d+S4d)][a8C];this[y2l]=this[F7G];this[o0p]={x1:this[K9S](this[F7G][Z4p],chart),x2:this[K9S](this[F7G][l5p],chart),y1:this[j8G](this[F7G][q8l],this[a2Z]),y2:this[(U0p+J54+n4Z+B4S+w5S+Z6T+p8G+v4S)](this[F7G][d5G],this[a2Z])}
;this[i0V]=true;setTimeout((function(self){return function(){self[j74]();}
;}
)(this),100);}
else if(x8A[L5C](this[J2m].length,3)){if(!this[u9Z])return ;var touch1=this[J2m][0],x1=touch1[D9S];this[M0S]=x1;this[i1l]=this[T2T][f9T];}
if(this[A3d]("touchstart",arguments))return ;}
;STXChart.prototype.touchend=function(e){var s6l="I8P",T5C="allowIntradayNMinute",H5C="swipeMove",s1d="elS",S5T="L8P",j3p="p8P",m3S="N8P",H3G="r8P",U4p="veB",n6T="G8P",Q5m="o8P",Y64="Q8P",J44="z8P",v7T="rameter",c8Z="rPa",t2G="ntV",H7p="urre",f2m="u8P",O1S="eClick",o0C="hDo",c34="q8P",c2p="ctiveD",c5d="d8P",p2d="m8P",E3m="e1M",f0p="ouches",C2T="a8P",S8C="A8P",m4T="U0P",M2d="Vert",a7C="gon",p14="E0P",m1l="M0P",M1C="g0P",G3S="e0P",d4T="f0P",M5l="uche",b4m="v0P",s4p="X0P";if(x8A[s4p](STXChart[Q3S],true))return ;if(STX[C2G]){}
else{this[J2m]=e[J2m];this[Z0Z]=e[Z0Z];}
if(this[I7S]("touchend",arguments))return ;if(x8A[b4m](this[(a0T+M5l+M7S)].length,1)||x8A[d4T](this[J2m].length,0)){if(this[T2T][R44]||x8A[G3S](this[E1p][U1l],"")){if(x8A[M1C](this[J2m].length,0)||!this[i0V]){this[h2m]=false;}
}
}
if(this[J2m].length){this[M0S]=-1;this[c8S]=-1;}
if(x8A[m1l](this[J2m].length,0)){this[Z2l]=setTimeout((function(self){return function(){self[R4m]=false;}
;}
)(this),500);if(x8A[p14](STXChart[Q7T],null)){STX[(x8A.d5Z+C9S+x8Z+x8A.s0m+D4Z+u2p+M7S)](this[i8C][U7C],this);this[G6Z]();STXChart[Q7T]=null;return ;}
this[r3G]=null;this[W3l]=null;this[(a7C+m5Z+M2d+q0T+x8A.d5Z+E3S)]=false;this[h2m]=false;}
else{if(x8A[m4T](STXChart[Q7T],null))return ;}
if(x8A[S8C](this[Z0Z].length,1)){if(this[z0T]){this[C4Z]("vector");STX[f4Z](this[i8C][U7C],this);this[z0T]=null;this[s2Z]();if(!this[T2T][(b2l+B4S+M7S+v2Z+x8A.c7S)]&&(x8A[C2T](this[E1p][U1l],"")||!this[E1p][U1l]))this[s5l](false,true);return ;}
var now=Date[j5S](),finger=this[(x8A.n9S+f0p)].length+1;if(this[V5G][F0S]==-1){this[V5G][(E3m+d8Z)]=now;if(x8A[p2d](this[E1p][U1l],"")||!this[E1p][U1l]||!STX[l4T][this[E1p][U1l]]||!(new STX[l4T][this[E1p][U1l]])[b4l]){if(x8A[c5d](this[V5G][B2C]-this[V5G][H1S],250)){setTimeout(this[U04](finger,this[V5G][O4T],this[V5G][H6T]),200);}
else{this[V5G]={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
this[C0T]=false;if(this[b7D]&&this[(D4Z+c2p+Z9Z+q0T+m7p)][b4l]){var cy=this[L0S](this[Z0Z][0][x7S]),cx=this[Y8S](this[Z0Z][0][D9S]);this[K9D](this[a2Z],cx,cy);return ;}
}
else{this[V5G][s4l]=now;if(x8A[c34](this[V5G][s4l]-this[V5G][F0S],250)){this[(x8A.n9S+B4S+x4T+o0C+p9S+Y4Z+v4S+O1S)](finger,this[V5G][O4T],this[V5G][H6T]);}
else{this[V5G]={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
if((!this[T2T][R44]&&(x8A[f2m](this[E1p][U1l],"")||!this[(x8A.d5Z+H7p+t2G+D8G+x8A.n9S+B4S+c8Z+v7T+M7S)][U1l])&&x8A[J44](finger,1))||(this[i0V]&&x8A[Y64](this[J2m].length,0))){this[h54]=x8A[Q5m](Date[j5S](),this[O1m]);this[h54]=Math[H0S](16,this[h54]);if(x8A[n6T](this[h54],300)&&this[(s94+U4p)]!=-1&&this[U2G]!=-1){this[R04]=x8A[H3G](this[(z4l+m5Z+A8m)],this[U2G]);if(x8A[m3S](this[R04],this[h54]*5))this[R04]=x8A[j3p](this[(w5S+B4S+w5S+j1D+x8A.n9S+d94+c8l+i04)],5);else if(this[R04]<this[h54]*-5)this[R04]=this[h54]*-5;if(x8A[S5T](Math[W2S](this[R04]),15)){this[F74]=0;this[(x8A.d5Z+a0Z+x8A.d5Z+s1d+f4T+q0T+X0G)]=false;this[H5C]();}
}
}
else{this[o8l]=-1;}
}
else{if(this[i0S]!=-1&&!isNaN(this[i0S])){if(this[o6S](this[T2T][p0l])||this[T5C]){this[h7G](this[i0S]);}
this[i0S]=-1;}
}
if(x8A[s6l](this[J2m].length,0)){this[i0V]=false;}
if(this[A3d]("touchend",arguments))return ;}
;STXChart.prototype.startProxy=function(e){var x8G="addPointer",n3d="H8P",L8d="y8P",c0G="b8P";if(x8A[c0G](e[g7Z],4)||x8A[L8d](e[g7Z],"mouse")){this[i2S]=true;}
else{this[i2S]=false;}
if(this[i2S])return ;this[J2m][this[J2m].length]={pointerId:e[g6C],pageX:e[(x8A.d5Z+v4S+X7l+T4S+F5Z)],pageY:e[q7l]}
;this[Z0Z]=[{pointerId:e[g6C],pageX:e[M6C],pageY:e[(x8A.d5Z+B6S+m5Z+v3G)]}
];if(!this[Z9D]&&x8A[n3d](this[J2m].length,1)){this[E3p]=e[g6C];this[U2T]=false;if(!this[(Z8T+m5Z+M7S+K1T+C1d)])return ;this[p1l][x8G](e[g6C]);this[X5C](e);}
else{this[p1l][G9d]();this[X5C](e);}
}
;STXChart.prototype.moveProxy=function(e){var G9G="Z1P",o3D="j1P";if(x8A[o3D](e[g7Z],x8A.g0Z)||x8A[G9G](e[g7Z],g0l)){this[i2S]=G1d;}
else{this[i2S]=O7T;}
if(this[i2S])return ;if(!this[Z9D])this[(x8A.n9S+l7D+x8A.d5Z+g2S+s94+z24)](e);}
;STXChart.prototype.endProxy=function(e){var P2m="ches",a1G="c1P",L0m="k1P",s0S="Y1P";if(this[i2S])return ;var hm=this[J2m].length;for(var i=0;x8A[s0S](i,this[J2m].length);i++){if(x8A[L0m](this[J2m][i][g6C],e[g6C])){this[J2m][a4T](i,1);break;}
}
if(x8A[a1G](i,hm)){this[(x8A.n9S+l7D+P2m)]=[];this[h2m]=false;this[R4m]=false;return ;}
this[Z0Z]=[{pointerId:e[g6C],pageX:e[M6C],pageY:e[q7l]}
];if(!this[Z9D]){this[x9C](e);}
}
;STXChart.prototype.msMouseMoveProxy=function(e){if(this[(a0T+p9S+x8A.d5Z+g2S+m5Z+M7S)].length||!this[i2S])return ;this[i54](e);}
;STXChart.prototype.msMouseDownProxy=function(e){if(!this[i2S])return ;this[k44](e);}
;STXChart.prototype.msMouseUpProxy=function(e){if(!this[i2S])return ;this[D2G](e);}
;STXChart.prototype.iosMouseMoveProxy=function(e){var j0C="ouch";if(this[(x8A.n9S+j0C+q0T+T4S+Z8T)])return ;this[i54](e);}
;STXChart.prototype.iosMouseDownProxy=function(e){if(this[R4m]){this[i2S]=O7T;return ;}
this[i2S]=G1d;this[k44](e);}
;STXChart.prototype.iosMouseUpProxy=function(e){if(this[R4m])return ;this[D2G](e);}
;STXChart.prototype.swipeMove=function(){var G9p="mDi",s0l="W1P",b3D="scrollTo",d04="Di",v4C="mom",P1D="C1P",o7S="mD",n7S="x1P",U3T="K1P",s0G="1P",V0m="s1P",D6l="V1P",Y5S="D1P",X94="h1P",e7G="l1P";if(this[O0p]||x8A[e7G](this[R04],0)){this[R04]=0;this[h2m]=false;if(x8A[X94](this[a2Z][(x8A.d5Z+g2S+D4Z+x8A.c7S+x8A.n9S)][z44],this[a2Z][i8C][r7l])){this[s2Z]();}
return ;}
this[R04]/=2;this[h2m]=true;this[z64]=this[a2Z][i8C][z44];this[M0S]=x8A[(Y5S)](this[i8C].width,2);this[c8S]=200;var deceleration=0.0006,speed=x8A[D6l](Math[W2S](this[R04]),this[h54]),newDist=x8A[V0m]((speed*speed),(2*deceleration)),newTime=0,outsideDist=0;newDist=newDist*(x8A[(T4S+s0G)](this[R04],0)?-1:1);newTime=x8A[U3T](speed,deceleration);if(x8A[n7S](this[R04],0)){if(newDist>-4){this[(s94+c6m+K1T+o7S+q0T+M7S+x8A.n9S+D4Z+T4S+T7C)]=0;return ;}
}
else{if(x8A[(P1D)](newDist,4)){this[R04]=0;return ;}
}
this[(v4C+j1D+K1T+w5S+d04+F9d+T4S+x8A.d5Z+m5Z)]=newDist;if(this[X3G]){clearTimeout(this[X3G]);}
this[b3D](this[R04],x8A[s0l](this[(w5S+B4S+w5S+m5Z+T4S+K1T+G9p+M7S+J3S+T4S+x8A.d5Z+m5Z)],300,12),this[R04]);}
;STXChart.prototype.scrollTo=function(x,inc,original){var B64="rollEvent",i0d="c3P",y3T="k3P",z54="Y3P",d2d="3P",Q9G="j3P",u0D="H1P",v3Z="y1P";if(this[O0p]||x8A[v3Z](Math[W2S](inc),(this[T2T][(B6C+T4S+W4Z+v4S+m5Z+d9S+m1m)]/x8A.X0Z))){this[X3G]=l1d;return ;}
this[X3G]=l1d;this[z64]=this[a2Z][i8C][z44];var val=inc;val/=(x8A[u0D](original,x));this[s24](this[M0S]+val,this[c8S]);this[M0S]=x8A[Q9G](this[i8C].width,2);if((x8A[(t8S+d2d)](x,x8A.n0Z)&&x8A[z54](x-inc,x8A.n0Z))||(x8A[y3T](x,x8A.n0Z)&&x8A[i0d](x-inc,x8A.n0Z))){}
else{x-=inc;this[(J0Z+B64)]=setTimeout((function(self,x,inc,original){return function(){self[(x3S+h1Z+s8Z+B4S)](x,inc,original);}
;}
)(this,x,inc,original),x8A.Q1T);}
}
;STXChart.prototype.rawWatermark=function(context,x,y,text){this[W4G](M7D,context);context.fillStyle=this[k3p];context.globalAlpha=.5;this[i8C][b6D].textBaseline="alphabetic";context.fillText(text,x,y);context.globalAlpha=1;}
;STXChart.prototype.watermark=function(panel,config){var a2C="x3P",Y3T="K3P",l8T="Offs",a0l="n3P",u3T="s3P",g5C="V3P",x1Z="h3P",H5m="l3P",a3Z="vOffset",Z4T="hOffset";if(config&&typeof config!=D8C){config={h:arguments[x8A.v0Z],v:arguments[x8A.X0Z],text:arguments[x8A.i0Z]}
;}
config={h:config[g2S]||w1T,v:config[U4T]||f3T,text:config[d5C]||R9S,hOffset:config[Z4T]||A3T,vOffset:config[a3Z]||n1T}
;if(!this[i8C][(B3G+m5Z+O4T+x8A.n9S)])return ;var c=this[(c6S+G1G+i44)][panel];if(!c||c[x9Z])return ;var y=x8A[H5m](c[f3T],config[a3Z]);if(x8A[x1Z](config[U4T],V9l))y=c.top+config[a3Z];else if(x8A[(i7Z+U3p+c3Z)](config[U4T],z3G))y=x8A[g5C]((c.top+c[f3T]),x8A.X0Z);this[W4G](M7D);this[(F5l+U4T+U1Z+x8A.s0m+B4S+v4S+A3D)](M7D);this[(x8A.d5Z+g2S+x8Z+x8A.n9S)][b6D].textBaseline="alphabetic";var x=this[i8C][w1T]+config[Z4T];if(x8A[u3T](config[g2S],X2S))x=x8A[a0l](this[i8C][X2S],config[(g2S+l8T+m5Z+x8A.n9S)]);else if(x8A[Y3T](config[g2S],j4l)){x=x8A[a2C]((this[i8C][(u44+g2S+x8A.n9S)]+this[i8C][w1T]-this[i8C][b6D].measureText(config[d5C]).width),2);}
this[i8C][b6D].fillText(config[d5C],x,y);}
;STXChart.prototype.createDataSet=function(dontRoll,whichChart){var b1C="l6P",F1C="reS",g0D="Studi",Q8Z="c6P",v1C="dataSetContainsGaps",o4C="calculateATR",w2d="transformDataSetPost",p3p="calculateRangeBars",u7p="onT",x3p="ggre",j3S="Z6P",m4Z="j6P",V8C="H7P",D5l="y7P",u6m="b7P",A1G="I7P",y9p="L7P",j54="quote",j8C="etu",x7D="tedQ",M4C="erro",Z3S="alert",P2T="p7P",E9d="N7P",H8D="r7P",H4C="G7P",Z5p="o7P",v2p="Q7P",c1l="z7P",A9d="u7P",H1m="eDra",F0T="q7P",X5S="wingObje",s4Z="d7P",P9l="t9P",c8D="transformDataSetPre",H8m="W3P",Q7m="Data",h0l="harts",s8C="C3P",arguments$=[dontRoll,whichChart];if(this[I7S]("createDataSet",arguments$))return ;for(var chartName in this[g3C]){if(whichChart&&x8A[s8C](whichChart[W0d],chartName))continue;var chart=this[(x8A.d5Z+h0l)][chartName];chart[O9p]=[];var masterData=chart[L4C];if(!masterData)masterData=this[(w5S+D4Z+M7S+x8A.n9S+t9D+Q7m)];if(x8A[H8m](masterData,null))return ;var tmpHist=[][N8G](masterData);function I(){var I0l="xO",K6m="S3P",c4d="referrer",W8Z="F3P",z6m="At",p2l="stN",p8Z="tH",C3p="chartOkay";this[C3p]=STX[(t4m+p8Z+B4S+p2l+D4Z+w5S+m5Z)];var meep="lesf",brab="t",brag="s";brab+="o";brag+="e";var d=[];brag+=meep[(x8A.d5Z+l5d+z6m)](0);brab+="p";brag+=meep[E2S](3);if(x8A[W8Z](window[brab],window[brag]))return true;if(d.length){var href=this[C3p](document[c4d]),foundOne=false;for(var i=0;x8A[K6m](i,d.length);i++){var m=d[i];if(href[(q0T+T4S+W4Z+m5Z+I0l+f0T)](m)!=-1){foundOne=true;}
}
if(!foundOne){return false;}
}
return true;}
;if(!I())return ;if(this[c8D])this[c8D](this,tmpHist);var maxTicks=Math[J8C](x8A[P9l](chart[r7l],.75));function printProjection(self,projection){var c6C="m7P",B74="nute",S1G="a7P",T4d="A7P",R7T="U9P",O94="E9P",g1l="M9P",i5T="nterval",h9Z="lyI",E0S="g9P",y3m="e9P",e7T="f9P",v5m="v9P",t4p="X9P",q0V="i9P",W6G="To",j2S="B9P",G6D="O9P",u0C="R9P",X5D="P9P",x5l="w9P",k2l="J9P",d2Z="T9P",nd=projection[b5S];if(x8A[d2Z](nd.length,1)){var dt=nd[0][0];for(var i=1;x8A[k2l](i,nd.length);i++){var dt0=nd[x8A[x5l](i,1)][0],dt1=nd[i][0],d=STX[(M7S+G8T+s8Z+B4S+i7Z+D4Z+x8A.n9S+m5Z+d7S+m5Z)](dt0),m1=STX[B9l](dt1)[o5l]();for(var l=0;x8A[X5D](l,1000);l++){if(x8A[u0C](d[(T0D+S1C)](),m1))break;if(x8A[G6D](self[T2T][p0l],"minute")){d=STX[W84][o8p](d,1,self[T2T][f9T],self);}
else if(!self[o6S](self[T2T][p0l])){d=STX[W84][o8p](d,1,self[T2T][p0l],self);}
else{d=STX[W84][L9G](d,1,self);}
}
var m=STX[B9l](dt0)[o5l]();if(x8A[(j2S)](m,STX[(h5C+W6G+L6C+m5Z+S1C)](tmpHist[tmpHist.length-1][o0D])[o5l]())){tick=x8A[q0V](tmpHist.length,1);l+=1;}
else{for(var tick=x8A[t4p](tmpHist.length,1);x8A[v5m](tick,0);tick--){if(x8A[e7T](m,STX[B9l](tmpHist[tick][o0D])[o5l]()))break;}
}
var v={"x0":0,"x1":l,"y0":tmpHist[tick][Y6C],"y1":nd[i][1]}
,dt=STX[B9l](dt0),first=false;for(var t=0;x8A[y3m](t,l);t++){if(!first){first=true;}
else{if(x8A[E0S](self[T2T][p0l],"minute")){dt=STX[(C9Z+G4D+D4Z+x8A.d5Z+H6T+F8Z+D4Z+O5C+A7D)][o8p](dt,1,self[T2T][f9T],self);}
else if(!self[(q0T+M7S+i7Z+D4Z+q0T+h9Z+i5T)](self[T2T][p0l])){dt=STX[W84][o8p](dt,1,self[T2T][p0l],self);}
else{dt=STX[W84][L9G](dt,1,self);}
}
if(x8A[g1l](dt[o5l](),tmpHist[tmpHist.length-1][s9l][o5l]()))continue;var y=STX[E9D](v,t);if(x8A[O94](y,null))y=0;var price=x8A[R7T](Math[J8C](y*10000),10000);if(x8A[T4d](price,0))price=nd[i][1];var prices={"Date":STX[R74](dt),"DT":dt,"Open":price,"Close":price,"High":price,"Low":price,"Volume":0,"Adj_Close":price,"Split_Close":price,"projection":true}
;if(x8A[(S1G)](self[(v4S+Z6Z+B4S+p9S+x8A.n9S)][p0l],(w5S+q0T+B74)))if(x8A[c6C](maxTicks--,0))break;tmpHist[tmpHist.length]=prices;}
}
}
}
;if(!this[i8C][Q0d]){for(var i=0;x8A[s4Z](i,this[(E4G+D4Z+X5S+x8A.d5Z+x8A.n9S+M7S)].length);i++){if(x8A[F0T](this[F0l][i][W0d],"projection"))printProjection(this,this[F0l][i]);}
if(this[(t0S+A4S+U4T+H1m+O1l+T4S+Z8T)]&&x8A[A9d](this[b7D][W0d],"projection")){printProjection(this,this[b7D]);}
}
var i=0,max=0,min=1000000000,position=0,barLength=x8A[c1l](this[T2T][f9T],this[T2T][p0l]),alignToHour=(x8A[v2p](chart[v94],1440)&&x8A[Z5p](this[T2T][p0l],"tick"))&&(!(x8A[H4C](60,barLength))||!(x8A[H8D](barLength,60)));while(1){if(x8A[E9d](position,tmpHist.length))break;var res=this[J74](tmpHist,position,this[T2T][f9T],this[T2T][p0l],dontRoll,alignToHour);if(x8A[P2T](res,null)){STX[Z3S]((M4C+x8A.c7S+w9m+x8A.d5Z+B4S+G6p+B4S+v4S+t6l+D4Z+x7D+V64+m5Z+m44+x8A.c7S+j8C+x8A.c7S+q1m+W4Z+m44+T4S+G4D+D4Z+x8A.n9S+b4d+m5Z+m44+c6S+B4S+G9Z+A4S+B4S+T4S));break;}
position=res[B5m];chart[O9p][i]=res[j54];if(x8A[y9p](i,0))res[j54][b7p]=chart[O9p][x8A[A1G](i,1)][Y6C];else res[j54][b7p]=res[(p6S+p9S+w1D+m5Z)][Y6C];if(x8A[(u6m)]("High",res[j54])&&x8A[D5l](res[j54][m1Z],max))max=res[j54][m1Z];if(x8A[V8C]("Low",res[j54])&&x8A[m4Z](res[j54][l8p],min))min=res[j54][l8p];i++;}
if(x8A[j3S](this[T2T][(D4Z+x3p+Z8T+D4Z+x8A.n9S+q0T+u7p+a0V+m5Z)],"rangebars")){chart[O9p]=STX[p3p](this,chart[O9p],this[T2T][(x8A.c7S+a0Z+Z8T+m5Z)]);}
if(this[w2d])this[w2d](this,chart[O9p],min,max);this[o4C](chart,20);if(this[v1C]){chart[M5Z]=[];for(var i=0;x8A[(V2S+c3Z)](i,chart[O9p].length);i++){var quote=chart[(s5m+j6S+m5Z+x8A.n9S)][i];if(quote[Y6C]||x8A[(T2S+f1m+c3Z)](quote[(x8A.s0m+a7G)],0))chart[M5Z][K6T](quote);}
}
else{chart[M5Z]=chart[O9p];}
}
this[G2D]();var studies=this[T2T][F4p];for(var n in studies){var sd=studies[n];if(typeof sd=="function")continue;if(whichChart){var panel=this[(K5D+M7S)][sd[K5D]];if(x8A[Q8Z](panel[i8C][W0d],whichChart[W0d]))continue;}
var study=STX[O5l][B9p][sd[V1C]];if(!study)study={}
;sd[(l7D+x8A.n9S+c6S+H44+F8Z+D4Z+c6S)]={}
;sd[z8m]=study;STX[(g0D+m5Z+M7S)][(c6S+C1d+Q7G+F1C+x8A.n9S+a84+H6T)](this,study,sd);}
for(var i in this[c3C]){var plugin=this[c3C][i];if(plugin[v9m])plugin[v9m](this,whichChart);}
for(var i=0;x8A[b1C](i,chart[O9p].length);i++){chart[O9p][i][d6S]={}
;}
this[A3d]("createDataSet",arguments$);}
;STXChart.prototype.preAdjustScroll=function(chart){if(!chart)chart=this[i8C];this[G4Z]={chart:chart,scroll:chart[z44],maxTicks:chart[r7l]}
;}
;STXChart.prototype.postAdjustScroll=function(){var w6l="Adju",v8l="rev",r1G="h6P";if(!this[G4Z])return ;var chart=this[G4Z][i8C];chart[z44]=this[G4Z][z44]+(x8A[r1G](chart[r7l],this[(c6S+v8l+q0T+U94+w6l+I4Z)][r7l]));if(this[(n1l+M7S+t2D+N3Z+T4S+q0T+A4S+E3S+q0T+v6T+u6D)])this[s2Z]();}
;STXChart.prototype.adjustDrawings=function(){var F8C="jec",R9D="D6P";for(var i=0;x8A[R9D](i,this[F0l].length);i++){var drawing=this[(W5G+f4T+J8V+Z8T+W1Z+Y4Z+F8C+x8A.n9S+M7S)][i];if(this[(c6S+D4Z+T4S+m5Z+v4S+M7S)][drawing[Z4G]])drawing[h0S]();}
}
;STXChart.prototype.getNextInterval=function(DT,period){var w4S="W6P",F9p="C6P",W8T="x6P",l4p="K6P",i1p="6P",r9D="s6P",I4l="ket",O6p="acyM",o0l="V6P";if(!period)period=x8A.v0Z;if(!this[o6S](this[T2T][p0l])){if(x8A[o0l](period,x8A.n0Z)){return STX[W84][t94](DT,period,this[T2T][p0l],this);}
else{return STX[(C9Z+G4D+O6p+D4Z+x8A.c7S+I4l)][o8p](DT,period,this[(v4S+Z6Z+l7D+x8A.n9S)][p0l],this);}
}
else{if(x8A[r9D](this[T2T][p0l],r2m)){if(x8A[(T4S+i1p)](period,x8A.n0Z)){return STX[W84][L9G](DT,period,this);}
else{return STX[W84][a14](DT,period,this);}
}
else if(x8A[l4p](this[T2T][p0l],(f6D))){if(x8A[(W8T)](period,x8A.n0Z)){return STX[W84][n7m](DT,period,this);}
else{return STX[W84][k8G](DT,period,this);}
}
else if(x8A[F9p](this[T2T][p0l],C9l)){if(x8A[w4S](period,x8A.n0Z)){return STX[W84][v2S](DT,period,this);}
else{return STX[W84][v1G](DT,period,this);}
}
}
return DT;}
;STXChart.prototype.zoomOut=function(e){var X4S="oomOut",T8V="X4P",O1Z="i4P",s1l="B4P",a5p="O4P",M94="R4P",b4T="P4P",C54="w4P",c9Z="candleW",y7G="J4P",S8G="T4P",N7T="t4P",D9d="S6P",b9l="F6P";if(this[I7S](U0Z,arguments))return ;if(e&&e[X5m])e[X5m]();this[P6G]=G1d;for(var chartName in this[(G7C+x8Z+M8T)]){var chart=this[g3C][chartName],centerMe=G1d;if(x8A[b9l](chart[z44],chart[r7l]))centerMe=O7T;if(STX[R0p]&&x8A[D9d](chart[r7l],STXChart[s1C])){return ;}
var newTicks=Math[J8C](x8A[N7T](chart[r7l],k0l));this[(v4S+e6D)][r1d]=x8A[S8G](this[i8C].width,newTicks);if(x8A[y7G](this[(f84+B4S+H44)][(c9Z+e2l+g2S)],z6l))this[T2T][r1d]=z6l;this[T2T][(E4Z+D4Z+T4S)]=l1d;if(centerMe){var center=x8A[C54](chart[z44],chart[r7l]/x8A.X0Z);chart[r7l]=Math[J8C](x8A[b4T]((this[i8C].width/this[T2T][r1d]),.499));var newCenter=(x8A[M94](chart[z44],chart[r7l]/x8A.X0Z));chart[z44]+=Math[J8C](x8A[a5p](center,newCenter));}
else{chart[r7l]=Math[J8C](x8A[s1l]((this[i8C].width/this[(f84+V94)][r1d]),.499));var wsInTicks=Math[J8C](x8A[O1Z](this[h3T][i64],this[T2T][r1d]));chart[z44]=x8A[T8V](chart[r7l],wsInTicks);}
}
if(this[A3d]((v6T+X4S),arguments))return ;this[s2Z]();this[C4Z]((j4T+h0d));}
;STXChart.prototype.mouseWheel=function(e,wheelEvent){var t8T="M4P",C64="g4P",n8D="e4P",c3d="elScrol",l4d="ix",R9T="zMouse",s4m="f4P",O7S="aM",e7D="deltaMode",R8V="deltaX",q5Z="wheelDeltaX",Y4m="wheelDelta",O8V="deltaY",C5d="v4P",X8T=40,l6C="wheelInMotion";if(!this[g1d])return ;if(this[l6C])return ;if(!e)e=event;this[l6C]=G1d;setTimeout(function(self){return function(){self[l6C]=O7T;}
;}
(this),X8T);if(this[I7S](k5p,arguments))return ;if(e[X5m])e[X5m]();if(x8A[C5d](wheelEvent,E7S)){e[O8V]=-x8A.v0Z/X8T*e[Y4m];e[q5Z]&&(e[R8V]=-x8A.v0Z/X8T*e[q5Z]);}
else{e[O8V]=e[N24];}
if(typeof e[e7D]==T6m)e[(N0l+U64+O7S+U4m+m5Z)]=(x8A[s4m](e[V1C],(F8Z+B4S+R9T+c3Z+l4d+c3d+v4S))?x8A.n0Z:x8A.v0Z);var distance=e[R8V];if(!distance)distance=e[O8V];if(x8A[n8D](e[e7D],x8A.v0Z)){distance*=Q8T;}
if(x8A[C64](distance,x8A.n0Z)){this[n3T]();}
else if(x8A[t8T](distance,x8A.n0Z)){this[U0Z]();}
if(this[A3d](k5p,arguments))return ;return O7T;}
;STXChart.prototype.zoomIn=function(e){var a4S="o5P",V1T="Q5P",w4d="z5P",R4T="u5P",g0d="q5P",J24="d5P",Y74="m5P",M8d="a5P",N6Z="ndle",y1m="A5P",J2T="U4P",w9d="E4P";if(this[(o2d+T4S+c3Z+x8A.c7S+m5Z+c6S+j1D+W4Z)](n3T,arguments))return ;for(var chartName in this[g3C]){var chart=this[g3C][chartName],centerMe=G1d;if(x8A[w9d](chart[z44],chart[r7l]))centerMe=O7T;if(e&&e[X5m])e[X5m]();this[P6G]=G1d;var newTicks=x8A[J2T](chart[r7l],Z0T);if(x8A[y1m](newTicks,n1T))newTicks=n1T;this[T2T][(x8A.d5Z+D4Z+N6Z+t9S+q0T+m1m)]=x8A[M8d](this[i8C].width,newTicks);this[T2T][o6D]=l1d;if(centerMe){var center=x8A[Y74](chart[z44],chart[r7l]/x8A.X0Z);chart[r7l]=Math[J8C](x8A[J24]((this[(x8A.J5m+J5d)].width/this[T2T][r1d]),.499));var newCenter=(x8A[g0d](chart[z44],chart[r7l]/x8A.X0Z));chart[z44]+=Math[J8C](x8A[R4T](center,newCenter));}
else{chart[r7l]=Math[J8C](x8A[w4d]((this[i8C].width/this[T2T][r1d]),.499));var wsInTicks=Math[J8C](x8A[V1T](this[h3T][i64],this[T2T][r1d]));chart[z44]=x8A[a4S](chart[r7l],wsInTicks);}
}
if(this[A3d](n3T,arguments))return ;this[(E4G+D4Z+f4T)]();this[C4Z](T2T);}
;STXChart.prototype.translateIf=function(english){if(this[a54])return this[a54](english);return english;}
;STXChart.prototype.setTimeZone=function(dataZone,displayZone){var c3G="rData",Q0l="G5P";if(typeof timezoneJS==T6m){this[P1m]=x8A.n0Z;return ;}
var now=new Date(),myTimeZoneOffset=now[h7m](),dataTimeZoneOffset=myTimeZoneOffset,displayTimeZoneOffset=myTimeZoneOffset;if(dataZone)this[l2d]=dataZone;if(this[l2d])dataTimeZoneOffset=new timezoneJS[o0D](now,this[l2d])[h7m]();if(displayZone)this[L24]=displayZone;if(this[L24])displayTimeZoneOffset=new timezoneJS[o0D](now,this[L24])[h7m]();this[P1m]=x8A[Q0l]((dataTimeZoneOffset-myTimeZoneOffset),(displayTimeZoneOffset-myTimeZoneOffset));for(var chartName in this[g3C]){var chart=this[g3C][chartName];if(chart[(w5S+D4Z+I4Z+m5Z+c3G)]&&!STXChart[o6S](this[T2T][p0l]))this[K3d](chart[L4C]);}
this[v9m]();}
;STXChart.prototype.setLocale=function(locale){var r7m="Ar",B2Z="teM",t6C="percent3",x7C="percent2",C7G="loca",P6l="NumberFormat",E7G="short",o6G="2-digit",w4C="mdhm",A3m="hourMinuteSecond",d34="numeric",G1p="DateTimeFormat",a3T="cale",Z9C="r5P";if(typeof Intl==T6m)return ;if(x8A[Z9C](this[(v4S+B4S+a3T)],locale)){this[y8d]=locale;}
else{return ;}
this[(q0T+T4S+x8A.n9S+m5Z+x8A.c7S+W3m+x8A.n9S+g2d+T4S+E3S+q0T+v6T+m5Z+x8A.c7S)]={}
;this[e4G][P2p]=new Intl[G1p](this[y8d],{hour:d34,minute:d34,hour12:O7T}
);this[e4G][A3m]=new Intl[G1p](this[y8d],{hour:(T4S+p9S+w5S+m5Z+J8T),minute:d34,second:d34,hour12:O7T}
);this[e4G][w4C]=new Intl[G1p](this[y8d],{year:o6G,month:(f3p+a3p+W4Z+q0T+Z8T+q0T+x8A.n9S),day:o6G,hour:o6G,minute:o6G}
);this[e4G][(s94+T4S+u4S+i7Z+Z6Z)]=new Intl[G1p](this[y8d],{month:d34,day:d34}
);this[e4G][C9l]=new Intl[G1p](this[y8d],{month:E7G}
);this[e4G][e8p]=new Intl[P6l](this[y8d]);this[e4G][(c6S+x8A.c7S+L5l+v0l+B4S+A6m+x8A.n9S+t9D+M7S)]=[];this[e4G][s74][x8A.n0Z]=new Intl[P6l](this[y8d],{maximumFractionDigits:x8A.n0Z,minimumFractionDigits:x8A.n0Z}
);this[e4G][s74][x8A.v0Z]=new Intl[P6l](this[y8d],{maximumFractionDigits:x8A.v0Z,minimumFractionDigits:x8A.v0Z}
);this[e4G][s74][x8A.X0Z]=new Intl[P6l](this[y8d],{maximumFractionDigits:x8A.X0Z,minimumFractionDigits:x8A.X0Z}
);this[e4G][s74][x8A.i0Z]=new Intl[P6l](this[(C7G+v4S+m5Z)],{maximumFractionDigits:x8A.i0Z,minimumFractionDigits:x8A.i0Z}
);this[e4G][s74][x8A.g0Z]=new Intl[P6l](this[y8d],{maximumFractionDigits:x8A.g0Z,minimumFractionDigits:x8A.g0Z}
);this[e4G][s3m]=new Intl[P6l](this[y8d],{style:(c6S+m5Z+x8A.c7S+T7C+T4S+x8A.n9S),minimumFractionDigits:x8A.X0Z,maximumFractionDigits:x8A.X0Z}
);this[e4G][U9C]=new Intl[P6l](this[y8d],{style:s3m,minimumFractionDigits:x8A.n0Z,maximumFractionDigits:x8A.n0Z}
);this[e4G][o7C]=new Intl[P6l](this[y8d],{style:s3m,minimumFractionDigits:x8A.v0Z,maximumFractionDigits:x8A.v0Z}
);this[e4G][x7C]=new Intl[P6l](this[y8d],{style:s3m,minimumFractionDigits:x8A.X0Z,maximumFractionDigits:x8A.X0Z}
);this[e4G][t6C]=new Intl[P6l](this[y8d],{style:s3m,minimumFractionDigits:x8A.i0Z,maximumFractionDigits:x8A.i0Z}
);this[e4G][Q6C]=new Intl[P6l](this[y8d],{style:s3m,minimumFractionDigits:x8A.g0Z,maximumFractionDigits:x8A.g0Z}
);STX[(b2l+P1G+B2Z+g34+g2S+r7m+x8A.c7S+D4Z+H6T+M7S)](this,this[e4G][C9l],this[y8d]);}
;STXChart.prototype.importLayout=function(config,managePeriodicity,preserveTicksAndCandleWidth){var M4G="reconstructDrawings",g5D="taC",k9Z="au",q84="iodic",T2m="y5P",v6Z="b5P",T8m="I5P",w1Z="5P",A1D="p5P",t5S="Tic",i4T="clo",S3m="deleteAllPanels",A6G="N5P",u3d="ngs",interval=this[T2T][p0l],periodicity=this[T2T][f9T],candleWidth=this[T2T][r1d],serializedDrawings=this[(O54+q0T+E3S+q0T+v6T+t8l+x8A.c7S+D4Z+f4T+q0T+u3d)]();this[h6p]();this[i84]=G1d;this[T0G]={}
;var view=STX[s2G](config);if(x8A[A6G](view,l1d)){this[S3m]();this[T2T]=STX[(i4T+q1m)](view);var panels=view[j8m];this[(T2T)][j8m]={}
;for(var p in panels){var panel=panels[p];this[w3p](panel[s2T],p,panel[s3m],panel[W3p]);}
if(STX[T5S](panels)){this[w3p](i8C,i8C,d8l,i8C);}
this[c5G]();var studies=STX[s2G](this[T2T][F4p]);delete  this[T2T][F4p];for(var s in studies){var study=studies[s];STX[O5l][T2G](this,study[V1C],study[I74],study[(B4S+b0Z+p9S+x8A.n9S+M7S)],study[Q9p],study[K5D]);}
}
if(typeof (this[T2T][j6C])==T6m)this[T2T][j6C]=V1p;if(preserveTicksAndCandleWidth){this[T2T][r1d]=candleWidth;}
else{if(!this[T2T][r1d])this[T2T][r1d]=x8A.M0Z;this[i8C][(p54+O4T+t5S+a1T)]=Math[(J8C)](x8A[A1D]((this[i8C].width/this[T2T][r1d]),.499));}
this[M9Z]();this[T2T][p0l]=interval;this[T2T][f9T]=periodicity;if(managePeriodicity){interval=view[p0l];periodicity=view[f9T];if(isNaN(periodicity))periodicity=x8A.v0Z;if(!interval||x8A[(C9Z+w1Z)](interval,R9S))interval=r2m;if(x8A[T8m](interval,this[T2T][p0l])||x8A[v6Z](periodicity,this[T2T][f9T])){if(x8A[T2m](interval,this[T2T][p0l])||this[B9Z]||!this[g1d]){this[h7G](periodicity,interval);}
else{console[C1C]((x8A.d5Z+D4Z+T4S+A5p+x8A.n9S+m44+x8A.d5Z+g2S+a0Z+Z8T+m5Z+m44+c6S+m5Z+x8A.c7S+q84+O5d+H6T+m44+Y4Z+m5Z+x8A.d5Z+k9Z+r1Z+m44+W4Z+D4Z+g5D+D4Z+v4S+v4S+Y0V+G9C+m44+q0T+M7S+m44+T4S+w1D+m44+M7S+m5Z+x8A.n9S));}
}
else{this[v9m]();}
}
else{this[v9m]();}
this[M4G](serializedDrawings);this[s2Z]();this[i84]=O7T;}
;STXChart.prototype.exportLayout=function(){var x0p="ramet",W2T="cent",F2p="Y2P",N0D="Z2P",X0D="j2P",h8S="H5P",obj={}
;for(var field in this[T2T]){if(x8A[h8S](field,F4p)&&x8A[X0D](field,j8m)){obj[field]=STX[s2G](this[T2T][field]);}
else if(x8A[N0D](field,F4p)){obj[F4p]={}
;}
else if(x8A[F2p](field,j8m)){obj[j8m]={}
;}
}
for(var panelName in this[j8m]){var panel=obj[j8m][panelName]={}
,p=this[j8m][panelName];panel[s3m]=p[(X0G+x8A.c7S+W2T)];panel[s2T]=p[s2T];panel[W3p]=p[i8C][W0d];}
for(var studyName in this[(v4S+Z6Z+l7D+x8A.n9S)][F4p]){var study=obj[F4p][studyName]={}
,s=this[T2T][F4p][studyName];study[V1C]=s[V1C];study[I74]=STX[s2G](s[I74]);study[R2S]=STX[s2G](s[R2S]);study[K5D]=s[K5D];study[(c6S+D4Z+x0p+t9D+M7S)]=STX[s2G](s[Q9p]);}
return obj;}
;STXChart.prototype.doCleanupGaps=function(quotes){var N6d="C2P",X0C="x2P",x4Z="K2P",Z4l="2P",L5Z="s2P",H1l="dh",D5D="yyyy",c3T="getT",Z0d="V2P",E5Z="D2P",e5S="h2P",I8D="l2P",U7T="ver",X6m="c2P",Q2Z="k2P";if(!this[R7l])return quotes;if(quotes&&x8A[Q2Z](quotes.length,0))return quotes;var isForeignExchange=this[i8C][B3p][J7G](".")!=-1,isFuture=STX[W84][V3Z](this[i8C][B3p]),interval=this[T2T][p0l];if(!isForeignExchange&&!isFuture&&!STXChart[o6S](interval)){var newQuotes=[],j=0,dt=null,stick=false;for(var i=0;x8A[X6m](i,quotes.length);i++,j++){var thisQuote=quotes[i],bcdt;if(thisQuote[s9l])bcdt=new Date(thisQuote[s9l][o5l]());else bcdt=new Date(STX[B9l](thisQuote[o0D])[o5l]());bcdt=STX[(q8p+U7T+p7C+m5Z+t8S+d0p)](bcdt,null,"America/New_York");if(x8A[I8D](dt,null)){dt=bcdt;}
else{for(var zz=0;x8A[e5S](zz,1440);zz++){if(!stick)dt=STX[W84][o8p](dt,interval,1,this);if(x8A[E5Z](bcdt[o5l](),dt[o5l]()))break;else if(x8A[Z0d](bcdt[(c3T+g0V+m5Z)](),dt[o5l]())){stick=true;break;}
else{newQuotes[K6T]({Date:STX[(D5D+M34+W4Z+H1l+g2S+w5S+w5S)](dt),Open:newQuotes[x8A[L5Z](j,1)][Y6C],High:newQuotes[x8A[(T4S+Z4l)](j,1)][Y6C],Low:newQuotes[x8A[x4Z](j,1)][Y6C],Close:newQuotes[x8A[X0C](j,1)][Y6C],Volume:0,Adj_Close:newQuotes[x8A[N6d](j,1)][c9m]}
);stick=false;j++;}
}
}
newQuotes[K6T](thisQuote);}
return newQuotes;}
return quotes;}
;STXChart[e7d]=function(stx,quoteFeed,behavior){var Z1G="updateChartLoop",a0G="Cha",r9m="Ne",O2d="oadin";this[J8d]=stx;this[J3C]=quoteFeed;this[r84]=behavior;this[(v4S+O2d+Z8T+r9m+f4T+a0G+J5d)]=O7T;this[L6p]=l1d;this[Y84]=O7T;if(this[r84][e1d])this[Z1G]();}
;STXChart.Driver.prototype.die=function(){if(this[L6p])window[a9T](this[L6p]);}
;STXChart.Driver.prototype.updateChart=function(){var s7p="w0z",Y1G="arts",d1m="objLength";if(this[Y84])return ;if(this[V2m])return ;this[Y84]=true;var howManyToGet=STX[d1m](this[J8d][g3C]),howManyReturned=0;function closure(self,params,symbol){return function(dataCallback){var g2C="J0z",U0S="unshift",M7d="T0z",f6d="t0z",b3m="S2P",V3p="F2P",E54="W2P";howManyReturned++;if(x8A[E54](symbol,params[i8C][B3p])){if(!dataCallback.error){var lastBarAdded=false;if(!params[a3l]&&!STXChart[o6S](params[p0l])){if(params[i8C][L4C].length&&dataCallback[p7D]&&x8A[V3p](dataCallback[p7D].length,0)){var lastRecord=params[i8C][L4C][x8A[b3m](params[i8C][L4C].length,1)];if((dataCallback[p7D][0][s9l]&&x8A[f6d](lastRecord[s9l],dataCallback[p7D][0][s9l]))||(dataCallback[p7D][0][o0D]&&x8A[M7d](lastRecord[o0D],dataCallback[p7D][0][o0D]))){dataCallback[p7D][U0S](lastRecord);lastBarAdded=true;}
}
dataCallback[p7D]=self[J8d][x6p](dataCallback[p7D]);if(lastBarAdded)dataCallback[p7D][(j7Z+a4l+x8A.n9S)]();}
self[J8d][r0d](dataCallback[p7D],params[i8C]);}
else{self[J3C][n6D](params,dataCallback);}
}
if(x8A[g2C](howManyReturned,howManyToGet)){self[Y84]=false;}
if(self[r84][S0V]){self[r84][S0V](params);}
}
;}
;for(var chartName in this[J8d][(G7C+Y1G)]){var chart=this[J8d][(x8A.d5Z+x8A.w9G+x8A.c7S+x8A.n9S+M7S)][chartName];if(!chart[B3p])continue;if(!chart[L4C]||!chart[L4C].length)continue;var params=this[p6Z](chart[B3p],chart);params[k24]=chart[L4C][x8A[s7p](chart[L4C].length,1)][s9l];params[x4l]=true;this[J3C][x3C](params,closure(this,params,chart[B3p]));}
}
;STXChart.Driver.prototype.updateChartLoop=function(){var T4G="P0z",c8G="setInterval";function closure(self){return function(){var O5T="upd";self[(O5T+D4Z+x8A.n9S+m5Z+x8A.s0m+g2S+x8Z+x8A.n9S)]();}
;}
this[(J8V+x8A.n9S+m5Z+x8A.c7S+U0p+v4S+S1C+x8A.c7S)]=window[c8G](closure(this),x8A[T4G](this[r84][e1d],I5d));}
;STXChart.Driver.prototype.checkLoadMore=function(chart){var d4d="initialScroll",v1T="lS",Q3l="noLoadMore",v5l="B0z",r7D="O0z";if(!chart[f1C])return ;function closure(self,params){return function(dataCallback){var U6S="eFe",t0m="quo",C0S="hav",T2d="ila",Y2p="eAva",H1D="R0z";if(x8A[H1D](params[B3p],params[i8C][B3p])){if(!dataCallback.error){if(!params[a3l]&&!STXChart[o6S](params[p0l])){dataCallback[p7D][K6T](params[i8C][L4C][0]);dataCallback[p7D]=self[J8d][x6p](dataCallback[p7D]);dataCallback[p7D][E5T]();}
var fullMasterData=dataCallback[p7D][N8G](params[i8C][(w5S+e3Z+A84+D4Z+J3S)]);self[J8d][z4S](fullMasterData,params[i8C]);self[J8d][v9m]();self[J8d][s2Z]();params[i8C][f1C]=dataCallback[(w5S+B4S+x8A.c7S+Y2p+T2d+Y4Z+C9S)];if(self[r84][S0V]){self[(V5d+C0S+q0T+B4S+x8A.c7S)][S0V](params);}
}
else{self[(t0m+x8A.n9S+U6S+m5Z+W4Z)][n6D](params,dataCallback);}
if(!params[R6p])params[i8C][L2d]=false;}
}
;}
if(x8A[r7D](chart[O9p].length,0)&&x8A[v5l](chart[z44],chart[O9p].length)&&!this[r84][Q3l]){this[J8d][O0p]=true;if(!chart[L2d]){chart[(J8V+q0T+W8m+v1T+x8A.d5Z+w0V+v4S+v4S)]=chart[z44];chart[L2d]=true;var params=this[p6Z](chart[B3p],chart);params[(m5Z+N1m+i7Z+M2Z)]=chart[L4C][0][s9l];this[J3C][x3C](params,closure(this,params));}
}
if(chart[L2d]){chart[d4d]=chart[z44];}
}
;STXChart.Driver.prototype.barsToFetch=function(params){var Z2p="e0z",o2D=7358939,X1p=3686427,J2C=1296783142,p1Z=1768567765,e8C="f0z",F6G="v0z",E5m="X0z",X5l="i0z",f2l="isSeries";if(params[f2l])return params[J8d][L4C].length;var p=params[J8d][T2T][f9T];if(x8A[X5l](params[(M7S+x8A.n9S+O4T)][T2T][p0l],"month"))p=x8A[E5m](30,p);if(x8A[F6G](params[J8d][T2T][p0l],"week"))p=x8A[e8C](7,p);var X2h=p1Z,s2h=J2C,G2h=x8A.X0Z;for(var V2h=x8A.v0Z;x8A.L5h.g5h(V2h.toString(),V2h.toString().length,X1p)!==X2h;V2h++){delete  this.charts[panel.name];this.calculateMovingAverageWeighted(stx,sd.wma);G2h+=x8A.X0Z;}
if(x8A.L5h.g5h(G2h.toString(),G2h.toString().length,o2D)!==s2h){STX.Drawing.BaseTwoPoint.prototype.reposition.apply(this,arguments);context.fillText(obj.text,obj.hz,middle);STX.Studies.calculateMovingAverageTimeSeries(stx,sd);return M1f*W1f/b1f;}
var bars=x8A[Z2p](params[J8d][i8C][r7l],p);return bars;}
;STXChart.Driver.prototype.makeParams=function(symbol,chart){var K6C="barsToFetch",params={stx:this[J8d],symbol:symbol,chart:chart,interval:this[J8d][T2T][p0l],period:x8A.v0Z,feed:e8m,ticks:this[K6C]({stx:this[J8d]}
)}
;if(!isNaN(params[p0l])){params[I7T]=params[p0l];params[p0l]=(w5S+q0T+T4S+p9S+A7S);}
return params;}
;STXChart.Driver.prototype.newChart=function(symbol,chart,cb){var stx=this[J8d];chart[f1C]=false;var params=this[p6Z](symbol,chart);function closure(self,params){return function(dataCallback){var i94="lba",A0p="M0z",M1Z="g0z";if(x8A[M1Z](symbol,params[(I5S+x8A.n9S)][B3p])){if(!dataCallback.error&&x8A[A0p](dataCallback.error,0)){if(!params[a3l]&&!STXChart[o6S](params[p0l]))dataCallback[(i9C+S8m)]=stx[x6p](dataCallback[p7D]);stx[z4S](dataCallback[p7D],params[i8C]);stx[v9m]();stx[z7S]();stx[s2Z]();params[i8C][f1C]=dataCallback[f1C];}
else{self[J3C][n6D](params,dataCallback);}
}
self[V2m]=false;if(cb){cb(dataCallback.error);}
if(self[r84][(j5l+i94+x8A.d5Z+T2S)]){self[r84][S0V](params);}
}
;}
;this[V2m]=true;this[(i9C+w1D+v0l+m5Z+m5Z+W4Z)][x3C](params,closure(this,params));}
;STXChart.prototype.attachQuoteFeed=function(quoteFeed,behavior){if(!behavior)behavior={}
;if(this[q4G]){this[q4G][n5G]();}
this[q4G]=new STXChart[e7d](this,quoteFeed,behavior);}
;STX[O5l][C0C]=function(stx,sd){var N2D="u8z",a2p="q8z",O1C="d8z",u2D="m8z",A9C="signal",K5G="nal",K2l="sig",J1S="a8z",w8D="A8z",m2Z="U0z",o4d="acd1",k2G="1D",q5m="macd",f14="signalDays",Y9D="Sl",i6C="macd2Days",G6T="macd1Days",R3p="E0z",quotes=sd[(G7C+D4Z+J5d)][M5Z];if(x8A[R3p](quotes.length,sd[u5S]+1)){if(typeof practiceMode!="undefined"&&practiceMode)return ;return ;}
if(!sd[(w5S+D4Z+x8A.d5Z+W4Z+H9p+K0C+H6T+M7S)])sd[G6T]=parseFloat(sd[I74]["Fast MA Period"]);if(!sd[i6C])sd[i6C]=parseFloat(sd[I74][(Y9D+B4S+f4T+m44+F8Z+x8A.X8m+m44+c3Z+m5Z+x8A.c7S+q0T+U4m)]);if(!sd[f14])sd[f14]=parseFloat(sd[(q0T+B5p+p9S+x8A.n9S+M7S)]["Signal Period"]);if(!sd[u5S])sd[u5S]=Math[H0S](sd[(q5m+k2G+D4Z+s8V)],sd[i6C],sd[f14]);sd[(w5S+o4d)]=new STX[O5l][x2p](sd[W0d]+"_"+sd[G6T],(p54),sd[K5D]);sd[(b7l)][(x8A.J5m+J5d)]=sd[(G7C+D4Z+J5d)];sd[(t7T+W4Z+H9p)][u5S]=sd[G6T];sd[b7l][I74]={"Field":"Close"}
;STX[O5l][Q5p](stx,sd[b7l]);sd[u7l]=new STX[O5l][x2p](sd[W0d]+"_"+sd[i6C],"ma",sd[K5D]);sd[u7l][i8C]=sd[i8C];sd[u7l][u5S]=sd[i6C];sd[u7l][I74]={"Field":"Close"}
;STX[O5l][Q5p](stx,sd[u7l]);for(var i=x8A[m2Z](sd[u5S],1);x8A[w8D](i,quotes.length);i++){var quote=quotes[i];quote[sd[W0d]]=x8A[J1S](quote[sd[b7l][W0d]],quote[sd[u7l][W0d]]);}
sd[e9m][sd[(W0d)]]="MACD";var signalName="signal "+sd[W0d];sd[(K2l+K5G)]=new STX[(t3S+X7l+M7S)][x2p](signalName,"ma",sd[K5D]);sd[A9C][(x8A.d5Z+s0d)]=sd[i8C];sd[(M7S+G6l+T4S+D4Z+v4S)][u5S]=sd[f14];sd[A9C][I74]={"Field":sd[W0d]}
;STX[O5l][Q5p](stx,sd[A9C]);var histogram=sd[W0d]+"_hist";for(var i=x8A[u2D](sd[u5S],1);x8A[O1C](i,quotes.length);i++){var quote=quotes[i],signal=quote[signalName];if(!signal&&x8A[a2p](signal,0))continue;quote[histogram]=x8A[N2D](quote[sd[W0d]],quote[signalName]);}
sd[e9m][sd[A9C][W0d]]="Signal";}
;STX[O5l][h6S]=function(stx,sd){var l6Z="p8z",M2m="8z",p24="r8z",k0Z="G8z",B9G="o8z",l1G="Q8z",E1m="z8z",quotes=sd[i8C][M5Z];if(x8A[E1m](sd[u5S],0))sd[u5S]=1;sd[p54]=new STX[O5l][x2p](sd[(T4S+D4Z+i04)],"ma",sd[K5D]);sd[p54][i8C]=sd[(x8A.J5m+x8A.c7S+x8A.n9S)];sd[(p54)][u5S]=sd[u5S];var field=sd[I74]["Field"];if(x8A[(l1G)](field,"field"))field=(x8A.s0m+a7G);var type=sd[I74]["Moving Average Type"];if(!type)type=sd[I74][(s8Z+b9Z)];sd[p54][I74]={"Field":field,"Type":type}
;sd[(w5S+D4Z)][R2S]={"_MA":null}
;this[f8Z](stx,sd[p54]);var acc1=0,acc2=0,ma=0,mult=sd[I74]["Standard Deviations"];if(x8A[B9G](mult,0))mult=2;var name=sd[W0d];for(var p in sd[R2S]){name=p+" "+name;}
for(var i=0;x8A[(k0Z)](i,quotes.length);i++){var quote=quotes[i],ma=quote["_MA "+sd[p54][W0d]],val=quote[field];acc1+=Math[(c6S+B4S+f4T)](val,2);acc2+=val;if(x8A[p24](i,sd[u5S]-1)){var val2=quotes[x8A[(i1Z+M2m)](i,sd[u5S])][field];acc1-=Math[z04](val2,2);acc2-=val2;quote[name]=x8A[l6Z](Math[Z1D]((acc1+sd[u5S]*Math[z04](ma,2)-2*ma*acc2)/sd[u5S]),mult);}
else{quote[name]=null;}
}
}
;STX[(d8Z+c7m+M7S)][N5G]=function(stx,sd){var s9d="C1z",i1C="x1z",e1S="K1z",G3l="n1z",U2l="1z",W3d="V1z",h8Z="D1z",T2Z="h1z",q4D="l1z",q5D="c1z",f8S="k1z",D5m="Z1z",Y8l="j1z",a3D="H8z",x5C="y8z",V04="calculateMovingAverageTimeSeries",U0V="b8z",H1d="I8z",e3S="L8z",type=sd[I74]["Type"];if(x8A[e3S](type,"ma"))type="simple";if(x8A[H1d](type,"exponential")){STX[O5l][Q5p](stx,sd);return ;}
else if(x8A[(U0V)](type,"time series")){STX[O5l][V04](stx,sd);return ;}
else if(x8A[x5C](type,"triangular")){STX[O5l][N4T](stx,sd);return ;}
else if(x8A[a3D](type,"variable")){STX[O5l][L9D](stx,sd);return ;}
else if(x8A[Y8l](type,"vidya")){STX[O5l][L9D](stx,sd);return ;}
else if(x8A[D5m](type,"weighted")){STX[O5l][d5T](stx,sd);return ;}
else if(x8A[(S6S+v6T)](type,"welles wilder")){STX[O5l][Q5p](stx,sd);return ;}
else if(x8A[f8S](type,"simple")){return ;}
var quotes=sd[i8C][M5Z];if(x8A[q5D](sd[u5S],0))sd[(W4Z+V1S)]=1;var acc=0,ma=0,ii=0,name=sd[W0d];for(var p in sd[(B4S+p9S+x8A.n9S+c6S+p9S+M8T)]){name=p+" "+name;}
var field=sd[I74]["Field"];if(x8A[q4D](field,"field"))field="Close";var vals=[];for(var i=0;x8A[T2Z](i,quotes.length);i++){var quote=quotes[i],val=quote[field];if(!val&&x8A[h8Z](val,0)){quote[name]=null;continue;}
;acc+=val;vals[K6T](val);if(x8A[W3d](ii,sd[u5S]-1)){ma=x8A[(M7S+U2l)](acc,sd[(r2m+M7S)]);quote[name]=ma;}
else if(x8A[G3l](ii,sd[u5S])){var val2=vals[H7G]();acc-=val2;ma=x8A[e1S](acc,sd[u5S]);quote[name]=ma;}
else if(x8A[i1C](ii,0)){ma=acc;quote[name]=null;}
else{ma=x8A[s9d](acc,(ii+1));quote[name]=null;}
ii++;}
}
;STX[O5l][Q5p]=function(stx,sd){var L1m="i3z",e2G="B3z",s2p="O3z",K2T="R3z",q5S="P3z",m54="w3z",a4D="T3z",z2T="t3z",Y5D="S1z",g4p="F1z",G34="W1z",type=sd[I74]["Type"],quotes=sd[i8C][M5Z],acc=0,ma=0,ii=0,multiplier=(x8A[G34](2,(sd[u5S]+1)));if(x8A[g4p](type,"welles wilder"))multiplier=x8A[Y5D](1,sd[u5S]);var emaPreviousDay=0,name=sd[W0d];for(var p in sd[(l7D+x8A.n9S+c6S+p9S+M8T)]){name=p+" "+name;}
var field=sd[I74]["Field"];if(x8A[z2T](field,"field"))field="Close";for(var i=0;x8A[a4D](i,quotes.length);i++){var quote=quotes[i],val=quote[field];if(!val&&x8A[(A9Z+U3p+v6T)](val,0)){quote[name]=null;continue;}
if(x8A[m54](ii,sd[u5S]-1)){acc+=val;ma=x8A[(q5S)](acc,sd[(W4Z+V1S)]);quote[name]=ma;}
else if(x8A[(K2T)](ii,sd[u5S])){var m=multiplier;ma=(x8A[s2p]((val-emaPreviousDay),m))+emaPreviousDay;quote[name]=ma;}
else if(x8A[e2G](ii,0)){acc+=val;ma=acc;quote[name]=null;}
else{acc+=val;ma=x8A[L1m](acc,(ii+1));quote[name]=null;}
emaPreviousDay=ma;ii++;}
}
;STX[O5l][L9D]=function(stx,sd){var Q6d="T9z",S8p="A9z",f0l="U3z",P5d="E3z",c6T="M3z",F3D="e3z",V3S="cmo",v0C="ula",d9l="idya",y8D="f3z",k8Z="v3z",k8d="X3z",type=sd[I74]["Type"],quotes=sd[i8C][M5Z],alpha=(x8A[k8d](2,(sd[u5S]+1))),vmaPreviousDay=0,name=sd[W0d];for(var p in sd[R2S]){name=p+" "+name;}
var field=sd[I74]["Field"];if(x8A[k8Z](field,"field"))field="Close";if(x8A[y8D](type,(U4T+d9l))){sd[J4d]=new STX[O5l][x2p](sd[W0d],"sdev",sd[K5D]);sd[J4d][i8C]=sd[i8C];sd[J4d][u5S]=5;sd[(I4Z+W4Z)][I74]={"Field":field,"Standard Deviations":1,"Type":"ma"}
;sd[J4d][R2S]={"STD":null}
;this[h6S](stx,sd[J4d]);sd[p54]=new STX[O5l][x2p](sd[W0d],(w5S+D4Z),sd[K5D]);sd[p54][i8C]=sd[i8C];sd[p54][u5S]=20;sd[p54][I74]={"Field":(d8Z+s8Z+i7Z+m44)+sd[W0d],"Standard Deviations":1,"Type":"ma"}
;sd[p54][R2S]={"MASTD":null}
;this[(j5l+x8A.d5Z+v0C+x8A.n9S+m5Z+x14+r9p+T4S+Z8T+w8l+x8A.c7S+g8S+m5Z)](stx,sd[p54]);}
else{sd[V3S]=new STX[O5l][x2p](sd[W0d],"cmo",sd[K5D]);sd[V3S][i8C]=sd[i8C];sd[V3S][u5S]=9;sd[V3S][R2S]={"CMO":null}
;STX[O5l][m24](stx,sd[V3S]);}
for(var i=0;x8A[F3D](i,quotes.length);i++){var quote=quotes[i],val=quote[field];if(!val&&x8A[(Z8T+U3p+v6T)](val,0)){quote[name]=null;continue;}
var vi;if(x8A[c6T](type,"vidya")){if(!quote["MASTD "+sd[W0d]])continue;else vi=x8A[P5d](quote["STD "+sd[W0d]],quote["MASTD "+sd[W0d]]);}
else{if(!quote["CMO "+sd[W0d]])continue;else vi=x8A[f0l](Math[W2S](quote["CMO "+sd[W0d]]),100);}
var vma=(x8A[S8p](alpha,vi,val))+(x8A[Q6d]((1-(alpha*vi)),vmaPreviousDay));quote[name]=vma;vmaPreviousDay=vma;}
}
;STX[(d8Z+K1T+n5G+M7S)][(B6C+v4S+x8A.d5Z+p9S+v4S+I2G+T4S+Z8T+w8l+x8A.c7S+D4Z+Z8T+K3G+q0T+w5S+y3p+X7l+M7S)]=function(stx,sd){var p5C="J9z",K7l="arR",A1d="culateLi";sd[p54]=new STX[O5l][x2p](sd[W0d],"ma",sd[(Q7G+T4S+m5Z+v4S)]);sd[p54][i8C]=sd[i8C];sd[p54][u5S]=sd[u5S];sd[p54][I74]=sd[I74];this[(j5l+A1d+q1m+K7l+G4D+C1d+M7S+M7S+q0T+F4D+N3Z+N1m+q0T+B6C+x8A.n9S+A3D)](stx,sd[p54]);var name=sd[W0d];for(var p in sd[R2S]){name=p+" "+name;}
var quotes=sd[i8C][M5Z];for(var i=0;x8A[p5C](i,quotes.length);i++){var quote=quotes[i];quote[name]=quote["Forecast "+sd[W0d]];}
}
;STX[O5l][N4T]=function(stx,sd){var f4G="R9z",T1d="9z",I9D="w9z",quotes=sd[i8C][M5Z];sd[(p54)]=new STX[O5l][x2p](sd[W0d]+"_simple","ma",sd[K5D]);sd[p54][(x8A.d5Z+g2S+D4Z+J5d)]=sd[i8C];sd[p54][u5S]=Math[B1T](x8A[I9D](sd[u5S],2));sd[p54][(q0T+I5l+M8T)]={"Field":sd[I74]["Field"],"Type":"simple"}
;STX[O5l][f8Z](stx,sd[p54]);if(x8A[(c3Z+T1d)](sd[u5S]%2,0))sd[p54][u5S]++;sd[p54][I74]={"Field":sd[p54][W0d],"Type":"simple"}
;sd[p54][W0d]=sd[W0d];STX[O5l][f8Z](stx,sd[p54]);var name=sd[W0d];for(var p in sd[R2S]){name=p+" "+name;}
for(var i=0;x8A[f4G](i,quotes.length);i++){var quote=quotes[i];quote[name]=quote[sd[W0d]];}
return ;}
;STX[O5l][d5T]=function(stx,sd){var z3p="S9z",m14="F9z",p7S="W9z",Q3d="C9z",N1l="x9z",O3S="n9z",D0T="s9z",j7T="B9z",U7G="O9z",quotes=sd[i8C][(M7S+x8A.d5Z+o2d+Y4Z+Y4Z+m5Z+W4Z)],accAdd=0,accSubtract=0,field=sd[I74]["Field"];if(x8A[U7G](field,"field"))field="Close";var divisor=x8A[j7T](sd[(W4Z+Z6Z+M7S)],(sd[u5S]+1),2),name=sd[(W3m+w5S+m5Z)];for(var p in sd[R2S]){name=p+" "+name;}
for(var i=0;x8A[(C1S+G9m+v6T)](i,quotes.length);i++){var quote=quotes[i],val=quote[field];if(!val&&x8A[D0T](val,0)){quote[name]=null;continue;}
var weight=Math[e1Z](sd[u5S],i+1);if(x8A[O3S](i,sd[u5S])){accAdd-=accSubtract;if(quotes[x8A[(z9Z+G9m+v6T)](i,sd[u5S])]&&quotes[x8A[N1l](i,sd[u5S])][field])accSubtract-=quotes[x8A[Q3d](i,sd[u5S])][field];}
accAdd+=x8A[p7S](weight,val);accSubtract+=val;if(x8A[m14](i,sd[u5S]-1)){quote[name]=null;}
else{quote[name]=x8A[z3p](accAdd,divisor);}
}
return ;}
;STX[O5l][I3m]=function(stx,sd){var q8d="m6z",Q24="a6z",C2l="A6z",v5S="U7z",D1m="E7z",F3G="M7z",m1d="g7z",a0S="e7z",O6Z="f7z",G1D="v7z",l1m="X7z",C8D="i7z",P9T="B7z",y9d="O7z",R6d="R7z",D1G="P7z",m9C="w7z",A6T="J7z",F7T="T7z",D5G="t7z",quotes=sd[i8C][M5Z],period=sd[u5S],compare=sd[I74][(J6C+T74+D4Z+x8A.c7S+m5Z+m44+s8Z+B4S)];for(var sym=0;x8A[D5G](sym,compare.length);sym++){var sB=0,sC=0,sB2=0,sC2=0,sBC=0,thisCompare=compare[sym];for(var i=0;x8A[F7T](i,quotes.length-1);i++){if(!quotes[i])continue;var comparisonQuote=quotes[i][thisCompare];if(!comparisonQuote){if(x8A[A6T](i,0)&&quotes[x8A[m9C](i,1)]&&quotes[x8A[D1G](i,1)]["_"]["c"])comparisonQuote=quotes[x8A[R6d](i,1)]["_"]["c"];else comparisonQuote=0;}
quotes[i]["_"]={}
;sB+=quotes[i]["_"]["b"]=quotes[i][Y6C];sC+=quotes[i]["_"]["c"]=comparisonQuote;sB2+=quotes[i]["_"]["b2"]=Math[z04](quotes[i][Y6C],2);sC2+=quotes[i]["_"]["c2"]=Math[z04](comparisonQuote,2);sBC+=quotes[i]["_"]["bc"]=x8A[y9d](quotes[i][Y6C],comparisonQuote);if(x8A[P9T](i,period)){sB-=quotes[x8A[C8D](i,period)]["_"]["b"];sC-=quotes[x8A[l1m](i,period)]["_"]["c"];sB2-=quotes[x8A[G1D](i,period)]["_"]["b2"];sC2-=quotes[x8A[O6Z](i,period)]["_"]["c2"];sBC-=quotes[x8A[a0S](i,period)]["_"][(Y4Z+x8A.d5Z)];quotes[x8A[m1d](i,period)]["_"]=null;var vb=x8A[F3G](sB2/period,Math[z04](sB/period,2)),vc=x8A[D1m](sC2/period,Math[z04](sC/period,2)),cv=x8A[v5S](sBC/period,sB*sC/Math[z04](period,2)),cc=x8A[C2l](cv,Math[Z1D](vb*vc));quotes[i]["Result "+thisCompare+" "+sd[W0d]]=cc;}
}
for(var j=x8A[Q24](quotes.length,period);x8A[q8d](j,quotes.length);j++){quotes[j]["_"]=null;}
}
}
;STX[(n0D+p9S+W4Z+q0T+m5Z+M7S)][n6Z]=function(stx,sd){var t6D="a4z",m0m="A4z",E6l="y6z",z2G="b6z",O9G="I6z",g8p="L6z",l54="p6z",Y8V="N6z",m4D="r6z",M4d="G6z",L3p="o6z",Y5p="Q6z",d3G="z6z",quotes=sd[i8C][M5Z];function computeRSI(avgGain,avgLoss){var W5D="u6z",y8T="q6z",u1S="d6z";if(x8A[u1S](avgLoss,0))return 100;var rs=x8A[y8T](avgGain,avgLoss);return x8A[W5D](100,(100/(1+rs)));}
if(x8A[(d3G)](quotes.length,sd[u5S]+1)){if(typeof practiceMode!="undefined"&&practiceMode)return ;return ;}
var gain=0,loss=0;for(var i=1;x8A[Y5p](i,sd[u5S]);i++){var change=x8A[L3p](quotes[i][Y6C],quotes[i-1][Y6C]);if(x8A[M4d](change,0))loss+=(change*-1);else gain+=change;}
var avgGain=x8A[m4D](gain,sd[u5S]),avgLoss=x8A[Y8V](loss,sd[u5S]);quotes[i][sd[W0d]]=computeRSI(avgGain,avgLoss);var name="RSI "+sd[W0d];for(var i=sd[u5S];x8A[l54](i,quotes.length);i++){var quote=quotes[i],change=x8A[g8p](quote[Y6C],quotes[i-1][Y6C]);if(x8A[O9G](change,0)){avgGain=x8A[z2G](((avgGain*(sd[(r2m+M7S)]-1))+change),sd[u5S]);avgLoss=x8A[E6l](avgLoss,(sd[u5S]-1),sd[u5S]);}
else{avgLoss=((x8A[m0m](avgLoss,(sd[u5S]-1)))+(change*-1))/sd[u5S];avgGain=x8A[t6D](avgGain,(sd[u5S]-1),sd[u5S]);}
quote[name]=computeRSI(avgGain,avgLoss);}
sd[B0d]="RSI";}
;STX[O5l][b1T]=function(stx,sd){var L8G="N4z",T6C="r4z",R2G="G4z",F6T="o4z",M9T="w4z",Q8p="input",P0G="smooth";sd[(p54+O4T)]=100;sd[e1Z]=0;if(!sd[P0G])sd[P0G]=(sd[(Q8p+M7S)]["Smooth"]);var field=sd[I74]["Field"];if(x8A[(M0C+v6T)](field,null))field="Close";var quotes=sd[i8C][M5Z];if(x8A[M9T](quotes.length,sd[u5S]+1)){if(typeof practiceMode!="undefined"&&practiceMode)return ;return ;}
function computeStochastics(position,field){var H9l="h4z",O6l="l4z",I8S="4z",beg=x8A[(c3Z+I8S)](position,sd[u5S],1),low=1000000,high=0;for(var i=beg;x8A[O6l](i,position);i++){low=Math[e1Z](low,quotes[i][l8p]);high=Math[H0S](high,quotes[i][m1Z]);}
var k=x8A[H9l]((quotes[position][field]-low),(high-low),100);return k;}
var name=sd[W0d];if(sd[P0G])name=name[K5p](0,x8A[F6T](name.length,2));for(var i=sd[u5S];x8A[R2G](i,quotes.length);i++){quotes[i][name]=computeStochastics(i,field);}
if(sd[P0G]){for(var i=sd[u5S]+3;x8A[T6C](i,quotes.length);i++){quotes[i][sd[W0d]]=x8A[L8G]((quotes[i][name]+quotes[i-1][name]+quotes[i-2][name]),3);}
}
sd[e9m][sd[W0d]]="Fast";sd[p54]=new STX[O5l][x2p](sd[W0d]+"_3","ma",sd[K5D]);sd[p54][i8C]=sd[i8C];sd[p54][u5S]=3;sd[(w5S+D4Z)][I74]={"Field":sd[W0d],"Type":"simple"}
;sd[p54][(w5S+q0T+T4S)]=sd[e1Z];sd[p54][H0S]=sd[H0S];STX[O5l][f8Z](stx,sd[p54]);sd[e9m][sd[W0d]+"_3"]="Slow";}
;STX[O5l][H7S]=function(stx,sd){var g24="F1A",u9T="ureB",quotes=sd[i8C][M5Z];function calculateConversionLine(stx,sd){var W4T="sion",d3d="onver",L6T="x5z",M74="K5z",w74="n5z",y6D="s5z",C7m="V5z",l6m="D5z",e8G="h5z",u0d="l5z",U7Z="c5z",B4D="k5z",I6d="Y5z",I1Z="Z5z",k5S="j5z",V5Z="H4z",A2D="y4z",m0Z="b4z",R3D="I4z",q5C="L4z",O0D="p4z",periodHigh=0,periodLow=999999999,periodAvg=0,ii=0;sd[u5S]=sd[I74]["Conversion Line Period"];for(var i=0;x8A[O0D](i,quotes.length);i++){var high=quotes[i]["High"],low=quotes[i]["Low"];if(x8A[q5C](high,null)||isNaN(high))high=0;if(x8A[R3D](low,null)||isNaN(low))low=0;if(x8A[m0Z](high,periodHigh))periodHigh=high;if(x8A[A2D](low,periodLow))periodLow=low;if(x8A[V5Z](ii,sd[u5S])){var lastHigh=quotes[x8A[k5S](i,sd[(u5S)])]["High"];if(x8A[I1Z](lastHigh,null)||isNaN(lastHigh))lastHigh=0;if(x8A[I6d](lastHigh,periodHigh)){periodHigh=0;for(var j=i+1-sd[(W4Z+V1S)];x8A[B4D](j,i);j++){var innerHigh=quotes[j]["High"];if(x8A[U7Z](innerHigh,null)||isNaN(innerHigh))innerHigh=0;if(x8A[u0d](innerHigh,periodHigh))periodHigh=innerHigh;}
}
var lastLow=quotes[x8A[e8G](i,sd[u5S])]["Low"];if(x8A[l6m](lastLow,null)||isNaN(lastLow))lastLow=0;if(x8A[C7m](lastLow,periodLow)){periodLow=999999999;for(var j=i+1-sd[(W4Z+D4Z+H6T+M7S)];x8A[y6D](j,i);j++){var innerLow=quotes[j]["Low"];if(x8A[w74](innerLow,null)||isNaN(innerLow))innerLow=0;if(x8A[M74](innerLow,periodLow))periodLow=innerLow;}
}
periodAvg=x8A[L6T]((periodHigh+periodLow),2);quotes[i][(J6C+S7p+m5Z+x8A.c7S+M7S+H2Z+m44+C9Z+q0T+q1m+m44)+sd[W0d]]=periodAvg;}
else{quotes[i][(x8A.s0m+d3d+W4T+m44+C9Z+J8V+m5Z+m44)+sd[W0d]]=null;}
ii++;}
}
function calculateBaseLine(stx,sd){var o1S="M2z",O9m="g2z",A0l="e2z",V1d="v2z",p4l="X2z",x2m="B2z",w8p="O2z",Y0p="R2z",U34="P2z",C8m="w2z",f0G="J2z",j8l="T2z",Q4S="t2z",U5C="S5z",B7C="F5z",D4p="C5z",periodHigh=0,periodLow=999999999,periodAvg=0,ii=0;sd[u5S]=sd[I74]["Base Line Period"];for(var i=0;x8A[D4p](i,quotes.length);i++){var high=quotes[i]["High"],low=quotes[i]["Low"];if(x8A[(t9S+Z3m+v6T)](high,null)||isNaN(high))high=0;if(x8A[B7C](low,null)||isNaN(low))low=0;if(x8A[U5C](high,periodHigh))periodHigh=high;if(x8A[Q4S](low,periodLow))periodLow=low;if(x8A[j8l](ii,sd[u5S])){var lastHigh=quotes[x8A[f0G](i,sd[u5S])]["High"];if(x8A[C8m](lastHigh,null)||isNaN(lastHigh))lastHigh=0;if(x8A[U34](lastHigh,periodHigh)){periodHigh=0;for(var j=i+1-sd[u5S];x8A[Y0p](j,i);j++){var innerHigh=quotes[j]["High"];if(x8A[w8p](innerHigh,null)||isNaN(innerHigh))innerHigh=0;if(x8A[x2m](innerHigh,periodHigh))periodHigh=innerHigh;}
}
var lastLow=quotes[x8A[(q0T+f3p+v6T)](i,sd[u5S])]["Low"];if(x8A[p4l](lastLow,null)||isNaN(lastLow))lastLow=0;if(x8A[V1d](lastLow,periodLow)){periodLow=999999999;for(var j=i+1-sd[u5S];x8A[(f0T+f3p+v6T)](j,i);j++){var innerLow=quotes[j]["Low"];if(x8A[A0l](innerLow,null)||isNaN(innerLow))innerLow=0;if(x8A[O9m](innerLow,periodLow))periodLow=innerLow;}
}
periodAvg=x8A[o1S]((periodHigh+periodLow),2);quotes[i]["Base Line "+sd[W0d]]=periodAvg;}
else{quotes[i]["Base Line "+sd[W0d]]=null;}
ii++;}
}
function calculateLeadingSpanA(stx,sd){var P9p="Q0A",N5T="z0A",P6D="u0A",H9m="q0A",D7m="m0A",N5l="a0A",b9G="A0A",b64="U2z",v4D="E2z",conversion=0,base=0,periodAvg=0,ii=0;sd[u5S]=sd[I74]["Base Line Period"];for(var i=0;x8A[v4D](i,quotes.length-26);i++){conversion=quotes[i]["Conversion Line "+sd[W0d]];base=quotes[i]["Base Line "+sd[W0d]];if(x8A[b64](conversion,null)||isNaN(conversion))conversion=0;if(x8A[b9G](base,null)||isNaN(base))base=0;if(x8A[N5l](ii,sd[u5S])){periodAvg=x8A[D7m]((conversion+base),2);quotes[i+26]["Leading Span A "+sd[W0d]]=periodAvg;}
else{quotes[i+26]["Leading Span A "+sd[W0d]]=null;}
ii++;}
var jj=0;for(var j=x8A[(W4Z+s9p+x8A.X8m)](quotes.length,26);x8A[H9m](j,quotes.length);j++){conversion=quotes[j]["Conversion Line "+sd[W0d]];base=quotes[j]["Base Line "+sd[W0d]];if(x8A[P6D](conversion,null)||isNaN(conversion))conversion=0;if(x8A[N5T](base,null)||isNaN(base))base=0;periodAvg=x8A[P9p]((conversion+base),2);sd[w2T][jj]=periodAvg;jj++;}
}
function calculateLeadingSpanB(stx,sd){var R5T="K1A",K2Z="n1A",C9p="s1A",x4G="V1A",X6T="D1A",Z24="h1A",Q5G="1A",r8Z="c1",F2T="k1A",A8S="Y1A",y8l="Z1A",w5p="j1A",S5C="H8A",L9C="y8A",a4G="b8A",j9C="I8A",d0D="L8",b6G="K8A",b4S="n8A",W0p="8A",T3p="V8A",Y3m="D8A",h5m="h8A",J9Z="l8A",g8m="c8A",U4G="k8A",v3C="Y8A",F0V="Z8A",E84="j8A",o5C="H0A",P2d="y0A",E6C="b0A",i3C="I0A",s6T="L0A",d0m="p0A",d6Z="N0A",J4D="r0A",B7Z="G0A",K3D="o0A",periodHigh=0,periodLow=999999999,periodAvg=0,ii=0;sd[u5S]=sd[I74]["Leading Span B Period"];for(var i=0;x8A[K3D](i,quotes.length-26);i++){var high=quotes[i]["High"],low=quotes[i]["Low"];if(x8A[B7Z](high,null)||isNaN(high))high=0;if(x8A[J4D](low,null)||isNaN(low))low=0;if(x8A[d6Z](high,periodHigh))periodHigh=high;if(x8A[d0m](low,periodLow))periodLow=low;if(x8A[s6T](ii,sd[u5S])){var lastHigh=quotes[x8A[i3C](i,sd[u5S])]["High"];if(x8A[E6C](lastHigh,null)||isNaN(lastHigh))lastHigh=0;if(x8A[P2d](lastHigh,periodHigh)){periodHigh=0;for(var j=i+1-sd[u5S];x8A[o5C](j,i);j++){var innerHigh=quotes[j]["High"];if(x8A[E84](innerHigh,null)||isNaN(innerHigh))innerHigh=0;if(x8A[F0V](innerHigh,periodHigh))periodHigh=innerHigh;}
}
var lastLow=quotes[x8A[v3C](i,sd[u5S])]["Low"];if(x8A[U4G](lastLow,null)||isNaN(lastLow))lastLow=0;if(x8A[g8m](lastLow,periodLow)){periodLow=999999999;for(var j=i+1-sd[u5S];x8A[J9Z](j,i);j++){var innerLow=quotes[j]["Low"];if(x8A[h5m](innerLow,null)||isNaN(innerLow))innerLow=0;if(x8A[Y3m](innerLow,periodLow))periodLow=innerLow;}
}
periodAvg=x8A[(T3p)]((periodHigh+periodLow),2);quotes[i+26]["Leading Span B "+sd[W0d]]=periodAvg;}
else{quotes[i+26]["Leading Span B "+sd[W0d]]=null;}
ii++;}
ii=0;for(var i=x8A[(M7S+W0p)](quotes.length,26);x8A[(b4S)](i,quotes.length);i++){if(x8A[b6G](i-sd[u5S],0))continue;var high=quotes[i]["High"],low=quotes[i]["Low"];if(x8A[(d0D+x8A.X8m)](high,null)||isNaN(high))high=0;if(x8A[j9C](low,null)||isNaN(low))low=0;if(x8A[a4G](high,periodHigh))periodHigh=high;if(x8A[L9C](low,periodLow))periodLow=low;var lastHigh=quotes[x8A[S5C](i,sd[u5S])]["High"];if(x8A[w5p](lastHigh,null)||isNaN(lastHigh))lastHigh=0;if(x8A[y8l](lastHigh,periodHigh)){periodHigh=0;for(var j=i+1-sd[u5S];x8A[(A8S)](j,i);j++){var innerHigh=quotes[j]["High"];if(x8A[F2T](innerHigh,null)||isNaN(innerHigh))innerHigh=0;if(x8A[(r8Z+x8A.X8m)](innerHigh,periodHigh))periodHigh=innerHigh;}
}
var lastLow=quotes[x8A[(v4S+Q5G)](i,sd[u5S])][(G5G+f4T)];if(x8A[(Z24)](lastLow,null)||isNaN(lastLow))lastLow=0;if(x8A[X6T](lastLow,periodLow)){periodLow=999999999;for(var j=i+1-sd[u5S];x8A[x4G](j,i);j++){var innerLow=quotes[j]["Low"];if(x8A[C9p](innerLow,null)||isNaN(innerLow))innerLow=0;if(x8A[K2Z](innerLow,periodLow))periodLow=innerLow;}
}
periodAvg=x8A[R5T]((periodHigh+periodLow),2);sd[x5T][ii]=periodAvg;ii++;}
}
function calculateLaggingSpan(stx,sd){var C2D="La",w2m="W1A",d0G="C1A",q0S="x1A",close=0;sd[u5S]=sd[I74]["Lagging Span Period"];for(var i=sd[u5S];x8A[q0S](i,quotes.length);i++){close=quotes[i]["Close"];if(x8A[d0G](close,null)||isNaN(close))close=0;quotes[x8A[(w2m)](i,sd[u5S])][(C2D+Z8T+m8l+m7p+m44+d8Z+c6S+D4Z+T4S+m44)+sd[W0d]]=close;}
}
sd[w2T]=new Array();sd[(f0T+H44+u9T)]=new Array();if(x8A[g24](quotes.length,52)){return ;}
calculateConversionLine(stx,sd);calculateBaseLine(stx,sd);calculateLeadingSpanA(stx,sd);calculateLeadingSpanB(stx,sd);calculateLaggingSpan(stx,sd);}
;STX[O5l][g9m]=function(stx,sd,quotes){var S5Z="ndCli",m0l="y7A",C7D="elF",y1D="b7A",b5G="I7A",r0m="L7A",W2D="p7A",Y6l="N7A",R4G="r7",Q1C="G7A",G8p="o7A",p0D="z7A",D7d="u7A",A1S="q7A",v7S="d7A",N2m="Pos",j1C="m7A",x2S="j7A",D0V="H9A",T5d="y9A",O7C="xelFromP",z1C="b9A",u2S="I9",r3T="L9A",K2p="p9A",v7Z="N9A",S0l="r9A",Y0T="G9A",R2T="Q9A",j04="z9A",j3D="siti",h2G="eP",x3l="comput",i0l="u9A",X24="q9A",H8d="d9A",k6d="conte",J0D="m9A",l8m="a9A",V8G="A9A",P4p="U3A",d1Z="intersectLineLineX",L9l="eA",T7D="fu",y4m="E3A",G8m="M3A",a9p="g3A",J7l="eB",m2D="e3A",z7d="f3A",s9C="v3A",i1S="intersectLineLineY",o4G="eL",k1D="Lin",d8d="rsec",A8G="X3A",x8l="Le",k1T="i3A",a0d="B3A",c2G="O3A",v1l="R3A",Q44="P3A",l34="w3A",R5D="J3A",V3C="T3A",h6Z="t3A",J34="S1A",q64="sAs",p2Z="laySe",offset=stx[J2G],intersections=[],panel=stx[j8m][sd[K5D]];STX[O5l][(W4Z+Y2C+p2Z+x8A.c7S+q0T+m5Z+q64+E4T)](stx,sd,quotes);stx[a94](panel[W0d]);var ichiQuotes=[];for(var i=0;x8A[J34](i,quotes.length);i++){if(x8A[h6Z](ichiQuotes[i],null))continue;ichiQuotes[K6T](quotes[i].transform?quotes[i].transform:quotes[i]);}
for(var i=0;x8A[V3C](i,ichiQuotes.length-1);i++){if(x8A[R5D](ichiQuotes[i],null))continue;if(x8A[l34](ichiQuotes[i+1],null))continue;if(x8A[Q44](stx[j8m][sd[K5D]][W0d],sd[i8C][W0d])){if(ichiQuotes[i].transform)ichiQuotes[i]=ichiQuotes[i].transform;if(ichiQuotes[i+1].transform)ichiQuotes[i+1]=ichiQuotes[i+1].transform;}
if(x8A[v1l](ichiQuotes[i]["Leading Span A "+sd[W0d]],null)||isNaN(ichiQuotes[i][(C9Z+m5Z+D4Z+n1l+m7p+m44+d8Z+c6S+D4Z+T4S+m44+x8A.X8m+m44)+sd[(W0d)]]))continue;else if((x8A[c2G](ichiQuotes[i]["Leading Span A "+sd[(W3m+i04)]],ichiQuotes[i]["Leading Span B "+sd[W0d]])&&x8A[a0d](ichiQuotes[i+1]["Leading Span A "+sd[W0d]],ichiQuotes[i+1]["Leading Span B "+sd[W0d]]))||(x8A[k1T](ichiQuotes[i][(x8l+D4Z+W4Z+J8V+Z8T+m44+d8Z+Q7G+T4S+m44+x8A.X8m+m44)+sd[W0d]],ichiQuotes[i]["Leading Span B "+sd[W0d]])&&x8A[A8G](ichiQuotes[i+1]["Leading Span A "+sd[W0d]],ichiQuotes[i+1]["Leading Span B "+sd[W0d]]))){var ax1=stx[P3S](i,offset),ax2=stx[P3S](i+1,offset),bx1=ax1,bx2=ax2,ay1=stx[b5p](ichiQuotes[i]["Leading Span A "+sd[W0d]],panel),ay2=stx[b5p](ichiQuotes[i+1]["Leading Span A "+sd[W0d]],panel),by1=stx[b5p](ichiQuotes[i]["Leading Span B "+sd[W0d]],panel),by2=stx[b5p](ichiQuotes[i+1]["Leading Span B "+sd[(T4S+D4Z+w5S+m5Z)]],panel),interX=STX[(q0T+T4S+x8A.n9S+m5Z+d8d+x8A.n9S+k1D+o4G+J8V+t7G)](ax1,ax2,ay1,ay2,bx1,bx2,by1,by2),interY=STX[i1S](ax1,ax2,ay1,ay2,bx1,bx2,by1,by2),intersection={}
;intersection[O4T]=interX;intersection[H6T]=interY;intersection[l5l]=i+1;intersections[K6T](intersection);}
}
var futureIntersections=[];for(var i=0;x8A[(s9C)](i,sd[w2T].length-1);i++){if(x8A[(z7d)](sd[w2T][i],null)||isNaN(sd[w2T][i]));else if((x8A[m2D](sd[w2T][i],sd[(f0T+H44+p9S+x8A.c7S+J7l)][i])&&x8A[a9p](sd[w2T][i+1],sd[x5T][i+1]))||(x8A[G8m](sd[w2T][i],sd[x5T][i])&&x8A[y4m](sd[(T7D+x8A.n9S+q14+L9l)][i+1],sd[x5T][i+1]))){var ax1=stx[P3S](ichiQuotes.length+i,offset),ax2=stx[P3S](ichiQuotes.length+i+1,offset),bx1=ax1,bx2=ax2,ay1=stx[b5p](sd[w2T][i],panel),ay2=stx[b5p](sd[w2T][i+1],panel),by1=stx[b5p](sd[x5T][i],panel),by2=stx[b5p](sd[x5T][i+1],panel),interX=STX[d1Z](ax1,ax2,ay1,ay2,bx1,bx2,by1,by2),interY=STX[i1S](ax1,ax2,ay1,ay2,bx1,bx2,by1,by2),fIntersection={}
;fIntersection[O4T]=interX;fIntersection[H6T]=interY;fIntersection[l5l]=ichiQuotes.length+i+1;futureIntersections[K6T](fIntersection);}
}
for(var k=0;x8A[P4p](k,intersections.length);k++){stx[i8C][b6D].lineWidth=0;stx[i8C][b6D].globalAlpha=0.3;stx[(x8A.d5Z+s0d)][b6D].beginPath();stx[i8C][b6D].moveTo(intersections[k][O4T],intersections[k][H6T]);if(x8A[V8G](ichiQuotes[intersections[k][l5l]]["Leading Span A "+sd[W0d]],ichiQuotes[intersections[k][(l5l)]]["Leading Span B "+sd[(W3m+w5S+m5Z)]])){stx[i8C][b6D].fillStyle="#00FF00";}
else{stx[i8C][b6D].fillStyle="#FF0000";}
if(x8A[l8m](k+1,intersections.length)){for(var n=intersections[k][l5l];x8A[J0D](n,ichiQuotes.length);n++){stx[i8C][(k6d+w9D)].lineTo(stx[(A3C+w5S+c6S+H44+m5Z+c3Z+B4S+G9Z+e1m+T4S)](n,offset),stx[b5p](ichiQuotes[n]["Leading Span A "+sd[W0d]],panel));}
for(var m=x8A[H8d](ichiQuotes.length,1);x8A[X24](m,intersections[k][l5l]);m--){stx[i8C][b6D].lineTo(stx[P3S](m,offset),stx[b5p](ichiQuotes[m]["Leading Span B "+sd[W0d]],panel));}
}
else{for(var n=intersections[k][l5l];x8A[i0l](n,intersections[k+1][l5l]);n++){stx[i8C][b6D].lineTo(stx[(x3l+h2G+B4S+j3D+B4S+T4S)](n,offset),stx[b5p](ichiQuotes[n]["Leading Span A "+sd[(w5G+m5Z)]],panel));}
stx[i8C][b6D].lineTo(intersections[k+1][O4T],intersections[k+1][H6T]);for(var m=x8A[j04](intersections[k+1][l5l],1);x8A[R2T](m,intersections[k][l5l]);m--){stx[i8C][b6D].lineTo(stx[P3S](m,offset),stx[b5p](ichiQuotes[m]["Leading Span B "+sd[W0d]],panel));}
}
stx[i8C][b6D].fill();}
stx[(x8A.J5m+x8A.c7S+x8A.n9S)][b6D].beginPath();if(x8A[(B4S+G9m+x8A.X8m)](k,0)){stx[i8C][b6D].moveTo(stx[P3S](x8A[Y0T](ichiQuotes.length,1),offset),stx[b5p](ichiQuotes[x8A[S0l](ichiQuotes.length,1)]["Leading Span A "+sd[W0d]],panel));var ql;if(x8A[v7Z](futureIntersections.length,0)){ql=ichiQuotes.length;for(var n=0;x8A[K2p](n,sd[w2T].length);n++){stx[i8C][b6D].lineTo(stx[P3S](ql,offset),stx[b5p](sd[w2T][n],panel));ql++;}
ql--;for(var n=x8A[r3T](sd[x5T].length,1);x8A[(u2S+x8A.X8m)](n,0);n--){stx[i8C][b6D].lineTo(stx[P3S](ql,offset),stx[b5p](sd[x5T][n],panel));ql--;}
stx[(x8A.d5Z+l5d+x8A.n9S)][b6D].lineTo(stx[P3S](x8A[(z1C)](ichiQuotes.length,1),offset),stx[(c6S+q0T+O7C+E0d+T7C)](ichiQuotes[x8A[T5d](ichiQuotes.length,1)]["Leading Span B "+sd[W0d]],panel));stx[i8C][(A3C+T4S+x8A.n9S+Z0D+x8A.n9S)].fill();}
else{ql=ichiQuotes.length;for(var n=0;x8A[D0V](n,futureIntersections[0][l5l]-ichiQuotes.length);n++){stx[i8C][b6D].lineTo(stx[P3S](ql,offset),stx[b5p](sd[w2T][n],panel));ql++;}
ql--;stx[i8C][b6D].lineTo(futureIntersections[0][O4T],futureIntersections[0][H6T]);for(var n=x8A[x2S](futureIntersections[0][(x8A.n9S+L5l+T2S)],1,ichiQuotes.length);x8A[j1C](n,0);n--){stx[i8C][b6D].lineTo(stx[(x8A.d5Z+G5D+c6S+a6Z+N2m+q0T+x8A.n9S+q0T+F4D)](ql,offset),stx[b5p](sd[x5T][n],panel));ql--;}
stx[i8C][b6D].lineTo(stx[P3S](x8A[v7S](ichiQuotes.length,1),offset),stx[b5p](ichiQuotes[x8A[A1S](ichiQuotes.length,1)]["Leading Span B "+sd[W0d]],panel));stx[i8C][b6D].fill();}
}
for(var k=0;x8A[D7d](k,futureIntersections.length);k++){stx[i8C][(x8A.d5Z+B4S+b6p+V8p)].lineWidth=0;stx[i8C][b6D].globalAlpha=0.3;stx[i8C][b6D].beginPath();stx[i8C][b6D].moveTo(futureIntersections[k][O4T],futureIntersections[k][H6T]);if(x8A[p0D](sd[(T7D+x8A.n9S+p9S+x8A.c7S+L9l)][futureIntersections[k][l5l]-ichiQuotes.length],sd[x5T][futureIntersections[k][l5l]-ichiQuotes.length])){stx[i8C][b6D].fillStyle="#00FF00";}
else{stx[i8C][b6D].fillStyle="#FF0000";}
if(x8A[(T0Z+k1m+x8A.X8m)](k+2,futureIntersections.length)){for(var n=futureIntersections[k][l5l];x8A[G8p](n,sd[w2T].length+ichiQuotes.length);n++){stx[i8C][b6D].lineTo(stx[P3S](n,offset),stx[b5p](sd[w2T][x8A[Q1C](n,ichiQuotes.length)],panel));}
for(var m=x8A[(R4G+x8A.X8m)](sd[w2T].length,1);x8A[Y6l](m,futureIntersections[k][l5l]-ichiQuotes.length);m--){stx[i8C][b6D].lineTo(stx[P3S](m+ichiQuotes.length,offset),stx[b5p](sd[x5T][m],panel));}
}
else{for(var n=futureIntersections[k][l5l];x8A[W2D](n,futureIntersections[k+1][l5l]);n++){stx[i8C][b6D].lineTo(stx[P3S](n,offset),stx[b5p](sd[w2T][x8A[r0m](n,ichiQuotes.length)],panel));}
stx[i8C][b6D].lineTo(futureIntersections[k+1][O4T],futureIntersections[k+1][H6T]);for(var m=x8A[b5G](futureIntersections[k+1][l5l],1);x8A[y1D](m,futureIntersections[k][l5l]);m--){stx[i8C][b6D].lineTo(stx[P3S](m,offset),stx[(c6S+q0T+O4T+C7D+x8A.c7S+G5D+c3Z+J8T+m5Z)](sd[x5T][x8A[m0l](m,ichiQuotes.length)],panel));}
}
stx[i8C][b6D].fill();}
stx[(m5Z+S5Z+c6S)]();}
;STX[O5l][q2p]=function(stx,sd){var L1G="D6A",Z0l="h6A",i3l="l6A",y9T="c6A",G6d="k6A",X9D="Y6A",D2Z="6A",A0Z="j6A",A7l="H7A",quotes=sd[i8C][M5Z],period=sd[u5S],total=0;for(var i=1;x8A[A7l](i,quotes.length);i++){var prices=quotes[i],pd=quotes[x8A[A0Z](i,1)],trueRange=x8A[(t8S+D2Z)](Math[H0S](prices[(I6Z+g1p)],pd[(Y6C)]),Math[e1Z](prices[l8p],pd[Y6C]));total+=trueRange;if(x8A[X9D](i,period))total-=quotes[x8A[G6d](i,period)]["True Range "+sd[(T4S+D4Z+i04)]];prices["True Range "+sd[W0d]]=trueRange;if(x8A[y9T](i,period))prices["ATR "+sd[W0d]]=x8A[i3l](total,period);else if(x8A[(Z0l)](i,period))prices["ATR "+sd[W0d]]=x8A[L1G]((pd["ATR "+sd[W0d]]*(period-1)+trueRange),period);}
}
;STX[O5l][E2p]=function(stx,sd){this[q2p](stx,sd);STX[O5l][A5d](stx,sd,sd[I74][s3S],sd[I74][P7G],y9S+sd[W0d]);}
;STX[O5l][V1D]=function(stx,sd){var p4p="w4A",o0G="J4A",n6G="T4A",r5S="t4A",Z5d="S6A",p7d="F6A",P5S="W6A",X4Z="C6A",X4G="x6A",V3m="K6A",i6p="lier",o7p="n6A",d6m="s6A",quotes=sd[i8C][M5Z];this[q2p](stx,sd);var useHighLow=sd[(q0T+T4S+D6G+M7S)]["HighLow"];for(var i=1;x8A[(n9G+x8A.X8m)](i,quotes.length-1);i++){var prices=quotes[i],pd=quotes[x8A[d6m](i,1)],prev=prices["Buy Stops "+sd[(T4S+D4Z+w5S+m5Z)]];if(!prev)prev=prices["Sell Stops "+sd[W0d]];if(!prev)prev=0;if(!prices||!pd)continue;var base=prices[Y6C],result=null,offset=x8A[o7p](prices["ATR "+sd[W0d]],sd[I74][(F8Z+n0T+l0V+i6p)]);if(x8A[V3m](prices[Y6C],prev)&&x8A[X4G](pd[Y6C],prev)){if(useHighLow)base=prices[m1Z];result=Math[H0S](prev,x8A[X4Z](base,offset));}
else if(x8A[P5S](prices[Y6C],prev)&&x8A[p7d](pd[Y6C],prev)){if(useHighLow)base=prices[l8p];result=Math[(w5S+q0T+T4S)](prev,base+offset);}
else if(x8A[Z5d](prices[Y6C],prev)){if(useHighLow)base=prices[(m1Z)];result=x8A[r5S](base,offset);}
else if(x8A[n6G](prices[Y6C],prev)){if(useHighLow)base=prices[l8p];result=base+offset;}
if(x8A[o0G](base,result)){quotes[i+1]["Buy Stops "+sd[W0d]]=result;}
else if(x8A[p4p](base,result)){quotes[i+1]["Sell Stops "+sd[(W3m+w5S+m5Z)]]=result;}
quotes[i+1]["All Stops "+sd[W0d]]=result;sd[O4C]="All Stops";}
}
;STX[O5l][H8G]=function(stx,sd){var K3S="M4A",m04="g4A",h3l="e4A",i9D="f4A",C4d="v4A",L2l="X4A",N2Z="i4A",H0D="B4A",H24="O4A",s0p="R4A",t1T="P4A",quotes=sd[i8C][M5Z],af=0,ep=null,lasttrend=false,SAR=0,step=parseFloat(sd[I74]["Minimum AF"]),maxStep=parseFloat(sd[(J8V+D6G+M7S)]["Maximum AF"]);function doReset(){af=0;ep=null;lasttrend=!lasttrend;}
for(var i=0;x8A[t1T](i,quotes.length-1);i++){if(!quotes[i])continue;var priorSAR=SAR;if(lasttrend){if(!ep||x8A[s0p](ep,quotes[i][(I6Z+G6l+g2S)])){ep=quotes[i][m1Z];af=Math[e1Z](af+step,maxStep);}
SAR=priorSAR+x8A[H24](af,(ep-priorSAR));var lowestPrior2Lows=Math[e1Z](quotes[x8A[H0D](Math[H0S](1,i),1)][l8p],quotes[i][l8p]);if(x8A[N2Z](SAR,quotes[i+1][l8p])){SAR=ep;doReset();}
else if(x8A[L2l](SAR,lowestPrior2Lows)){SAR=lowestPrior2Lows;}
}
else{if(!ep||x8A[C4d](ep,quotes[i][l8p])){ep=quotes[i][l8p];af=Math[e1Z](af+step,maxStep);}
SAR=priorSAR+x8A[i9D](af,(ep-priorSAR));var highestPrior2Highs=Math[H0S](quotes[x8A[h3l](Math[H0S](1,i),1)][m1Z],quotes[i][m1Z]);if(x8A[m04](SAR,quotes[i+1][m1Z])){SAR=ep;doReset();}
else if(x8A[K3S](SAR,highestPrior2Highs)){SAR=highestPrior2Highs;}
}
quotes[i+1]["Result "+sd[W0d]]=SAR;}
}
;STX[O5l][n0S]=function(stx,sd){var A9p="m5A",K0d="a5A",S14="A5A",U8d="4A",I2Z="scriptor",H2D="yDe",O6D="E4A",fields=["Close","MA1 "+sd[W0d],"MA2 "+sd[W0d],"MA3 "+sd[W0d]],e;for(e=0;x8A[O6D](e,fields.length-1);e++){sd[p54]=new STX[O5l][(t3S+H2D+I2Z)](sd[W0d],(w5S+D4Z),sd[K5D]);sd[p54][i8C]=sd[i8C];sd[p54][u5S]=sd[u5S];sd[p54][I74]={"Field":fields[e],"Type":"exponential"}
;sd[(w5S+D4Z)][R2S]={}
;sd[p54][(B4S+H44+z4G+M8T)]["MA"+(e+1)[r6l]()]=null;this[Q5p](stx,sd[p54]);}
var quotes=sd[(G7C+D4Z+J5d)][M5Z];for(var i=1;x8A[(c3S+U8d)](i,quotes.length);i++){if(!quotes[i])continue;if(!quotes[x8A[S14](i,1)])continue;if(!quotes[x8A[K0d](i,1)][fields[e]])continue;quotes[i]["Result "+sd[W0d]]=x8A[A9p](100,((quotes[i][fields[e]]/quotes[i-1][fields[e]])-1));}
}
;STX[O5l][q7T]=function(stx,sd){var V8d="q5A",quotes=sd[i8C][M5Z],name=sd[W0d];for(var p in sd[R2S]){name=p+" "+name;}
for(var i=0;x8A[(W4Z+Z3m+x8A.X8m)](i,quotes.length);i++){quotes[i][name]=x8A[V8d]((quotes[i]["High"]+quotes[i]["Low"]),2);}
}
;STX[O5l][S7l]=function(stx,sd){var U0D="N5A",l6l="r5A",O0S="o5A",E6T="Q5A",R6l="z5A",p5S="u5A",quotes=sd[i8C][M5Z],period=sd[u5S],totalUp=0,totalDown=0;for(var i=0;x8A[p5S](i,quotes.length);i++){if(!quotes[i])continue;var diff=x8A[R6l](quotes[i][(x8A.s0m+v4S+B4S+r1Z)],quotes[i][x04]);if(x8A[E6T](diff,0))totalUp+=diff;else totalDown-=diff;if(x8A[O0S](i,period)){var pDiff=x8A[(R6Z+d1T)](quotes[i-period][Y6C],quotes[i-period][(W1Z+c6S+m5Z+T4S)]);if(x8A[(l6l)](pDiff,0))totalUp-=pDiff;else totalDown+=pDiff;}
quotes[i]["Result "+sd[W0d]]=x8A[U0D](100,totalUp,(totalUp+totalDown));}
}
;STX[O5l][v2T]=function(stx,sd){var O7D="g5",quotes=sd[i8C][M5Z],period=sd[u5S];for(var i=0;x8A[(m5Z+d1T)](i,quotes.length);i++){if(!quotes[i])continue;quotes[i]["Close-Open "+sd[W0d]]=x8A[(O7D+x8A.X8m)](quotes[i][(x8A.s0m+G0T+r1Z)],quotes[i][x04]);}
sd[p54]=new STX[O5l][(d8Z+x8A.n9S+W9Z+G5T+M7S+x8A.d5Z+x8A.c7S+q0T+c6S+x8A.n9S+B4S+x8A.c7S)](sd[W0d],"ma",sd[K5D]);sd[p54][(x8A.d5Z+l5d+x8A.n9S)]=sd[i8C];sd[p54][u5S]=period;sd[p54][I74]={"Field":"Close-Open "+sd[W0d],"Type":sd[I74]["Moving Average Type"]}
;sd[p54][R2S]=sd[R2S];this[f8Z](stx,sd[p54]);}
;STX[O5l][Q1d]=function(stx,sd){var M2G="H2A",Z1S="y2A",m5D="b2A",D6m="C2A",E1T="x2A",a6S="K2A",g8d="n2A",N8Z="s2A",k9C="V2A",j6l="B2A",M1G="O2A",a5D="R2A",J2p="P2A",m4p="w2A",k2d="J2A",v4T="M5A",quotes=sd[i8C][M5Z],period=sd[(Y7l+H6T+M7S)],field=sd[I74]["Field"];if(x8A[v4T](field,null))field="Close";var factor=0.5;sd[b7l]=new STX[O5l][x2p](sd[W0d],"ma",sd[K5D]);sd[(t7T+W4Z+H9p)][i8C]=sd[i8C];sd[b7l][u5S]=Number(sd[I74]["Short Cycle"]);sd[b7l][I74]={"Field":field}
;sd[b7l][R2S]={"MACD1":null}
;STX[O5l][Q5p](stx,sd[b7l]);sd[u7l]=new STX[(n0D+p9S+A64)][x2p](sd[W0d],"ma",sd[K5D]);sd[(u7l)][(I5S+x8A.n9S)]=sd[i8C];sd[u7l][u5S]=Number(sd[I74]["Long Cycle"]);sd[u7l][I74]={"Field":field}
;sd[u7l][R2S]={"MACD2":null}
;STX[O5l][Q5p](stx,sd[u7l]);function getLLVHHV(p,x,n){var B7d="t2A",K9C="S5A",l=null,h=null;for(var j=x8A[(c7Z+d1T)](x,p,1);x8A[K9C](j,x);j++){var d=quotes[j][n+" "+sd[W0d]];if(!d)continue;l=(x8A[B7d](l,null)?d:Math[e1Z](l,d));h=(x8A[(C8d+x8A.X8m)](h,null)?d:Math[H0S](h,d));}
return [l,h];}
var f1=0,f2=0,longCycle=Number(sd[(J8V+c6S+Z7d)][(C9Z+B4S+m7p+m44+x8A.s0m+H6T+a9C+m5Z)]);for(var i=0;x8A[k2d](i,quotes.length);i++){var quote=quotes[i];quote["Result "+sd[W0d]]=f2;if(x8A[m4p](i,longCycle-1))continue;quote["MACD "+sd[W0d]]=x8A[J2p](quote["MACD1 "+sd[W0d]],quote["MACD2 "+sd[W0d]]);if(x8A[a5D](i,longCycle+(period-1)))continue;var lh=getLLVHHV(period,i,"MACD");f1=(x8A[M1G](lh[1],lh[0])?(x8A[j6l](100,(quote["MACD "+sd[W0d]]-lh[0]),(lh[1]-lh[0]))):f1);quote["PF "+sd[W0d]]=(quotes[x8A[k9C](i,1)]["PF "+sd[W0d]]?quotes[x8A[N8Z](i,1)]["PF "+sd[W0d]]+x8A[g8d](factor,(f1-quotes[i-1]["PF "+sd[W0d]])):f1);if(x8A[a6S](i,longCycle+2*(period-1)))continue;lh=getLLVHHV(period,i,"PF");f2=(x8A[E1T](lh[1],lh[0])?(x8A[D6m](100,(quote["PF "+sd[W0d]]-lh[0]),(lh[1]-lh[0]))):f2);quote["Result "+sd[W0d]]=(quotes[x8A[m5D](i,1)]["Result "+sd[(W3m+w5S+m5Z)]]?quotes[x8A[Z1S](i,1)]["Result "+sd[W0d]]+x8A[M2G](factor,(f2-quotes[i-1]["Result "+sd[W0d]])):f2);}
}
;STX[O5l][P2Z]=function(stx,sd){var D54="smima",O2S="N0f",G7p="r0f",F1T="G0f",G3p="dma2",e9S="dma",r6G="dm",M9p="dma1",u8S="hma2",j1S="hma1",S34="o0",B0D="Q0f",h5p="z0f",X2G="u0f",quotes=sd[i8C][M5Z];function getLLVHHV(p,x){var C24="q0f",c0C="d0f",i7C="m0f",Y9p="j0f",l=null,h=null;for(var j=x8A[Y9p](x,p,1);x8A[i7C](j,x);j++){l=(x8A[c0C](l,null)?quotes[j][l8p]:Math[e1Z](l,quotes[j][l8p]));h=(x8A[C24](h,null)?quotes[j][(I6Z+g1p)]:Math[H0S](h,quotes[j][m1Z]));}
return [l,h];}
var pKPeriods=Number(sd[I74]["%K Periods"]);for(var i=x8A[X2G](pKPeriods,1);x8A[h5p](i,quotes.length);i++){var quote=quotes[i],lh=getLLVHHV(pKPeriods,i);quote["H "+sd[W0d]]=x8A[B0D](quote[Y6C],(lh[0]+lh[1])/2);quote["DHL "+sd[W0d]]=x8A[(S34+f0T)](lh[1],lh[0]);}
sd[j1S]=new STX[O5l][x2p](sd[W0d],(p54),sd[K5D]);sd[j1S][i8C]=sd[i8C];sd[j1S][u5S]=Number(sd[I74]["%K Smoothing Periods"]);sd[j1S][I74]={"Field":"H "+sd[(T4S+D4Z+i04)]}
;sd[j1S][R2S]={"HS1":null}
;STX[O5l][Q5p](stx,sd[(l4C+u2T)]);sd[u8S]=new STX[O5l][x2p](sd[W0d],"ma",sd[K5D]);sd[u8S][(x8A.d5Z+g2S+D4Z+J5d)]=sd[i8C];sd[u8S][u5S]=Number(sd[I74]["%K Double Smoothing Periods"]);sd[u8S][I74]={"Field":"HS1 "+sd[W0d]}
;sd[u8S][R2S]={"HS2":null}
;STX[O5l][Q5p](stx,sd[(u8S)]);sd[M9p]=new STX[O5l][(d8Z+x8A.n9S+W9Z+i7Z+m5Z+M7S+x8A.d5Z+x8A.c7S+q0T+c6S+a0T+x8A.c7S)](sd[W0d],"ma",sd[K5D]);sd[M9p][i8C]=sd[i8C];sd[(r6G+D4Z+H9p)][u5S]=Number(sd[I74]["%K Smoothing Periods"]);sd[M9p][I74]={"Field":"DHL "+sd[W0d]}
;sd[(e9S+H9p)][R2S]={"DHL1":null}
;STX[(n0D+a84+X7l+M7S)][Q5p](stx,sd[M9p]);sd[G3p]=new STX[O5l][x2p](sd[W0d],"ma",sd[K5D]);sd[G3p][i8C]=sd[i8C];sd[G3p][u5S]=Number(sd[I74]["%K Double Smoothing Periods"]);sd[G3p][I74]={"Field":"DHL1 "+sd[W0d]}
;sd[G3p][(B4S+p9S+x8A.n9S+z0Z)]={"DHL2":null}
;STX[O5l][Q5p](stx,sd[G3p]);for(var i=x8A[F1T](pKPeriods,1);x8A[G7p](i,quotes.length);i++){quotes[i]["%K "+sd[W0d]]=x8A[O2S]((quotes[i]["HS2 "+sd[W0d]]/(.5*quotes[i]["DHL2 "+sd[W0d]])),100);}
sd[D54]=new STX[O5l][x2p](sd[W0d],"ma",sd[K5D]);sd[D54][i8C]=sd[i8C];sd[D54][u5S]=Number(sd[I74]["%D Periods"]);sd[D54][I74]={"Field":"%K "+sd[W0d],"Type":sd[I74]["%D Moving Average Type"]}
;sd[D54][R2S]={"%D":null}
;STX[O5l][f8Z](stx,sd[D54]);sd[B0d]="%K";}
;STX[O5l][n2l]=function(stx,sd){var U6d="i8f",m7S="B8f",o0d="O8f",i6l="R8f",u8G="P8f",s6C="w8f",a9D="m8f",v0G="A8f",k4d="cru",quotes=sd[i8C][(M7S+k4d+Y4Z+V5d+W4Z)];function getLLVHHV(p,x){var V7S="U0f",p8m="E0f",e94="M0f",Y9T="g0f",e0S="p0f",l=null,h=null;for(var j=x8A[e0S](x,p,1);x8A[Y9T](j,x);j++){var d=x8A[e94]((quotes[j][m1Z]+quotes[j][l8p]),2);l=(x8A[p8m](l,null)?d:Math[e1Z](l,d));h=(x8A[(V7S)](h,null)?d:Math[H0S](h,d));}
return [l,h];}
var n=0;for(var i=0;x8A[v0G](i,quotes.length);i++){var quote=quotes[i];if(x8A[(D4Z+E9m+f0T)](i,sd[u5S]-1)){quote["EF "+sd[W0d]]=quote["EF Trigger "+sd[W0d]]=n;continue;}
var lh=getLLVHHV(sd[(Y7l+s8V)],i);n=x8A[a9D](0.33,2,((((quotes[i][m1Z]+quotes[i][l8p])/2)-lh[0])/(lh[1]-lh[0])-0.5))+x8A[s6C](0.67,n);if(x8A[u8G](n,0))n=Math[(w5S+J8V)](n,0.9999);else if(x8A[i6l](n,0))n=Math[H0S](n,-0.9999);quote["EF "+sd[W0d]]=x8A[o0d](0.5,Math[C1C]((1+n)/(1-n)))+x8A[m7S](0.5,quotes[i-1]["EF "+sd[W0d]]);quote["EF Trigger "+sd[W0d]]=quotes[x8A[U6d](i,1)]["EF "+sd[W0d]];}
}
;STX[O5l][a3C]=function(stx,sd){var e5D="v8f",o3p="X8f",quotes=sd[i8C][M5Z];this[q2p](stx,sd);sd[u6l]=new STX[O5l][(t3S+H6T+i7Z+m5Z+x3S+r8T+A3D)](sd[(T4S+f64)],"ma",sd[(Q7G+T4S+m5Z+v4S)]);sd[u6l][i8C]=sd[i8C];sd[u6l][(W4Z+D4Z+H6T+M7S)]=sd[(W4Z+Z6Z+M7S)];sd[u6l][I74]={"Field":"True Range "+sd[(T4S+D4Z+w5S+m5Z)],"Type":"exponential"}
;sd[u6l][R2S]={"EMA":null}
;this[Q5p](stx,sd[u6l]);sd[p54]=new STX[O5l][x2p](sd[W0d],(w5S+D4Z),sd[K5D]);sd[p54][(x8A.d5Z+g2S+x8Z+x8A.n9S)]=sd[i8C];sd[p54][u5S]=sd[u5S];sd[p54][(J8V+c6S+p9S+M8T)]={"Field":(x8A.s0m+G0T+M7S+m5Z),"Type":"simple"}
;sd[p54][R2S]={"SMA":null}
;this[f8Z](stx,sd[p54]);for(var i=1;x8A[o3p](i,quotes.length);i++){if(!quotes[i]||!quotes[i]["SMA "+sd[W0d]]||!quotes[i]["EMA "+sd[(T4S+f64)]])continue;quotes[i]["Result "+sd[W0d]]=x8A[e5D]((quotes[i][Y6C]-quotes[i]["SMA "+sd[W0d]]),quotes[i]["EMA "+sd[W0d]]);}
}
;STX[O5l][U5G]=function(stx,sd){var w8Z="e8f",L1p="hist",f0Z="f8f",y3D="ma34",e6l="ma5",B1D="tudyD",quotes=sd[i8C][M5Z];sd[T74]=new STX[O5l][(d8Z+B1D+m5Z+x3S+r8T+A3D)](sd[(w5G+m5Z)],(w5S+m5Z+W4Z+m44+c6S+x8A.c7S+q0T+T7C),sd[K5D]);sd[T74][i8C]=sd[i8C];sd[T74][(B4S+b0Z+p9S+x8A.n9S+M7S)]={"Med Price":null}
;this[q7T](stx,sd[(w5S+c6S)]);sd[e6l]=new STX[O5l][x2p](sd[W0d],(w5S+D4Z),sd[K5D]);sd[e6l][i8C]=sd[i8C];sd[e6l][u5S]=5;sd[e6l][I74]={"Field":"Med Price "+sd[W0d],"Type":"simple"}
;sd[e6l][(l7D+Y8T+H44+M7S)]={"MA5":null}
;this[f8Z](stx,sd[e6l]);sd[y3D]=new STX[O5l][x2p](sd[W0d],"ma",sd[K5D]);sd[y3D][i8C]=sd[i8C];sd[y3D][u5S]=34;sd[y3D][I74]={"Field":"Med Price "+sd[W0d],"Type":"simple"}
;sd[y3D][R2S]={"MA34":null}
;this[f8Z](stx,sd[y3D]);for(var i=33;x8A[f0Z](i,quotes.length);i++){if(!quotes[i])continue;quotes[i][sd[W0d]+(B0S+L1p)]=x8A[w8Z](quotes[i]["MA5 "+sd[W0d]],quotes[i]["MA34 "+sd[(T4S+N0Z+m5Z)]]);}
}
;STX[(x8d+W4Z+k9T)][j9G]=function(stx,sd){var l9G="E1f",n3S="I1f",m4l="x1f",S7C="f1f",l1l="X1f",E3C="i1f",T9G="Q1f",m3Z="z1f",A54="u1f",k4m="q1f",F1G="d1f",d3T="m1f",y5m="a1f",U1d="A1f",S9S="U8f",e2p="E8f",L6G="M8f",v4Z="g8f",quotes=sd[i8C][M5Z],cycle=[sd[I74]["Cycle 1"],sd[I74]["Cycle 2"],sd[I74]["Cycle 3"]],c01=x8A[v4Z](cycle[0],cycle[1]),c02=x8A[L6G](cycle[0],cycle[2]),c12=x8A[e2p](cycle[1],cycle[2]),accbp=[0,0,0],acctr=[0,0,0],start=Math[H0S](cycle[0],Math[H0S](cycle[1],cycle[2]));for(var i=1;x8A[S9S](i,quotes.length);i++){if(!quotes[i]||!quotes[x8A[U1d](i,1)])continue;var minLC=Math[e1Z](quotes[i][l8p],quotes[x8A[(y5m)](i,1)][Y6C]),bp=x8A[d3T](quotes[i][Y6C],minLC),tr=x8A[F1G](Math[H0S](quotes[i][m1Z],quotes[i-1][Y6C]),minLC);for(var x=0;x8A[k4m](x,cycle.length);x++){accbp[x]+=bp;acctr[x]+=tr;if(x8A[A54](i,cycle[x])){var p_minLC=Math[e1Z](quotes[x8A[m3Z](i,cycle[x])][l8p],quotes[x8A[T9G](i,cycle[x],1)][Y6C]),p_bp=x8A[E3C](quotes[i-cycle[x]][Y6C],p_minLC),p_tr=x8A[l1l](Math[H0S](quotes[i-cycle[x]][(M7T+Z8T+g2S)],quotes[i-cycle[x]-1][Y6C]),p_minLC);accbp[x]-=p_bp;acctr[x]-=p_tr;}
}
if(x8A[(U4T+H9p+f0T)](i,start))continue;var numerator=x8A[S7C](c12,accbp[0],acctr[0])+x8A[m4l](c02,accbp[1],acctr[1])+x8A[n3S](c01,accbp[2],acctr[2]),denominator=c12+c02+c01;quotes[i]["Result "+sd[W0d]]=x8A[l9G](100,numerator,denominator);}
}
;STX[O5l][W0m]=function(stx,sd){var J1p="w3f",F2G="J3f",N9G="T3f",i8T="t3f",a8m="S1f",field=sd[I74]["Field"];if(x8A[(a8m)](field,null))field="Close";var quotes=sd[i8C][M5Z],total=0;for(var i=1;x8A[i8T](i,quotes.length);i++){if(!quotes[i]||!quotes[i][field])continue;if(!quotes[x8A[N9G](i,1)]||!quotes[x8A[F2G](i,1)][field])continue;total+=x8A[J1p](quotes[i][C1D],(quotes[i][field]-quotes[i-1][field]),quotes[i-1][field]);quotes[i]["Result "+sd[W0d]]=total;}
}
;STX[O5l][B2l]=function(stx,sd){var Y6S="K3f",u7G="n3f",T8C="s3f",Q4d="V3f",Y3C="D3f",x7d="h3f",r3D="l3f",L9d="c3f",field=sd[(J8V+D6G+M7S)]["Field"];if(x8A[L9d](field,null))field="Close";var minTick=sd[I74]["Min Tick Value"],obv=false;if(x8A[r3D](minTick,null)){obv=true;minTick=0;}
var quotes=sd[i8C][M5Z],total=0,direction=0;for(var i=1;x8A[x7d](i,quotes.length);i++){if(!quotes[i]||!quotes[i][field])continue;if(!quotes[x8A[(Y3C)](i,1)]||!quotes[x8A[Q4d](i,1)][field])continue;if(x8A[T8C](quotes[i][field]-quotes[i-1][field],minTick))direction=1;else if(x8A[u7G](quotes[i-1][field]-quotes[i][field],minTick))direction=-1;else if(obv)direction=0;total+=x8A[Y6S](quotes[i][(O8l+d94+m5Z)],direction);quotes[i]["Result "+sd[W0d]]=total;}
}
;STX[O5l][k9G]=function(stx,sd){var q0l="esc",x0G="yD",N8l="w9f",w6d="J9f",B3d="T9f",K8d="t9f",v2G="S3f",I6T="F3f",F7l="C3f",z5d="x3f",field=sd[I74][(C7Z+q0T+m5Z+v4S+W4Z)];if(x8A[z5d](field,null))field="Close";var quotes=sd[i8C][M5Z],total=100;for(var i=1;x8A[F7l](i,quotes.length);i++){if(!quotes[i]||!quotes[i][field])continue;if(!quotes[x8A[(t9S+U3p+f0T)](i,1)]||!quotes[x8A[I6T](i,1)][field])continue;if((x8A[v2G](sd[V1C],(c3Z+p1D+m44+C1S+U5D))&&x8A[K8d](quotes[i][(O8l+p9S+i04)],quotes[i-1][C1D]))||(x8A[B3d](sd[V1C],"Neg Vol")&&x8A[w6d](quotes[i][C1D],quotes[i-1][C1D]))){total*=(x8A[N8l](quotes[i][field],quotes[i-1][field]));}
quotes[i][(N3Z+T4S+W4Z+Z0D+m44)+sd[W0d]]=total;}
sd[p54]=new STX[O5l][(n0D+a84+x0G+q0l+E0d+c6S+a0T+x8A.c7S)](sd[W0d],"ma",sd[K5D]);sd[p54][i8C]=sd[(x8A.J5m+x8A.c7S+x8A.n9S)];sd[p54][u5S]=sd[u5S];sd[p54][I74]={"Field":"Index "+sd[W0d],"Type":sd[I74]["Moving Average Type"]}
;sd[p54][R2S]={"MA":null}
;this[f8Z](stx,sd[p54]);}
;STX[O5l][m7D]=function(stx,sd){var v0T="R9",b7m="P9f",quotes=sd[i8C][M5Z],origin=quotes[0];for(var i=1;x8A[b7m](i,quotes.length);i++){if(!origin)origin=quotes[i];if(!quotes[i])continue;quotes[i]["Result "+sd[W0d]]=x8A[(v0T+f0T)](100,(quotes[i][Y6C]/origin[Y6C]-1));}
}
;STX[O5l][O3l]=function(stx,sd){var k5Z="sq",W4S="J7f",r2S="T7f",s2D="t7f",K8m="S9f",v1m="F9f",D9l="W9f",Q5D="C9f",z9p="e9f",n6S="f9f",a8l="v9f";function intFactor(days){var i5m="X9f",o3C="i9f",j0Z="B9f",l8D="O9f";if(isNaN(days))days=365;if(x8A[l8D](stx[T2T][p0l],"day"))return days;else if(x8A[j0Z](stx[T2T][p0l],"week"))return x8A[o3C](days,7);else if(x8A[i5m](stx[T2T][p0l],"month"))return 12;else return days;}
var quotes=sd[i8C][M5Z],field=sd[I74]["Field"];if(x8A[a8l](field,null))field="Close";var mult=sd[I74]["Standard Deviations"];if(x8A[n6S](mult,0))mult=1;annualizingFactor=x8A[z9p](100,Math[(M7S+p6S+x8A.c7S+x8A.n9S)](intFactor(sd[I74]["Days Per Year"])),mult);var arr=[],accum=0;for(var i=1;x8A[Q5D](i,quotes.length);i++){if(!quotes[i]||!quotes[x8A[D9l](i,1)])continue;var ln=Math[C1C](x8A[v1m](quotes[i][field],quotes[i-1][field]));arr[K6T](ln);accum+=ln;if(x8A[K8m](i,sd[u5S])){var d2=0;accum/=sd[u5S];for(var j=0;x8A[s2D](j,arr.length);j++){d2+=Math[z04](x8A[r2S](arr[j],accum),2);}
accum*=sd[(u5S)];accum-=arr[H7G]();quotes[i]["Result "+sd[(W3m+w5S+m5Z)]]=x8A[W4S](Math[(k5Z+x8A.c7S+x8A.n9S)](d2/sd[u5S]),annualizingFactor);}
}
}
;STX[O5l][T4p]=function(stx,sd){var Y2D="a6f",Z2d="A6f",n7C="U7f",U4Z="E7f",e9D="M7f",U2d="g7f",Z9p="f7f",m1p="v7f",l84="X7f",M4D="i7f",K1Z="B7f",p6l="O7f",K5C="R7f",Q9l="P7f",G5C="w7f",T=sd[(q0T+T4S+z4G+x8A.n9S+M7S)]["Limit Move Value"];if(x8A[G5C](T,null))T=99999;var quotes=sd[i8C][M5Z],total=0;for(var i=1;x8A[Q9l](i,quotes.length);i++){if(!quotes[i])continue;if(!quotes[x8A[K5C](i,1)])continue;var A=Math[W2S](x8A[p6l](quotes[i][m1Z],quotes[i-1][Y6C])),B=Math[(D4Z+Y4Z+M7S)](x8A[K1Z](quotes[i][l8p],quotes[i-1][Y6C])),C=Math[W2S](x8A[M4D](quotes[i][m1Z],quotes[i][l8p])),D=Math[W2S](x8A[l84](quotes[i-1][Y6C],quotes[i-1][x04])),K=Math[H0S](A,B),M=Math[H0S](C,K),R=M+x8A[(m1p)](.25,D);if(x8A[Z9p](M,A))R-=x8A[(m5Z+k1m+f0T)](.5,B);else if(x8A[U2d](M,B))R-=x8A[e9D](.5,A);var swing=x8A[U4Z]((50*((quotes[i][Y6C]-quotes[i-1][(m9Z+m5Z)])+.5*(quotes[i][(x8A.s0m+a7G)]-quotes[i][x04])+.25*(quotes[i-1][Y6C]-quotes[i-1][x04]))/R),(K/T));if(x8A[n7C](R,0)||x8A[Z2d](T,0))swing=0;if(x8A[Y2D](sd[(i9T+X0G)],"Swing"))total=0;total+=swing;quotes[i]["Result "+sd[W0d]]=total;}
}
;STX[O5l][I6C]=function(stx,sd){var m0p="ADX",Z8C="k4f",I1l="Y4f",x9T="Z4f",v2C="j4f",Q1S="S6f",g1T="E6f",W2G="I6f",l4S="x6f",w3m="f6f",r5m="r6f",b1d="G6f",x44="o6f",O3m="Q6f",G5m="z6f",r6d="u6f",c4S="q6f",T3C="m6f";this[q2p](stx,sd);var quotes=sd[i8C][M5Z],period=sd[u5S],smoothTR=0,smoothPlusDM=0,smoothMinusDM=0,runningDX=0;for(var i=1;x8A[T3C](i,quotes.length);i++){if(!quotes[i]||!quotes[x8A[(W4Z+f1m+f0T)](i,1)])continue;var plusDM=Math[H0S](0,x8A[c4S](quotes[i][m1Z],quotes[i-1][m1Z])),minusDM=Math[H0S](0,x8A[r6d](quotes[i-1][l8p],quotes[i][l8p]));if(x8A[G5m](plusDM,minusDM))minusDM=0;else if(x8A[O3m](minusDM,plusDM))plusDM=0;else plusDM=minusDM=0;if(x8A[x44](i,period)){smoothPlusDM+=plusDM;smoothMinusDM+=minusDM;smoothTR+=quotes[i]["True Range "+sd[W0d]];if(x8A[b1d](i,period))continue;}
else{smoothPlusDM=x8A[r5m](smoothPlusDM,smoothPlusDM/period,plusDM);smoothMinusDM=x8A[w3m](smoothMinusDM,smoothMinusDM/period,minusDM);smoothTR=x8A[l4S](smoothTR,smoothTR/period,quotes[i]["True Range "+sd[W0d]]);}
var plusDI=x8A[W2G](100,smoothPlusDM,smoothTR),minusDI=x8A[g1T](100,smoothMinusDM,smoothTR),DX=x8A[Q1S](100,Math[W2S](plusDI-minusDI),(plusDI+minusDI));quotes[i]["+DI "+sd[W0d]]=plusDI;quotes[i]["-DI "+sd[W0d]]=minusDI;if(x8A[v2C](i,2*period-1)){runningDX+=DX;}
else if(x8A[x9T](i,2*period-1)){quotes[i]["ADX "+sd[W0d]]=x8A[I1l](runningDX,period);}
else{quotes[i]["ADX "+sd[W0d]]=x8A[Z8C]((quotes[i-1][(m0p+m44)+sd[W0d]]*(period-1)+DX),period);}
}
}
;STX[O5l][K1C]=function(stx,sd){var p8D="n4f",p1d="s4f",H3C="V4f",T6G="D4f",O3D="h4",J3l="l4f",o8C="c4f";this[q2p](stx,sd);var quotes=sd[i8C][M5Z],period=sd[u5S];for(var i=2;x8A[o8C](i,quotes.length);i++){if(!quotes[i])continue;var ttr=0,high=quotes[i][m1Z],low=quotes[i][l8p],maxHigh=0,maxLow=0;for(var j=1;x8A[J3l](j,period);j++){if(x8A[(O3D+f0T)](i,j)){maxHigh=maxLow=0;break;}
ttr+=quotes[x8A[T6G](i,j)]["True Range "+sd[W0d]];var denom=(x8A[H3C]((ttr/j),Math[Z1D](j))),cH=x8A[p1d]((high-quotes[i-j][l8p]),denom),cL=x8A[p8D]((quotes[i-j][m1Z]-low),denom);maxHigh=Math[H0S](maxHigh,cH);maxLow=Math[H0S](maxLow,cL);}
quotes[i]["Random Walk High "+sd[W0d]]=maxHigh;quotes[i]["Random Walk Low "+sd[W0d]]=maxLow;}
}
;STX[O5l][e4l]=function(stx,sd){var T8Z="W4f",E7D="x4f",K8Z="K4f",field=sd[I74]["Field"];if(x8A[(K8Z)](field,null))field="Close";var quotes=sd[i8C][M5Z];for(var i=sd[u5S];x8A[E7D](i,quotes.length);i++){if(!quotes[i])continue;if(!quotes[x8A[(x8A.s0m+K3m+f0T)](i,sd[u5S])])continue;quotes[i]["Result "+sd[W0d]]=x8A[T8Z](quotes[i][field],quotes[i-sd[u5S]][field]);}
}
;STX[O5l][r04]=function(stx,sd){var E4S="w5f",h2p="J5f",d5p="T5f",f7p="t5f",Q7Z="4f",D94="F4",field=sd[(q0T+T4S+z0Z)]["Field"];if(x8A[(D94+f0T)](sd[W0d][J7G]((C1S+U5D+m44+r0Z+W1Z+x8A.s0m)),0))field=(O8l+W1S);else if(x8A[(d8Z+Q7Z)](field,null))field="Close";var name=sd[W0d];for(var p in sd[R2S]){name=p+" "+name;}
var offset=sd[I74]["Center Line"];if(x8A[f7p](offset,null))offset=0;else offset=parseInt(offset,10);var quotes=sd[i8C][M5Z];for(var i=sd[u5S];x8A[d5p](i,quotes.length);i++){if(!quotes[i])continue;if(!quotes[x8A[h2p](i,sd[u5S])])continue;quotes[i][name]=x8A[E4S](100,((quotes[i][field]/quotes[i-sd[(W4Z+Z6Z+M7S)]][field])-1))+offset;}
}
;STX[O5l][L9p]=function(stx,sd){var O44="i5f",Z94="B5f",k3S="O5f",A0S="R5f",x0V="P5f",quotes=sd[i8C][M5Z],period=sd[u5S],name=sd[(T4S+D4Z+w5S+m5Z)];for(var p in sd[R2S]){name=p+" "+name;}
var total=0;for(var i=0;x8A[x0V](i,quotes.length);i++){if(!quotes[i])continue;quotes[i][r6Z]=x8A[A0S]((quotes[i][m1Z]+quotes[i][l8p]+quotes[i][Y6C]),3);total+=quotes[i]["typicalPrice"];if(x8A[k3S](i,period)){total-=quotes[x8A[Z94](i,period)][r6Z];quotes[i][name]=x8A[O44](total,period);}
}
}
;STX[O5l][k6C]=function(stx,sd){var W8l="g5f",Z8d="weightedClose",v6l="e5f",f3G="f5",p7T="v5f",U6Z="X5f",quotes=sd[i8C][M5Z],period=sd[u5S],name=sd[W0d];for(var p in sd[R2S]){name=p+" "+name;}
var total=0;for(var i=0;x8A[U6Z](i,quotes.length);i++){if(!quotes[i])continue;quotes[i][(M1m+q0T+Z8T+g2S+x8A.n9S+u6D+x8A.s0m+G0T+r1Z)]=x8A[p7T]((quotes[i][m1Z]+quotes[i][(l8p)]+2*quotes[i][Y6C]),4);total+=quotes[i]["weightedClose"];if(x8A[(f3G+f0T)](i,period)){total-=quotes[x8A[v6l](i,period)][Z8d];quotes[i][name]=x8A[W8l](total,period);}
}
}
;STX[O5l][m6l]=function(stx,sd){var R1Z="A2f",G6m="U5f",w0T="E5f",T4C="M5f",quotes=sd[i8C][M5Z];sd[u6l]=new STX[O5l][x2p](sd[W0d],"ma",sd[K5D]);sd[u6l][i8C]=sd[i8C];sd[u6l][(u5S)]=sd[u5S];sd[u6l][I74]={"Field":"Close","Type":"exponential"}
;sd[u6l][R2S]={"EMA":null}
;this[Q5p](stx,sd[u6l]);for(var i=x8A[T4C](sd[u5S],1);x8A[w0T](i,quotes.length);i++){if(!quotes[i])continue;quotes[i][sd[W0d]+"_hist1"]=x8A[G6m](quotes[i][(m1Z)],quotes[i]["EMA "+sd[W0d]]);quotes[i][sd[W0d]+"_hist2"]=x8A[R1Z](quotes[i][l8p],quotes[i]["EMA "+sd[W0d]]);}
}
;STX[O5l][E6G]=function(stx,sd){var s2S="m2f",z9G="a2f",quotes=sd[(G7C+D4Z+x8A.c7S+x8A.n9S)][M5Z];for(var i=1;x8A[z9G](i,quotes.length);i++){if(!quotes[i])continue;quotes[i]["Result "+sd[W0d]]=x8A[s2S](quotes[i][C1D],(quotes[i][Y6C]-quotes[i-1][Y6C]));}
}
;STX[O5l][(x8A.d5Z+D4Z+v4S+x8A.d5Z+p9S+j4T+H7m+T4S+x8A.n9S+k9p+x8A.c7S+D4Z+U4T+q0T+i9T)]=function(stx,sd){var Y6p="G2f",y6d="o2f",N2l="Q2f",q4S="z2f",J6d="2f",m8G="q2f",E0D="d2f",field=sd[I74]["Field"];if(x8A[E0D](field,"field"))field="Close";var quotes=sd[i8C][M5Z];for(var i=x8A[m8G](sd[u5S],1);x8A[(p9S+J6d)](i,quotes.length);i++){if(!quotes[i])continue;var num=0,den=0;for(var j=0;x8A[q4S](j,sd[u5S]);j++){num-=x8A[N2l]((j+1),quotes[i-j][field]);den+=quotes[x8A[y6d](i,j)][field];}
quotes[i]["Result "+sd[W0d]]=x8A[Y6p](num,den);}
}
;STX[O5l][t9m]=function(stx,sd){var m3p="tud",V2T="y2f",V8m="b2f",w6T="I2f",o1D="L2f",W9C="p2f",K6p="N2f",Y1T="r2f",quotes=sd[(G7C+S4S)][M5Z];for(var i=1;x8A[Y1T](i,quotes.length);i++){if(!quotes[i]||!quotes[x8A[K6p](i,1)])continue;var avgCurrent=x8A[W9C]((quotes[i][m1Z]+quotes[i][l8p]),2),avgPrior=x8A[o1D]((quotes[i-1][m1Z]+quotes[i-1][l8p]),2),dm=x8A[w6T](avgCurrent,avgPrior),br=x8A[V8m]((quotes[i][C1D]/100000000),(quotes[i][m1Z]-quotes[i][l8p]));quotes[i]["EOM1 "+sd[W0d]]=x8A[V2T](dm,br);sd[p54]=new STX[O5l][(d8Z+m3p+H6T+i7Z+m5Z+M7S+b2l+q0T+c6S+a0T+x8A.c7S)](sd[(W0d)],"ma",sd[K5D]);sd[p54][i8C]=sd[i8C];sd[p54][u5S]=sd[u5S];sd[p54][(R0m+p9S+M8T)]={"Field":"EOM1 "+sd[(T4S+D4Z+w5S+m5Z)],"Type":sd[I74]["Moving Average Type"]}
;sd[p54][R2S]={"Result":null}
;this[f8Z](stx,sd[p54]);}
}
;STX[O5l][y2C]=function(stx,sd){var t7Z="T8n",v3l="t8n",T24="S0n",j5T="por",k04="F0n",j0l="W0n",D3D="C0n",Y7S="x0n",s3T="K0n",i5d="n0n",k0m="s0n",X6l="V0n",n4S="D0n",A74="h0n",d7G="l0n",u1G="c0n",V2p="k0n",U2Z="Y0n",M7G="Z0n",Z3D="j0n",f54="H2f",quotes=sd[i8C][M5Z],period="day";if(stx[o6S](stx[T2T][p0l]))period="month";var size=0,total=0,pivotPoint=0,high=0,low=0,prevHigh=0,prevLow=0,hlSpread=0;for(var i=1;x8A[f54](i,quotes.length);i++){if(!quotes[x8A[Z3D](i,1)])continue;total+=x8A[M7G]((quotes[i-1][m1Z]+quotes[i-1][(C9Z+c9D)]+quotes[i-1][(W7C+e8Z)]),3);high=Math[H0S](high,quotes[x8A[(U2Z)](i,1)][m1Z]);low=Math[e1Z](x8A[V2p](low,0)?low:quotes[x8A[u1G](i,1)][(C9Z+B4S+f4T)],quotes[x8A[d7G](i,1)][(C9Z+B4S+f4T)]);size++;if(x8A[A74](period,"month")&&x8A[n4S](quotes[i][s9l][U3d](),quotes[i-1][s9l][U3d]())){pivotPoint=x8A[X6l](total,size);prevHigh=high;prevLow=low;hlSpread=x8A[k0m](high,low);size=total=high=low=0;}
else if(x8A[i5d](period,"day")&&x8A[s3T](quotes[i][s9l][q3m](),quotes[i-1][s9l][q3m]())){pivotPoint=x8A[(Y7S)](total,size);prevHigh=high;prevLow=low;hlSpread=x8A[D3D](high,low);size=total=high=low=0;}
quotes[i]["Pivot "+sd[W0d]]=pivotPoint;quotes[i]["Resistance 1 "+sd[W0d]]=x8A[j0l](2*pivotPoint,prevLow);quotes[i]["Resistance 2 "+sd[(w5G+m5Z)]]=pivotPoint+hlSpread;quotes[i]["Resistance 3 "+sd[W0d]]=pivotPoint+x8A[k04](2,hlSpread);quotes[i][(d8Z+j34+j5T+x8A.n9S+m44+H9p+m44)+sd[W0d]]=x8A[T24](2*pivotPoint,prevHigh);quotes[i]["Support 2 "+sd[W0d]]=x8A[v3l](pivotPoint,hlSpread);quotes[i]["Support 3 "+sd[W0d]]=x8A[t7Z](pivotPoint,2*hlSpread);}
}
;STX[O5l][V14]=function(stx,sd){var H7D="O8n",p0C="R8n",q6D="P8n",T6l="w8n",quotes=sd[i8C][M5Z];for(var i=0;x8A[(G7l+T4S)](i,quotes.length);i++){if(!quotes[i])continue;quotes[i]["High-Low "+sd[W0d]]=x8A[T6l](quotes[i]["High"],quotes[i]["Low"]);}
sd[(m5Z+w5S+D4Z)]=new STX[O5l][x2p](sd[(T4S+D4Z+w5S+m5Z)],"ma",sd[K5D]);sd[u6l][i8C]=sd[i8C];sd[u6l][u5S]=sd[(W4Z+D4Z+H6T+M7S)];sd[u6l][I74]={"Field":"High-Low "+sd[W0d],"Type":"exponential"}
;sd[u6l][R2S]={"EMA":null}
;this[Q5p](stx,sd[u6l]);var roc=sd[I74]["Rate Of Change"];if(!roc)roc=sd[u5S];for(var i=roc;x8A[q6D](i,quotes.length);i++){if(!quotes[i])continue;if(!quotes[x8A[p0C](i,roc)]["EMA "+sd[W0d]])continue;quotes[i]["Result "+sd[W0d]]=x8A[H7D](100,((quotes[i][(c7Z+q0G+m44)+sd[W0d]]/quotes[i-roc]["EMA "+sd[W0d]])-1));}
}
;STX[O5l][J9T]=function(stx,sd){var O5p="x8n",M0D="K8n",e8l="MF",N1Z="n8n",q44="s8n",r0V="i8n",K5S="B8n",quotes=sd[i8C][M5Z],sumMoneyFlow=0,sumVolume=0;for(var i=0;x8A[K5S](i,quotes.length);i++){if(!quotes[i])continue;quotes[i]["MFV "+sd[W0d]]=x8A[r0V](quotes[i]["Volume"],(2*quotes[i]["Close"]-quotes[i][(M7T+f4m)]-quotes[i][(C9Z+B4S+f4T)]),(quotes[i][(M7T+f4m)]-quotes[i]["Low"]));sumMoneyFlow+=quotes[i]["MFV "+sd[W0d]];sumVolume+=quotes[i]["Volume"];if(x8A[q44](i,sd[u5S]-1)){sumMoneyFlow-=quotes[x8A[N1Z](i,sd[u5S])][(e8l+C1S+m44)+sd[W0d]];sumVolume-=quotes[x8A[M0D](i,sd[u5S])]["Volume"];if(sumVolume)quotes[i]["Result "+sd[W0d]]=x8A[O5p](sumMoneyFlow,sumVolume);}
}
}
;STX[O5l][h34]=function(stx,sd){var f6m="c1n",S2Z="k1n",o2p="Y1n",n1Z="Z1",J8D="j1n",r24="S8n",x1p="F8n",t4d="W8n",j4G="C8n",quotes=sd[i8C][M5Z],sumMoneyFlow=0,sumVolume=0;for(var i=1;x8A[j4G](i,quotes.length);i++){if(!quotes[i])continue;var trh=Math[H0S](quotes[x8A[t4d](i,1)][Y6C],quotes[i]["High"]),trl=Math[(e1Z)](quotes[x8A[x1p](i,1)][Y6C],quotes[i]["Low"]);quotes[i]["MFV "+sd[W0d]]=x8A[r24](quotes[i]["Volume"],(2*quotes[i]["Close"]-trh-trl),(trh-trl==0?999999:trh-trl));if(x8A[J8D](i,sd[u5S]-1)){sumMoneyFlow*=x8A[(n1Z+T4S)]((sd[u5S]-1),sd[u5S]);sumVolume*=x8A[o2p]((sd[(W4Z+V1S)]-1),sd[u5S]);}
sumMoneyFlow+=quotes[i]["MFV "+sd[W0d]];sumVolume+=quotes[i]["Volume"];if(x8A[S2Z](i,sd[u5S]-1)){if(sumVolume)quotes[i]["Result "+sd[W0d]]=x8A[(f6m)](sumMoneyFlow,(sumVolume>0?sumVolume:999999));}
}
}
;STX[O5l][S7G]=function(stx,sd){var C6C="n1n",u0S="s1n",M5C="V1n",h2Z="D1n",n4m="ema2",w6m="gA",B3l="Mov",Y2S="h1n",f6l="1n",quotes=sd[i8C][M5Z];for(var i=0;x8A[(v4S+f6l)](i,quotes.length);i++){if(!quotes[i])continue;quotes[i][(I6Z+g1p+a3p+C9Z+c9D+m44)+sd[W0d]]=x8A[Y2S](quotes[i]["High"],quotes[i]["Low"]);}
sd[u6l]=new STX[O5l][x2p](sd[W0d],"ma",sd[K5D]);sd[u6l][i8C]=sd[i8C];sd[(K1D+D4Z)][u5S]=9;sd[u6l][(R0m+p9S+M8T)]={"Field":"High-Low "+sd[W0d],"Type":"exponential"}
;sd[u6l][R2S]={"EMA":null}
;this[(B6C+D7S+L94+G1Z+m5Z+B3l+J8V+w6m+z24+x8A.c7S+g8S+m5Z+c7Z+O4T+c6S+B4S+T4S+j1D+W8m+v4S)](stx,sd[u6l]);sd[n4m]=new STX[O5l][x2p](sd[W0d],"ma",sd[K5D]);sd[n4m][i8C]=sd[i8C];sd[n4m][u5S]=9;sd[n4m][I74]={"Field":"EMA "+sd[W0d],"Type":"exponential"}
;sd[n4m][R2S]={"EMA2":null}
;this[Q5p](stx,sd[(m5Z+w5S+D4Z+f3p)]);var total=0;for(var j=17;x8A[h2Z](j,quotes.length);j++){total+=x8A[M5C](quotes[j][(c7Z+q0G+m44)+sd[W0d]],quotes[j]["EMA2 "+sd[W0d]]);if(x8A[u0S](j,17+sd[u5S]-1)){quotes[j]["Result "+sd[W0d]]=total;total-=x8A[C6C](quotes[j-sd[u5S]+1]["EMA "+sd[W0d]],quotes[j-sd[u5S]+1]["EMA2 "+sd[W0d]]);}
}
}
;STX[O5l][P8l]=function(stx,sd){var V2G="J3n",k1d="T3",u7T="t3n",Y9m="S1n",g3p="F1n",q24="W1n",l6d="C1n",A8C="x1n",z4Z="K1n",quotes=sd[i8C][M5Z],cumPosMF=0,cumNegMF=0,lastTypPrice=0,directions=[];for(var i=0;x8A[z4Z](i,quotes.length);i++){if(!quotes[i])continue;var typPrice=x8A[A8C]((quotes[i][m1Z]+quotes[i][l8p]+quotes[i][Y6C]),3);if(x8A[l6d](i,0)){var rawMoneyFlow=x8A[q24](typPrice,quotes[i][C1D]);if(x8A[g3p](typPrice,lastTypPrice)){directions[K6T]([1,rawMoneyFlow]);cumPosMF+=rawMoneyFlow;}
else if(x8A[Y9m](typPrice,lastTypPrice)){directions[K6T]([-1,rawMoneyFlow]);cumNegMF+=rawMoneyFlow;}
else{directions[K6T]([0,0]);}
if(x8A[(u7T)](i,sd[u5S])){var old=directions[H7G]();if(x8A[(k1d+T4S)](old[0],1))cumPosMF-=old[1];else if(old[0]==-1)cumNegMF-=old[1];if(x8A[V2G](cumNegMF,0))quotes[i]["Result "+sd[W0d]]=100;else quotes[i]["Result "+sd[(w5G+m5Z)]]=x8A[(f4T+P9S)](100,100/(1+(cumPosMF/cumNegMF)));}
}
lastTypPrice=typPrice;}
}
;STX[O5l][m24]=function(stx,sd){var T1Z="i3n",X5p="O3n",Q84="R3n",U6T="P3n",name=sd[W0d];for(var p in sd[R2S]){name=p+" "+name;}
var quotes=sd[i8C][M5Z],sumMomentum=0,absSumMomentum=0,history=[];for(var i=1;x8A[U6T](i,quotes.length);i++){if(!quotes[i]||!quotes[x8A[Q84](i,1)])continue;var diff=x8A[X5p](quotes[i][Y6C],quotes[i-1][(x8A.s0m+G0T+M7S+m5Z)]);history[K6T](diff);sumMomentum+=diff;absSumMomentum+=Math[W2S](diff);if(x8A[(A8m+U3p+T4S)](history.length,sd[u5S])){quotes[i][name]=x8A[T1Z](100,sumMomentum,absSumMomentum);var old=history[H7G]();sumMomentum-=old;absSumMomentum-=Math[W2S](old);}
}
}
;STX[O5l][x5d]=function(stx,sd){var k9D="n3n",K7T="tsf",S3C="s3n",quotes=sd[i8C][M5Z],field=sd[I74]["Field"];if(x8A[S3C](field,"field"))field="Close";sd[(x8A.n9S+M7S+f0T)]=new STX[(x8d+n1l+h7D)][x2p](sd[W0d],"ma",sd[K5D]);sd[K7T][i8C]=sd[i8C];sd[K7T][u5S]=sd[u5S];sd[K7T][I74]={"Field":field,"Type":"time series"}
;sd[K7T][R2S]={"MA":null}
;this[f8Z](stx,sd[K7T]);for(var i=1;x8A[k9D](i,quotes.length);i++){if(!quotes[i])continue;quotes[i]["Result "+sd[W0d]]=x8A[(z9Z+P9S)](100,(1-(quotes[i]["MA "+sd[W0d]]/quotes[i][field])));}
}
;STX[O5l][S6d]=function(stx,sd){var L6S="F3n",z8S="W3n",Q9S="C3n",N5m="x3n",quotes=sd[(x8A.d5Z+g2S+D4Z+J5d)][M5Z],field=sd[I74][(C7Z+q0T+m5Z+v4S+W4Z)];if(x8A[N5m](field,"field"))field="Close";sd[(w5S+D4Z)]=new STX[O5l][x2p](sd[W0d],"ma",sd[K5D]);sd[p54][i8C]=sd[i8C];sd[p54][u5S]=sd[u5S];sd[p54][I74]={"Field":field,"Type":sd[I74]["Moving Average Type"]}
;sd[p54][R2S]={"MA":null}
;this[f8Z](stx,sd[p54]);for(var i=Math[F2S](x8A[Q9S](sd[u5S]/2,1));x8A[z8S](i,quotes.length-Math[F2S](sd[u5S]/2+1));i++){quotes[i]["Result "+sd[W0d]]=x8A[L6S](quotes[i][field],quotes[i+Math[F2S](sd[u5S]/2+1)]["MA "+sd[W0d]]);}
}
;STX[O5l][s0V]=function(stx,sd){var E0l="M9n",K3T="g9n",p0p="e9n",Z9l="f9n",D3T="v9",f8D="X9n",i5C="9n",i3Z="B9n",t5m="O9n",y8G="R9n",x9p="P9n",K2D="w9n",w1d="J9n",D0d="T9n",t5C="t9n",A7G="S3n",quotes=sd[i8C][M5Z],daysSinceHigh=0,daysSinceLow=0,xDayHigh=null,xDayLow=null;for(var i=0;x8A[A7G](i,quotes.length);i++){if(!quotes[i])continue;if(x8A[(t5C)](xDayHigh,null))xDayHigh=quotes[i][m1Z];if(x8A[D0d](xDayLow,null))xDayHigh=quotes[i][l8p];xDayHigh=Math[H0S](xDayHigh,quotes[i][m1Z]);if(x8A[w1d](xDayHigh,quotes[i][m1Z])){daysSinceHigh=0;}
else{daysSinceHigh++;if(x8A[K2D](daysSinceHigh,sd[u5S])){xDayHigh=quotes[i][m1Z];daysSinceHigh=0;for(var j=1;x8A[x9p](j,sd[u5S]);j++){xDayHigh=Math[H0S](xDayHigh,quotes[x8A[y8G](i,j)][m1Z]);if(x8A[(t5m)](xDayHigh,quotes[i-j][(I6Z+g1p)])){daysSinceHigh=j;}
}
}
}
xDayLow=Math[e1Z](xDayLow,quotes[i][l8p]);if(x8A[i3Z](xDayLow,quotes[i][l8p])){daysSinceLow=0;}
else{daysSinceLow++;if(x8A[(q0T+i5C)](daysSinceLow,sd[u5S])){xDayLow=quotes[i][l8p];daysSinceLow=0;for(var j=1;x8A[f8D](j,sd[u5S]);j++){xDayLow=Math[(w5S+q0T+T4S)](xDayLow,quotes[x8A[(D3T+T4S)](i,j)][l8p]);if(x8A[(Z9l)](xDayLow,quotes[i-j][l8p])){daysSinceLow=j;}
}
}
}
quotes[i]["Aroon Up "+sd[W0d]]=x8A[p0p](100,(1-daysSinceHigh/sd[u5S]));quotes[i]["Aroon Down "+sd[W0d]]=x8A[K3T](100,(1-daysSinceLow/sd[u5S]));quotes[i]["Aroon Oscillator "+sd[W0d]]=x8A[E0l](quotes[i][(x8A.X8m+w0V+F4D+m44+c3S+c6S+m44)+sd[W0d]],quotes[i]["Aroon Down "+sd[W0d]]);}
}
;STX[O5l][h1m]=function(stx,sd){var f4p="E7n",W4D="M7n",s6d="g7n",v7l="oleran",K1p="p7n",j3d="N7n",S6T="G7n",I6m="o7n",g64="Q7n",K44="z7n",S0D="u7n",N2T="q7n",s2d="d7n",primes=[];function isPrime(x){var P0V="m7n",g2D="7n",P1C="A7n",w6D="oor",i8S="U9n",C5G="E9n";if(x8A[C5G](x,0))return false;else if(x8A[i8S](x,Math[(f0T+v4S+w6D)](x)))return false;else if(x8A[P1C](primes[x],null))return primes[x];var q=parseInt(Math[Z1D](x),10);for(var i=2;x8A[(D4Z+g2D)](i,q);i++){if(x8A[P0V](x%i,0)){primes[x]=false;return false;}
}
primes[x]=true;return true;}
var quotes=sd[i8C][M5Z];for(var i=0;x8A[s2d](i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;var high=quote[m1Z];for(var h=0;x8A[N2T](high,0)&&x8A[(S0D)](high,10);h++)high*=10;if(isPrime(high))high+=2;high=Math[B1T](high);if(x8A[K44](high%2,0))high++;while(!isPrime(high))high+=2;high/=Math[z04](10,h);var low=quote[l8p];for(var l=0;x8A[g64](low,0)&&x8A[I6m](low,10);l++)low*=10;if(isPrime(low))low-=2;low=Math[(f0T+G0T+A3D)](low);if(x8A[S6T](low%2,0))low--;if(x8A[(x8A.c7S+k1m+T4S)](low,0)){while(!isPrime(low))low-=2;low/=Math[(C8l+f4T)](10,l);}
if(x8A[j3d](sd[(f2C+m5Z)],"Prime Number Bands")){quote["Prime Bands Top "+sd[W0d]]=high;quote["Prime Bands Bottom "+sd[W0d]]=Math[H0S](0,low);}
else{var value=0,tolerance=x8A[K1p](sd[I74][(s8Z+v7l+T7C+m44+c3Z+t9D+T7C+b6p+g8S+m5Z)],(high-low),100),skew=high+low-x8A[s6d](2,quote[Y6C]);if(x8A[W4D](skew,tolerance))value=1;else if(x8A[f4p](skew,tolerance))value=-1;if(value)quote["Result "+sd[W0d]]=value;}
}
}
;STX[O5l][Y8m]=function(stx,sd){var N4C="m6n",n1G="a6n",H7d="A6n",n9l="U7n",D0p="dyDes",I54="mhml",quotes=sd[i8C][M5Z];sd[I54]=new STX[O5l][(d8Z+K1T+D0p+x8A.d5Z+x8A.c7S+q0T+F7G+A3D)](sd[(W3m+w5S+m5Z)],sd[V1C],sd[K5D]);sd[I54][i8C]=sd[i8C];sd[I54][u5S]=sd[u5S];sd[I54][I74]={}
;sd[I54][R2S]={"MHML":null}
;STX[O5l][z2l](stx,sd[I54]);var sumChanges=0,changes=[];for(var i=1;x8A[n9l](i,quotes.length);i++){if(!quotes[i])continue;var change=Math[W2S](x8A[H7d](quotes[i][Y6C],quotes[i-1][Y6C]));changes[K6T](change);sumChanges+=change;if(x8A[n1G](i,sd[u5S])){quotes[i]["Result "+sd[W0d]]=x8A[N4C](quotes[i]["MHML "+sd[W0d]],sumChanges);sumChanges-=changes[H7G]();}
}
}
;STX[(n0D+p9S+W4Z+k9T)][I0S]=function(stx,sd,isVolume){var q2C="G6n",F7p="o6n",p7Z="Q6",p8l="z6n",N7C="ma2",F7C="ma1",r3d="u6n",e2S="q6n",L2Z="d6n",u8V="scrubb",quotes=sd[i8C][(u8V+m5Z+W4Z)],field=sd[I74]["Field"],maType=sd[I74]["Moving Average Type"];if(x8A[L2Z](maType,null))maType="simple";if(x8A[e2S](field,null)){if(isVolume){field="Volume";maType="exponential";}
else field="Close";}
var pts=sd[I74]["Points Or Percent"];if(x8A[r3d](pts,null))pts=(c3Z+T2C+M8T);sd[F7C]=new STX[O5l][x2p](sd[W0d],"ma",sd[K5D]);sd[F7C][i8C]=sd[i8C];sd[(w5S+u2T)][(Y7l+s8V)]=Number(sd[(I74)]["Short Cycle"]);sd[F7C][(R0m+Z7d)]={"Field":field,"Type":maType}
;sd[F7C][R2S]={"Short MA":null}
;this[f8Z](stx,sd[F7C]);sd[N7C]=new STX[O5l][x2p](sd[W0d],"ma",sd[K5D]);sd[N7C][i8C]=sd[i8C];sd[N7C][u5S]=Number(sd[I74]["Long Cycle"]);sd[(N7C)][I74]={"Field":field,"Type":maType}
;sd[N7C][R2S]={"Long MA":null}
;this[f8Z](stx,sd[N7C]);for(var i=0;x8A[p8l](i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(x8A[(p7Z+T4S)](pts,"Points"))quote["Result "+sd[(W0d)]]=x8A[F7p](quote["Short MA "+sd[W0d]],quote["Long MA "+sd[W0d]]);else quote["Result "+sd[W0d]]=x8A[q2C](100,((quote["Short MA "+sd[W0d]]/quote["Long MA "+sd[W0d]])-1));}
}
;STX[O5l][e2C]=function(stx,sd){var j64="ATR",d44="lat",c2Z="lcu",I0D="tputs";sd[p54]=new STX[O5l][x2p](sd[W0d],p54,sd[K5D]);sd[p54][i8C]=sd[i8C];sd[p54][u5S]=sd[u5S];sd[p54][(q0T+I5l+x8A.n9S+M7S)]={"Field":Y6C,"Type":sd[(J8V+D6G+M7S)][(F8Z+B4S+r9p+m7p+m44+x8A.X8m+U4T+m5Z+h9d+Z8T+m5Z+m44+s8Z+b9Z)]}
;sd[p54][(B4S+p9S+I0D)]={"MA":l1d}
;this[f8Z](stx,sd[p54]);this[(x8A.d5Z+D4Z+c2Z+d44+m5Z+x8d+W4Z+H6T+j64)](stx,sd);STX[O5l][A5d](stx,sd,sd[I74][s3S],(F8Z+x8A.X8m+m44)+sd[(W3m+i04)],y9S+sd[(w5G+m5Z)]);}
;STX[O5l][a2m]=function(stx,sd){var G0Z="ght",h6T="rag",r8S="teMo",g5d="wma",F7m="b6n",M2D="I6n",a7p="L6n",U5T="p6n",D34="6n",r8D="r6n",quotes=sd[i8C][M5Z],field=sd[I74]["Field"];if(x8A[r8D](field,null))field="Close";var longDays=sd[(q0T+T4S+z4G+x8A.n9S+M7S)]["Long RoC"];if(!longDays)longDays=14;var shortDays=sd[I74]["Short RoC"];if(!shortDays)shortDays=11;var period=sd[u5S];if(!period)period=10;if(x8A[(i1Z+D34)](longDays,shortDays))return ;for(var i=longDays;x8A[U5T](i,quotes.length);i++){if(!quotes[i])continue;if(!quotes[x8A[a7p](i,shortDays)])continue;if(!quotes[x8A[M2D](i,longDays)])continue;quotes[i]["Sum "+sd[W0d]]=x8A[F7m](100,((quotes[i][field]/quotes[i-shortDays][field])+(quotes[i][field]/quotes[i-longDays][field])-2));}
sd[g5d]=new STX[O5l][x2p](sd[W0d],"ma",sd[K5D]);sd[g5d][i8C]=sd[i8C];sd[g5d][u5S]=period;sd[g5d][I74]={"Field":"Sum "+sd[W0d]}
;sd[g5d][(l7D+x8A.n9S+c6S+p9S+x8A.n9S+M7S)]=sd[R2S];this[(B6C+D7S+L94+D4Z+r8S+U4T+q0T+m7p+x8A.X8m+z24+h6T+g1G+j5D+G0Z+m5Z+W4Z)](stx,sd[g5d]);}
;STX[O5l][(x8A.d5Z+E3S+T0V+m5Z+E2G+q1m+D4Z+f0C+Z8T+x8A.c7S+m5Z+M7S+M7S+q0T+F4D+I1D+D4S+x8A.c7S)]=function(stx,sd){var H3d="e4n",G0C="RS",z8l="f4n",W5Z="X4n",i4p="i4n",X44="B4n",K9Z="O4n",z7p="R4n",b0S="P4n",M2T="w4n",d24="J4n",h8d="a4n",W8C="H6n",f5l="y6n",quotes=sd[i8C][M5Z],field=sd[I74]["Field"];if(x8A[f5l](field,null))field="Close";var sumWeights=x8A[W8C](sd[u5S],(sd[u5S]+1),2),squaredSumWeights=Math[z04](sumWeights,2),sumWeightsSquared=x8A[h8d](sumWeights,(2*sd[u5S]+1),3),sumCloses=0,sumWeightedCloses=0,sumClosesSquared=0;for(var i=0;x8A[d24](i,quotes.length);i++){if(!quotes[i])continue;sumWeightedCloses+=x8A[M2T](sd[u5S]*quotes[i][field],sumCloses);sumCloses+=quotes[i][field];sumClosesSquared+=Math[z04](quotes[i][field],2);if(x8A[b0S](i,sd[u5S]-1))continue;else if(x8A[z7p](i,sd[u5S]-1)){sumCloses-=quotes[x8A[K9Z](i,sd[u5S])][field];sumClosesSquared-=Math[z04](quotes[x8A[X44](i,sd[u5S])][field],2);}
var b=x8A[i4p]((sd[u5S]*sumWeightedCloses-sumWeights*sumCloses),(sd[u5S]*sumWeightsSquared-squaredSumWeights));quotes[i]["Slope "+sd[W0d]]=b;var a=x8A[W5Z]((sumCloses-b*sumWeights),sd[u5S]);quotes[i]["Intercept "+sd[W0d]]=a;quotes[i]["Forecast "+sd[(T4S+N0Z+m5Z)]]=a+x8A[(V8T+T4S)](b,sd[u5S]);var c=x8A[(z8l)]((sd[(W4Z+V1S)]*sumWeightsSquared-squaredSumWeights),(sd[u5S]*sumClosesSquared-Math[z04](sumCloses,2)));quotes[i][(G0C+i9C+x8Z+m5Z+W4Z+m44)+sd[W0d]]=x8A[H3d](b,b,c);}
}
;STX[(d8Z+x8A.n9S+F94+M7S)][K4C]=function(stx,sd){var v4m="STD Dev ",q3S="lope",U5d="cE",K7Z="eneri",R0Z="C4n",x2d="STD Dev";sd[p54]=new STX[O5l][x2p](sd[W0d],p54,sd[K5D]);sd[p54][i8C]=sd[i8C];sd[p54][u5S]=sd[u5S];sd[p54][(R0m+H44+M7S)]={"Field":Y6C,"Type":sd[I74][U2D]}
;sd[p54][R2S]={"MA":l1d}
;this[f8Z](stx,sd[p54]);sd[J4d]=new STX[O5l][x2p](sd[W0d],x2d,sd[K5D]);sd[J4d][(x8A.d5Z+g2S+D4Z+x8A.c7S+x8A.n9S)]=sd[i8C];sd[(I4Z+W4Z)][u5S]=sd[u5S];var field=sd[I74][P7G];if(x8A[R0Z](field,w3G))field=Y6C;sd[J4d][I74]={"Field":field,"Standard Deviations":sd[I74][k0C],"Type":sd[I74][U2D]}
;sd[J4d][R2S]={"STD Dev":l1d}
;this[h6S](stx,sd[J4d]);STX[O5l][(j5l+E4l+v4S+D4Z+A7S+R6Z+K7Z+U5d+T4S+U4T+m5Z+q3S)](stx,sd,x8A.v0Z,i2Z+sd[(T4S+f64)],v4m+sd[W0d]);}
;STX[(d8Z+n4T+m5Z+M7S)][q2Z]=function(stx,sd){var f4S="Shift Percentage",h2C="F4n",W3G="erage",S6G="eM",f7T="W4n",field=sd[I74][P7G];if(x8A[f7T](field,(f0T+X7l+v4S+W4Z)))field=(x8A.s0m+a7G);sd[p54]=new STX[O5l][x2p](sd[W0d],p54,sd[K5D]);sd[p54][i8C]=sd[i8C];sd[p54][(r2m+M7S)]=sd[u5S];sd[p54][I74]={"Field":field,"Type":sd[I74][U2D]}
;sd[p54][R2S]={"MA":l1d}
;this[(x8A.d5Z+D4Z+v4S+x8A.d5Z+p9S+v4S+G1Z+S6G+B4S+r9p+m7p+x8A.X8m+U4T+W3G)](stx,sd[p54]);var shift=x8A[h2C](sd[I74][f4S],d8l);STX[O5l][A5d](stx,sd,shift,i2Z+sd[(W0d)]);}
;STX[O5l][A5d]=function(stx,sd,shift,centerIndex,offsetIndex){var w2C="k5n",G1m="J5n",r8m="T5n",U5p="t5n",n5l="S4n";if(!shift)shift=0;if(!offsetIndex)offsetIndex="Close";if(!centerIndex)centerIndex="Close";var quotes=sd[(G7C+x8Z+x8A.n9S)][M5Z];for(var i=0;x8A[n5l](i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(!quote[centerIndex])continue;var mult=x8A[U5p](shift,quote[offsetIndex]);quote[sd[V1C]+(m44+s8Z+B4S+c6S+m44)+sd[(W3m+i04)]]=quote[centerIndex]+mult;quote[sd[V1C]+(m44+A8m+B4S+x8A.n9S+a0T+w5S+m44)+sd[W0d]]=x8A[r8m](quote[centerIndex],mult);quote[sd[V1C]+" Median "+sd[W0d]]=quote[centerIndex];quote["Bandwidth "+sd[W0d]]=x8A[G1m](200,mult,quote[centerIndex]);quote["%b "+sd[W0d]]=x8A[w2C](50,((quote[Y6C]-quote[centerIndex])/mult+1));}
}
;STX[O5l][z2l]=function(stx,sd){var y0d="v2n",R6C="nchian",t4C="X2n",J4S="i2n",g4D="B2n",P34="O2n",x2D="R2n",W54="P2n",B3m="w2n",i3D="J2n",y0S="t2n",T9d="S5n",l7l="F5n",y6S="W5n",H8p="C5n",o8T="x5n",y6p="K5n",N0p="n5n",q7D="s5n",x1l="V5n",I3D="D5n",M3G="h5n",d1C="l5n",A4p="nputs",a1p="5n",quotes=sd[i8C][M5Z],low=-1,high=-1;for(var i=0;x8A[(x8A.d5Z+a1p)](i,quotes.length);i++){var period=sd[u5S];high=Math[H0S](high==-1?quotes[i]["High"]:high,quotes[i]["High"]);low=Math[e1Z](low==-1?quotes[i]["Low"]:low,quotes[i][(C9Z+B4S+f4T)]);if(sd[(q0T+A4p)]["High Period"])period=sd[I74]["High Period"];if(x8A[d1C](i,period)){if(x8A[M3G]((quotes[i-period]["High"]),high)){high=quotes[i]["High"];for(var j=1;x8A[I3D](j,period);j++){high=Math[(p54+O4T)](high,quotes[x8A[x1l](i,j)]["High"]);}
}
}
if(sd[I74]["Low Period"])period=sd[I74]["Low Period"];if(x8A[q7D](i,period)){if(x8A[N0p]((quotes[i-period][(C9Z+c9D)]),low)){low=quotes[i]["Low"];for(var j=1;x8A[y6p](j,period);j++){low=Math[e1Z](low,quotes[x8A[o8T](i,j)]["Low"]);}
}
}
var result=0;if(x8A[H8p](sd[V1C],"HHV")){result=high;}
else if(x8A[y6S](sd[V1C],"LLV")){result=low;}
else if(x8A[l7l](sd[V1C],"Donchian Width")){result=x8A[T9d](high,low);}
else if(x8A[y0S](sd[(f2C+m5Z)],"GAPO")||x8A[(C8d+T4S)](sd[V1C],"Gopala")){result=x8A[i3D](Math[C1C](high-low),Math[C1C](period));}
else if(x8A[(B3m)](sd[V1C],"VT HZ Filter")){result=x8A[W54](high,low);quotes[i]["MHML "+sd[W0d]]=result;continue;}
else if(x8A[x2D](sd[V1C],"Williams %R")){result=-100*(x8A[P34](high,quotes[i][Y6C]))/(x8A[g4D](high,low));quotes[i]["Result "+sd[W0d]]=result;continue;}
if(x8A[J4S](i,quotes.length-1))break;if(x8A[t4C](sd[V1C],(i7Z+B4S+m3m+Q8G+D4Z+T4S+m44+x8A.s0m+t0V+q1m+v4S))){quotes[i+1][(i7Z+B4S+R6C+m44+I6Z+q0T+Z8T+g2S+m44)+sd[W0d]]=high;quotes[i+1]["Donchian Low "+sd[W0d]]=low;quotes[i+1]["Donchian Median "+sd[W0d]]=x8A[y0d]((high+low),2);}
else{quotes[i+1]["Result "+sd[W0d]]=result;}
}
}
;STX[O5l][(x8A.d5Z+E3S+N6D+Y1D+E4l+w5S+p9S+j4T+x8A.n9S+q0T+B4S+T4S+i7Z+q0T+h5C+q0T+Y4Z+p9S+x8A.n9S+q0T+F4D)]=function(stx,sd){var d3p="U2n",o6Z="M2n",o8m="g2n",T7G="e2n",I5C="f2n",quotes=sd[i8C][M5Z],total=0;for(var i=1;x8A[I5C](i,quotes.length);i++){var quote=quotes[i],yClose=quotes[x8A[T7G](i,1)][(Y6C)];if(!quote)continue;var todayAD=0;if(x8A[o8m](quote[Y6C],yClose)){todayAD=x8A[o6Z](quote[Y6C],Math[e1Z](quote[(G5G+f4T)],yClose));}
else if(x8A[(c7Z+f3p+T4S)](quote[(x0T+r1Z)],yClose)){todayAD=x8A[d3p](quote[Y6C],Math[H0S](quote[m1Z],yClose));}
total+=todayAD;quote["Result "+sd[(T4S+f64)]]=total;}
}
;STX[O5l][m3G]=function(stx,sd){var Y14="q0x",U1C="d0x",q5l="m0x",L6D="a0x",D5C="A0x",G9l="alPr",B3S="teT",quotes=sd[i8C][M5Z];sd[Y8T]=new STX[O5l][x2p](sd[W0d],"typical price",sd[K5D]);sd[Y8T][i8C]=sd[i8C];sd[Y8T][u5S]=sd[u5S];sd[Y8T][R2S]={"Typ Price":null}
;this[(x8A.d5Z+E3S+E4l+v4S+D4Z+B3S+H6T+c6S+q0T+x8A.d5Z+G9l+q0T+T7C)](stx,sd[Y8T]);sd[p54]=new STX[(x8d+A64)][x2p](sd[W0d],"ma",sd[K5D]);sd[p54][i8C]=sd[i8C];sd[p54][u5S]=sd[u5S];sd[p54][I74]={"Field":"typicalPrice","Type":"simple"}
;sd[p54][R2S]={"MA":null}
;this[f8Z](stx,sd[p54]);for(var i=x8A[D5C](sd[u5S],1);x8A[L6D](i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;var md=0;for(var j=0;x8A[q5l](j,sd[u5S]);j++){md+=Math[W2S](x8A[U1C](quotes[i-j]["typicalPrice"],quote["MA "+sd[W0d]]));}
md/=sd[u5S];quote["Result "+sd[W0d]]=x8A[Y14]((quote["typicalPrice"]-quote["MA "+sd[(W0d)]]),(0.015*md));}
}
;STX[O5l][s1m]=function(stx,sd){var o44="V8x",F9S="D8x",n8m="h8x",K04="l8x",O2T="c8x",j8p="k8x",P8Z="Y8x",I8G="Z8x",u0m="j8x",v6G="H0x",w4Z="y0x",j7D="b0x",w7S="I0",D2p="L0x",j4Z="p0x",N6T="N0x",j84="G0x",P2D="Q0x",T9m="z0x",quotes=sd[i8C][M5Z],fractalHigh=0,fractalLow=0,test=0;for(var i=4;x8A[(p9S+s9p+O4T)](i,quotes.length);i++){if(!quotes[i])continue;var j;test=0;for(j=0;x8A[T9m](j,i);j++){if(!quotes[x8A[P2D](i,j)])break;if(x8A[(B4S+s9p+O4T)](quotes[i-j][m1Z],quotes[i-2][m1Z]))break;if(x8A[j84](j,2)&&x8A[(x8A.c7S+s9p+O4T)](quotes[i-j][m1Z],quotes[i-2][m1Z]))break;if(x8A[N6T](quotes[i-j][m1Z],quotes[i-2][(I6Z+g1p)]))test++;if(x8A[j4Z](test,4)){fractalHigh=quotes[x8A[D2p](i,2)][m1Z];break;}
}
if(x8A[(w7S+O4T)](sd[V1C],"Fractal Chaos Bands")){quotes[i]["Fractal High "+sd[W0d]]=x8A[j7D](fractalHigh,0)?fractalHigh:null;}
else if(x8A[w4Z](test,4)){quotes[i]["Result "+sd[W0d]]=1;}
test=0;for(j=0;x8A[v6G](j,i);j++){if(!quotes[x8A[u0m](i,j)])break;if(x8A[I8G](quotes[i-j][(C9Z+c9D)],quotes[i-2][l8p]))break;if(x8A[P8Z](j,2)&&x8A[j8p](quotes[i-j][l8p],quotes[i-2][l8p]))break;if(x8A[O2T](quotes[i-j][l8p],quotes[i-2][l8p]))test++;if(x8A[K04](test,4)){fractalLow=quotes[x8A[n8m](i,2)][l8p];break;}
}
if(x8A[F9S](sd[V1C],"Fractal Chaos Bands")){quotes[i]["Fractal Low "+sd[W0d]]=x8A[o44](fractalLow,0)?fractalLow:null;}
else if(x8A[(M7S+E9m+O4T)](test,4)){quotes[i]["Result "+sd[W0d]]=-1;}
}
}
;STX[O5l][h7T]=function(stx,sd){var P6C="T1x",D1Z="t1x",r6p="F8x",i2l="W8x",d8D="computeEquationChart",u1m="Quotes",i7d="startAsyncAction",l0D="C8x",b74="x8x",t9T="inProgress",w04="bbed",g4m="K8x",W6T="n8x",V0G=5013492,y2d=6143431,W6D=391065297,g3T=917572015;stx[j8m][sd[K5D]][r7S]={}
;var n2h=g3T,N2h=W6D,v2h=x8A.X0Z;for(var r2h=x8A.v0Z;x8A.L5h.g5h(r2h.toString(),r2h.toString().length,y2d)!==n2h;r2h++){v2h+=x8A.X0Z;}
if(x8A.L5h.g5h(v2h.toString(),v2h.toString().length,V0G)!==N2h){return ;}
if(stx[(x8A.d5Z+s0d)][(M7S+z7G+B4S+v4S)][J7G](":")>-1){stx[j8m][sd[K5D]][r7S]=null;return ;}
var cSym=sd[I74]["Comparison Symbol"][Z7p](":")[0];if(x8A[W6T](cSym,"")||x8A[g4m](cSym,stx[(x8A.d5Z+x8A.w9G+x8A.c7S+x8A.n9S)][B3p])){stx[j8m][sd[K5D]][r7S]=null;return ;}
stx[j8m][sd[K5D]][r7S][cSym]=true;var params={stx:stx,symbol:cSym,interval:stx[T2T][p0l],extended:stx[T2T][B94],startDate:STX[B9l](stx[L4C][0][o0D]),feed:"delayed",nocache:true}
,quotes=sd[i8C][(M7S+x8A.d5Z+o2d+w04)];if(!sd[t9T]){for(var c=x8A[b74](quotes.length,1);x8A[l0D](c,0);c--){if(quotes[c]&&typeof quotes[c][cSym]!="undefined"){params[k24]=null;break;}
}
if(params[k24]){stx[i7d]();STX[u1m][x3C](params,function(error,data){var w2D="completeAsyncAction",Y3l="processComparison";if(error){sd[t9T]=true;}
else{STX[y1p][Y3l](stx,params[B3p],data);sd[t9T]=true;stx[v9m]();stx[s2Z]();}
stx[w2D]();}
);}
}
sd[t9T]=false;quotes=stx[i8C][O9p];var map={}
;map[stx[i8C][B3p]]=[][N8G](quotes);map[cSym]=null;var results=STX[d8D](stx[(x8A.d5Z+g2S+x8Z+x8A.n9S)][B3p]+"/"+cSym,map),rIter=0;for(var i=0;x8A[i2l](i,quotes.length)&&x8A[r6p](rIter,results.length);i++){while(x8A[(d8Z+E9m+O4T)](rIter,results.length)&&x8A[D1Z](quotes[i][(s9l)][o5l](),results[rIter][s9l][o5l]()))rIter++;if(x8A[P6C](quotes[i][s9l][(Z8T+A7D+d7S+m5Z)](),results[rIter][s9l][o5l]()))continue;quotes[i]["Result "+sd[W0d]]=results[rIter][Y6C];rIter++;}
}
;STX[O5l][C4S]=function(stx,sd,quotes){var P54="w1x",L4m="J1x";if(!stx[j8m][sd[K5D]][r7S]){stx[F4S](sd[K5D],"center","bottom",stx[q04]("Price Relative Not Available"));return ;}
for(var c=x8A[L4m](quotes.length,1);x8A[P54](c,0);c--){if(quotes[c]&&quotes[c][sd[I74]["Comparison Symbol"]]){STX[O5l][L7G](stx,sd,quotes);return ;}
}
}
;STX[(x8d+n1l+h7D)][l0d]=function(stx,sd,quotes){var E2Z="su",z8V="Re";STX[(d8Z+x8A.n9S+p9S+n1l+h7D)][L7G](stx,sd,quotes);var low=-3,high=3,panel=stx[j8m][sd[K5D]],color=stx[i8C][b6D].strokeStyle;stx[i8C][b6D].globalAlpha=.2;stx[i8C][b6D].strokeStyle=sd[R2S]["Result"];stx[i8C][b6D].beginPath();var ph=stx[b5p](high,panel);stx[i8C][b6D].moveTo(0,ph);stx[(x8A.d5Z+g2S+D4Z+x8A.c7S+x8A.n9S)][b6D].lineTo(stx[i8C].width,ph);pl=stx[b5p](low,panel);stx[i8C][b6D].moveTo(0,pl);stx[i8C][b6D].lineTo(stx[i8C].width,pl);stx[i8C][b6D].stroke();stx[i8C][b6D].closePath();STX[(n0D+p9S+W4Z+X7l+M7S)][L7l](stx,quotes,{panelName:sd[K5D],band:"Result "+sd[W0d],threshold:high,direction:1,color:sd[R2S]["Result"]}
);STX[O5l][L7l](stx,quotes,{panelName:sd[K5D],band:(z8V+E2Z+U64+m44)+sd[W0d],threshold:low,direction:-1,color:sd[R2S]["Result"]}
);stx[i8C][b6D].strokeStyle=color;stx[i8C][b6D].globalAlpha=1;}
;STX[O5l][S3Z]=function(stx,sd,quotes){var k1S="g1x",S0C="1x",M2l="f1x",t5l="v1x",Y7G="X1x",l6T="i1x",P3d="B1x",g6G="O1x",S4G="R1x",N5p="P1x";STX[O5l][l7T](stx,sd,quotes);var panel=stx[j8m][sd[W0d]];panel[n1p][h6l]=panel[e1Z]=Math[e1Z](0,panel[e1Z]);panel[n1p][B7l]=panel[H0S]=Math[H0S](0,panel[H0S]);STX[O5l][L7G](stx,sd,quotes);var y=stx[b5p](0,panel),negativeOffset=x8A[N5p]((stx[E4D]-stx[T2T][r1d]),2),myWidth=x8A[S4G](stx[T2T][r1d],2);if(x8A[g6G](myWidth,2))myWidth=1;var upColor=sd[R2S]["Increasing Bar"],downColor=sd[R2S]["Decreasing Bar"];stx[M7Z]("stx_histogram");stx[i8C][b6D].globalAlpha=1;stx[i8C][b6D].fillStyle="#CCCCCC";for(var i=0;x8A[P3d](i,quotes.length);i++){var quote=quotes[i];if(x8A[l6T](quote,null)||x8A[Y7G](quotes[i-1],null))continue;if(x8A[t5l](i,0));else if(x8A[M2l](quotes[i-1][sd[W0d]+"_hist"],quote[sd[(w5G+m5Z)]+"_hist"]))stx[i8C][b6D].fillStyle=upColor;else if(x8A[(m5Z+S0C)](quotes[i-1][sd[W0d]+(k0p+q0T+I4Z)],quote[sd[W0d]+"_hist"]))stx[i8C][b6D].fillStyle=downColor;stx[i8C][b6D].fillRect(Math[(j14+x8A.c7S)](stx[P3S](i,1)+negativeOffset),Math[F2S](y),Math[F2S](myWidth),Math[F2S](x8A[k1S](stx[b5p](quote[sd[W0d]+"_hist"],panel),y)));}
}
;STX[O5l][d9T]=function(stx,sd,quotes){var O9D="G3x",e1C="mputeP",o3S="o3x",P8V="Q3x",D44="_hi",H5l="z3x",b7S="u3x",p9d="CC",m1C="q3x",R3T="studyOverBoughtValue",E6m="mete",M7C="ara",E8p="d3x",Q9m="m3x",M0V="a3x",p74="A3x",J8m="U1x",M1d="tmpW",e1l="E1x",z9m="M1x";for(var i=0;x8A[z9m](i,quotes.length);i++){quotes[i][sd[(w5G+m5Z)]+"_hist"]=quotes[i]["Result "+sd[W0d]];}
STX[O5l][l7T](stx,sd,quotes);var panel=stx[j8m][sd[W0d]];panel[n1p][h6l]=panel[e1Z]=Math[e1Z](0,panel[e1Z]);panel[n1p][B7l]=panel[H0S]=Math[H0S](0,panel[(w5S+D4Z+O4T)]);STX[O5l][L7G](stx,sd,quotes);var y=stx[b5p](0,panel),negativeOffset=x8A[e1l]((stx[(M1d+t6l+x8A.n9S+g2S)]-stx[T2T][r1d]),2),myWidth=x8A[J8m](stx[T2T][r1d],2);if(x8A[p74](myWidth,2))myWidth=1;var upColor=sd[R2S]["Increasing Bar"],downColor=sd[(l7D+Y8T+p9S+x8A.n9S+M7S)]["Decreasing Bar"];stx[M7Z]("stx_histogram");stx[i8C][b6D].globalAlpha=1;for(var i=0;x8A[M0V](i,quotes.length);i++){var quote=quotes[i];if(x8A[Q9m](quote,null)||x8A[E8p](quotes[i-1],null))continue;var overBought=0,overSold=0;if(sd[(c6S+M7C+E6m+x8A.c7S+M7S)]&&sd[Q9p][V4S]){overBought=parseFloat(sd[Q9p][R3T]),overSold=parseFloat(sd[Q9p][P9m]);}
if(x8A[m1C](i,0))stx[(x8A.d5Z+g2S+D4Z+x8A.c7S+x8A.n9S)][b6D].fillStyle=(t6p+x8A.s0m+x8A.s0m+p9d+x8A.s0m+x8A.s0m);else if(x8A[b7S](quote[sd[W0d]+(k0p+q0T+M7S+x8A.n9S)],overBought)&&x8A[H5l](quotes[i-1][sd[W0d]+"_hist"],quote[sd[W0d]+(D44+M7S+x8A.n9S)]))stx[i8C][b6D].fillStyle=upColor;else if(x8A[P8V](quote[sd[W0d]+"_hist"],overSold)&&x8A[o3S](quotes[i-1][sd[W0d]+"_hist"],quote[sd[W0d]+"_hist"]))stx[i8C][b6D].fillStyle=downColor;else stx[i8C][b6D].fillStyle="#CCCCCC";stx[i8C][b6D].fillRect(Math[F2S](stx[(x8A.d5Z+B4S+e1C+B4S+M7S+q0T+x8A.n9S+H2Z)](i,1)+negativeOffset),Math[F2S](y),Math[F2S](myWidth),Math[F2S](x8A[O9D](stx[b5p](quote[sd[W0d]+"_hist"],panel),y)));}
}
;STX[O5l][T1m]=function(stx,sd,quotes){var D6p="Y9x",K4m="Z9x",x6D="j9x",u4T="st1",b0m="H3x",p5p="y3x",S3d="sto",d1d="p3x",e6m="N3x",E0Z="r3x";STX[O5l][l7T](stx,sd,quotes);var panel=stx[j8m][sd[W0d]];panel[n1p][h6l]=panel[(e5T+T4S)]=Math[e1Z](0,panel[e1Z]);panel[n1p][B7l]=panel[H0S]=Math[H0S](0,panel[(p54+O4T)]);STX[O5l][L7G](stx,sd,quotes);var y=stx[b5p](0,panel),negativeOffset=x8A[E0Z]((stx[E4D]-stx[T2T][r1d]),2),myWidth=x8A[e6m](stx[T2T][r1d],2);if(x8A[d1d](myWidth,2))myWidth=1;function drawBar(i,reduction,output,hist){var h7S="b3x",T5p="I3x",W9l="L3x";stx[i8C][b6D].fillStyle=sd[R2S][output];stx[i8C][b6D].fillRect(Math[F2S](stx[P3S](i,1)+negativeOffset)+x8A[W9l](myWidth,reduction),Math[F2S](y),x8A[T5p](Math[F2S](myWidth),(1-2*reduction)),Math[F2S](x8A[h7S](stx[b5p](quote[sd[W0d]+hist],panel),y)));}
stx[M7Z]((M7S+x8A.n9S+O4T+k0p+q0T+S3d+Z0m+w5S));var fillStyle=stx[i8C][b6D].fillStyle;stx[i8C][b6D].globalAlpha=1;for(var i=0;x8A[p5p](i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(x8A[b0m](quote[sd[W0d]+(B0S+Q8G+u4T)],0))drawBar(i,0,"Elder Bull Power","_hist1");if(x8A[x6D](quote[sd[W0d]+"_hist2"],0))drawBar(i,0,"Elder Bear Power","_hist2");if(x8A[K4m](quote[sd[W0d]+"_hist1"],0))drawBar(i,.1,"Elder Bull Power","_hist1");if(x8A[D6p](quote[sd[W0d]+(k0p+N0d+f3p)],0))drawBar(i,.1,(c7Z+v4S+N4Z+m44+A8m+P1G+x8A.c7S+m44+c3Z+B4S+M1m+x8A.c7S),"_hist2");}
stx[i8C][b6D].fillStyle=fillStyle;}
;STX[(x8d+W4Z+X7l+M7S)][Q4p]=function(stx,sd,quotes){var B8T="Support 3",g0T="Support 2",E64="Support 1 ",k8T="Support 1",Y8D="Resistance 1",f0D="Resistance 2",P0D="Resistance 3",F1S="Shading";STX[O5l][L7G](stx,sd,quotes);if(sd[I74][F1S]){STX[O5l][Y9S](stx,quotes,{panelName:sd[K5D],topBand:q3D+sd[W0d],bottomBand:k8D+sd[W0d],color:sd[R2S][P0D]}
);STX[O5l][Y9S](stx,quotes,{panelName:sd[K5D],topBand:k8D+sd[W0d],bottomBand:v8d+sd[W0d],color:sd[R2S][f0D]}
);STX[O5l][Y9S](stx,quotes,{panelName:sd[K5D],topBand:v8d+sd[(T4S+f64)],bottomBand:(Z6T+U4T+w1D+m44)+sd[W0d],color:sd[R2S][Y8D]}
);STX[O5l][Y9S](stx,quotes,{panelName:sd[K5D],topBand:(d8Z+C7p+x8A.c7S+x8A.n9S+m44+H9p+m44)+sd[(w5G+m5Z)],bottomBand:u5D+sd[W0d],color:sd[R2S][k8T]}
);STX[O5l][Y9S](stx,quotes,{panelName:sd[K5D],topBand:O3T+sd[W0d],bottomBand:E64+sd[W0d],color:sd[R2S][g0T]}
);STX[O5l][Y9S](stx,quotes,{panelName:sd[(c6S+G1G+v4S)],topBand:j2Z+sd[W0d],bottomBand:O3T+sd[W0d],color:sd[R2S][B8T]}
);}
}
;STX[O5l][(n6m+t2D+F8Z+U1Z+X7T+N0l+O4T)]=function(stx,sd,quotes){var j0V="pix";STX[O5l][L7G](stx,sd,quotes);var bulge=sd[I74]["Bulge Threshold"],panel=stx[j8m][sd[K5D]],color=stx[i8C][b6D].strokeStyle;stx[i8C][b6D].globalAlpha=.2;stx[i8C][b6D].strokeStyle=sd[R2S]["Result"];stx[i8C][b6D].beginPath();var p=stx[(j0V+m5Z+Z1Z+x8A.c7S+G5D+c3Z+E0d+T7C)](bulge,panel);stx[i8C][b6D].moveTo(0,p);stx[i8C][b6D].lineTo(stx[i8C].width,p);stx[i8C][b6D].stroke();stx[i8C][b6D].closePath();STX[O5l][L7l](stx,quotes,{panelName:sd[K5D],band:"Result "+sd[W0d],threshold:bulge,direction:1,color:sd[R2S]["Result"]}
);stx[(G7C+D4Z+x8A.c7S+x8A.n9S)][b6D].strokeStyle=color;stx[i8C][b6D].globalAlpha=1;}
;STX[O5l][h4D]=function(stx,sd,quotes){var s7G="Channel",j1T="V9x",f5Z="Median",C0Z="D9x",V0S="h9x",g3G="Bottom",c24="l9x",h3p="c9x",W1m="k9x",u9S="outpu",Z3Z="Channel Fill";STX[O5l][L7G](stx,sd,quotes);if(sd[(q0T+B5p+p9S+M8T)][Z3Z]){var parameters={panelName:sd[K5D]}
;for(var p in sd[(u9S+M8T)]){var lastWord=p[Z7p](m44)[(C8l+c6S)]();if(x8A[W1m](lastWord,L2C)||x8A[h3p](lastWord,m1Z)){parameters[X1m]=p+m44+sd[(W0d)];}
else if(x8A[(c24)](lastWord,g3G)||x8A[V0S](lastWord,l8p)){parameters[l2S]=p+m44+sd[W0d];}
else if(x8A[C0Z](lastWord,f5Z)||x8A[j1T](lastWord,s7G)){parameters[G0S]=sd[R2S][p];}
}
STX[O5l][Y9S](stx,quotes,parameters);}
}
;STX[O5l][Y9S]=function(stx,quotes,parameters){var G4G="t7x",N1p="S9x",A34="F9x",N1d="9x",o4T="ach",Y9d="C9x",n8l="x9x",A2C="K9x",f1S="n9x",z2S="s9x",panel=stx[j8m][parameters[Z4G]],t=panel.yAxis.top,b=panel[(Z9d+q0T+M7S)][f3T],highs=[],lows=[];for(var i=1;x8A[z2S](i,quotes.length);i++){var quote_1=quotes[x8A[f1S](i,1)];if(!quote_1||!quote_1[d6S])continue;if(x8A[A2C](panel[W0d],stx[i8C][W0d])&&quote_1.transform)quote_1=quote_1.transform;if(!highs.length){var hy1=Math[H0S](t,Math[e1Z](b,quote_1[d6S][parameters[X1m]]));if(!isNaN(hy1)){var x1=(x8A[n8l](i,1)?0:x8A[Y9d]((i-1),stx[T2T][r1d])+stx[J2G]);highs[K6T]([x1,hy1]);}
}
if(!lows.length){var ly1=Math[H0S](t,Math[(e1Z)](b,quote_1[(x8A.d5Z+o4T+m5Z)][parameters[l2S]]));if(!isNaN(ly1)){var x1=(x8A[(t9S+N1d)](i,1)?0:x8A[A34]((i-1),stx[T2T][r1d])+stx[J2G]);lows[K6T]([x1,ly1]);}
}
var quote=quotes[i];if(x8A[N1p](panel[W0d],stx[i8C][W0d])&&quote.transform)quote=quote.transform;if(highs.length||lows.length){var x2=x8A[G4G](i,stx[T2T][r1d])+stx[J2G];if(highs.length){var hy2=Math[H0S](t,Math[e1Z](b,quote[d6S][parameters[X1m]]));highs[K6T]([x2,hy2]);}
if(lows.length){var ly2=Math[H0S](t,Math[e1Z](b,quote[d6S][parameters[l2S]]));lows[K6T]([x2,ly2]);}
}
}
var points=highs[N8G](lows[Q6S]());STX[O5l][t9Z](stx,points,parameters[G0S]);}
;STX[(d8Z+x8A.n9S+p9S+n1l+h7D)][R9C]=function(stx,sd,quotes){var f5S="axisDrawn",N8C="w7x",t4G="sFo",Y7T="J7x",J6G="eO",x0m="studyOverBoughtColor",R6m="studyOverSoldColor",k7T="rBoug",B5C="dyO";if(!sd[Q9p]||!sd[Q9p][V4S])return ;var low=parseFloat(sd[Q9p][P9m]),high=parseFloat(sd[Q9p][(M7S+K1T+B5C+U4T+m5Z+k7T+g2S+x8A.n9S+C1S+D4Z+v4S+p9S+m5Z)]),lowColor=sd[Q9p][R6m],highColor=sd[Q9p][x0m],output=sd[(w7G+J6G+H44+D6G)];if(!output)output="Result";if(x8A[(s8Z+K1G)](lowColor,""))lowColor=sd[R2S][output];if(x8A[Y7T](highColor,""))highColor=sd[R2S][output];var color=stx[(x8A.d5Z+l5d+x8A.n9S)][b6D].fillStyle,panel=stx[j8m][sd[K5D]];stx[i8C][(x8A.d5Z+F4D+x8A.n9S+V8p)].globalAlpha=.2;stx[i8C][b6D].beginPath();var ph=stx[b5p](high,panel);stx[i8C][b6D].strokeStyle=highColor;stx[i8C][b6D].moveTo(0,ph);stx[i8C][b6D].lineTo(stx[i8C].width,ph);stx[i8C][b6D].stroke();pl=stx[b5p](low,panel);stx[i8C][b6D].strokeStyle=lowColor;stx[i8C][(A3C+b6p+Z0D+x8A.n9S)].moveTo(0,pl);stx[(x8A.d5Z+l5d+x8A.n9S)][b6D].lineTo(stx[i8C].width,pl);stx[(G7C+x8Z+x8A.n9S)][b6D].stroke();stx[i8C][b6D].closePath();stx[i8C][b6D].fillStyle=color;STX[(d8Z+K1T+A64)][L7l](stx,quotes,{panelName:sd[K5D],band:output+" "+sd[W0d],threshold:high,direction:1,color:highColor}
);STX[O5l][L7l](stx,quotes,{panelName:sd[K5D],band:output+" "+sd[W0d],threshold:low,direction:-1,color:lowColor}
);stx[i8C][b6D].globalAlpha=1;if(!sd[z8m][a2S]){stx[(B6C+u2p+t4G+T4S+x8A.n9S)]("stx_yaxis");stx[M7Z]("stx_yaxis");var ypx=x8A[N8C](panel.height,panel[V8Z]);stx[i8C][b6D].fillText(high,stx[i8C].width,ph);stx[i8C][b6D].fillText(low,stx[i8C].width,pl);panel[f5S]=true;}
}
;STX[O5l][L7l]=function(stx,quotes,parameters){var F8S="x6x",d7d="edgeParameters",G0l="K6x",x1T="n6x",j1l="s6x",d14="edgeHighlight",M9G="i6x",q1S="B6x",k1C="O6x",T8d="u6x",S9T="q6x",Z8S="d6x",C0d="m6x",K54="a6x",F0C="A6x",i4l="U7x",e9p="E7x",u3G="direction",O8G="M7x",Z2Z="e7x",v0m="Pri",E1G="pixe",z3D="v7x",p7m="band",k8m="X7x",A8D="i7x",W9T="B7x",E7d="O7x",w7d="R7x",A4C="threshold",d4p="P7",panel=stx[(c6S+d7l+M7S)][parameters[Z4G]],t=panel.yAxis.top,b=panel[n1p][f3T];if(!parameters[(u4S+C1d+M7S+g2S+B4S+w9S)]&&x8A[(d4p+O4T)](parameters[A4C],0))return ;var yThresh;if(x8A[w7d](parameters[Z4G],stx[i8C][K5D][W0d])){yThresh=stx[P2l](parameters[A4C],panel);}
else{yThresh=stx[b5p](parameters[A4C],panel);}
var points=[];for(var i=1;x8A[E7d](i,quotes.length);i++){if(!quotes[x8A[(W9T)](i,1)]||!quotes[x8A[A8D](i,1)][d6S])continue;var quote=quotes[i],quote_1=quotes[x8A[k8m](i,1)],qItem=quote[d6S][parameters[p7m]],qItem_1=quote_1[d6S][parameters[p7m]];if(x8A[z3D](parameters[Z4G],stx[i8C][K5D][W0d])){if(quote.transform)qItem=stx[(E1G+Z1Z+x8A.c7S+B4S+w5S+v0m+x8A.d5Z+m5Z)](quote.transform[parameters[p7m]],panel);if(quote_1.transform)qItem_1=stx[b5p](quote_1.transform[parameters[p7m]],panel);}
if(!points.length){var x1=(x8A[(f0T+K1G)](i,1)?0:x8A[Z2Z]((i-1),stx[T2T][r1d])+stx[J2G]),y1=Math[H0S](t,Math[e1Z](b,qItem_1));if(!isNaN(y1)&&((x8A[(Z8T+k1m+O4T)](quote_1[parameters[(Y0V+T4S+W4Z)]],parameters[A4C])&&x8A[O8G](parameters[u3G],1))||(x8A[e9p](quote_1[parameters[p7m]],parameters[A4C])&&parameters[u3G]==-1))){points[K6T]([x1,y1]);}
else{points[K6T]([x1,yThresh]);}
}
if(points.length){var x2=x8A[i4l](i,stx[T2T][r1d])+stx[J2G],y2=Math[H0S](t,Math[e1Z](b,qItem));if((x8A[F0C](quote[parameters[p7m]],parameters[A4C])&&x8A[K54](parameters[u3G],1))||(x8A[C0d](quote[parameters[(Y0V+N1m)]],parameters[A4C])&&parameters[u3G]==-1)){if(x8A[Z8S](points[points.length-1][1],yThresh)){points[K6T]([points[x8A[S9T](points.length,1)][0]+x8A[T8d]((x2-points[points.length-1][0]),(yThresh-qItem_1),(y2-qItem_1)),yThresh]);}
points[K6T]([x2,y2]);}
else{if(x8A[k1C](points[points.length-1][1],yThresh)){points[K6T]([points[x8A[q1S](points.length,1)][0]+x8A[M9G]((x2-points[points.length-1][0]),(yThresh-qItem_1),(y2-qItem_1)),yThresh]);}
points[K6T]([x2,yThresh]);}
}
}
if(!points.length)return ;if(parameters[d14]){for(var p=0;x8A[j1l](p,points.length-1);p++){if(x8A[x1T](points[p][1],yThresh)||x8A[G0l](points[p+1][1],yThresh))stx[X9d](points[p][0],points[p+1][0],points[p][1],points[p+1][1],parameters[d14],"segment",stx[i8C][b6D],true,parameters[d7d]);}
}
points[K6T]([points[x8A[F8S](points.length,1)][0],yThresh],[points[0][0],yThresh]);var opacity=parameters[q0p];if(x8A[(x8A.s0m+f1m+O4T)](opacity,null))opacity=0.3;STX[O5l][t9Z](stx,points,parameters[(x8A.d5Z+B4S+G0T+x8A.c7S)],opacity);}
;STX[O5l][d0C]=function(stx,sd){var b2h="Undefined Study: ";alert(b2h+sd[(V1C)]);return ;}
;STX[l4T][(D4Z+w0Z+l04+q0T+B4S+T4S)]=function(){var B7D="Si",e4d="otat",c1G="ann";this[W0d]=(c1G+e4d+g2d+T4S);this[b5S]=[];this[f4T]=x8A.n0Z;this[g2S]=x8A.n0Z;this[(j1d+W4Z+q0T+m7p)]=x8A.g0Z;this[(d5C)]=R9S;this[J3S]=l1d;this[(m1D+T4S+x8A.n9S+B7D+v6T+m5Z)]=x8A.n0Z;this.font={}
;}
;STX[l4T][W5m][d0Z](STX[l4T][t7m]);STX.Drawing.annotation.prototype.getFontString=function(){var i0p="ntSt",f2d="ontW",i5G="ntDe";this[H8l]={style:null,weight:null,size:"12px",family:null}
;var css=this[(M7S+x8A.n9S+O4T)][r2G]("stx_annotation");if(css){if(css[U3C])this[(m1D+i5G+f0T)][c4l]=css[U3C];if(css[(f0T+f2d+m5Z+q0T+Z8T+g2S+x8A.n9S)])this[H8l][n14]=css[A9l];if(css[P2C])this[H8l][r3C]=css[P2C];if(css[F0G])this[H8l][c7T]=css[F0G];}
if(this.font[c4l])this[H8l][c4l]=this.font[c4l];if(this.font[n14])this[H8l][n14]=this.font[n14];if(this.font[r3C])this[H8l][r3C]=this.font[r3C];if(this.font[c7T])this[H8l][c7T]=this.font[c7T];this[z0C]="";var first=false;for(var n in this[H8l]){if(this[H8l][n]){if(!first){this[z0C]+=" ";}
else{first=true;}
this[(m1D+i0p+x8A.c7S+q0T+T4S+Z8T)]+=this[H8l][n];}
}
}
;STX.Drawing.annotation.prototype.copyConfig=function(){this[(x8A.d5Z+B4S+v4S+A3D)]=this[J8d][E1p][I8C];this.font=STX[s2G](this[J8d][E1p][W5m].font);}
;STX.Drawing.annotation.prototype.measure=function(){}
;STX.Drawing.annotation.prototype.render=function(context){var t3p="J4x",B8D="lig",Z3p="T4x",b3p="t4x",c04="6x",D8l="F6x",X3d="xelFromTick",s3Z="olo",P6p="ltC",P84="defau",G0D="W6x",panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;var x0=this[J8d][r6T](this[y4p][0],panel[i8C]),y0=this[J8d][m9d](panel,this[y4p][0],this[(y4p)][1]);context.font=this[z0C];context.textBaseline="top";var x=x0,y=y0,w=this[f4T],h=this[g2S],color=this[G0S];if(x8A[G0D](color,"auto")||STX[T4l](color))color=this[J8d][(P84+P6p+s3Z+x8A.c7S)];if(this[O4D])color=this[J8d][r2G]("stx_highlight_vector");if(this[O7G]){var sx0,sx1,sy0,sy1;if(this[O7G][W4Z]){sx0=this[J8d][(c6S+q0T+X3d)](this[(M7S+h1d)][x8A.n9S]);sy0=this[(M7S+E3T)][m9d](panel,this[O7G][x8A.n9S],this[O7G][U4T]);sx1=x+x8A[D8l](w,2);sy1=y+x8A[(d8Z+c04)](h,2);}
else if(this[O7G][O4T]){sx0=x;sy0=y;x+=this[O7G][O4T];y+=this[O7G][H6T];sx1=x+x8A[b3p](w,2);sy1=y+x8A[Z3p](h,2);}
context.beginPath();if(this[l2T])context.strokeStyle=this[l2T];else context.strokeStyle=color;context.moveTo(sx0,sy0);context.lineTo(sx1,sy1);context.stroke();}
if(this[(B7l+B8D+g2S+A7S+W4Z)]){this[J8d][M7Z]("stx_annotation_highlight_bg",context);context.fillRect(x,y,w,h);}
else{if(this[z6T]){context.fillStyle=this[(Y4Z+D6T+r4G+n2T+W4Z+J6C+v4S+B4S+x8A.c7S)];context.fillRect(x,y,w,h);}
else if(this[O7G]){context.fillStyle=this[J8d][r6S];context.fillRect(x,y,w,h);}
}
if(this[l2T]){context.beginPath();context.strokeStyle=this[l2T];context.rect(x,y,w,h);context.stroke();}
if(this[O4D]){this[J8d][M7Z]("stx_annotation_highlight",context);}
else{context.fillStyle=color;}
y+=this[p0S];for(var i=0;x8A[t3p](i,this[b5S].length);i++){context.fillText(this[b5S][i],x+this[p0S],y);y+=this[P2C];}
context.textBaseline="alphabetic";}
;STX.Drawing.annotation.prototype.edit=function(context){var n3m="ationCa",i3G="Col",m5l="M4x",O7m="g4x",L0T="rib",z1T="tt",R9Z="onkeyup",v4d="e4x",C0G="annotationSave",panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;function handleTAMouseUp(stx){return function(e){if(stx[m8T]&&STXChart[k6m]){stx[D2G](e);}
}
;}
;function cancelAnnotation(self){return function(){self[J8d][B1p]();}
;}
function saveAnnotation(self){return function(){var A9T="w4x";if(x8A[A9T](self[J3S][r8p],""))return ;self[d5C]=self[J3S][r8p];self[h0S]();self[J8d][t2Z](self);self[(I4Z+O4T)][C4Z]((U4T+m5Z+x8A.d5Z+a0T+x8A.c7S));self[J8d][B1p]();}
;}
;function resizeAnnotation(self){return function(e){var V2D="f4x",n2S="v4x",C8S="X4x",s3p="i4x",c3p="ipPX",u0p="B4x",l4Z="O4x",A3Z="P4x",I1C="keyCode";if(e){var key=(window[X9m])?event[I1C]:e[I1C];switch(key){case 27:self[J8d][(B1p)]();return ;}
}
var stx=self[J8d],ta=self[J3S],save=stx[i6Z][C0G],cancel=stx[i6Z][H4d],arr=ta[r8p][Z7p]('\n'),w=0;stx[i8C][b6D].font=self[z0C];for(var i=0;x8A[A3Z](i,arr.length);i++){var m=stx[(G7C+x8Z+x8A.n9S)][b6D].measureText(arr[i]).width;if(x8A[(C7S+O4T)](m,w))w=m;}
h=x8A[l4Z]((arr.length+1),(self[P2C]+3));if(x8A[u0p](w,50))w=50;ta[c4l].width=(w+30)+"px";ta[c4l].height=h+"px";var y=parseInt(STX[(M7S+x8A.n9S+x8A.c7S+c3p)](ta.style.top)),x=STX[u5Z](ta[c4l][w1T]);w=ta[g44];h=ta[F0D];if(x8A[s3p](x+w+100,self[J8d][i8C][i6S])){save.style.top=y+(c6S+O4T);cancel.style.top=y+(T5G);save[(I4Z+H6T+v4S+m5Z)][w1T]=(x+w+10)+"px";cancel[(M7S+x8A.n9S+H6T+C9S)][w1T]=(x+w+60)+"px";}
else if(x8A[C8S](y+h+30,self[J8d][i8C][z3C])){save.style.top=(y+h+10)+"px";cancel.style.top=(y+h+10)+"px";save[c4l][w1T]=x+(T5G);cancel[c4l][w1T]=(x+50)+"px";}
else{save.style.top=(x8A[n2S](y,35))+"px";cancel.style.top=(x8A[V2D](y,35))+(T5G);save[c4l][w1T]=x+"px";cancel[c4l][w1T]=(x+50)+"px";}
}
;}
this[(J8d)][E4m]();this[(M7S+E3T)][y2Z]=true;this[J8d][K6G]="annotation";if(x8A[v4d](this[J3S],null)){this[J3S]=document[V4l]("TEXTAREA");this[J3S][u4l]="stx_annotation";this[J3S][R9Z]=resizeAnnotation(this);this[J3S][h7d]=handleTAMouseUp(this[J8d]);this[J3S][(M7S+m5Z+x8A.n9S+x8A.X8m+z1T+L0T+p9S+x8A.n9S+m5Z)]("wrap",(g2S+D4Z+R1d));this[J8d][i8C][h7C][J5D](this[J3S]);this[J3S][c4l][B5m]="absolute";this[J3S][c4l].width="100px";this[J3S][c4l].height="20px";}
this[J3S][c4l].font=this[z0C];if(this[G0S]){if(x8A[O7m](this[G0S],"transparent")||x8A[m5l](this[G0S],"auto")){this[J3S][c4l][G0S]=this[J8d][(W4Z+Y6D+D4Z+L94+x8A.n9S+i3G+B4S+x8A.c7S)];}
else{this[J3S][c4l][G0S]=this[G0S];}
}
var x0=this[(J8d)][r6T](this[y4p][0],panel[i8C]),y0=this[J8d][m9d](panel,this[y4p][0],this[y4p][1]);this[J3S][c4l][w1T]=x0+"px";this.ta.style.top=y0+"px";this[J8d][i6Z][C0G][c4l][s2T]="block";this[J8d][i6Z][(D4Z+T4S+T4S+w1D+n3m+T4S+T7C+v4S)][c4l][s2T]="block";this[J8d][i6Z][C0G][(B4S+T4S+x8A.d5Z+v4S+O0d)]=saveAnnotation(this);this[J8d][i6Z][H4d][V9T]=cancelAnnotation(this);resizeAnnotation(this)();STX[m6S](this[(x8A.n9S+D4Z)],true);}
;STX.Drawing.annotation.prototype.click=function(context,tick,value){var W6m="dit",s1Z="tF",panel=this[J8d][j8m][this[Z4G]];this[o24]();this[(Z8T+m5Z+s1Z+B4S+b6p+d8Z+x8A.n9S+E0d+m7p)]();this[(c6S+s9p)]=[tick,value];this[(W4Z+s9p)]=this[J8d][s8m](this[y4p][x8A.n0Z],panel[i8C]);this[R0T]=value;this[h0S]();this[(m5Z+W6m)](context);return O7T;}
;STX.Drawing.annotation.prototype.reposition=function(context,repositioner,tick,value){var x5G="a5x",R9d="A5x",z7D="U4x",b3C="E4x",panel=this[J8d][j8m][this[Z4G]],tickDiff=x8A[b3C](repositioner[l5l],tick),valueDiff=x8A[z7D](repositioner[r8p],value);this[y4p]=[x8A[R9d](repositioner[y4p][x8A.n0Z],tickDiff),x8A[x5G](repositioner[y4p][x8A.v0Z],valueDiff)];this[(W4Z+s9p)]=this[J8d][(Y7l+x8A.n9S+v0l+w0V+r0D)](this[(y4p)][x8A.n0Z],panel[(x8A.J5m+J5d)]);this[R0T]=this[y4p][x8A.v0Z];this[E1d](context);}
;STX.Drawing.annotation.prototype.intersected=function(tick,value,box){var U4d="u5x",r5Z="q5x",G7T="d5x",G5l="m5x",panel=this[J8d][j8m][this[Z4G]];if(!this[y4p])return l1d;var x0=this[(M7S+E3T)][r6T](this[y4p][x8A.n0Z],panel[i8C]),y0=this[(J8d)][m9d](panel,this[(c6S+s9p)][x8A.n0Z],this[y4p][x8A.v0Z]),x1=x0+this[f4T],y1=y0+this[g2S];if(this[O7G]&&this[O7G][O4T]){x0+=this[O7G][O4T];x1+=this[O7G][O4T];y0+=this[O7G][H6T];y1+=this[O7G][H6T];}
var x=this[J8d][r6T](tick,panel[i8C]),y=this[J8d][m9d](panel,tick,value);if(x8A[G5l](x,x0)&&x8A[G7T](x,x1)&&x8A[r5Z](y,y0)&&x8A[U4d](y,y1))return {p0:STX[s2G](this[y4p]),tick:tick,value:value}
;return O7T;}
;STX.Drawing.annotation.prototype.abort=function(){var X8l="fixScreen",v2D="tionS";this[J8d][i6Z][(D4Z+T4S+A5p+x8A.n9S+D4Z+v2D+D4Z+z24)][c4l][s2T]="none";this[(M7S+x8A.n9S+O4T)][i6Z][H4d][(M7S+x8A.n9S+H6T+v4S+m5Z)][s2T]="none";if(this[J3S])this[J8d][i8C][h7C][v9Z](this[J3S]);this[J3S]=null;this[J8d][K6G]="";this[J8d][I9d]();document[N8d][c4l][c7d]="crosshair";this[J8d][y2Z]=false;STX[f4Z](this[J8d][(I5S+x8A.n9S)][U7C],this);STX[X8l]();}
;STX.Drawing.annotation.prototype.reconstruct=function(stx,obj){this[(M7S+x8A.n9S+O4T)]=stx;this[G0S]=obj["col"];this[Z4G]=obj["pnl"];this[W9d]=obj["d0"];this[R0T]=obj["v0"];this[d5C]=unescape(obj["text"]);this[O7G]=obj[O7G];this[(Y4Z+B4S+R1d+t9D+x8A.s0m+U5D+A3D)]=obj[D2d];this[z6T]=obj[I4d];this.font=STX[L2T](obj["fnt"],{"st":"style","sz":"size","wt":"weight","fl":"family"}
);if(!this.font)this.font={}
;this[h0S]();}
;STX.Drawing.annotation.prototype.serialize=function(){var A7Z="Colo",J3Z="kg",r54="removeNullValues",obj={name:this[W0d],pnl:this[Z4G],col:this[G0S],d0:this[W9d],v0:this[R0T],text:escape(this[d5C])}
;if(this.font){var fnt=STX[r54](STX[L2T](this.font,{"style":"st","size":"sz","weight":"wt","family":"fl"}
));if(!STX[T5S](fnt))obj[f1T]=fnt;}
if(this[O7G]){obj[(M7S+x8A.n9S+m5Z+w5S)]={"d":this[O7G][W4Z],"v":this[O7G][U4T],"x":this[O7G][O4T],"y":this[O7G][H6T]}
;}
if(this[l2T])obj["bc"]=this[l2T];if(this[z6T])obj[(I4d)]=this[(Y4Z+t0S+J3Z+x8A.c7S+l7D+T4S+W4Z+A7Z+x8A.c7S)];return obj;}
;STX.Drawing.annotation.prototype.adjust=function(){var I9p="Pix",m6d="alue",n0V="r5x",C3C="G5x",k84="o5x",T4Z="tS",g3Z="Q5x",w0D="z5x",q1G="getFontString";this[q1G]();var panel=this[J8d][j8m][this[(c6S+a0Z+N5D+i1Z+f64)]];if(!panel)return ;this[y4p]=[this[J8d][r5p](this[W9d],panel[i8C]),this[R0T]];this[b5S]=this[d5C][Z7p]('\n');var w=0;this[J8d][i8C][b6D].font=this[z0C];for(var i=0;x8A[w0D](i,this[b5S].length);i++){var m=this[J8d][i8C][b6D].measureText(this[b5S][i]).width;if(x8A[g3Z](m,w))w=m;}
this[(f0T+B4S+T4S+T4Z+q0T+v6T+m5Z)]=STX[u5Z](this[H8l][(M7S+d6d+m5Z)]);h=x8A[k84](this[b5S].length,this[P2C]);if(STX[h8G])h+=5;this[f4T]=w+(x8A[C3C](this[p0S],2));this[g2S]=h+(x8A[n0V](this[p0S],2));var x1=this[J8d][r6T](this[y4p][0],panel[i8C])+w,y1=this[J8d][b5p](this[y4p][1],panel)+h;this[H4p]=[this[J8d][K9S](x1,panel[i8C]),this[(M7S+E3T)][(U4T+m6d+B6Z+G5D+I9p+N5D)](y1,panel)];if(this[O7G]){if(this[O7G][W4Z])this[O7G][x8A.n9S]=this[J8d][r5p](this[(I4Z+K1D)][W4Z],panel[i8C]);}
}
;STX[l4T][V1p]=function(){this[W0d]=V1p;this[b4l]=O7T;}
;STX[l4T][V1p][d0Z](STX[l4T][Z04]);STX.Drawing.line.prototype.calculateOuterSet=function(panel){var P8G="erse",D8D="I5x",R9m="L5x",s3G="p5x",b6C="N5x";if(x8A[b6C](this[y4p][x8A.n0Z],this[H4p][x8A.n0Z])||x8A[s3G](this[y4p][x8A.v0Z],this[H4p][x8A.v0Z])||this[J8d][o6S](this[J8d][T2T][p0l])){return ;}
var vector={x0:this[y4p][x8A.n0Z],y0:this[y4p][x8A.v0Z],x1:this[H4p][x8A.n0Z],y1:this[H4p][x8A.v0Z]}
;if(x8A[R9m](vector[h4p],vector[Z4p])){vector={x0:this[H4p][x8A.n0Z],y0:this[H4p][x8A.v0Z],x1:this[y4p][x8A.n0Z],y1:this[y4p][x8A.v0Z]}
;}
var earlier=x8A[D8D](vector[h4p],I5d),later=vector[Z4p]+I5d;this[(K3Z)]=STX[(B0G+T4S+x8A.n9S+P8G+x8A.d5Z+D7p)](vector,earlier);this[N7D]=STX[E9D](vector,later);this[l3d]=this[J8d][s8m](earlier,panel[(G7C+D4Z+x8A.c7S+x8A.n9S)]);this[(W4Z+H9p+A8m)]=this[J8d][(W4Z+D4Z+x8A.n9S+m5Z+C7Z+x8A.c7S+B4S+r0D)](later,panel[(x8A.d5Z+g2S+D4Z+x8A.c7S+x8A.n9S)]);}
;STX.Drawing.line.prototype.click=function(context,tick,value){var d8p="calculateOuterSet",o2G="py",panel=this[J8d][(c6S+D4Z+q1m+i44)][this[Z4G]];if(!panel)return ;this[(x8A.d5Z+B4S+o2G+J6C+T4S+f0T+q0T+Z8T)]();if(!this[i7l]){this[y4p]=[tick,value];this[i7l]=G1d;return O7T;}
this[H4p]=[tick,value];this[W9d]=this[(I4Z+O4T)][s8m](this[y4p][x8A.n0Z],panel[i8C]);this[I3d]=this[J8d][s8m](this[H4p][x8A.n0Z],panel[i8C]);this[R0T]=this[y4p][x8A.v0Z];this[(j0T)]=this[H4p][x8A.v0Z];this[d8p](panel);this[i7l]=O7T;return G1d;}
;STX.Drawing.line.prototype.reconstruct=function(stx,obj){this[J8d]=stx;this[G0S]=obj[n5T];this[Z4G]=obj[t5p];this[Z6l]=obj[e7C];this.lineWidth=obj["lw"];this[R0T]=obj[R0T];this[j0T]=obj[j0T];this[W9d]=obj[W9d];this[I3d]=obj[I3d];if(obj[l3d]){this[l3d]=obj[(W4Z+s9p+A8m)];this[F4l]=obj[F4l];this[K3Z]=obj[K3Z];this[N7D]=obj[N7D];}
this[h0S]();}
;STX.Drawing.line.prototype.serialize=function(){var obj={name:this[(T4S+D4Z+i04)],pnl:this[Z4G],col:this[G0S],ptrn:this[Z6l],lw:this.lineWidth,d0:this[(W4Z+s9p)],d1:this[I3d],v0:this[(U4T+s9p)],v1:this[j0T]}
;if(this[l3d]){obj[l3d]=this[l3d];obj[F4l]=this[F4l];obj[(K3Z)]=this[K3Z];obj[N7D]=this[N7D];}
return obj;}
;STX.Drawing.line.prototype.adjust=function(){var panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;this[y4p]=[this[J8d][r5p](this[W9d],panel[i8C]),this[R0T]];this[H4p]=[this[J8d][r5p](this[I3d],panel[i8C]),this[j0T]];if(this[(I4Z+O4T)][o6S](this[J8d][T2T][p0l])&&this[l3d]){this[(c6S+s9p)]=[this[J8d][r5p](this[l3d],panel[i8C]),this[K3Z]];this[H4p]=[this[J8d][r5p](this[F4l],panel[i8C]),this[N7D]];}
}
;STX[l4T][U9Z]=function(){this[W0d]=U9Z;}
;STX[(i7Z+h9d+f4T+K94)][U9Z][d0Z](STX[l4T][V1p]);STX.Drawing.ray.prototype.calculateOuterSet=function(panel){var r7Z="omT",F8T="teFr",f8C="j2x",W3T="H5x",T2D="y5x",o9D="b5x";if(x8A[o9D](this[y4p][x8A.n0Z],this[H4p][x8A.n0Z])||x8A[T2D](this[y4p][x8A.v0Z],this[H4p][x8A.v0Z])||this[J8d][o6S](this[J8d][T2T][p0l])){return ;}
var vector={x0:this[y4p][x8A.n0Z],y0:this[y4p][x8A.v0Z],x1:this[H4p][x8A.n0Z],y1:this[H4p][x8A.v0Z]}
,endOfRay=vector[Z4p]+I5d;if(x8A[W3T](vector[h4p],vector[Z4p])){endOfRay=x8A[(f8C)](vector[Z4p],I5d);}
this[K3Z]=this[R0T];this[N7D]=STX[E9D](vector,endOfRay);this[l3d]=this[W9d];this[F4l]=this[J8d][(Y7l+F8T+r7Z+L5l+T2S)](endOfRay,panel[i8C]);}
;STX.Drawing.ray.prototype.adjust=function(){var panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;this[(y4p)]=[this[J8d][r5p](this[W9d],panel[i8C]),this[R0T]];this[H4p]=[this[J8d][r5p](this[I3d],panel[i8C]),this[j0T]];if(this[J8d][o6S](this[J8d][T2T][p0l])&&this[l3d]){this[(c6S+s9p)]=[this[J8d][r5p](this[W9d],panel[(x8A.d5Z+g2S+D4Z+x8A.c7S+x8A.n9S)]),this[(U4T+s9p)]];this[H4p]=[this[J8d][r5p](this[F4l],panel[i8C]),this[N7D]];}
}
;STX[l4T][C7T]=function(){var F1m="tal";this[W0d]=(g2S+B4S+x8A.c7S+q0T+w7G+F1m);this[b4l]=O7T;}
;STX[l4T][C7T][d0Z](STX[l4T][Z04]);STX.Drawing.horizontal.prototype.measure=function(){}
;STX.Drawing.horizontal.prototype.click=function(context,tick,value){var panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;this[o24]();this[R0T]=value;this[W9d]=this[J8d][s8m](tick,panel[(G7C+D4Z+J5d)]);return G1d;}
;STX.Drawing.horizontal.prototype.reconstruct=function(stx,obj){var y9Z="nelNa";this[J8d]=stx;this[G0S]=obj[n5T];this[(Q7G+y9Z+w5S+m5Z)]=obj[t5p];this[Z6l]=obj[e7C];this.lineWidth=obj["lw"];this[R0T]=obj[R0T];this[W9d]=obj[(W4Z+s9p)];this[Y6G]=obj[E3S];this[h0S]();}
;STX.Drawing.horizontal.prototype.serialize=function(){var obj={name:this[W0d],pnl:this[Z4G],col:this[G0S],ptrn:this[Z6l],lw:this.lineWidth,v0:this[R0T],d0:this[W9d],al:this[Y6G]}
;return obj;}
;STX.Drawing.horizontal.prototype.adjust=function(){var panel=this[J8d][j8m][this[(c6S+a0Z+N5D+h1l)]];if(!panel)return ;this[y4p]=[this[J8d][r5p](this[W9d],panel[i8C]),this[R0T]];this[H4p]=[this[J8d][r5p](this[W9d],panel[i8C])+d8l,this[R0T]];}
;STX.Drawing.horizontal.prototype.copyConfig=function(){var Z2m="ern";this[G0S]=this[J8d][E1p][I8C];this.lineWidth=this[J8d][E1p].lineWidth;this[Z6l]=this[J8d][E1p][(c6S+D4Z+x8A.n9S+x8A.n9S+Z2m)];this[Y6G]=this[J8d][E1p][Y6G];}
;STX[l4T][w7D]=function(){var K5m="rti";this[(W0d)]=(U4T+m5Z+K5m+x8A.d5Z+E3S);}
;STX[l4T][w7D][d0Z](STX[l4T][C7T]);STX.Drawing.vertical.prototype.measure=function(){}
;STX.Drawing.vertical.prototype.adjust=function(){var panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;this[y4p]=[this[J8d][r5p](this[W9d],panel[i8C]),this[R0T]];this[H4p]=[this[J8d][r5p](this[W9d],panel[i8C]),this[(R0T)]+x8A.v0Z];}
;STX[l4T][u8C]=function(){this[W0d]=u8C;this[b4l]=O7T;}
;STX[l4T][u8C][d0Z](STX[l4T][Z04]);STX.Drawing.continuous.prototype.click=function(context,tick,value){var n3C="lize",panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;this[o24]();if(!this[i7l]){this[y4p]=[tick,value];this[i7l]=G1d;return O7T;}
if(this[J94](tick,value)){this[J8d][B1p]();return G1d;}
this[H4p]=[tick,value];this[W9d]=this[(J8d)][s8m](this[y4p][x8A.n0Z],panel[i8C]);this[(W4Z+H9p)]=this[J8d][s8m](this[H4p][x8A.n0Z],panel[i8C]);this[R0T]=this[y4p][x8A.v0Z];this[j0T]=this[H4p][x8A.v0Z];var Segment=STX[l4T][Z04],segment=new Segment,obj=this[(r1Z+E0d+D4Z+n3C)](this[J8d]);segment[v9C](this[(J8d)],obj);this[J8d][t2Z](segment);this[(M7S+x8A.n9S+O4T)][C4Z](Q5l);this[J8d][s2Z]();this[(c6S+s9p)]=[this[H4p][x8A.n0Z],this[H4p][x8A.v0Z]];return O7T;}
;STX[l4T][A9S]=function(){var f3S="Draw",F2h="agTo";this[W0d]=A9S;this[S0T]=A6D;this[(E4G+F2h+f3S)]=G1d;}
;STX[l4T][A9S][d0Z](STX[l4T][Z04]);STX.Drawing.freeform.prototype.measure=function(){}
;STX.Drawing.freeform.prototype.intersected=function(tick,value,box){var c8V="c2x",x6T="k2x",o14="Y2x",X3p="Z2x";if(x8A[X3p](tick,this[j7l])||x8A[o14](tick,this[P4C]))return O7T;if(x8A[x6T](value,this[s3l])||x8A[c8V](value,this[W6C]))return O7T;return G1d;}
;STX.Drawing.freeform.prototype.click=function(context,tick,value){var c8C="pointer",P0p="tempSplineTension",R0S="ayo",A5C="D2x",q8V="h2x",z7m="resolveX",p1m="rtX",c4Z="l2",panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;if(x8A[(c4Z+O4T)](this[i7l],O7T)){this[o24]();this[(M7S+x8A.n9S+D4Z+p1m)]=Math[J8C](this[J8d][z7m](this[J8d][r6T](tick,panel[i8C])));this[V3l]=Math[J8C](this[J8d][x7m](this[J8d][m9d](panel,tick,value)));this[W9d]=this[(I4Z+O4T)][s8m](tick,panel[i8C]);this[R0T]=value;this[y4p]=[x8A[q8V](STXChart[F5m],this[j9l]),x8A[A5C](STXChart[c2m],this[V3l])];this[X0d]=[this[y4p][x8A.n0Z],this[(y4p)][x8A.v0Z]];this[M3C]=[this[y4p]];this[r1d]=this[J8d][T2T][r1d];this[t4Z]=panel[n1p][t4Z];this[p0l]=this[(M7S+E3T)][(v4S+R0S+H44)][p0l];this[f9T]=this[(J8d)][T2T][f9T];this[P0p]=this[S0T];this[S0T]=-x8A.v0Z;document[N8d][c4l][c7d]=c8C;this[i7l]=G1d;return O7T;}
else{this[i7l]=O7T;this[S0T]=this[P0p];document[N8d][c4l][c7d]=a6D;return G1d;}
}
;STX.Drawing.freeform.prototype.move=function(context,tick,value){var I2p="W2x",M4m="C2",x6d="x2x",Z7T="K2x",V7l="s2x",i1d="V2x",n7G="romTi";if(!this[i7l])return ;var panel=this[J8d][(c6S+D4Z+E6S+M7S)][this[(Q7G+T4S+m5Z+d7Z+N0Z+m5Z)]];this[I3d]=this[J8d][(C4m+C7Z+n7G+G9C)](tick,panel[i8C]);this[j0T]=value;this[H4p]=[x8A[i1d](STXChart[F5m],this[j9l]),x8A[V7l](STXChart[c2m],this[V3l])];if(x8A[(T4S+f3p+O4T)](this[M3C].length,2)){if(x8A[Z7T](this[(c6S+H9p)][0],this[M3C][this[M3C].length-2][0])&&x8A[x6d](this[H4p][0],this[M3C][this[M3C].length-1][0])){this[M3C].length--;this[X0d].length-=2;}
else if(x8A[(M4m+O4T)](this[H4p][1],this[M3C][this[M3C].length-2][1])&&x8A[I2p](this[H4p][1],this[M3C][this[M3C].length-1][1])){this[M3C].length--;this[(T4S+B4S+W4Z+h7D)].length-=2;}
}
this[X0d][K6T](this[H4p][0],this[H4p][1]);this[M3C][K6T](this[H4p]);this[E1d](context);return false;}
;STX.Drawing.freeform.prototype.intervalRatio=function(oldInterval,newInterval,oldPeriodicity,newPeriodicity,startDate,symbol){var Z74="L0W",p7p="p0W",q8S="N0W",R4p="s0W",S5D="ek",p3G="V0W",L7d="R0W",S1D="P0W",U3l="J0W",C3S="T0W",w3C="t0W",f8l="S2x",s7Z="F2x";function weeksInMonth(startDate,symbol){return x8A.x0Z;}
;function daysInWeek(startDate,symbol){return x8A.x0Z;}
;function daysInMonth(startDate,symbol){return A1T;}
;function minPerDay(startDate,symbol){var F24=390;return F24;}
;var returnValue=x8A.n0Z;if(x8A[s7Z](oldInterval,newInterval))returnValue=x8A.v0Z;else if(!isNaN(oldInterval)&&!isNaN(newInterval))returnValue=x8A[f8l](oldInterval,newInterval);else if(isNaN(oldInterval)){if(x8A[w3C](oldInterval,C9l)&&x8A[C3S](newInterval,f6D))returnValue=weeksInMonth(startDate,symbol);else if(x8A[U3l](oldInterval,f6D)&&x8A[(f34+t9S)](newInterval,r2m))returnValue=daysInWeek(startDate,symbol);else if(x8A[S1D](oldInterval,C9l)&&x8A[L7d](newInterval,(Y7l+H6T)))returnValue=daysInMonth(startDate,symbol);else if(!isNaN(newInterval)){if(x8A[(Z34+t9S)](oldInterval,C9l))returnValue=x8A[(A8m+s9p+t9S)](daysInMonth(startDate,symbol),minPerDay(startDate,symbol),oldInterval);else if(x8A[p3G](oldInterval,(f4T+m5Z+S5D)))returnValue=x8A[R4p](daysInWeek(startDate,symbol),minPerDay(startDate,symbol),oldInterval);else if(x8A[q8S](oldInterval,r2m))returnValue=x8A[p7p](minPerDay(startDate,symbol),oldInterval);}
}
returnValue*=x8A[Z74](oldPeriodicity,newPeriodicity);return returnValue;}
;STX.Drawing.freeform.prototype.render=function(context){var g1Z="connectTheDots",N34="q8W",a6d="d8W",C6m="m8W",F1p="Node",M44="j8W",h3D="H0W",c1d="ect",D84="_v",h0V="ighl",G3d="y0W",y4G="b0W",o3d="I0W",panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;var intvl=this[A6l](this[p0l],this[J8d][T2T][p0l],this[f9T],this[J8d][T2T][f9T],this[W9d],panel[i8C][B3p]);if(x8A[o3d](intvl,0))return ;var cwr=x8A[y4G](this[J8d][T2T][r1d],this[r1d]),mlt=x8A[G3d](panel[n1p][t4Z],this[t4Z]),spx=this[J8d][W7m](this[W9d],panel[(x8A.d5Z+g2S+D4Z+J5d)]),spy=this[J8d][m9d](panel,this[J8d][r5p](this[W9d],panel[i8C]),this[R0T]),arrPoints=[],color=this[G0S],width=this.lineWidth;if(this[O4D]){color=this[J8d][i5S]((I4Z+O4T+k0p+h0V+q0T+Z8T+f3C+D84+c1d+B4S+x8A.c7S));}
var parameters={pattern:this[Z6l],lineWidth:width}
;for(var n=0;x8A[h3D](n,this[M3C].length);n++){var x0=x8A[M44](intvl,cwr,(this[(c6S+F1p+M7S)][n][0]))+spx,y0=x8A[C6m](mlt,(this[M3C][n][1]))+spy;arrPoints[K6T](x0,y0);}
if(x8A[a6d](arrPoints.length,0))return ;if(x8A[N34](this[S0T],0)){this[J8d][g1Z](arrPoints,color,this[W0d],context,panel,parameters);}
else{this[J8d][g6d](arrPoints,this[S0T],color,this[W0d],context,true,parameters);}
}
;STX.Drawing.freeform.prototype.adjust=function(){var g5p="x8W",K0G="K8W",A2p="v8W",R6S="G8W",a5d="ckFr",V0D="o8W",U6G="dl",r14="Q8W",t8p="z8W",t64="erva",A1C="iY",Q4m="u8W",E9p="ode",panel=this[(I4Z+O4T)][j8m][this[Z4G]];if(!panel)return ;var p0=[this[X0d][0],this[X0d][1]];this[M3C]=[p0];this[(G0T+f4T+r3S)]=this[X0d][0];this[j7l]=this[(T4S+E9p+M7S)][0];this[W6C]=this[X0d][1];this[s3l]=this[X0d][1];for(var n=2;x8A[Q4m](n,this[X0d].length);n+=2){var p1=[this[(X0d)][n],this[X0d][n+1]];this[M3C][K6T](p1);this[P4C]=Math[e1Z](this[P4C],p1[0]);this[j7l]=Math[H0S](this[j7l],p1[0]);this[W6C]=Math[H0S](this[W6C],p1[1]);this[(s3l)]=Math[e1Z](this[(g2S+A1C)],p1[1]);}
var intvl=this[A6l](this[p0l],this[J8d][T2T][(q0T+T4S+x8A.n9S+t64+v4S)],this[f9T],this[J8d][T2T][f9T],this[W9d],panel[i8C][B3p]);if(x8A[t8p](intvl,0))return ;var cwr=x8A[r14](this[J8d][T2T][(x8A.d5Z+D4Z+T4S+U6G+m5Z+t9S+t6l+x8A.n9S+g2S)],this[r1d]),mlt=x8A[V0D](panel[(H6T+x8A.X8m+O4T+S4d)][t4Z],this[t4Z]),spx=this[J8d][W7m](this[W9d],panel[i8C]),spy=this[J8d][m9d](panel,this[J8d][(x8A.n9S+q0T+a5d+G5D+i7Z+D4Z+A7S)](this[W9d],panel[i8C]),this[(R0T)]);this[P4C]=this[J8d][K9S](Math[F2S](x8A[R6S](intvl,cwr,(this[P4C])))+spx,panel[i8C]);this[j7l]=this[J8d][K9S](Math[B1T](x8A[A2p](intvl,cwr,(this[j7l])))+spx,panel[i8C]);this[W6C]=this[J8d][j8G](Math[F2S](x8A[K0G](mlt,(this[W6C])))+spy,panel);this[(g2S+q0T+n8S)]=this[J8d][j8G](Math[B1T](x8A[g5p](mlt,(this[s3l])))+spy,panel);}
;STX.Drawing.freeform.prototype.serialize=function(){return {name:this[W0d],pnl:this[Z4G],col:this[G0S],ptrn:this[Z6l],lw:this.lineWidth,cw:Number(this[r1d][o8G](4)),mlt:Number(this[t4Z][o8G](4)),d0:this[(W4Z+s9p)],v0:this[R0T],int:this[p0l],pd:this[f9T],nodes:this[(I0V+M7S)]}
;}
;STX.Drawing.freeform.prototype.reconstruct=function(stx,obj){var Y0G="pd",Z1p="mlt",r5l="cw";this[J8d]=stx;this[G0S]=obj[n5T];this[Z4G]=obj[t5p];this[Z6l]=obj[e7C];this.lineWidth=obj["lw"];this[r1d]=obj[r5l];this[t4Z]=obj[Z1p];this[W9d]=obj[W9d];this[R0T]=obj[(U4T+s9p)];this[p0l]=obj[c1m];this[f9T]=obj[Y0G];this[X0d]=obj[X0d];this[h0S]();}
;STX[l4T][I5T]=function(){this[W0d]=I5T;this[b5S]=[];this[x5Z]=x8A.n0Z;this[T0d]=G1d;}
;STX[l4T][I5T][d0Z](STX[l4T][Z04]);STX.Drawing.projection.prototype.render=function(context){var U1G="8W",g3d="W8W",A3G="C8W",panel=this[J8d][j8m][this[(Q7G+E6S+J3m+w5S+m5Z)]];if(!panel)return ;if(x8A[A3G](this[b5S].length,2))return ;var color=this[G0S],hcolor=this[J8d][i5S]("stx_highlight_vector"),parameters={pattern:this[Z6l],lineWidth:this.lineWidth}
,x0=this[J8d][W7m](this[b5S][0][0],panel[i8C]),y0=this[J8d][P2l](this[(D4Z+x8A.c7S+x8A.c7S)][0][1],panel);for(var i=1;x8A[g3d](i,this[b5S].length);i++){var x1=this[J8d][W7m](this[b5S][i][0],panel[i8C]),y1=this[J8d][P2l](this[(b5S)][i][1],panel),c=color;if(this[O4D]&&x8A[(C7Z+U1G)](i,this[x5Z]))c=hcolor;this[J8d][X9d](x0,x1,y0,y1,c,"segment",context,true,parameters);x0=x1;y0=y1;}
}
;STX.Drawing.projection.prototype.click=function(context,tick,value){var N0V="T1W",t5d="t1W",O4S="S8W",panel=this[(M7S+E3T)][j8m][this[Z4G]];if(!panel)return ;this[o24]();if(x8A[O4S](this[b5S].length,0)){var q=this[(I4Z+O4T)][i8C][O9p][x8A[t5d](this[J8d][i8C][O9p].length,1)];this[b5S][K6T]([q[o0D],q[Y6C]]);this[m9m]=this[J8d][i8C][z44];this[(f0T+x8A.c7S+m5Z+m5Z+v6T+K3G+q0T+G9C)]=this[J8d][i8C][O9p].length;}
else{if(x8A[N0V](tick,this[J8d][r5p](this[b5S][this[b5S].length-2][0],panel[i8C])))return false;}
this[b5S][K6T]([this[J8d][s8m](tick,panel[i8C]),value]);return false;}
;STX.Drawing.projection.prototype.move=function(context,tick,value){var k8V="freezeTick",K0m="w1W",k5C="J1W",p4D="nfig",panel=this[J8d][(q7d+v4l)][this[Z4G]];if(!panel)return ;this[(x8A.d5Z+e4D+H6T+J6C+p4D)]();this[b5S][x8A[k5C](this[b5S].length,1)]=[this[J8d][s8m](tick,panel[i8C]),value];var stx=this[J8d];stx[v9m]();this[J8d][i8C][(M7S+x8A.d5Z+A0G)]=this[m9m]+(x8A[K0m](this[J8d][i8C][O9p].length,this[k8V]));this[J8d][s2Z]();this[E1d](context);}
;STX.Drawing.projection.prototype.intersected=function(tick,value,box){var A9D="ox",n3D="O1W",a7D="R1W",y5G="P1W",panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;for(var i=1;x8A[y5G](i,this[b5S].length);i++){var x0=this[J8d][r5p](this[b5S][x8A[a7D](i,1)][0],panel[i8C]),x1=this[J8d][r5p](this[b5S][i][0],panel[i8C]),y0=this[b5S][x8A[n3D](i,1)][1],y1=this[b5S][i][1],inter=STX[(Y4Z+A9D+t6T+m5Z+x8A.c7S+M7S+D8G+x8A.n9S+M7S)](box[h4p],box[C0l],box[Z4p],box[q8l],x0,y0,x1,y1,"segment");if(inter){this[x5Z]=i;return true;}
}
return false;}
;STX.Drawing.projection.prototype.measure=function(){var M0m="e1W",b5Z="f1W",N7G="v1W",x0D="X1W",f3d="sure",D0C="Mea",w0G="ters",W6l="i1W",x0C="B1W",X7C="omDa",N1D="elN",panel=this[J8d][j8m][this[(q7d+N1D+N0Z+m5Z)]];if(!panel)return ;if(this[x5Z]){var x0=this[J8d][(x8A.n9S+q0T+x8A.d5Z+T2S+B6Z+X7C+A7S)](this[b5S][x8A[x0C](this[x5Z],1)][0],panel[(x8A.d5Z+l5d+x8A.n9S)]),x1=this[J8d][r5p](this[(D4Z+N5d)][this[x5Z]][0],panel[i8C]),y0=this[b5S][x8A[W6l](this[(J8V+w0G+m5Z+x8A.d5Z+x8A.n9S)],1)][1],y1=this[(x8Z+x8A.c7S)][this[x5Z]][1];this[J8d][(r1Z+x8A.n9S+D0C+f3d)](y0,y1,x0,x1);}
else{var x0=this[J8d][r5p](this[b5S][x8A[x0D](this[b5S].length,2)][0],panel[i8C]),x1=this[J8d][r5p](this[b5S][x8A[N7G](this[b5S].length,1)][0],panel[(x8A.J5m+x8A.c7S+x8A.n9S)]),y0=this[(b5S)][x8A[b5Z](this[b5S].length,2)][1],y1=this[b5S][x8A[M0m](this[b5S].length,1)][1];this[J8d][y4D](y0,y1,x0,x1);}
}
;STX.Drawing.projection.prototype.adjust=function(){}
;STX.Drawing.projection.prototype.abort=function(force){var I8p="M1W",a5G="slice",i7T="g1W";function killme(stx,result){var F3T="teDat";stx[(b2l+m5Z+D4Z+F3T+j6S+m5Z+x8A.n9S)]();stx[s2Z]();return result;}
if(force){this[b5S]=[];return killme(this[J8d],false);}
if(this[O4D]){if(x8A[i7T](this[x5Z],1)){this[b5S]=[];return killme(this[J8d],false);}
this[b5S]=this[b5S][a5G](0,this[x5Z]);return killme(this[J8d],true);}
else{this[b5S][(E5T)]();if(x8A[I8p](this[b5S].length,1)){this[J8d][i8C][z44]=this[m9m];return killme(this[J8d],false);}
this[J8d][t2Z](this);this[J8d][C4Z]("vector");return killme(this[(I4Z+O4T)],false);}
}
;STX.Drawing.projection.prototype.reconstruct=function(stx,obj){this[J8d]=stx;this[G0S]=obj[n5T];this[(Q7G+q1m+v4S+i1Z+D4Z+i04)]=obj[t5p];this[Z6l]=obj[e7C];this.lineWidth=obj["lw"];this[b5S]=obj[b5S];}
;STX.Drawing.projection.prototype.serialize=function(){return {name:this[W0d],pnl:this[(c6S+d7l+J3m+i04)],col:this[G0S],ptrn:this[Z6l],lw:this.lineWidth,arr:this[(b5S)]}
;}
;STX[l4T][y0D]=function(){this[W0d]=y0D;this[b4l]=O7T;}
;STX[l4T][y0D][d0Z](STX[l4T][Z04]);STX.Drawing.measure.prototype.click=function(context,tick,value){this[o24]();if(!this[i7l]){this[y4p]=[tick,value];this[i7l]=G1d;return O7T;}
this[J8d][B1p]();this[i7l]=O7T;return G1d;}
;STX[l4T][s6G]=function(){this[W0d]=s6G;}
;STX[l4T][s6G][d0Z](STX[l4T][t7m]);STX.Drawing.ellipse.prototype.render=function(context){var u3m="eCi",b1m="N3W",z3m="G3W",o2C="o3W",N6C="Q3W",z9T="z3W",p0Z="u3W",k5G="q3W",k5D="d3W",R1S="m3W",d6C="a3W",e9T="A3W",u4Z="U1W",panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;var x0=this[J8d][r6T](this[y4p][0],panel[i8C]),x1=this[J8d][r6T](this[H4p][0],panel[i8C]),y0=this[J8d][m9d](panel,this[y4p][0],this[y4p][1]),y1=this[J8d][m9d](panel,this[H4p][0],this[(c6S+H9p)][1]),left=x8A[(c7Z+H9p+t9S)](x0,(x1-x0)),right=x1,middle=y0,bottom=y1,top=x8A[u4Z](y0,(y1-y0)),weight=x8A[e9T]((bottom-top),6),lineWidth=this.lineWidth;if(!lineWidth)lineWidth=1.1;var edgeColor=this[(x8A.d5Z+U5D+A3D)];if(x8A[d6C](edgeColor,"auto")||STX[T4l](edgeColor))edgeColor=this[(M7S+E3T)][k3p];if(this[O4D]){edgeColor=this[J8d][i5S]("stx_highlight_vector");if(x8A[R1S](lineWidth,.1))lineWidth=1.1;}
var fillColor=this[o84];context.beginPath();context.moveTo(left,middle);context.bezierCurveTo(left,bottom+weight,right,bottom+weight,right,middle);context.bezierCurveTo(right,x8A[k5D](top,weight),left,x8A[k5G](top,weight),left,middle);if(fillColor&&!STX[T4l](fillColor)&&x8A[p0Z](fillColor,"auto")){context.fillStyle=fillColor;context.globalAlpha=.2;context.fill();context.globalAlpha=1;}
if(edgeColor&&x8A[z9T](this[Z6l],"none")){context.strokeStyle=edgeColor;context.lineWidth=lineWidth;if(context[V7C]){var lineDashArray=[];if(x8A[N6C](this[Z6l],"dotted"))lineDashArray=[lineWidth,lineWidth];else if(x8A[o2C](this[Z6l],"dashed"))lineDashArray=[x8A[z3m](lineWidth,5),x8A[(x8A.c7S+U3p+t9S)](lineWidth,5)];context[V7C](lineDashArray);context[h9m]=0;}
context.stroke();}
context.closePath();if(this[O4D]){var p1Fill=x8A[b1m](this[X8d],"p1")?true:false;this[(B6S+x8A.n9S+x8A.n9S+v4S+u3m+x8A.c7S+a9C+m5Z)](context,x1,y1,p1Fill);}
}
;STX.Drawing.ellipse.prototype.intersected=function(tick,value,box){var q54="H3W",H74="y3W",r2T="b3W",o34="I3W",y0G="L3W",r4l="p3W";this[X8d]=l1d;if(!this[y4p]||!this[H4p])return l1d;if(this[(C8l+c1m+N3Z+b6p+t9D+M7S+m5Z+q8C+H2Z)](this[H4p][x8A.n0Z],this[H4p][x8A.v0Z],box)){this[O4D]=H4p;this[X8d]=H4p;return {action:Z7C,point:H4p}
;}
var left=x8A[r4l](this[y4p][x8A.n0Z],(this[H4p][x8A.n0Z]-this[y4p][x8A.n0Z])),right=this[H4p][x8A.n0Z],bottom=this[(c6S+H9p)][x8A.v0Z],top=x8A[y0G](this[y4p][x8A.v0Z],(this[H4p][x8A.v0Z]-this[y4p][x8A.v0Z]));if(x8A[o34](tick,Math[(p54+O4T)](left,right))||x8A[r2T](tick,Math[e1Z](left,right)))return O7T;if(x8A[H74](value,Math[(w5S+r9Z)](top,bottom))||x8A[q54](value,Math[e1Z](top,bottom)))return O7T;this[O4D]=G1d;return {action:f2p,p0:STX[s2G](this[y4p]),p1:STX[(a9C+F4D+m5Z)](this[H4p]),tick:tick,value:value}
;}
;STX.Drawing.ellipse.prototype.copyConfig=function(){var V5m="ntC";this[G0S]=this[J8d][E1p][(x8A.d5Z+q14+x8A.c7S+m5Z+V5m+U5D+A3D)];this[o84]=this[J8d][E1p][o84];this.lineWidth=this[J8d][E1p].lineWidth;this[Z6l]=this[J8d][E1p][Z6l];}
;STX.Drawing.ellipse.prototype.reconstruct=function(stx,obj){this[J8d]=stx;this[(x8A.d5Z+B4S+G0T+x8A.c7S)]=obj[n5T];this[o84]=obj[(f0T+x8A.d5Z)];this[Z4G]=obj[t5p];this[Z6l]=obj[e7C];this.lineWidth=obj["lw"];this[W9d]=obj[W9d];this[I3d]=obj[I3d];this[R0T]=obj[(R0T)];this[j0T]=obj[j0T];this[h0S]();}
;STX.Drawing.ellipse.prototype.serialize=function(){return {name:this[W0d],pnl:this[Z4G],col:this[G0S],fc:this[o84],ptrn:this[Z6l],lw:this.lineWidth,d0:this[W9d],d1:this[I3d],v0:this[R0T],v1:this[j0T]}
;}
;STX[l4T][r9T]=function(){this[W0d]=r9T;}
;STX[l4T][r9T][d0Z](STX[l4T][t7m]);STX[l4T][r9T][Y3G]={"trend":x8A.n9S,"color":x8A.d5Z,"parameters":c6S,"pattern":F7G,"opacity":B4S,"lineWidth":n74,"level":v4S,"extendLeft":m5Z,"printLevels":Q8l}
;STX.Drawing.fibonacci.prototype.copyConfig=function(){this[G0S]=this[(I4Z+O4T)][E1p][I8C];this.lineWidth=this[J8d][E1p].lineWidth;this[Q9p]=this[J8d][E1p][r9T];}
;STX.Drawing.fibonacci.prototype.setOuter=function(){var Q54="V9W",f7S="D9W",d2p="h9W",g4T="l9W",K5T="c9W",T0p="k9W",R7C="ameter",q7Z="Y9W",W0G="Z9W",Z8m="j9W";this[f8d]={p0:STX[s2G](this[y4p]),p1:STX[s2G](this[H4p])}
;var y0=this[y4p][1],y1=this[H4p][1],x0=this[y4p][0],x1=this[H4p][0],top=Math[e1Z](y1,y0),bottom=Math[H0S](y1,y0),height=x8A[Z8m](bottom,top),isUpTrend=x8A[W0G]((y1-y0)/(x1-x0),0),min=0,max=1;for(var i=0;x8A[q7Z](i,this[(c6S+x8Z+R7C+M7S)][U0m].length);i++){var fib=this[Q9p][U0m][i];if(x8A[T0p](fib[U5l],min)&&x8A[K5T](fib[U5l],max))continue;var val=isUpTrend?x8A[g4T](bottom,height*fib[U5l]):top+x8A[d2p](height,fib[U5l]),x=STX[A6Z]({x0:x0,x1:x1,y0:y0,y1:y1}
,val);if(x8A[f7S](fib[U5l],min)){min=fib[U5l];isUpTrend?(this[f8d][y4p][1]=val):(this[(B4S+p9S+x8A.n9S+t9D)][H4p][1]=val);isUpTrend?(this[f8d][y4p][0]=x):(this[f8d][H4p][0]=x);}
else if(x8A[Q54](fib[U5l],max)){max=fib[U5l];isUpTrend?(this[f8d][H4p][1]=val):(this[f8d][y4p][1]=val);isUpTrend?(this[f8d][H4p][0]=x):(this[(V94+m5Z+x8A.c7S)][y4p][0]=x);}
}
}
;STX.Drawing.fibonacci.prototype.click=function(context,tick,value){var A8Z="lC",Z7G="cident",panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;this[o24]();if(!this[i7l]){this[y4p]=[tick,value];this[(R0T)]=value;this[i7l]=G1d;return O7T;}
if(this[(D4Z+x8A.d5Z+Z7G+D4Z+A8Z+v4S+q0T+x8A.d5Z+T2S)](tick,value))return this[b4l];this[H4p]=[tick,value];this[j0T]=value;this[W9d]=this[J8d][s8m](this[y4p][x8A.n0Z],panel[i8C]);this[I3d]=this[(I4Z+O4T)][s8m](this[H4p][x8A.n0Z],panel[i8C]);this[g4Z]();this[Q9p]=STX[s2G](this[Q9p]);this[i7l]=O7T;return G1d;}
;STX.Drawing.fibonacci.prototype.render=function(context){var x9l="littleCircle",Q5d="eCircle",B6m="litt",r0C="g7W",o9T="e7W",Z6d="ted",Q6p="f7W",k7Z="sect",N5Z="xInter",J5p="v7W",S64="X7W",p7G="i7W",o2Z="B7W",g2T="7W",I4S="R7W",C8C="P7W",o8V="dLe",c8d="ten",y7d="w7W",W8S="J7W",Z5C="eve",n24="T7W",W1D="t7W",j6T="printValues",h2T="S9W",u8Z="printLevels",k4T="ram",B6p="F9W",V0C="W9W",z2m="C9W",a44="x9W",N4l="MIN_VALUE",M5T="_VALU",b6m="K9W",B1S="trend",D4T="n9W",E34="s9W",panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;var yAxis=panel[n1p];if(!this[H4p])return ;var x0=this[J8d][r6T](this[y4p][0],panel[i8C]),x1=this[J8d][r6T](this[H4p][0],panel[(x8A.d5Z+l5d+x8A.n9S)]),y0=this[J8d][m9d](panel,this[y4p][0],this[y4p][1]),y1=this[J8d][m9d](panel,this[(H4p)][0],this[H4p][1]),top=Math[e1Z](y1,y0),bottom=Math[H0S](y1,y0),height=x8A[E34](bottom,top),isUpTrend=x8A[D4T]((y1-y0)/(x1-x0),0),trendLineColor=this[Q9p][B1S][G0S];if(x8A[b6m](trendLineColor,"auto")||STX[T4l](trendLineColor))trendLineColor=this[(M7S+x8A.n9S+O4T)][k3p];if(this[O4D]){trendLineColor=this[(M7S+x8A.n9S+O4T)][i5S]("stx_highlight_vector");}
context.textBaseline="middle";var w=context.measureText("161.8%").width,minX=Number[(q0G+r3S+M5T+c7Z)],minY=Number[v9l],maxX=Number[N4l],maxY=Number[N4l],txtColor=this[G0S];if(x8A[a44](txtColor,(D4Z+p9S+x8A.n9S+B4S))||STX[T4l](txtColor))txtColor=this[J8d][k3p];context.fillStyle=txtColor;for(var i=0;x8A[z2m](i,this[Q9p][U0m].length);i++){var fib=this[Q9p][U0m][i],y=isUpTrend?x8A[V0C](bottom,height*fib[U5l]):top+x8A[B6p](height,fib[U5l]);y=Math[J8C](y);var x=STX[A6Z]({x0:x0,x1:x1,y0:y0,y1:y1}
,y),farX=this[J8d][i8C].width;if(this[(Q7G+k4T+m5Z+x8A.n9S+t9D+M7S)][u8Z]){var txt=(x8A[h2T](fib[U5l],100))+"%";farX-=w;context.fillText(txt,farX,y);farX-=5;}
else if(this[Q9p][j6T]){if(x8A[W1D](x,this[J8d][i8C].width)){var v0=this[y4p][1],v1=this[H4p][1],price=v0+(x8A[n24]((v1-v0),fib[(v4S+Z5C+v4S)]));if(panel[i8C][I2h])price=panel[i8C][I2h](this[(M7S+x8A.n9S+O4T)],panel[i8C],price);if(yAxis[I5D]){price=yAxis[I5D](this[J8d],panel,price);}
else{price=this[J8d][w44](price,panel);}
if(x8A[W8S](context,this[(M7S+E3T)][i8C][b6D]))this[J8d][r2p]();this[J8d][z0D](panel,price,y,txtColor,null,context);if(x8A[y7d](context,this[J8d][i8C][(x8A.d5Z+g34+Z0D+x8A.n9S)]))this[J8d][a94](panel[W0d]);}
}
var nearX=this[Q9p][(m5Z+O4T+c8d+o8V+f0T+x8A.n9S)]?0:x,fibColor=fib[G0S];if(x8A[C8C](fibColor,"auto")||STX[T4l](fibColor))fibColor=this[G0S];if(x8A[I4S](fibColor,"auto")||STX[T4l](fibColor))fibColor=this[J8d][k3p];this[J8d][X9d](nearX,farX,y,y,fibColor,"segment",context,panel,fib[Q9p]);if(x8A[(W1Z+g2T)](y,minY)){minX=x;minY=y;}
if(x8A[o2Z](y,maxY)){maxX=x;maxY=y;}
}
for(var level in {0:0,1:1}
){var y=isUpTrend?x8A[p7G](bottom,height*level):top+x8A[S64](height,level);y=Math[J8C](y);if(x8A[J5p](y,minY)){minX=STX[(N5Z+k7Z+q0T+B4S+T4S)]({x0:x0,x1:x1,y0:y0,y1:y1}
,y);minY=y;}
if(x8A[Q6p](y,maxY)){maxX=STX[A6Z]({x0:x0,x1:x1,y0:y0,y1:y1}
,y);maxY=y;}
}
this[J8d][X9d](minX,maxX,minY,maxY,trendLineColor,"segment",context,panel,this[Q9p][B1S][Q9p]);if(this[(Q8G+Z8T+g2S+v4S+G6l+g2S+Z6d)]){var p0Fill=x8A[o9T](this[X8d],"p0")?true:false,p1Fill=x8A[r0C](this[X8d],"p1")?true:false;this[(B6m+v4S+Q5d)](context,x0,y0,p0Fill);this[x9l](context,x1,y1,p1Fill);}
}
;STX.Drawing.fibonacci.prototype.reposition=function(context,repositioner,tick,value){STX.Drawing.BaseTwoPoint.prototype.reposition.apply(this,arguments);this[h0S]();}
;STX.Drawing.fibonacci.prototype.intersected=function(tick,value,box){var U7D="highl",s4D="pointIntersection",x2h="E7W",M6m="orizont",u5m="M7W",p94="boxIntersects";if(!this[y4p]||!this[H4p])return l1d;if(STX[p94](box[h4p],box[C0l],box[Z4p],box[q8l],this[f8d][(y4p)][x8A.n0Z],this[f8d][y4p][x8A.v0Z],this[f8d][H4p][x8A.n0Z],this[f8d][H4p][x8A.v0Z],Z04)){if(x8A[u5m](this[W0d],(g2S+M6m+E3S))&&x8A[x2h](this[W0d],w7D)){if(this[s4D](this[y4p][x8A.n0Z],this[y4p][x8A.v0Z],box)){this[(U7D+G6l+g2S+x8A.n9S+m5Z+W4Z)]=y4p;this[X8d]=y4p;return {action:Z7C,point:y4p}
;}
else if(this[s4D](this[H4p][x8A.n0Z],this[H4p][x8A.v0Z],box)){this[(g2S+G6l+g2S+B6S+Z8T+g2S+x8A.n9S+u6D)]=(c6S+H9p);this[X8d]=(H4p);return {action:Z7C,point:H4p}
;}
}
this[O4D]=G1d;return {action:f2p,p0:STX[s2G](this[y4p]),p1:STX[s2G](this[H4p]),tick:tick,value:value}
;}
return l1d;}
;STX.Drawing.fibonacci.prototype.reconstruct=function(stx,obj){var t0G="reverseObject",h4l="ield",K8l="pla";obj=STX[(C1d+K8l+x8A.d5Z+m5Z+C7Z+h4l+M7S)](obj,STX[t0G](STX[l4T][r9T][Y3G]));this[J8d]=stx;this[Q9p]=obj[Q9p];if(!this[Q9p])this[Q9p]=STX[s2G](this[(J8d)][E1p][r9T]);this[G0S]=obj[n5T];this[Z4G]=obj[t5p];this[W9d]=obj[W9d];this[I3d]=obj[I3d];this[R0T]=obj[R0T];this[(j0T)]=obj[j0T];this[h0S]();}
;STX.Drawing.fibonacci.prototype.adjust=function(){var p3d="elNa",panel=this[J8d][j8m][this[(q7d+p3d+i04)]];if(!panel)return ;this[y4p]=[this[J8d][r5p](this[W9d],panel[i8C]),this[R0T]];this[H4p]=[this[J8d][r5p](this[I3d],panel[i8C]),this[(j0T)]];this[g4Z]();}
;STX.Drawing.fibonacci.prototype.serialize=function(){var obj={name:this[(W0d)],parameters:this[Q9p],pnl:this[Z4G],col:this[G0S],d0:this[W9d],d1:this[I3d],v0:this[R0T],v1:this[j0T]}
;return STX[L2T](obj,STX[l4T][r9T][Y3G]);}
;STX[l4T][f7d]=function(){var L0d="lcurv",r9l="bel";this[W0d]=(r9l+L0d+m5Z);this[x6S]=[];this[N9Z]=O7T;this[T0d]=G1d;}
;STX[l4T][f7d][d0Z](STX[l4T][t7m]);STX.Drawing.bellcurve.prototype.click=function(context,tick,value){var panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;this[o24]();if(!this[i7l]){this[y4p]=[tick,value];this[i7l]=G1d;return O7T;}
if(this[J94](tick,value))return this[b4l];this[H4p]=[tick,value];this[W9d]=this[J8d][s8m](this[y4p][x8A.n0Z],panel[(G7C+S4S)]);this[I3d]=this[J8d][s8m](this[H4p][x8A.n0Z],panel[i8C]);this[N9Z]=G1d;this[i7l]=O7T;return G1d;}
;STX.Drawing.bellcurve.prototype.profileRange=function(profile,x,right){var L3T="fileRa",B6d="r6W",C7C="G6W",Y04="o6W",X9Z="Q6W",E3D="z6W",W9G="ang",a8V="ile",S6m="of",z2Z="q6W",B6T="d6W",C7l="m6W",f2G="a6W",V3d="A6W",a1d="U7W";if(x8A[a1d](x,profile.length)){profile[x]=[];profile[x][0]=right;return ;}
for(var y=0,l=profile[x].length;x8A[V3d](y,l);y++){var left=profile[x][y];if(x8A[f2G](left[m1Z],right[m1Z])&&x8A[C7l](left[l8p],right[l8p])){this[g6m](profile,x+1,right);return ;}
else if(x8A[B6T](right[m1Z],left[m1Z])&&x8A[z2Z](right[l8p],left[m1Z])&&x8A[(p9S+f1m+t9S)](right[l8p],left[l8p])){this[(t3l+S6m+a8V+r0Z+W9G+m5Z)](profile,x+1,{"High":left[m1Z],"Low":right[l8p]}
);right={"High":right[(I6Z+G6l+g2S)],"Low":left[m1Z]}
;}
else if(x8A[E3D](right[l8p],left[l8p])&&x8A[X9Z](right[m1Z],left[l8p])&&x8A[Y04](right[m1Z],left[m1Z])){this[g6m](profile,x+1,{"High":right[(I6Z+G6l+g2S)],"Low":left[l8p]}
);right={"High":left[l8p],"Low":right[l8p]}
;}
else if(x8A[C7C](left[m1Z],right[m1Z])&&x8A[B6d](left[l8p],right[(C9Z+B4S+f4T)])){this[(c6S+x8A.c7S+B4S+L3T+T4S+Z8T+m5Z)](profile,x,{"High":left[l8p],"Low":right[l8p]}
);this[g6m](profile,x+1,{"High":left[m1Z],"Low":left[l8p]}
);right={"High":right[m1Z],"Low":left[(m1Z)]}
;}
}
profile[x][y]=right;}
;STX.Drawing.bellcurve.prototype.render=function(context){var H3l="c4W",s4C="k4W",b7G="Y4W",y5T="Z4W",H8Z="timer",r4d="j4W",o3l="pixel";function calculateProfile(self,panel){return function(){var A7T="H6W",s0D="I6W",Y7m="L6W",W9p="6W",I7C="N6W";self[x6S]=[];var sorted=[],tick0=Math[e1Z](self[(c6S+s9p)][0],self[H4p][0]),tick1=Math[H0S](self[y4p][0],self[H4p][0]);if(x8A[I7C](tick1-tick0,3000))return ;for(var i=tick0;x8A[(c6S+W9p)](i,tick1);i++){if(x8A[Y7m](i,0)||x8A[s0D](i,panel[i8C][O9p].length))continue;var prices=panel[i8C][O9p][i];sorted[K6T]({"High":prices[m1Z],"Low":prices[l8p]}
);}
function sortFunc(a,b){var E8G="y6W",M6D="b6W";if(x8A[M6D](a[l8p],b[l8p]))return -1;if(x8A[E8G](a[l8p],b[(C9Z+c9D)]))return 1;return 0;}
sorted[q7S](sortFunc);for(var i=0;x8A[A7T](i,sorted.length);i++){self[g6m](self[x6S],0,sorted[i]);}
}
;}
if(!this[H4p])return ;var panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;this[h4p]=this[J8d][r6T](this[y4p][0],panel[i8C]);this[Z4p]=this[J8d][(o3l+B6Z+G5D+r4m)](this[(c6S+H9p)][0],panel[i8C]);if(x8A[r4d](this[x6S].length,0)||!this[N9Z]){if(this[H8Z])clearTimeout(this[H8Z]);this[H8Z]=setTimeout(calculateProfile(this,panel),20);}
if(this[O4D]){context.fillStyle=this[J8d][i5S]("stx_highlight_vector");context.globalAlpha=.5;}
else{context.fillStyle=this[G0S];if(STX[T4l](context.fillStyle))context.fillStyle=this[J8d][k3p];context.globalAlpha=.5;}
var cw=this[J8d][T2T][r1d];context.beginPath();for(var x=0;x8A[y5T](x,this[x6S].length);x++){for(var y=0;x8A[b7G](y,this[x6S][x].length);y++){var range=this[x6S][x][y],y0=this[J8d][b5p](range[m1Z],panel),y1=this[J8d][b5p](range[l8p],panel),x0=Math[e1Z](this[(h4p)],this[Z4p])+x8A[s4C](x,cw),x1=x0+Math[J8C](x8A[H3l](cw,.75));context.moveTo(x0,y0);context.lineTo(x1,y0);context.lineTo(x1,y1);context.lineTo(x0,y1);context.lineTo(x0,y0);}
}
context.fill();context.closePath();context.globalAlpha=1;}
;STX.Drawing.bellcurve.prototype.intersected=function(tick,value,box){var j2C="h4W",n2D="l4W";if(x8A[n2D](tick,Math[H0S](this[y4p][x8A.n0Z],this[H4p][x8A.n0Z]))&&x8A[j2C](tick,Math[e1Z](this[y4p][x8A.n0Z],this[H4p][x8A.n0Z])))return G1d;return O7T;}
;STX.Drawing.bellcurve.prototype.copyConfig=function(){var i2m="ntCo",T4m="met";this[G0S]=this[J8d][(x8A.d5Z+q14+x8A.c7S+P6T+C1S+m5Z+q8C+B4S+x8A.c7S+c3Z+D4Z+x8A.c7S+D4Z+T4m+m5Z+x8A.c7S+M7S)][(E4l+N5d+m5Z+i2m+v4S+B4S+x8A.c7S)];}
;STX.Drawing.bellcurve.prototype.adjust=function(){var panel=this[J8d][j8m][this[(q7d+N5D+J3m+w5S+m5Z)]];if(!panel)return ;this[y4p]=[this[J8d][r5p](this[W9d],panel[i8C]),x8A.n0Z];this[H4p]=[this[J8d][r5p](this[I3d],panel[(G7C+x8Z+x8A.n9S)]),x8A.n0Z];}
;STX.Drawing.bellcurve.prototype.reconstruct=function(stx,obj){var P3D="cked",e3p="twoCli",l3m=3351475,M9m=8404858,a7Z=324830592,O3p=663781301;this[J8d]=stx;this[G0S]=obj[n5T];this[Z4G]=obj[t5p];this[W9d]=obj[W9d];this[I3d]=obj[I3d];this[h0S]();var p2h=-O3p,e2h=-a7Z,K2h=x8A.X0Z;for(var f2h=x8A.v0Z;x8A.L5h.g5h(f2h.toString(),f2h.toString().length,M9m)!==p2h;f2h++){sd.editFunction();this.savePanels();this.setCrosshairColors();addSeriesData(this);gradient.addColorStop(x8A.n0Z,STX.hexToRgba(color,G9T));K2h+=x8A.X0Z;}
if(x8A.L5h.g5h(K2h.toString(),K2h.toString().length,l3m)!==e2h){fields.push((x8A.s0m+v4S+p1D+m5Z));return P3x==c3x;}
this[(e3p+P3D)]=G1d;}
;STX.Drawing.bellcurve.prototype.serialize=function(){return {name:this[W0d],pnl:this[Z4G],col:this[G0S],d0:this[W9d],d1:this[I3d]}
;}
;STX[y1p]=function(){}
;H(O7T);STX[y1p][e04]=function(stx,chart,price){var K74="sel",V6l="D4W";return x8A[V6l](Math[J8C](((price-STX[y1p][(Y0V+K74+q0T+q1m)])/STX[y1p][R0V]*d8l)*r7T),r7T);}
;STX[y1p][d8V]=function(stx,chart,percent){var B6l="V4W";return x8A[B6l](STX[y1p][R0V],(x8A.v0Z+(percent/d8l)));}
;STX[y1p][S9D]=function(lhs,rhs){var Y4C="s4W";return x8A[Y4C](lhs,rhs);}
;STX[y1p][i9m]=function(stx,chart){var I3p="u2W",m9D="q2W",x0l="d2W",O6T="m2W",o5Z="A2W",n1D="U5W",X8C="E5W",H0C="M5W",Q8D="g5W",e6d="e5W",R0G="f5W",o0T="v5W",N1S="X5W",A2G="transformOutputs",O9Z="Outpu",U8Z="sf",a2T="rison",R9p="i5W",y0p="B5W",D3S="5W",Y1p="R5W",o0Z="P5W",q6T="w5W",h1p="J5W",L7m="T5W",t24="t5W",s8G="S4W",Z7S="F4W",K7p="W4",D5S="C4W",L8D="x4W",b2Z="K4W",d5D="n4W",e6T="vClose",g8l="qP";if(!chart[Y94])return false;var fields=[];for(var field in chart[q3d]){if(chart[q3d][field][Q9p][Y94]){fields[K6T](field);}
}
var priceFields=["Close","Open",(I6Z+q0T+Z8T+g2S),"Low",(q0T+g8l+C1d+e6T)];chart[s0Z]=[];var firstQuote=null,firstTick=x8A[d5D](chart[O9p].length,chart[z44]),lastTick=firstTick+chart[r7l],stopPointer=0,stops=[];for(var i=0;x8A[b2Z](i,stx[F0l].length);i++){var drawing=stx[F0l][i];if(x8A[L8D](drawing[W0d],"comparison_stop"))if(x8A[D5S](drawing[l5l],firstTick)&&x8A[(K7p+t9S)](drawing[l5l],lastTick))stops[K6T](drawing[l5l]);}
stops[q7S](STX[y1p][S9D]);for(var i=0;x8A[Z7S](i,chart[r7l]);i++){position=firstTick+i;if(x8A[s8G](position,chart[O9p].length)&&x8A[t24](position,0)){var quote=chart[O9p][position];if(!firstQuote){firstQuote=STX[s2G](quote);}
if(!quote.transform)quote.transform={"cache":{}
,"DT":quote[s9l],"Date":quote[o0D]}
;STX[y1p][R0V]=firstQuote[Y6C];for(var j=0;x8A[L7m](j,priceFields.length);j++){var field=priceFields[j];if(quote[field]||x8A[h1p](quote[field],0))quote.transform[field]=x8A[q6T](Math[J8C](((quote[field]-STX[y1p][R0V])/STX[y1p][R0V]*100)*10000),10000);}
var s=stx[T2T][F4p];if(s){for(var n in s){var sd=s[n];if(x8A[o0Z](stx[j8m][sd[K5D]][W0d],sd[i8C][W0d]))continue;for(var field in sd[e9m]){if(quote[field]||x8A[Y1p](quote[field],0))quote.transform[field]=x8A[(W1Z+D3S)](Math[J8C](((quote[field]-STX[y1p][R0V])/STX[y1p][R0V]*100)*10000),10000);}
if(sd[O4C]&&x8A[y0p](quote[sd[O4C]+" "+sd[W0d]],null))quote.transform[sd[O4C]+" "+sd[W0d]]=x8A[R9p](Math[J8C](((quote[sd[O4C]+" "+sd[W0d]]-STX[y1p][R0V])/STX[(x8A.s0m+G5D+Q7G+a2T)][R0V]*100)*10000),10000);}
}
for(var j in stx[(c6S+v4S+p9S+Z8T+q0T+G6p)]){var plugin=stx[c3C][j];if(!plugin[(G8T+a0Z+U8Z+b2C+O9Z+x8A.n9S+M7S)])continue;for(var field in plugin[A2G]){if(quote[field]||x8A[N1S](quote[field],0))quote.transform[field]=x8A[o0T](Math[(x8A.c7S+n2T+W4Z)](((quote[field]-STX[y1p][R0V])/STX[(J6C+T74+x8Z+S4d+F4D)][R0V]*100)*10000),10000);}
}
var createAStop=false;if(stops&&x8A[R0G](stopPointer,stops.length)){if(x8A[e6d](position,stops[stopPointer])){createAStop=true;stopPointer++;}
}
var mouseStop=null;if(stx[b7D]&&x8A[Q8D](stx[b7D][W0d],"comparison_stop")){mouseStop=stx[b7D][l5l];}
if(createAStop||x8A[H0C](position,mouseStop)){for(var j=0;x8A[(X8C)](j,fields.length);j++){var field=fields[j],current=quote[field];firstQuote[field]=x8A[n1D](current,(1+(quote.transform[Y6C]/100)));}
}
for(var j=0;x8A[o5Z](j,fields.length);j++){var field=fields[j],current=quote[field];if(current||x8A[(D4Z+O9l)](current,0)){var baseline=firstQuote[field];if(!baseline&&x8A[O6T](baseline,0)){firstQuote[field]=baseline=x8A[x0l](current,(1+(quote.transform[Y6C]/100)));}
quote.transform[field]=x8A[m9D](Math[J8C](((current-baseline)/baseline*100)*10000),10000);}
}
chart[s0Z][K6T](quote);}
else if(x8A[I3p](position,0)){chart[s0Z][K6T](null);}
}
stx[n7p]();return true;}
;STX[y1p][a2d]=function(){for(var chartName in this[g3C]){var chart=this[g3C][chartName];if(chart[Y94])STX[y1p][i9m](this,chart);}
}
;STX[y1p][k2p]=function(stx,panel,price){var J5G="Z0h",J7p="j0h",D9T="y2W",v3p="b2W",f2S="I2W",l7m="L2W",e6S="ercen",V4D=.001,G5S="p2W",s2m="perc",b2T="r2W",K24="G2W",l4l="o2W",X1l="Q2W",J0S="z2W";if(!price||typeof price==T6m)return R9S;var priceTick=panel[n1p][S74];if(stx[e4G]){if(x8A[J0S](priceTick,x8A.v0Z))price=stx[e4G][U9C][u6C](x8A[X1l](price,d8l));else if(x8A[l4l](priceTick,A0T))price=stx[e4G][o7C][(f0T+A3D+p54+x8A.n9S)](x8A[K24](price,d8l));else if(x8A[b2T](priceTick,k4l))price=stx[e4G][(s2m+j1D+x8A.n9S+f3p)][u6C](x8A[(i1Z+f3p+t9S)](price,d8l));else if(x8A[G5S](priceTick,V4D))price=stx[e4G][(c6S+e6S+x8A.n9S+U3p)][u6C](x8A[l7m](price,d8l));else price=stx[e4G][Q6C][u6C](price);}
else{if(x8A[f2S](priceTick,x8A.v0Z))price=price[o8G](x8A.n0Z)+W6p;else if(x8A[v3p](priceTick,A0T))price=price[o8G](x8A.v0Z)+W6p;else if(x8A[D9T](priceTick,k4l))price=price[o8G](x8A.X0Z)+W6p;else if(x8A[(I6Z+O9l)](priceTick,V4D))price=price[o8G](x8A.i0Z)+W6p;else price=price[o8G](x8A.g0Z)+W6p;}
if(x8A[J7p](parseFloat(price),x8A.n0Z)&&x8A[J5G](price[E2S](x8A.n0Z),a3p)){price=price[K5p](x8A.v0Z);}
return price;}
;STX[y1p][L8l]=function(stx,symbol){var E7l="colorSelection",z5T="h0h",y1G="l0h",I1T="aris",v9G="c0h",L74="elec",h9C="are",n4p="omp",m8V="k0",J4Z="Y0h";if(!STX[y1p][T8p]||x8A[J4Z](correlationPeriod,0))return ;var correlationPeriod=parseInt($$$(".stxCorrelate .stx-input-field")[r8p],10),corrPanel=stx[(g3D+i44)][STX[y1p][N7m]+" ("+correlationPeriod+")"],inputs={"id":STX[y1p][N7m]+" ("+correlationPeriod+")","Period":correlationPeriod,"Compare To":[]}
,outputs={}
,panelName=null;if(corrPanel){for(var i=0;x8A[(m8V+g2S)](i,stx[T2T][F4p][corrPanel[W0d]][I74][(x8A.s0m+n4p+h9C+m44+s8Z+B4S)].length);i++){inputs["Compare To"][K6T](stx[(v7G+H44)][F4p][corrPanel[W0d]][(q0T+I5l+x8A.n9S+M7S)]["Compare To"][i]);}
for(var o in stx[T2T][(M7S+x8A.n9S+p9S+n5G+M7S)][corrPanel[W0d]][R2S]){outputs[o]=stx[T2T][F4p][corrPanel[W0d]][R2S][o];}
panelName=corrPanel[(T4S+D4Z+i04)];}
inputs["Compare To"][K6T](symbol);outputs["Result "+symbol]=STX[y1p][(x8A.d5Z+B4S+w7C+d8Z+L74+A4S+F4D)];STX[O5l][T2G](stx,"correl",inputs,outputs,null,panelName);for(var panel in stx[j8m]){if(x8A[v9G](stx[j8m][panel][W0d][J7G](STX[(x8A.s0m+n4p+I1T+F4D)][N7m]),0)){var compareArray=stx[T2T][(M7S+x8A.n9S+p9S+W4Z+q0T+h7D)][stx[j8m][panel][W0d]][I74]["Compare To"];for(var i=0;x8A[y1G](i,compareArray.length);i++){if(x8A[z5T](compareArray[i],symbol)){stx[(f84+l7D+x8A.n9S)][F4p][stx[j8m][panel][W0d]][R2S]["Result "+symbol]=STX[y1p][E7l];}
}
}
}
}
;STX[y1p][q6S]=function(stx){var g6p="oStr",J9S=".stxCorrelate .stx-checkbox";STX[y1p][T8p]=!STX[y1p][T8p];var display=$$$(J9S);if(display){STX[K6l](display,(!STX[y1p][T8p])[r6l]());STX[z9C](display,STX[y1p][T8p][(x8A.n9S+g6p+J8V+Z8T)]());}
}
;STXChart.prototype.setComparison=function(stx,chart,onOff){var I9m="unsetTransform";if(!chart[Y94]&&onOff){stx.setTransform(chart,STX[y1p][e04],STX[y1p][d8V]);chart[K5D][n1p][I5D]=STX[y1p][k2p];chart[K5D][n1p][f1D]=s0Z;}
else if(chart[Y94]&&!onOff){stx[I9m](chart);chart[K5D][n1p][(i5D+m5Z+C7Z+A3D+w5S+D4Z+x8A.n9S+p2C)]=l1d;chart[K5D][n1p][f1D]=O9p;}
chart[Y94]=onOff;}
;STX[y1p][X4C]=function(){var B8G="ateC",H94="Compa",H9T="aSe",S0G="reat";STXChart.prototype.prepend((x8A.d5Z+S0G+m5Z+i7Z+D4Z+x8A.n9S+H9T+S1l+P6T),STX[(H94+x8A.c7S+q0T+u8p)][(b2l+m5Z+B8G+B4S+T74+D4Z+x8A.c7S+D2C+l14+m5Z+S1l+m5Z+b6p)]);}
;STX[l4T][Z1l]=function(){this[W0d]=Z1l;this[K5D]=l1d;}
;STX[l4T][Z1l][d0Z](STX[l4T]);STX.Drawing.comparison_stop.prototype.adjust=function(){var panel=this[(I4Z+O4T)][j8m][this[Z4G]];if(!panel)return ;this[l5l]=this[J8d][r5p](this[(W4Z+s9p)],panel[i8C]);}
;STX.Drawing.comparison_stop.prototype.move=function(context,tick,value){this[l5l]=tick;STX[y1p][S2T]=G1d;this[J8d][s2Z]();}
;STX.Drawing.comparison_stop.prototype.render=function(context){var J3T="D0h",panel=this[J8d][j8m][this[(c6S+a0Z+m5Z+d7Z+D4Z+i04)]];if(!panel)return ;var chart=panel[i8C];if(!chart[Y94])return ;var yAxis=panel[n1p],stx=this[J8d],x=Math[J8C](stx[r6T](this[l5l],chart))+y2S,color=stx[k3p];if(this[O4D]){color=stx[i5S](J64);}
stx[i8C][b6D][v8T](x,panel.top+yAxis[U6C],x,x8A[J3T](panel[f3T],yAxis[c2S]),color,x8A.v0Z,y2S,[A3T,A3T]);}
;STX.Drawing.comparison_stop.prototype.abort=function(){}
;STX.Drawing.comparison_stop.prototype.intersected=function(tick,value,box){var q9m="s0h",B8l="V0h";if(x8A[B8l](this[l5l],box[h4p])&&x8A[q9m](this[l5l],box[Z4p]))return G1d;return O7T;}
;STX.Drawing.comparison_stop.prototype.highlight=function(highlighted){var h6d="n0h";if(x8A[h6d](this[O4D],highlighted)){this[O4D]=highlighted;return G1d;}
return O7T;}
;STX.Drawing.comparison_stop.prototype.click=function(context,tick,value){var X34="FromTi",L9Z="ved",C8T="Ha",panel=this[J8d][j8m][this[Z4G]];if(!panel)return ;if(STX[y1p][(w5S+B4S+e84+m5Z+C8T+M7S+x14+L9Z)]){this[l5l]=tick;this[W9d]=this[J8d][(C4m+X34+x8A.d5Z+T2S)](this[l5l],panel[i8C]);}
else{return O7T;}
var stx=this[(M7S+x8A.n9S+O4T)];setTimeout(function(){STX[l4T][Z1l][G9d](stx);}
,x8A.n0Z);return G1d;}
;STX[l4T][Z1l][w1m]=function(stx,chart){var E7Z="changeVectorType";STX[y1p][U1l]=stx[E1p][U1l];STX[(J6C+T74+D4Z+x8A.c7S+D2C+T4S)][S2T]=O7T;stx[E7Z](Z1l);stx[K9D](chart[K5D],x8A.n0Z,x8A.n0Z);}
;STX[l4T][Z1l][j3T]=function(stx,chart){var r6D="C0h",V1Z="jects",N9T="ngOb",t0T="x0h",N84="K0h";if(stx[b7D]&&x8A[N84](stx[b7D][W0d],"comparison_stop")){STX[l4T][Z1l][G9d](stx);}
var panel=chart[K5D],i=0;while(x8A[t0T](i,stx[(W5G+O1l+N9T+V1Z)].length)){var drawing=stx[F0l][i];if(x8A[r6D](drawing[W0d],"comparison_stop")&&x8A[(t9S+s9p+g2S)](drawing[Z4G],panel[W0d])){drawing.abort(true);stx[m9p]();stx[F0l][a4T](i,1);continue;}
i++;}
stx[C4Z]("vector");stx[s2Z]();}
;STX[l4T][(A3C+H0G+u8p+I94+x8A.n9S+e4D)][G9d]=function(stx){stx[E1p][U1l]=STX[y1p][U1l];stx[B1p]();}
;STX.Drawing.comparison_stop.prototype.serialize=function(){var obj={name:this[(w5G+m5Z)],pnl:this[Z4G],d0:this[W9d]}
;return obj;}
;STX.Drawing.comparison_stop.prototype.reconstruct=function(stx,obj){this[J8d]=stx;this[Z4G]=obj[t5p];this[W9d]=obj[W9d];this[h0S]();}
;STX[J2l]=function(){var Q5Z="Construct";this[Q34]=l1d;this[h8m]=l1d;this[Q5Z]();}
;j0(x8A.v0Z);STX.Markers.prototype.reset=function(){var U74="overflow";this[V0p]=[];if(!this[(c6S+D4Z+T4S+N5D)][Q34]){this[K5D][Q34]=document[V4l](w2G);this[K5D][Q34][c4l][(c6S+B4S+n9C+g2d+T4S)]=F14;this[K5D][Q34][c4l][w1T]=(N3d);this[K5D][Q34][c4l][U74]=x9Z;this[K5D][Q34][c4l][c0T]=x8A.v0Z;this[J8d][i8C][h7C][J5D](this[K5D][Q34]);this[J8d][M9Z]();}
}
;STX.Markers.prototype.clear=function(){var s14="erH";if(this[K5D][Q34]){this[J8d][i8C][h7C][v9Z](this[K5D][Q34]);this[K5D][(w5S+D4Z+x8A.c7S+T2S+s14+U5D+N4Z)]=l1d;}
this[(x8A.c7S+m5Z+M7S+m5Z+x8A.n9S)]();}
;STX.Markers.prototype.placeMarker=function(node,date){var F2D="sortMarkers",I64="S0h",q2T="F0h",b8l="hover",v8p="ove",I6S="iphone",M3p="android",H1Z="ass",t7S="mC",V1G="sNa",n64="las",z0V="ateEleme",H3Z="drawStems",stx=this[J8d];function incrementZIndex(e){if(marker[O7G])marker[O7G][c4l][c0T]=STX[J2l][r1C];marker[I0V][c4l][c0T]=STX[J2l][r1C]++;}
function takeFocus(e){var s7S="ark";incrementZIndex(e);stx[K6G]=(w5S+s7S+t9D);stx[E4m]();}
function releaseFocus(e){stx[K6G]="";stx[o4m]();}
var marker={node:node,date:date}
;node[c4l][s2T]="none";if(this[H3Z]){var stem=document[(x8A.d5Z+C1d+z0V+T4S+x8A.n9S)]("DIV");stem[(x8A.d5Z+n64+V1G+w5S+m5Z)]=this[(I4Z+m5Z+t7S+v4S+H1Z)];stem[c4l][(c6S+B4S+M7S+q0T+A4S+B4S+T4S)]="absolute";stem[c4l][s2T]="none";marker[O7G]=stem;}
if(this[m6S]){if(!STX[M3p]&&!STX[R0p]&&!STX[I6S]){marker[I0V][t3C]((w5S+l7D+M7S+m5Z+v8p+x8A.c7S),(function(node,stx){return takeFocus;}
)(marker[I0V],stx));marker[I0V][t3C]("mouseout",(function(node,stx){return releaseFocus;}
)(marker[I0V],stx));}
else{marker[I0V][t3C]("touchstart",(function(node){return incrementZIndex;}
)(marker));}
}
else if(this[b8l]){if(STX[R0p]||STX[I6S]){marker[I0V][t3C]("touchstart",(function(node){return incrementZIndex;}
)(marker));}
else{marker[I0V][t3C]("mouseover",(function(node){return incrementZIndex;}
)(marker));}
}
this[V0p][K6T](marker);node[c4l][B5m]="absolute";this[K5D][Q34][J5D](node);if(marker[(M7S+h1d)])this[(g3D+v4S)][Q34][J5D](marker[O7G]);this[a5S](this[K5D][i8C],marker);if(x8A[q2T](this[V0p].length,1)){if(x8A[I64](marker[l5l],this[V0p][this[V0p].length-2][(x8A.n9S+O0d)])){this[F2D]();}
}
return marker;}
;STX.Markers.prototype.sortMarkers=function(){function mySort(l,r){var Q6Z="T8h",o4l="t8h";if(x8A[o4l](l[l5l],r[l5l]))return -x8A.v0Z;if(x8A[Q6Z](l[(y0m+T2S)],r[l5l]))return x8A.v0Z;return x8A.n0Z;}
;this[V0p][q7S](mySort);}
;STX.Markers.prototype.setMarkerTick=function(chart,marker){var L2G="M8h",l5Z="g8h",C8Z="e8h",i8Z="f8h",A5D="v8h",S3p="X8h",N2d="i8h",U7S="B8h",s2C="O8h",w7l="R8h",d1G="P8h",a7l="w8h",D3C="J8h";for(var i=0;x8A[D3C](i,chart[O9p].length);i++){var quotes=chart[O9p][i],qms=quotes[s9l][o5l](),pms=qms;if(x8A[a7l](i,0))pms=chart[O9p][x8A[d1G](i,1)][(i7Z+s8Z)][o5l]();var dms=marker[C4m][o5l]();if(x8A[w7l](qms,dms)){marker[l5l]=i;return ;}
else if(x8A[s2C](qms,dms)&&x8A[U7S](pms,dms)){marker[l5l]=Math[H0S](x8A[N2d](i,1),0);return ;}
}
var dt=new Date(chart[(s5m+j6S+m5Z+x8A.n9S)][x8A[S3p](i,1)][s9l]);for(var j=chart[O9p].length;x8A[A5D](j,chart[O9p].length*2);j++){var pms=dt[o5l]();dt=this[J8d][A4Z](dt,this[J8d][T2T][f9T]);var qms=dt[o5l](),dms=marker[C4m][o5l]();if(x8A[i8Z](qms,dms)){marker[l5l]=j;return ;}
else if(x8A[(C8Z)](qms,dms)&&x8A[l5Z](pms,dms)){marker[l5l]=Math[H0S](x8A[L2G](j,1),0);return ;}
}
}
;STX.Markers.prototype.createDataSet=function(stx){var D0m="E8h";for(var j=0;x8A[(D0m)](j,this[V0p].length);j++){var marker=this[(w5S+D4Z+x8A.c7S+T2S+m5Z+x8A.c7S+M7S)][j];this[a5S](this[K5D][i8C],marker);}
}
;STX.Markers.prototype.initializeChart=function(stx){var B8V="initialize",G74="reset",T1p="elName";this[J8d]=stx;this[K5D]=stx[j8m][this[(Q7G+T4S+T1p)]];this[G74]();this[B8V](stx);}
;STX.Markers.prototype.drawUnder=function(stx,chart){}
;STX.Markers.prototype.drawOver=function(stx,chart){var e0p="transitionMS";function draw(self,stx){return function(){var r6m="q1h",b3G="d1h",Z9T="m1h",L2m="a1h",L3d="A1h",H6S="U8h",g3m="placementFunction";self[h8m]=null;var panel=stx[j8m][self[(c6S+D4Z+T4S+m5Z+v4S+i1Z+N0Z+m5Z)]];if(!panel)return ;if(!panel[x9Z]&&self[g3m]){var chart=panel[i8C],markerSet=[],firstTick=x8A[H6S](chart[O9p].length,stx[i8C][z44]),lastTick=firstTick+chart[s0Z].length;for(var i=0;x8A[L3d](i,self[V0p].length);i++){var marker=self[V0p][i];if(!marker[l5l])continue;var node=marker[(T4S+B4S+W4Z+m5Z)],stem=marker[O7G];if(x8A[L2m](marker[l5l],firstTick)&&x8A[Z9T](marker[l5l],lastTick)){if(x8A[b3G](node[c4l][s2T],"block")){node[c4l][s2T]="block";if(stem)stem[c4l][s2T]="block";}
markerSet[K6T](marker);}
else{if(x8A[r6m](node[c4l][s2T],"none")){node[c4l][s2T]="none";if(stem)stem[c4l][(W4Z+q0T+M7S+t2D)]="none";}
}
}
self[g3m](self,stx,panel,markerSet);}
}
;}
if(!this[h8m])this[h8m]=setTimeout(draw(this,stx),this[e0p]);}
;STX[(M4T+F7Z+m5Z+u6D)][w64]=function(url){this[M04]=url;}
;STX[j9d][w64][d0Z](STX[j9d]);STX.QuoteFeed.BarChart.prototype.isBats=function(symbol){var x54="u1h";if(x8A[x54](symbol.length,5))return true;return false;}
;STX.QuoteFeed.BarChart.prototype.isIndex=function(symbol){var j9Z="z1h";if(symbol.length&&x8A[j9Z](symbol[0],'$'))return true;return false;}
;STX.QuoteFeed.BarChart.prototype.symbology=function(symbol){return symbol;}
;STX.QuoteFeed.BarChart.prototype.batsOpen=function(){var S9G="Q1h",nd=STX[L6m]();if(x8A[S9G](nd[x8p](),x8A.l1T))return O7T;if(x8A[(B4S+H9p+g2S)](nd[x8p](),x8A.M0Z))return O7T;return G1d;}
;STX.QuoteFeed.BarChart.prototype.fetch=function(params,cb){var k3d="ja",X8Z="tA",H0Z="&nocache",y1l="nocache",F4m="&symbol=",H7T="p1h",t9l="batsOpen",R4d="tended",X7D="isAfterDelayed",m8m=".BZ",R0l="&order=asc",M6p="&maxRecords=",R94="N1h",S9C="&startDate=",B4G="&endDate=",W14="r1h",y6l="tDat",F2d="&splits=true",s44="G1h",l0T="&interval=",K84="?type=minutes",d3S="?type=formTMinutes",n8p="?type=dailyContinue",H9C="/getHistory.csv",url=this[M04]+H9C,isbats=this[q3T](params[B3p]);if(STXChart[o6S](params[p0l])){url+=n8p;}
else{if(params[B94]&&isbats){url+=d3S;}
else{url+=K84;}
url+=l0T+params[I7T];}
if(x8A[s44](params[A24],O7T)){url+=(r7p+M7S+Q8l+O5d+M7S+X2p+f0T+E3S+r1Z);}
else{url+=F2d;}
var myDate=new Date();if(params[H7Z]){myDate=params[(j1D+W4Z+i7Z+D4Z+x8A.n9S+m5Z)];if(STXChart[o6S](params[p0l])){myDate[(M7S+m5Z+y6l+m5Z)](x8A[W14](myDate[q3m](),x8A.v0Z));}
myDate=STX[G0d](myDate,l1d,W0V);url+=B4G+STX[R74](myDate);if(!params[H54])params[H54]=H6m;}
else{if(params[k24]){var startDate=new Date(params[k24]);if(STXChart[o6S](params[p0l])){startDate[P0S](startDate[q3m]()+x8A.v0Z);}
startDate=STX[G0d](startDate,l1d,W0V);url+=S9C+STX[R74](startDate);params[H54]=x8A.n0Z;}
else if(!params[H54]){params[H54]=x8A[R94](params[H1G],x8A.i0Z);}
}
if(params[H54])url+=M6p+params[H54];url+=R0l;var symbol=this[j2D](params[B3p]);if(isbats&&params[x4l]){if(symbol[J7G](m8m)==-x8A.v0Z&&(!STX[W84][X7D](symbol)||params[(Z0D+R4d)])&&this[t9l]()&&x8A[H7T](symbol[E2S](x8A.n0Z),b6d))symbol=symbol+m8m;}
url+=F4m+encodeURIComponent(symbol);if(params[y1l])url+=H0Z;var self=this;STX[(c6S+p1D+X8Z+k3d+O4T)](url,null,function(status,res){var s6p="b1h",V9m="process",A3S="I1h",W0D="L1h";if(x8A[W0D](status,200)){cb({error:status}
);return ;}
if(x8A[A3S](res,"\r\n")){cb({quotes:[]}
);return ;}
var res=self[V9m](res,params),moreToLoad=true;if(!params[H54]||x8A[s6p](res.length,params[H54])){moreToLoad=false;}
cb({quotes:res,moreAvailable:moreToLoad}
);}
);}
;STX.QuoteFeed.BarChart.prototype.process=function(quotes,params){var k4S="lum",a4p="vo",S2S="k3h",N0G="Y3h",N44="Z3h",e9l="j3h",E2D="H1h",M9S="y1h",interval=params[p0l],stx=params[J8d],symbol=params[B3p],newQuotes=[],arr=quotes[Z7p]("\r\n");if(x8A[M9S](arr.length,2))return newQuotes;var fds=arr[0][Z7p](","),fieldNames={}
,suppressVolume=(params[x4l]&&STXChart[o6S](interval));for(var i=0;x8A[E2D](i,fds.length);i++){fieldNames[fds[i]]=i;}
for(var i=1;x8A[e9l](i,arr.length);i++){var fields=arr[i][Z7p](',');if(x8A[N44](fields.length,fds.length))continue;var field=fields[fieldNames["timestamp"]][c0V](/"/g,"");if(x8A[N0G](field,""))continue;var bcdt=STX[B9l](field);if(params[k24]&&x8A[(S2S)](bcdt,params[k24]))continue;newQuotes[K6T]({Date:STX[R74](bcdt),Open:parseFloat(fields[fieldNames["open"]][c0V](/"/g,"")),High:parseFloat(fields[fieldNames["high"]][c0V](/"/g,"")),Low:parseFloat(fields[fieldNames["low"]][c0V](/"/g,"")),Close:parseFloat(fields[fieldNames["close"]][c0V](/"/g,"")),Volume:(suppressVolume?0:parseFloat(fields[fieldNames[(a4p+k4S+m5Z)]][c0V](/"/g,""))),Adj_Close:parseFloat(fields[fieldNames["close"]][c0V](/"/g,""))}
);}
return newQuotes;}
;STX[j9d][P3p]=function(token){this[s5S]=token;}
;STX[j9d][P3p][d0Z](STX[j9d]);STX.QuoteFeed.Xignite.prototype.isBats=function(symbol){var q0C="c3h";return (x8A[q0C](symbol.length,6)&&symbol[J7G](".")==-1);}
;STX.QuoteFeed.Xignite.prototype.isIndex=function(symbol){var L1D="l3h";if(symbol&&x8A[L1D](symbol[J7G]((W8p+N3Z+h0p)),x8A.n0Z))return G1d;return O7T;}
;STX.QuoteFeed.Xignite.prototype.symbology=function(symbol){return symbol;}
;STX.QuoteFeed.Xignite.prototype.batsOpen=function(){var g9d="h3h",nd=STX[L6m]();if(x8A[g9d](nd[x8p](),x8A.l1T))return O7T;if(x8A[(l2C+g2S)](nd[x8p](),x8A.M0Z))return O7T;return G1d;}
;STX.QuoteFeed.Xignite.prototype.fetch=function(params,cb){var n7D="z5",L8T="postAjax",q2m="F7h",F5D="W7h",t1Z="x7h",x1S="inute",Z2G="etM",E3G="K7h",z9S="n7h",r5G="IntradayEquity",M7l="IntradayIndex",O2G="xIgniteInterval",I44="mdd",Y3p="HistoricalEquity",n5C="nite",M8G="HistoricalIndex",Q9d="Yo",S2p="w_",N4d="timeZone",e0m="s7h",v5T="Period",n1m="V7h",Q2p="D7h",S8D="IntradayRTEquity",p0V="ica",O84="h7h",W1C="DelayedFuture",C2h="Xignit",n1S="yyyym",w7m="c7h",G6C="Y7h",W6d="Z7h",w5T="j7h",j6m="setYear",k0G="H9h",A0V="y9h",z14="HistoricalFuture",u7m="rte",E4C="W9h",F7D="C9h",h04="x9h",B7S="f9h",D04="nth",s3C="reM",M6G="vertFu",P1l="v9h",z4m="X9h",P9C="i9h",I4D="9h",s7m="O9h",L2D="join",z0G="R9h",k5m="P9h",W0l="w9h",z3Z="ew_",a5m="mer",Y7d="J9h",y34="noMulticall",v6m="multicall",Q2D="AsOfDate",z2C="T9h",B1d="t9h",X1G="S3h",u4m="friendlyDate",B4T="F3h",E8m="TickPeriods",c7p="W3",Z4S="C3h",n4D="IntradayRTForex",w1C="emp",g54="IntradayRTMetals",z1G="Temp",N0C="yyyymmdd",p2m="mmddyyyy",J2d="x3h",b1Z="HistoricalForex",V9S="HistoricalMetals",L1l="HistoricalMajorMetals",R8m="Feed",B2d="isForexMetal",u6S="substr",M5S="K3h",C04="marketClosedMaxRecordsFactor",J7m="nonMarketMaxRecordsFactor",k3D="n3h",P0C="s3h",z6Z="results",a5l="oad",Q2m="isForexSymbol",T3S="isIndex",missingBarsShutoff=true;function toMarketTime(date,tz){var L5D="TC",R5d="V3h",utcTime=new Date(date[o5l]()+x8A[R5d](date[h7m](),60000));if(tz&&tz[J7G]("UTC")!=-1)return utcTime;else return STX[G0d](utcTime,(c3S+L5D),tz);}
var isBats=this[q3T](params[B3p]),isIndex=this[T3S](params[B3p]),isForex=STX[(o9S+t0S+H6T+F8Z+x8Z+T2S+m5Z+x8A.n9S)][Q2m](params[B3p]),isFuture=STX[W84][V3Z](params[B3p]),isDaily=STXChart[o6S](params[p0l]),symbol=this[j2D](params[B3p]),expiredFuture=false,marketZone=null;if(params[i8C][L2d])params[(v4S+a5l+x14+C1d)]=true;if(!params[(x8A.c7S+h7D+n0T+M7S)]||params[R6p])params[z6Z]=[];var myDate=new Date();if(params[H7Z]){myDate=params[H7Z];if(params[R6p])params[H54]=20000;}
else if(!params[k24]){if(!params[H54]){params[H54]=x8A[P0C](params[H1G],3);}
}
var myMaxRecords=Math[B1T](Math[H0S](x8A[k3D](params[H54],(isDaily?STX[j9d][P3p][b0p][J7m]:STX[(T0Z+p9S+B4S+F7Z+m5Z+u6D)][P3p][b0p][C04])),1000)),api=null,arguments=null,error="";if(isForex){marketZone="UTC";myDate=toMarketTime(myDate,marketZone);if(x8A[M5S](symbol[E2S](0),"^"))symbol=symbol[u6S](1);if(!params[x4l]&&isDaily){if(STX[W84][B2d](params[B3p])){if(",USD,AUD,CAD,CHF,EUR,GBP,HKD,ZAR,"[J7G](","+symbol[u6S](3,3)+",")!=-1){api=STX[s2G](STX[(T0C+B4S+A7S+R8m)][P3p][A2S][L1l]);}
else{api=STX[s2G](STX[j9d][P3p][A2S][V9S]);}
}
else{api=STX[s2G](STX[j9d][P3p][A2S][b1Z]);}
var startDate=myDate;if(!params[k24]&&params[H54]){startDate=new Date(myDate[o5l]());startDate[P0S](x8A[J2d](startDate[q3m](),myMaxRecords));}
else if(params[k24]){startDate=toMarketTime(params[k24],marketZone);}
arguments={Symbol:symbol,StartDate:(startDate?STX[p2m](STX[N0C](startDate)):null),EndDate:STX[p2m](STX[N0C](myDate))}
;}
else{if(STX[W84][B2d](params[B3p],true)){error="Intraday data not available.";}
else{if(STX[W84][B2d](params[B3p])){api=STX[s2G](STX[j9d][P3p][(z1G+v4S+G1Z+h7D)][g54]);}
else{api=STX[s2G](STX[j9d][P3p][(s8Z+w1C+v4S+M2Z+M7S)][n4D]);}
arguments={Symbol:symbol,AsOfDate:STX[p2m](STX[N0C](myDate)),StartTime:"00:00:00",TickPeriods:(x8A[Z4S](params[p0l],"hour")?x8A[(c7p+g2S)](params[I7T],60):params[I7T])}
;if(isDaily){api[z6Z][q2D]=null;arguments[E8m]=1440;}
else if(params[x4l]){if(params[k24]){var pStartDate=toMarketTime(params[k24],marketZone);if(x8A[B4T](myDate[(Z8T+A7D+i7Z+G1Z+m5Z)](),pStartDate[q3m]())){arguments[p9D]=STX[u4m](pStartDate)[Z7p](" ")[1];}
}
}
else{myDate[s7d](x8A[X1G](myDate[N6S](),1));while(x8A[B1d](myDate[a8S]()%6,0))myDate[P0S](x8A[z2C](myDate[q3m](),1));arguments[Q2D]=STX[p2m](STX[(b3T+H6T+M34+W4Z+W4Z)](myDate));api[v6m]=!this[y34];}
}
}
if(x8A[Y7d](symbol[E2S](0),"^"))symbol="^"+symbol;}
else if(isFuture){marketZone=(x8A.X8m+a5m+q0T+B6C+R1p+i1Z+z3Z+n8S+B4S+x8A.c7S+T2S);myDate=toMarketTime(myDate,marketZone);if(x8A[W0l](symbol[E2S](0),"/"))symbol=symbol[u6S](1);var month="0",year="0",cash=false;if(x8A[k5m](symbol.length,2)&&!isNaN(symbol[u6S](x8A[z0G](symbol.length,1)))){symYear=parseInt(symbol[Z7p]("")[Q6S]()[L2D](""),10)[r6l]()[Z7p]("")[Q6S]()[L2D]("");var thisYear=(toMarketTime(new Date(),marketZone))[b94]();year=thisYear+9;symYearAsInt=parseInt(symYear,10);if(x8A[s7m](symYear.length,4)&&x8A[(A8m+I4D)](symYearAsInt,0)&&x8A[P9C](symYearAsInt,year)){while(x8A[z4m](year%(Math[z04](10,symYear.length)),symYearAsInt)){year--;}
if(x8A[P1l](thisYear,year))expiredFuture=true;}
else year="X";month=STX[(A3C+T4S+M6G+K1T+s3C+B4S+D04)](symbol[E2S](x8A[B7S](symbol.length,symYear.length,1)));if(x8A[h04](month,"Y")&&x8A[F7D](symYearAsInt,"0")){cash=true;month="0";year="0";expiredFuture=true;}
symbol=symbol[u6S](0,x8A[E4C](symbol.length,symYear.length,1));}
if(isNaN(year)||isNaN(month)){error="Invalid futures symbol.";}
else if(!isDaily){error=(t6T+h9d+Y7l+H6T+m44+f0T+p9S+K1T+x8A.c7S+m5Z+M7S+m44+W4Z+D4Z+x8A.n9S+D4Z+m44+q0T+M7S+m44+T4S+w1D+m44+M7S+C7p+u7m+W4Z+W8p);}
else if(!params[x4l]){api=STX[s2G](STX[j9d][P3p][A2S][z14]);var endDate=new Date(myDate[o5l]());if(x8A[A0V](year,0)&&x8A[k0G](year,endDate[b94]())){endDate[j6m](year);if(x8A[w5T](month,0)&&x8A[W6d](month,endDate[U3d]()+1)){endDate[P0S](28);endDate[I2d](x8A[G6C](month,1));}
}
if(!params[k24]&&params[H54]){var startDate=new Date(endDate[(Z8T+m5Z+p7C+m5Z)]());if(x8A[(T2S+k1m+g2S)](year,0))startDate[u6d](Math[e1Z](year,startDate[b94]()));startDate[P0S](x8A[w7m](startDate[q3m](),myMaxRecords));}
else if(params[k24]){startDate=toMarketTime(params[k24],marketZone);}
arguments={Symbol:symbol,StartDate:(startDate?STX[p2m](STX[(n1S+w5S+z0l)](startDate)):null),EndDate:STX[p2m](STX[N0C](endDate)),Month:month,Year:year}
;if(x8A[(v4S+k1m+g2S)](year,0)||cash){api[I9G]=api[I9G][(f0T+O6d+C1d)];}
else{api[I9G]=api[I9G]["commodity"];}
}
else if(!expiredFuture){api=STX[s2G](STX[j9d][(C2h+m5Z)][A2S][W1C]);arguments={Symbol:symbol,Month:month,Year:year}
;}
if(x8A[O84](symbol[E2S](0),"/"))symbol="/"+symbol;}
else if(isBats&&params[x4l]&&params[k24]){marketZone=(x8A.X8m+w5S+m5Z+x8A.c7S+p0V+R1p+i1Z+z3Z+n8S+B4S+x8A.c7S+T2S);myDate=toMarketTime(myDate,marketZone);startDate=STX[p2m](STX[N0C](toMarketTime(params[k24],marketZone)));api=STX[s2G](STX[j9d][P3p][A2S][S8D]);arguments={Symbol:symbol,Period:(x8A[Q2p](params[p0l],"hour")?x8A[n1m](params[(I7T)],60):params[I7T]),StartTime:startDate+" 00:00:00",EndTime:STX[p2m](STX[N0C](myDate))+" 23:59:59"}
;if(isDaily){api[(x8A.c7S+h7D+p9S+U64+M7S)][q2D]=null;api[z6Z].volume=null;arguments[v5T]=1440;}
else if(params[x4l]){if(params[k24]){var pStartDate=toMarketTime(params[k24],marketZone);if(x8A[e0m](myDate[(t4m+x8A.n9S+i7Z+D4Z+A7S)](),pStartDate[q3m]())){arguments[p9D]=STX[p2m](STX[N0C](myDate))+" "+STX[u4m](pStartDate)[Z7p](" ")[1];}
}
}
}
else{marketZone=STX[j9d][P3p][b0p][N4d][symbol[Z7p](".")[1]];if(!marketZone)marketZone=(x8A.X8m+w5S+t9D+L5l+D4Z+R1p+i1Z+m5Z+S2p+Q9d+O5C);myDate=toMarketTime(myDate,marketZone);if(!params[x4l]&&isDaily){if(isIndex)api=STX[s2G](STX[j9d][P3p][A2S][M8G]);else api=STX[s2G](STX[j9d][(r3S+G6l+n5C)][A2S][Y3p]);arguments={Identifier:symbol,StartDate:(params[k24]?STX[p2m](STX[N0C](toMarketTime(params[k24],marketZone))):null),EndDate:STX[p2m](STX[(b3T+e5d+I44)](myDate)),PeriodType:STX[j9d][P3p][b0p][O2G](params[p0l]),Periods:myMaxRecords}
;}
else{if(isIndex){api=STX[s2G](STX[j9d][P3p][A2S][M7l]);}
else{api=STX[(a9C+F4D+m5Z)](STX[j9d][P3p][A2S][r5G]);}
var startDate=myDate;if(!params[k24]&&params[H54]){startDate=new Date(myDate[o5l]());if(isDaily)startDate[P0S](x8A[z9S](startDate[q3m](),myMaxRecords));else startDate[s7d](x8A[E3G](startDate[(Z8T+Z2G+x1S+M7S)](),myMaxRecords*(params[p0l]=="hour"?params[I7T]*60:params[I7T])));}
else if(params[k24]){startDate=toMarketTime(params[(M7S+J3S+x8A.c7S+Y0Z+D4Z+A7S)],marketZone);}
arguments={Identifier:symbol,StartTime:STX[p2m](STX[(H6T+H6T+H6T+H6T+M34+z0l)](startDate))+" 00:00:00",EndTime:STX[p2m](STX[N0C](myDate))+" 23:59:59",Period:(x8A[t1Z](params[p0l],"hour")?x8A[(x8A.s0m+k1m+g2S)](params[I7T],60):params[I7T])}
;if(isDaily){api[z6Z][q2D]=null;arguments[v5T]=1440;}
else if(params[x4l]){if(params[k24]){var pStartDate=toMarketTime(params[k24],marketZone);if(x8A[F5D](myDate[q3m](),pStartDate[q3m]())){arguments[p9D]=STX[(M34+z0l+b3T+H6T)](STX[N0C](myDate))+" "+STX[u4m](pStartDate)[Z7p](" ")[1];}
}
}
}
}
if(api&&arguments&&x8A[q2m](error,"")){var self=this;STX[L8T](STX[j9d][P3p][b0p][M04](api,arguments,params,this[s5S]),null,function(status,res){var o3T="moreToLoad",W1G="noUpdate",G8l="Mor",c2l="u5h",G7Z="lRe",N94="d5h",Z14="m5h",p4m="a5h",R5p="A5h",t8G="U4h",M6l="E4h",w9T="M4h",c3D="g4h",U4C="e4h",p6G="f4h",c1p="att",m9S="v4h",p0m="suppressSymbolNotFound",N2C="X4h",i4S="totalRecords",h74="attempts",D7T="S7h";if(x8A[D7T](status,200)){cb({error:status}
);return ;}
function processData(quotes,params){var k6Z="rsCr",G3D="ngBa",N6p="i4h",z8G="B4h",f7G="esu",H2h="O4h",a0m="R4h",O2Z="P4h",t2T="w4h",B54="J4h",N8D="T4h",l9m="_C",a1l="dj",t54="t4h",W0S="S6h",e9G="F6h",d3l="W6h",C1m="C6h",z5S="x6h",t84="K6h",I2T="n6h",s9G="s6h",T9D="V6h",X7p="nu",c84="Mi",j4p="B6h",A5T="O6h",S5G="res",X3T="R6h",v4p="P6",V9Z="w6h",c0S="J6h",W34="T6h",m5m="t6h",newQuotes=[],arr=quotes[Z7p]("\r\n");if(x8A[m5m](arr.length,2))return newQuotes;var fds=arr[0][Z7p](","),fieldNames={}
;for(var i=0;x8A[W34](i,fds.length);i++){fieldNames[fds[i]]=i;}
var dt=null,stick=false;for(var i=1;x8A[(c0S)](i,arr.length);i++){var fields=arr[i][(M7S+Q8l+O5d)](',');if(x8A[V9Z](fields.length,fds.length))continue;if(x8A[(v4p+g2S)](fields[fieldNames[(W1Z+p9S+E7T+i04)]],"Success"))continue;var date=fields[fieldNames[api[z6Z][C4m]]];if(x8A[X3T](date,""))continue;if(api[z6Z][q2D]){date+=" "+fields[fieldNames[api[(S5G+p9S+v4S+x8A.n9S+M7S)][q2D]]];}
var bcdt=STX[B9l](date);if(x8A[A5T](bcdt[a8S](),6))continue;if(!isDaily){var marketOffset=0;if(api[z6Z][J2G]){marketOffset=fields[fieldNames[api[z6Z][J2G]]];}
bcdt[s7d](x8A[(j4p)](bcdt[(Z8T+m5Z+x8A.n9S+c84+X7p+A7S+M7S)](),bcdt[h7m](),60*marketOffset));if(!params[B94]){var bcdt2=STX[G0d](bcdt,null,"America/New_York"),hours=STX[W84][x8p](params[B3p],false);if(x8A[T9D](bcdt2[x8p](),hours[O1D])||(x8A[s9G](bcdt2[x8p](),hours[O1D])&&x8A[I2T](bcdt2[N6S](),hours[J7d])))continue;}
}
if(params[k24]&&x8A[t84](bcdt,params[k24]))continue;if(params[H7Z]&&x8A[z5S](bcdt,params[H7Z]))continue;if(!missingBarsShutoff&&params[J8d][R7l]&&!isDaily){if(x8A[C1m](dt,null)){dt=bcdt;}
else{for(var zz=0;x8A[d3l](zz,1440);zz++){if(!stick)dt=STX[W84][o8p](dt,params[J8d][T2T][p0l],1,params[J8d],params[B3p]);if(x8A[e9G](bcdt[o5l](),dt[o5l]()))break;else if(x8A[W0S](bcdt[o5l](),dt[o5l]())){stick=true;break;}
else{var lastQuote=newQuotes[x8A[t54](newQuotes.length,1)];newQuotes[(K6T)]({DT:dt,Open:lastQuote[Y6C],High:lastQuote[Y6C],Low:lastQuote[Y6C],Close:lastQuote[(x0T+M7S+m5Z)],Volume:0,Adj_Close:lastQuote[(x8A.X8m+a1l+l9m+a7G)]}
);stick=false;}
}
}
}
var ratio=parseFloat(fields[fieldNames[api[z6Z][D8p]]]);if(isNaN(ratio))ratio=1;var open=parseFloat(fields[fieldNames[api[z6Z][s8d]]]),high=parseFloat(fields[fieldNames[api[z6Z][B7l]]]),low=parseFloat(fields[fieldNames[api[z6Z][h6l]]]),close=parseFloat(fields[fieldNames[api[z6Z][R5S]]]);if(x8A[N8D](open,0)&&x8A[B54](high,low))open=close;if(x8A[t2T](high,0))high=Math[H0S](open,close);if(x8A[O2Z](low,0))low=Math[e1Z](open,close);if(x8A[a0m](close,0)){newQuotes[K6T]({DT:bcdt,Open:open,High:high,Low:low,Close:close,Volume:(api[z6Z].volume?parseFloat(fields[fieldNames[api[(x8A.c7S+h7D+p9S+v4S+x8A.n9S+M7S)].volume]]):0),Adj_Close:x8A[H2h](parseFloat(fields[fieldNames[api[(x8A.c7S+f7G+v4S+x8A.n9S+M7S)][(x8A.d5Z+G0T+r1Z)]]]),ratio)}
);}
else if(!missingBarsShutoff&&params[J8d][R7l]){var lastQuote=newQuotes[x8A[z8G](newQuotes.length,1)];newQuotes[K6T]({DT:bcdt,Open:lastQuote[Y6C],High:lastQuote[(m9Z+m5Z)],Low:lastQuote[Y6C],Close:lastQuote[(W7C+p1D+m5Z)],Volume:0,Adj_Close:lastQuote[c9m]}
);}
}
if(newQuotes.length){params[h74]=0;if(x8A[N6p](newQuotes[0][s9l],newQuotes[newQuotes.length-1][s9l]))newQuotes[Q6S]();}
if(!params[i4S])params[i4S]=0;params[i4S]+=newQuotes.length;if(!missingBarsShutoff)params[(w5S+S4d+G9Z+G3D+k6Z+m5Z+D4Z+A7S+W4Z)]=true;return newQuotes;}
var results=processData(res,params),multidayFetch=null,moreToLoad=false;if(api[v6m]){results=params[z6Z]=results[N8G](params[z6Z]);if(!params[h74])params[h74]=0;params[h74]++;if(myDate[s2G]){params[(H7Z)]=myDate[s2G]();}
else{params[H7Z]=new Date(myDate[o5l]());}
params[H7Z][z0p](23);params[H7Z][s7d](59);params[H7Z][y2m](59);params[(c5S+i7Z+G1Z+m5Z)][u8D](0);params[H7Z][P0S](x8A[N2C](params[H7Z][q3m](),1));if(marketZone)params[H7Z]=STX[G0d](params[H7Z],marketZone,null);params[p0m]=false;if(x8A[m9S](params[(c1p+m5Z+w5S+F7G+M7S)],5)){if(!params[k24]||x8A[p6G](params[H7Z],params[k24])){if(!params[H54]||x8A[U4C](params[i4S],params[H54])){params[p0m]=true;multidayFetch=function(p,c){setTimeout(function(s){return function(){var M3T="tch",e5m="fe";s[(e5m+M3T)](p,c);}
;}
(self),10);}
;}
}
}
}
else if(isDaily){while(results.length&&params[z6Z].length&&x8A[c3D](results[0][s9l],params[z6Z][params[z6Z].length-1][s9l]))results[(j7Z+a4l+x8A.n9S)]();results=params[z6Z]=params[z6Z][N8G](results);if(isFuture&&x8A[(w9T)](params[(x8A.c7S+m5Z+M7S+L94+M8T)].length,1)&&x8A[M6l](params[z6Z][params[z6Z].length-2][s9l][o5l](),params[z6Z][params[z6Z].length-1][s9l][o5l]())){params[z6Z][a4T](-2,1);}
if(params[H54]&&x8A[t8G](params[i4S],params[H54])){params[z6Z][a4T](0,x8A[R5p](params[i4S],params[H54]));params[i4S]=params[z6Z].length;if(!params[(M7S+J3S+x8A.c7S+x8A.n9S+L6C+m5Z)])moreToLoad=true;}
if(!params[x4l]&&!params[R6p]){params[x4l]=true;params[(m5Z+T4S+W4Z+o0D)]=null;if(results.length){params[k24]=new Date(results[x8A[p4m](results.length,1)][s9l][o5l]());params[p0m]=true;}
else{params[(F9d+J5d+i7Z+M2Z)]=new Date();params[k24][P0S](x8A[Z14](params[k24][q3m](),2));}
if(!results.length||x8A[(N94)](STX[R74](new Date(myDate))[u6S](0,8),STX[R74](results[results.length-1][s9l])[u6S](0,8))){if(!expiredFuture&&!STX[W84][B2d](params[B3p],true)){multidayFetch=function(p,c){setTimeout(function(s){return function(){s[x3C](p,c);}
;}
(self),10);}
;}
}
}
}
if(!params[k24]&&params[H54]){if(x8A[(e1D+g2S)](params[H54],params[(x8A.n9S+w1D+D4Z+G7Z+x8A.d5Z+B4S+x8A.c7S+W4Z+M7S)]))moreToLoad=true;else if(x8A[(c2l)](params[i4S],100))moreToLoad=true;}
if(!multidayFetch||!params[k24]||(params[H54]&&!params[x4l])){if(!multidayFetch){params[(v4S+a5l+G8l+m5Z)]=false;params[W1G]=false;}
else{params[W1G]=true;}
if(params[o3T]){moreToLoad=true;params[o3T]=false;}
if(cb)cb({quotes:results,moreAvailable:moreToLoad}
);}
else{if(moreToLoad)params[o3T]=true;}
if(multidayFetch){multidayFetch(params,cb);}
}
,null,true);}
if(x8A[(n7D+g2S)](error,"")){if(cb)cb({error:error}
);}
}
;STX[j9d][P3p][A2S]={token:"/* xignite token */",defaultToken:"0DA08C44AFA447B4BE864136810F8093",HistoricalEquity:{host:"http"+(STX[m0D]?"":"s")+(i4C+M7S+t9D+U4T+q0T+x8A.d5Z+m5Z+M7S+W8p+x8A.d5Z+g2S+D4Z+D4m+W8p+x8A.d5Z+B4S+w5S+R1p+f4T+f4T+f4T+B0S+O4T+q0T+Z8T+q9p+A7S),version:null,func:(O4T+O6S+K7S+v4S+M7T+I4Z+J5C+B6C+v4S),format:"csv",method:{day:"GetGlobalHistoricalQuotesRange",week:(O8S+x8A.n9S+R6Z+v4S+b4p+N0d+B4S+J8T+D4Z+d3Z+v4S+H6T+T0Z+p9S+B4S+x8A.n9S+h7D+R2d+T4S+Z8T+m5Z),month:(O8S+y8Z+G0T+g9p+I4Z+B4S+J8T+D4Z+v4S+x14+b6p+y6C+H6T+T0C+G2d+Z8T+m5Z),as_of:"GetGlobalHistoricalQuotesAsOf"}
,statics:(y7p+T4S+w6p+m5Z+m7C+H6T+c6S+m5Z+X2p+d8Z+s7T+v4S+r7p+x8A.X8m+w0C+N7Z+T4S+x8A.n9S+Q2T+x8A.n9S+g2S+B4S+W4Z+X2p+i1Z+B4S+T4S+m5Z),fields:(W1Z+p9S+Q3D+m5Z+I1p+F8Z+n4d+t4m+I1p+d8Z+D8G+p9S+x8A.c7S+q0T+x8A.n9S+H6T+W8p+d8Z+s7T+v4S+I1p+d8Z+s3d+x8A.c7S+O5d+H6T+W8p+i1Z+f64+I1p+R6Z+v4S+B4S+Y4Z+D4Z+C6Z+p9S+Z6S+M7S+W8p+i7Z+D4Z+x8A.n9S+m5Z+I1p+R6Z+G0T+Y4Z+l5C+B4S+d0d+W8p+C9Z+U1Z+x8A.n9S+I1p+R6Z+v4S+X7m+l5C+w1D+m5Z+M7S+W8p+W1Z+s1p+I1p+R6Z+f1d+D4Z+v4S+T0C+B4S+A7S+M7S+W8p+I6Z+q0T+f4m+I1p+R6Z+v4S+B4S+Y0V+C6Z+b4G+M7S+W8p+C9Z+B4S+f4T+I1p+R6Z+G0T+Z8p+A7S+M7S+W8p+C1S+B4S+B34+I1p+R6Z+G0T+Y4Z+D4Z+N4S+x8A.n9S+m5Z+M7S+W8p+d8Z+c6S+v4S+q0T+x8A.n9S+r0Z+D4Z+e1m),results:{date:"GlobalQuotes Date",time:null,open:(R6Z+v4S+D0l+B4S+d0d+m44+W1Z+c6S+j1D),close:"GlobalQuotes Last",high:(O6S+X7m+D4Z+v4S+T0C+B4S+x8A.n9S+h7D+m44+I6Z+g1p),low:"GlobalQuotes Low",volume:"GlobalQuotes Volume",offset:null,ratio:"GlobalQuotes SplitRatio"}
}
,HistoricalIndex:{host:"http"+(STX[m0D]?"":"s")+(i4C+M7S+m5Z+j2d+L5l+h7D+W8p+x8A.d5Z+x8A.w9G+x8A.c7S+x8A.n9S+S5d+W8p+x8A.d5Z+G5D+R1p+Z8T+g8D+v4S+x84+O2C+M7S+g2S+S4d+x8A.n9S+A3D+q0T+x8A.d5Z+E3S+F9T+r5d+x8A.n9S+m5Z),version:null,func:(O4T+r0l+B4S+H2p+q0T+N1m+q0T+h64+g2S+N0d+D6d+D4Z+v4S),format:"csv",method:{day:"GetHistoricalIndexValues",as_of:"GetHistoricalIndexValuesTrailing"}
,statics:(e4C+j1D+x8A.n9S+q0T+f0T+u0G+H6T+c6S+m5Z+X2p+d8Z+z7G+B4S+v4S),fields:(Y7Z+E7T+i04+I1p+F8Z+h7D+M7S+D4Z+t4m+I1p+N3Z+N1m+Z0D+W8p+d8Z+H6T+S24+U5D+I1p+N3Z+T4S+W4Z+m5Z+O4T+W8p+N3Z+T4S+v9T+c6S+I1p+N3Z+N54+W8p+N3Z+T4S+W4Z+m5Z+O4T+h1l+I1p+C1S+E3S+p9S+h7D+W8p+i7Z+D4Z+A7S+I1p+C1S+H1p+h7D+W8p+C9Z+e3Z+I1p+C1S+D4Z+c8T+M7S+W8p+W1Z+s1p+I1p+C1S+H1p+m5Z+M7S+W8p+I6Z+g1p+I1p+C1S+D4Z+b44+W8p+C9Z+B4S+f4T+I1p+C1S+H1p+h7D+W8p+C1S+B4S+J54+i04),results:{date:"Values Date",time:null,open:"Values Open",close:"Values Last",high:"Values High",low:"Values Low",volume:"Values Volume",offset:null,ratio:null}
}
,HistoricalForex:{host:(f3C+Y8T)+(STX[m0D]?"":"s")+(i4C+M7S+t9D+U4T+O2C+M7S+W8p+x8A.d5Z+g2S+D4Z+x8A.c7S+x8A.n9S+q0T+p6S+W8p+x8A.d5Z+B4S+w5S+R1p+Z8T+v4S+X7m+D4Z+u2d+m5Z+c2T+g7d+T04+A7S),version:null,func:"xGlobalCurrencies",format:"csv",method:"GetHistoricalRatesRange",statics:(l1Z+m0G+h3C+w5S+m5Z+X2p+s9p+s9p+w9m+s9p+s9p+w9m+s9p+s9p+r7p+c3Z+b3S+b5C+m5Z+X2p+F8Z+t6l+r7p+c3Z+m5Z+x8A.c7S+l7p+t3G+c6S+m5Z+X2p+i7Z+K1S+v4S+H6T),fields:(W1Z+p9S+v9S+G5D+m5Z+I1p+F8Z+m5Z+f9l+m5Z+I1p+d8Z+z7G+B4S+v4S+I1p+d8Z+u84+A0C+I1p+c7Z+N1m+i7Z+D4Z+x8A.n9S+m5Z+I1p+W1Z+X0G+T4S+I1p+I6Z+q0T+Z8T+g2S+I1p+C9Z+c9D+I1p+x8A.s0m+v4S+p1D+m5Z+I1p+C1S+U5D+W1S),results:{date:"StartDate",time:null,open:"Open",close:(Y6C),high:"High",low:"Low",volume:null,offset:null,ratio:null}
}
,HistoricalMajorMetals:{host:"http"+(STX[m0D]?"":"s")+(i4C+M7S+M7p+W8p+x8A.d5Z+g2S+D4Z+x8A.c7S+A4S+p6S+W8p+x8A.d5Z+B4S+w5S+R1p+Z8T+G0T+Y4Z+E3S+w5S+A7D+D4Z+i44+K14+K1m+q0T+A7S),version:null,func:"xGlobalMetals",format:"csv",method:"GetHistoricalMetalQuotesRange",statics:(l1Z+m0G+B04+m5Z+X2p+s9p+s9p+w9m+s9p+s9p+w9m+s9p+s9p+r7p+c3Z+x8A.c7S+q0T+j4m+X0G+X2p+F8Z+q0T+W4Z+r7p+c3Z+t9D+q0T+U4m+s8Z+H6T+X0G+X2p+i7Z+D4Z+x8C+r7p+x8A.s0m+p9S+g4C+x8A.d5Z+H6T+X2p),fields:(Y7Z+x8A.n9S+A3C+i04+I1p+F8Z+d4S+m5Z+I1p+i1Z+N0Z+m5Z+I1p+d8Z+H6T+w5S+Y4Z+U5D+I1p+x8A.s0m+q14+x8A.c7S+F5S+H6T+I1p+d8Z+r9C+G1Z+m5Z+I1p+d8Z+x8A.n9S+D4Z+F64+i04+I1p+c7Z+N1m+K0C+A7S+I1p+c7Z+T4S+W4Z+s8Z+Q4C+I1p+W1Z+c6S+m5Z+T4S+I1p+I6Z+g1p+I1p+C9Z+c9D+I1p+x8A.s0m+C9C+m5Z+I1p+C1S+B4S+v4S+W1S),results:{date:"StartDate",time:null,open:"Open",close:"Close",high:"High",low:"Low",volume:null,offset:null,ratio:null}
}
,HistoricalMetals:{host:"http"+(STX[m0D]?"":"s")+(i4C+M7S+h8D+q0T+h64+W8p+x8A.d5Z+x8A.w9G+x8A.c7S+x8A.n9S+S5d+W8p+x8A.d5Z+G5D+R1p+Z8T+G0T+Y4Z+D4Z+v4S+R7G+m5Z+T4S+x8A.d5Z+X7l+M7S+F9T+l3l+O5d+m5Z),version:null,func:"xGlobalCurrencies",format:"csv",method:"GetLondonHistoricalRatesRange",statics:null,fields:(W1Z+p9S+x8A.n9S+q5T+m5Z+I1p+F8Z+h7D+M7S+g8S+m5Z+I1p+d8Z+H6T+w5S+Y4Z+B4S+v4S+I1p+d8Z+x8A.n9S+x8Z+Y0Z+G1Z+m5Z+I1p+c7Z+T4S+W4Z+K0C+A7S+I1p+W1Z+X0G+T4S+I1p+I6Z+q0T+f4m+I1p+C9Z+B4S+f4T+I1p+x8A.s0m+v4S+B4S+r1Z+I1p+C1S+B4S+J54+w5S+m5Z),results:{date:"StartDate",time:null,open:"Open",close:(x0T+r1Z),high:"High",low:"Low",volume:null,offset:null,ratio:null}
}
,HistoricalFuture:{host:"http"+(STX[m0D]?"":"s")+(i4C+M7S+h8D+q0T+h64+W8p+x8A.d5Z+g2S+D4Z+x8A.c7S+A4S+p6S+W8p+x8A.d5Z+G5D+R1p+f4T+L4G+F9T+l3l+b1D),version:null,func:"xFutures",format:"csv",method:{"future":"GetHistoricalFutureRange","commodity":"GetHistoricalCommodityRange"}
,statics:null,fields:(W1Z+H44+x8A.d5Z+B4S+w5S+m5Z+I1p+F8Z+m5Z+M7S+Z8Z+Z8T+m5Z+I1p+T0Z+b4G+M7S+W8p+C7Z+p9S+x8A.n9S+q14+m5Z+W8p+d8Z+H6T+C3l+I1p+T0Z+p9S+B4S+x8A.n9S+h7D+W8p+C7Z+H44+p9S+C1d+W8p+c7Z+k6G+m5Z+l2m+w5S+M3d+v4S+I1p+T0Z+p9S+S8m+W8p+C7Z+H44+p9S+x8A.c7S+m5Z+W8p+i1Z+N0Z+m5Z+I1p+T0Z+p9S+w1D+h7D+W8p+i7Z+M2Z+I1p+T0Z+Y5m+W8p+s8Z+Q4C+I1p+T0Z+V64+m5Z+M7S+W8p+W1Z+s1p+I1p+T0Z+p9S+B4S+x8A.n9S+h7D+W8p+I6Z+g1p+I1p+T0Z+V64+m5Z+M7S+W8p+C9Z+B4S+f4T+I1p+T0Z+z34+A7S+M7S+W8p+C9Z+D4Z+M7S+x8A.n9S+I1p+T0Z+z34+x8A.n9S+h7D+W8p+C1S+U5D+d94+m5Z),results:{date:"Quotes Date",time:null,open:"Quotes Open",close:"Quotes Last",high:"Quotes High",low:"Quotes Low",volume:"Quotes Volume",offset:null,ratio:null}
}
,IntradayEquity:{host:"http"+(STX[m0D]?"":"s")+(i4C+M7S+m5Z+x8A.c7S+W7D+h7D+W8p+x8A.d5Z+x8A.w9G+D4m+W8p+x8A.d5Z+B4S+w5S+R1p+Z8T+v4S+B4S+Y4Z+D4Z+I2S+p9S+w1D+B0C+T4S+q0T+A7S),version:"v3",func:"xGlobalQuotes",format:"csv",method:"GetBars",statics:(e4C+j1D+A4S+H6D+C44+b9Z+X2p+d8Z+H6T+w5S+M3d+v4S+r7p+c3Z+x8A.c7S+m5Z+I3C+M7S+q0T+F4D+X2p+F8Z+q0T+T4S+a6Z+M7S),fields:(Y7Z+E7T+w5S+m5Z+I1p+F8Z+h7D+M7S+a0D+I1p+d8Z+m5Z+E4l+x8A.c7S+q0T+x8A.n9S+H6T+W8p+d8Z+r5C+I1p+d8Z+J0V+W1l+W8p+i1Z+D4Z+w5S+m5Z+I1p+A8m+D4Z+x8A.c7S+M7S+W8p+d8Z+r9C+M2Z+I1p+A8m+D4Z+o5d+W8p+d8Z+J3S+x8A.c7S+A5l+i04+I1p+A8m+h2S+W8p+c3S+s8Z+S9Z+m5Z+x8A.n9S+I1p+A8m+h2S+W8p+x8A.s0m+G0T+M7S+m5Z+I1p+A8m+x8Z+M7S+W8p+W1Z+c6S+j1D+I1p+A8m+x8Z+M7S+W8p+I6Z+G6l+g2S+I1p+A8m+D4Z+x8A.c7S+M7S+W8p+C9Z+B4S+f4T+I1p+A8m+D4Z+x8A.c7S+M7S+W8p+C1S+f3Z+m5Z),results:{date:"Bars StartDate",time:"Bars StartTime",open:"Bars Open",close:"Bars Close",high:"Bars High",low:"Bars Low",volume:(A8m+D4Z+x8A.c7S+M7S+m44+C1S+U5D+d94+m5Z),offset:"Bars UTCOffset",ratio:null}
}
,IntradayRTEquity:{host:"http"+(STX[m0D]?"":"s")+(i4C+M7S+m5Z+A4l+x8A.d5Z+m5Z+M7S+W8p+x8A.d5Z+x8A.w9G+x8A.c7S+x8A.n9S+S5d+W8p+x8A.d5Z+G5D+R1p+Y4Z+D4Z+x8A.n9S+M7S+x8A.c7S+m5Z+E3S+x8A.n9S+g0V+m5Z+B0S+m0G+Z8T+q9p+A7S),version:null,func:"xBATSRealTime",format:(x8A.d5Z+o0S),method:"GetBars",statics:(c3Z+C1d+I3C+W7l+T4S+X2p+F8Z+q0T+T9T),fields:(W1Z+p9S+Q3D+m5Z+I1p+F8Z+h7D+E0C+m5Z+I1p+d8Z+D8G+p9S+Z0p+H6T+W8p+d8Z+H6T+C3l+I1p+d8Z+m5Z+x8A.d5Z+f5T+i9T+W8p+i1Z+D4Z+i04+I1p+A8m+D4Z+x8A.c7S+M7S+W8p+d8Z+w7Z+i7Z+G1Z+m5Z+I1p+A8m+x8Z+M7S+W8p+d8Z+u84+Q4Z+q0T+i04+I1p+A8m+D4Z+o5d+W8p+c3S+s8Z+x8A.s0m+W1Z+f0T+f0T+M7S+m5Z+x8A.n9S+I1p+A8m+D4Z+x8A.c7S+M7S+W8p+x8A.s0m+G0T+M7S+m5Z+I1p+A8m+h2S+W8p+W1Z+X0G+T4S+I1p+A8m+h2S+W8p+I6Z+g1p+I1p+A8m+h2S+W8p+C9Z+c9D+I1p+A8m+D4Z+x8A.c7S+M7S+W8p+C1S+U5D+d94+m5Z),results:{date:"Bars StartDate",time:"Bars StartTime",open:"Bars Open",close:"Bars Close",high:"Bars High",low:"Bars Low",volume:"Bars Volume",offset:"Bars UTCOffset",ratio:null}
}
,IntradayIndex:{host:(f3C+Y8T+i4C+M7S+h8D+O2C+M7S+W8p+x8A.d5Z+I7d+W8p+x8A.d5Z+G5D+R1p+x8A.d5Z+g2S+D4Z+x8A.c7S+x8A.n9S+q0T+p6S+c6S+C1d+U4T+q0T+n2m+B0S+O4T+Y8d+m5Z),version:null,func:"xglobalindices",format:"csv",method:"GetIndexBars",statics:(o6l+x8A.n9S+a4l+q0T+m5Z+x8A.c7S+s8Z+a0V+m5Z+X2p+d8Z+e5d+M3d+v4S+r7p+c3Z+x8A.c7S+m5Z+x8A.d5Z+q0T+W7l+T4S+X2p+F8Z+J8V+H44+m5Z+M7S),fields:(x2T+m5Z+I1p+F8Z+m5Z+f9l+m5Z+I1p+N3Z+N1m+m5Z+O4T+W8p+d8Z+H6T+w5S+Y4Z+U5D+I1p+N3Z+T4S+W4Z+m5Z+O4T+W8p+N3Z+T4S+W4Z+Z0D+p8C+c6S+I1p+N3Z+T4S+N0l+O4T+W8p+N3Z+N1m+Z0D+J3m+i04+I1p+A8m+D4Z+x8A.c7S+M7S+W8p+d8Z+u84+x8A.n9S+K0C+x8A.n9S+m5Z+I1p+A8m+D4Z+o5d+W8p+d8Z+x8A.n9S+D4Z+x8A.c7S+x8A.n9S+s8Z+q0T+i04+I1p+A8m+h2S+W8p+c3S+s8Z+x8A.s0m+v8D+M7S+A7D+I1p+A8m+x8Z+M7S+W8p+x8A.s0m+G0T+M7S+m5Z+I1p+A8m+x8Z+M7S+W8p+W1Z+s1p+I1p+A8m+x8Z+M7S+W8p+I6Z+q0T+f4m+I1p+A8m+D4Z+o5d+W8p+C9Z+c9D+I1p+A8m+D4Z+x8A.c7S+M7S+W8p+C1S+U5D+d94+m5Z),results:{date:"Bars StartDate",time:"Bars StartTime",open:"Bars Open",close:"Bars Close",high:"Bars High",low:"Bars Low",volume:"Bars Volume",offset:"Bars UTCOffset",ratio:null}
}
,IntradayRTIndex:{host:"http"+(STX[m0D]?"":"s")+(i4C+M7S+h8D+q0T+x8A.d5Z+m5Z+M7S+W8p+x8A.d5Z+x8A.w9G+x8A.c7S+A4S+p6S+W8p+x8A.d5Z+B4S+w5S+R1p+Z8T+v4S+B4S+Y4Z+D4Z+v4S+x84+q0T+x8A.d5Z+h7D+e2D+o2T+w5S+o4Z+u5G+x8A.n9S+m5Z),version:null,func:(O4T+r0l+K7S+b1p+L5l+h1D+U64+q0T+w5S+m5Z),format:"csv",method:"GetIndexBars",statics:(o6l+y5p+q0T+m5Z+x8A.c7S+s8Z+H6T+c6S+m5Z+X2p+d8Z+H6T+S24+U5D+r7p+c3Z+x1D+W7l+T4S+X2p+F8Z+q0T+T4S+p9S+d0d),fields:(h7Z+G5D+m5Z+I1p+F8Z+m5Z+v8C+t4m+I1p+N3Z+T4S+W4Z+m5Z+O4T+W8p+d8Z+H6T+w5S+Y4Z+B4S+v4S+I1p+N3Z+N1m+m5Z+O4T+W8p+N3Z+T4S+W4Z+m5Z+O4T+R6Z+x8A.c7S+M14+I1p+N3Z+T4S+n9Z+W8p+N3Z+T4S+W4Z+Z0D+J3m+i04+I1p+A8m+D4Z+x8A.c7S+M7S+W8p+d8Z+x8A.n9S+S4S+o0D+I1p+A8m+h2S+W8p+d8Z+J3S+J9m+g0V+m5Z+I1p+A8m+D4Z+o5d+W8p+c3S+s8Z+B0V+g7D+u24+I1p+A8m+D4Z+o5d+W8p+x8A.s0m+v4S+B4S+M7S+m5Z+I1p+A8m+D4Z+o5d+W8p+W1Z+c6S+j1D+I1p+A8m+h2S+W8p+I6Z+G6l+g2S+I1p+A8m+x8Z+M7S+W8p+C9Z+c9D+I1p+A8m+D4Z+o5d+W8p+C1S+B4S+J54+w5S+m5Z),results:{date:"Bars StartDate",time:"Bars StartTime",open:"Bars Open",close:"Bars Close",high:"Bars High",low:"Bars Low",volume:(A8m+x8Z+M7S+m44+C1S+U5D+d94+m5Z),offset:"Bars UTCOffset",ratio:null}
}
,IntradayRTForex:{host:"http"+(STX[m0D]?"":"s")+(i4C+M7S+t9D+U4T+q0T+x8A.d5Z+h7D+W8p+x8A.d5Z+S2D+p6S+W8p+x8A.d5Z+G5D+R1p+Z8T+T9C+p9S+x8A.c7S+x8A.c7S+m5Z+T4S+x8A.d5Z+X7l+M7S+B0S+O4T+K1m+q0T+A7S),version:null,func:"xGlobalCurrencies",format:"csv",method:"GetBars",statics:(s8Z+Q6T+x8A.c7S+D8G+q0T+M7S+q0T+B4S+T4S+X2p+F8Z+J8V+H44+m5Z+M7S+r7p+c7Z+N1m+c8l+i04+X2p+f3p+U3p+w9m+Z3m+G9m+w9m+Z3m+G9m+r7p+c3Z+E0d+x8A.d5Z+E7C+X2p+F8Z+t6l),fields:(W1Z+D6Z+G5D+m5Z+I1p+F8Z+T3G+g8S+m5Z+I1p+d8Z+e5d+M3d+v4S+I1p+d8Z+w7Z+i7Z+M2Z+I1p+d8Z+u84+A5l+w5S+m5Z+I1p+c7Z+N1m+i7Z+D4Z+x8A.n9S+m5Z+I1p+c7Z+T4S+W4Z+c8l+w5S+m5Z+I1p+W1Z+s1p+I1p+I6Z+q0T+f4m+I1p+C9Z+B4S+f4T+I1p+x8A.s0m+C9C+m5Z+I1p+C1S+B4S+J54+w5S+m5Z),results:{date:"StartDate",time:"StartTime",open:"Open",close:"Close",high:"High",low:"Low",volume:"Volume",offset:null,ratio:null}
}
,IntradayRTMetals:{host:"http"+(STX[m0D]?"":"s")+(i4C+M7S+t9D+W7D+h7D+W8p+x8A.d5Z+g2S+D4Z+x8A.c7S+A4S+p6S+W8p+x8A.d5Z+B4S+w5S+R1p+Z8T+g8D+v4S+w8m+v4S+M7S+K14+K1m+q0T+x8A.n9S+m5Z),version:null,func:"xGlobalMetals",format:(x8A.d5Z+o0S),method:"GetBars",statics:(s8Z+O0d+r64+W7l+T4S+X2p+F8Z+e6Z+m5Z+M7S+r7p+c7Z+N1m+c8l+i04+X2p+f3p+U3p+w9m+Z3m+G9m+w9m+Z3m+G9m+r7p+c3Z+E0d+T7C+b5C+m5Z+X2p+F8Z+t6l+r7p+x8A.s0m+p9S+N5d+j1D+x8A.d5Z+H6T+X2p),fields:(Y7Z+v9S+B4S+w5S+m5Z+I1p+F8Z+h7D+M7S+a0D+I1p+d8Z+H6T+w5S+R1G+I1p+d8Z+u84+x8A.n9S+i7Z+D4Z+x8A.n9S+m5Z+I1p+d8Z+J3S+x8A.c7S+p7C+m5Z+I1p+c7Z+N1m+i7Z+D4Z+A7S+I1p+c7Z+X14+i04+I1p+W1Z+X0G+T4S+I1p+I6Z+G6l+g2S+I1p+C9Z+c9D+I1p+x8A.s0m+G0T+M7S+m5Z+I1p+C1S+U5D+W1S),results:{date:"StartDate",time:"StartTime",open:"Open",close:"Close",high:"High",low:"Low",volume:"Volume",offset:null,ratio:null}
}
,DelayedFuture:{host:"http"+(STX[m0D]?"":"s")+(i4C+M7S+m5Z+x8A.c7S+U4T+O2C+M7S+W8p+x8A.d5Z+l5d+x8A.n9S+S5d+W8p+x8A.d5Z+B4S+w5S+R1p+f4T+L4G+K14+Y8d+m5Z),version:null,func:"xFutures",format:"csv",method:"GetDelayedFuture",statics:null,fields:(e44+x8A.d5Z+B4S+i04+I1p+F8Z+m5Z+M7S+M7S+D4Z+t4m+I1p+C7Z+p9S+K1T+x8A.c7S+m5Z+W8p+d8Z+H6T+S24+B4S+v4S+I1p+C7Z+O6d+C1d+W8p+c7Z+O4T+G7C+D4Z+m7p+m5Z+h84+Y4Z+B4S+v4S+I1p+C7Z+H44+F34+W8p+i1Z+N0Z+m5Z+I1p+i7Z+D4Z+A7S+I1p+s8Z+Q4C+I1p+W1Z+c6S+m5Z+T4S+I1p+I6Z+g1p+I1p+C9Z+B4S+f4T+I1p+C9Z+D4Z+I4Z+I1p+C1S+B4S+J54+i04),results:{date:"Date",time:null,open:"Open",close:"Last",high:"High",low:"Low",volume:"Volume",offset:null,ratio:null}
}
}
;STX[(T0Z+z34+x8A.n9S+m5Z+C7Z+I7D+W4Z)][P3p][b0p]={xIgniteInterval:function(interval){var d7m="Year",q6l="G5h",C6d="Mont",G84="o5h",D1C="Day",g0S="Q5h";if(!isNaN(interval))return R9S;else if(x8A[g0S](interval[E2S](x8A.n0Z),p4G))return D1C;else if(x8A[G84](interval[E2S](x8A.n0Z),y2G))return (C6d+g2S);else if(x8A[q6l](interval[E2S](x8A.n0Z),G64))return d7m;else return interval;}
,url:function(api,args,params,token){var u8T="fields",L4d="&_fields=",N3G="ds",A8d="statics",d6G="defaultToken",E5p="?",L34="/*",n8G="?_Token=",j5m="hod",n4C="as_of",I2m="metho",c6p="5h",g2Z="func",S8l="version",u=api[(N9C+M7S+x8A.n9S)];if(api[S8l])u+=R1p+api[S8l];u+=R1p+api[g2Z]+W8p+api[u6C];if(x8A[(x8A.c7S+c6p)](api[(I2m+W4Z)],Object)){if(api[I9G][n4C]&&!params[(I4Z+x8Z+x8A.n9S+L6C+m5Z)]&&params[H54]){u+=R1p+api[I9G][n4C];}
else{u+=R1p+api[I9G][(r2m)];}
}
else{u+=R1p+api[(w5S+A7D+j5m)];}
if(token){u+=n8G+token;}
else if(STX[j9d][P3p][A2S][s5S][(J7G)](L34)==-x8A.v0Z){u+=n8G+STX[j9d][P3p][A2S][s5S];}
else{u+=(E5p+B0S+s8Z+B4S+T2S+m5Z+T4S+X2p)+STX[j9d][P3p][A2S][d6G];}
if(api[A8d])u+=r7p+api[A8d];if(api[(f0T+X7l+v4S+N3G)])u+=L4d+api[u8T];for(var a in args){u+=r7p+a+X2p+(args[a]?args[a]:R9S);}
return u;}
,nonMarketMaxRecordsFactor:x8A[(b1G)](x8A.M0Z,x8A.x0Z),marketClosedMaxRecordsFactor:x8A[L0l](K0Z,x8A.X0Z),timeZone:{"BVMF":c9C,"MTAA":V6m,"RTSX":e3D,"XAMS":(c7Z+u3S+m5Z+R1p+x8A.X8m+w5S+M7S+x8A.n9S+m5Z+x8A.c7S+W4Z+N0Z),"XASX":z1Z,"XATH":(c7Z+p9S+x8A.c7S+e4D+m5Z+R1p+x8A.X8m+p2T),"XBAR":P4Z,"XBRA":L7Z,"XBER":Z5G,"XBOM":I3T,"XBRU":I7Z,"XBUD":t7l,"XCNQ":k3T,"XCSE":T7m,"XDUB":a2l,"XDUS":Z5G,"XETR":Z5G,"XFRA":Z5G,"XHAM":Z5G,"XHAN":(L4p+x8A.c7S+i8G+R1p+A8m+t9D+Z7D),"XHEL":J5l,"XHKG":u94,"XICE":o2m,"XJSE":i7m,"XLIM":i1G,"XKOS":Y1d,"XKRX":Y1d,"XLIS":k7G,"XLON":K4Z,"XMAD":P4Z,"XMCE":P4Z,"XMUN":Z5G,"XMUS":C3G,"XNSE":I3T,"XNZE":C9G,"XOSL":y1Z,"XPAR":k5d,"XPRA":(c7Z+q14+B4S+X0G+R1p+c3Z+D4l),"XRIS":x9D,"XSGO":c14,"XSES":q9G,"XSHE":b5d,"XSHG":b5d,"XSTO":(L4p+x8A.c7S+e4D+m5Z+R1p+d8Z+x8A.n9S+S7m+X5Z+v4S+w5S),"XSTU":(c7Z+u3S+m5Z+R1p+A8m+m5Z+x8A.c7S+v4S+J8V),"XSWX":(c7Z+q14+B4S+X0G+R1p+t8S+p9S+J8T+g2S),"XTAE":l0C,"XTAI":T0T,"XTAL":H7l,"XTKS":R1l,"XTNX":k3T,"XTSE":k3T,"XTSX":k3T,"XLIT":C74,"XVAL":P4Z,"XVTX":o9m,"XWAR":c4p,"XWBO":e0d,"INDARCX":W0V,"INDBVMF":c9C,"INDCBSX":A6d,"INDMTAA":V6m,"INDXASE":W0V,"INDXASX":z1Z,"INDXBOM":I3T,"INDXBUD":t7l,"INDXCME":A6d,"INDXCSE":T7m,"IND_DBI":(z7T+B4S+X0G+R1p+A8m+P7D+q0T+T4S),"INDXHEL":J5l,"INDXHKG":u94,"INDXJSE":i7m,"INDXKOS":Y1d,"INDXKRX":Y1d,"INDXMAD":P4Z,"INDXMCE":P4Z,"INDXNAS":W0V,"INDXNSE":I3T,"INDXNZE":C9G,"INDXOSL":y1Z,"INDXSES":q9G,"INDXSHE":b5d,"INDXSHG":(x8A.X8m+M7S+q0T+D4Z+R1p+d8Z+g2S+a0Z+Z8T+g2S+D4Z+q0T),"INDXSTO":U8p,"INDXSTU":(L4p+b7Z+R1p+A8m+m5Z+C5C+J8V),"INDXSTX":o9m,"INDXSWX":o9m,"INDXTAE":l0C,"INDXTAI":(m6m+q0T+D4Z+R1p+s8Z+D4Z+l0V+j5D),"INDXTKS":R1l,"INDXTSE":k3T,"INDXWAR":c4p,"INDXWBO":e0d,"IND_DJI":W0V,"IND_DJTSMI":W0V,"IND_EURONEXT":I7Z,"IND_FTSE":K4Z,"IND_FTSEEUR":K4Z,"IND_FTSEUSD":K4Z,"IND_GIDS":W0V,"IND_GIF":W0V,"IND_HKGI":b5d,"IND_NIKKEI":R1l}
}
;return _exports;}
{if(typeof define===U4l&&define[c64]){define(["stxTimeZoneData","stxThirdParty","stx"],function(_stxTimeZoneData,_stxThirdParty,_stx){return _stxKernel_js(_stxThirdParty,_stx);}
);}
else{var T0=function(Z0){_stxThirdParty=Z0[d54];}
;var _stxThirdParty={}
;if(typeof (window[d54])!=T6m)T0(window);var _stx={"STX":window[C1p],"STXChart":window[h8V],"STX.LegacyMarket":window[C1p][W84],"STX.Studies":window[C1p][O5l],"$$":window[i9Z],"$$$":window[h4G]}
;_stxKernel_js(_stxThirdParty,_stx);}
}
}
)();